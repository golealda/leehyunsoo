function renderProjects() {
  const grid = document.querySelector('.project-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(project => `
        <article class="project-card detail-card">
          <div class="card-header">
            <div class="header-top">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-duration">${project.duration || ''}</span>
            </div>
            <div class="project-tags">
              ${project.tags.map(tag =>
    `<span class="badge-new ${tag.color === 'blue' ? '' : tag.color}">${tag.name}</span>`
  ).join('')}
            </div>
          </div>
          <div class="card-body">
            <div class="section-block">
              <h4><i class="fas fa-info-circle"></i> 프로젝트 소개</h4>
              <p>${project.description}</p>
            </div>
            <div class="section-block">
              <h4><i class="fas fa-check-circle"></i> 주요 기능</h4>
              <ul class="feature-list">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
              </ul>
            </div>
          </div>
          <div class="card-footer">
            <a href="#" class="card-link readme-btn ${project.tags[0].color === 'blue' ? '' : project.tags[0].color}" 
               onclick="openReadme('${project.repoConfig.path}'); return false;">
              Readme <i class="fas fa-book-open"></i>
            </a>
            <a href="${project.repoConfig.url}" class="card-link ${project.tags[0].color === 'blue' ? '' : project.tags[0].color}" target="_blank">
              GitHub Repository <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </article>
    `).join('');
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
