function normalizeText(text = '') {
  return text
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitDescription(description = '') {
  const parts = description.split(/<br\s*\/?>\s*<br\s*\/?>/i);
  return {
    intro: normalizeText(parts[0] || ''),
    detail: normalizeText(parts.slice(1).join(' ') || '')
  };
}

function renderProjects() {
  const grid = document.querySelector('.project-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(project => {
    const desc = splitDescription(project.description);
    const summary = project.summary || desc.intro;
    const spotlight = project.spotlight || desc.detail || `${project.title}에서 실제 사용자 문제를 해결하기 위해 기획부터 구현까지 진행했습니다.`;
    const techStack = project.techStack || project.tags.map(tag => tag.name);

    return `
      <article class="project-card detail-card">
        <div class="project-top-row">
          <div class="project-tag-group">
            ${project.tags.map(tag => `<span class="project-pill">${tag.name}</span>`).join('')}
          </div>
        </div>

        <div class="project-title-row">
          <h3 class="project-title">${project.title}</h3>
          <span class="project-duration">${project.duration || ''}</span>
        </div>

        <p class="project-summary">${summary}</p>

        <p class="project-spotlight">
          <i class="fas fa-lightbulb"></i>
          ${spotlight}
        </p>

        <div class="project-main-grid">
          <section class="project-subsection">
            <h4><i class="fas fa-bolt"></i> 주요 기능</h4>
            <ul class="feature-list">
              ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          </section>

          <section class="project-subsection">
            <h4><i class="fas fa-screwdriver-wrench"></i> 기술 스택</h4>
            <div class="project-stack-wrap">
              ${techStack.map(tech => `<span class="stack-pill">${tech}</span>`).join('')}
            </div>
          </section>
        </div>

        <div class="card-footer">
          <a href="${project.repoConfig.url}" class="card-link card-link-light" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i> GitHub Repository
          </a>
          <a href="#" class="card-link card-link-dark" onclick="openReadme('${project.repoConfig.path}'); return false;">
            <i class="far fa-file-lines"></i> README
          </a>
        </div>
      </article>
    `;
  }).join('');
}

// 기존 openReadme 함수는 글로벌 스코프로 유지해야 onclick에서 호출 가능
window.openReadme = async function (repoPath) {
  const modal = document.getElementById('readme-modal');
  const contentDiv = document.getElementById('readme-content');
  const titleSpan = document.getElementById('modal-repo-name');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  titleSpan.innerText = repoPath;
  contentDiv.innerHTML = '<div style="text-align:center; padding: 3rem;"><i class="fas fa-spinner fa-spin fa-2x"></i><br><br>README를 불러오는 중입니다...</div>';

  try {
    let branch = 'main';
    let response = await fetch(`https://raw.githubusercontent.com/${repoPath}/main/README.md`);

    if (!response.ok) {
      branch = 'master';
      response = await fetch(`https://raw.githubusercontent.com/${repoPath}/master/README.md`);
    }

    if (!response.ok) throw new Error('README 파일을 찾을 수 없습니다.');

    const text = await response.text();
    let absoluteText = text.replace(
      /!\[(.*?)\]\((?!http)(.*?)\)/g,
      `![$1](https://raw.githubusercontent.com/${repoPath}/${branch}/$2)`
    );

    absoluteText = absoluteText.replace(
      /<img([^>]*?)src=(["'])(.*?)\2([^>]*?)>/gi,
      (match, p1, quote, src, p4) => {
        if (src.startsWith('http')) {
          if (src.includes('github.com') && src.includes('/blob/')) {
            return `<img${p1}src="${src.replace('/blob/', '/raw/')}"${p4}>`;
          }
          return match;
        }
        return `<img${p1}src="https://raw.githubusercontent.com/${repoPath}/${branch}/${src}"${p4}>`;
      }
    );

    contentDiv.innerHTML = marked.parse(absoluteText);

  } catch (error) {
    contentDiv.innerHTML = `<div style="text-align:center; padding: 2rem; color: #ef4444;">
          <i class="fas fa-exclamation-circle fa-2x"></i><br><br>
          <p>README를 불러오지 못했습니다.<br>(${error.message})</p>
          <a href="https://github.com/${repoPath}" target="_blank" style="text-decoration:underline;">GitHub에서 직접 보기</a>
        </div>`;
  }
};

window.closeReadme = function () {
  const modal = document.getElementById('readme-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
};

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  // 프로젝트 렌더링
  renderProjects();

  // 모달 이벤트 리스너
  const modal = document.getElementById('readme-modal');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === this) closeReadme();
    });
  }
});
