// GitHub API 헬퍼
async function openReadme(repoPath) {
    const modal = document.getElementById('readme-modal');
    const contentDiv = document.getElementById('readme-content');
    const titleSpan = document.getElementById('modal-repo-name');

    // 모달 표시 및 로딩 상태
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    titleSpan.innerText = repoPath;
    contentDiv.innerHTML = '<div style="text-align:center; padding: 3rem;"><i class="fas fa-spinner fa-spin fa-2x"></i><br><br>README를 불러오는 중입니다...</div>';

    try {
        let branch = 'main';
        // GitHub raw 구조에 따라 'main' 브랜치 먼저 시도
        let response = await fetch(`https://raw.githubusercontent.com/${repoPath}/main/README.md`);

        if (!response.ok) {
            // master로 폴백
            branch = 'master';
            response = await fetch(`https://raw.githubusercontent.com/${repoPath}/master/README.md`);
        }

        if (!response.ok) {
            throw new Error('README 파일을 찾을 수 없습니다.');
        }

        const text = await response.text();

        // 마크다운을 HTML로 파싱
        // 1. 마크다운 이미지 문법 변환 (![alt](path))
        let absoluteText = text.replace(
            /!\[(.*?)\]\((?!http)(.*?)\)/g,
            `![$1](https://raw.githubusercontent.com/${repoPath}/${branch}/$2)`
        );

        // 2. HTML 이미지 태그 변환 (<img src="path">)
        // 홑따옴표('), 쌍따옴표(") 모두 지원
        // 이미 http로 시작하는 절대 경로일 경우, GitHub blob URL이면 raw URL로 변환
        absoluteText = absoluteText.replace(
            /<img([^>]*?)src=(["'])(.*?)\2([^>]*?)>/gi,
            (match, p1, quote, src, p4) => {
                // 1. 이미 외부 링크인 경우
                if (src.startsWith('http')) {
                    // GitHub blob 링크라면 raw 링크로 변환 (이미지가 깨지는 주된 원인)
                    if (src.includes('github.com') && src.includes('/blob/')) {
                        const rawSrc = src.replace('/blob/', '/raw/');
                        // 또는 ?raw=true가 없을 경우 추가하는 방식도 있으나, /raw/ 변환이 더 확실함
                        return `<img${p1}src="${rawSrc}"${p4}>`;
                    }
                    return match; // 그 외 외부 링크는 그대로 유지
                }

                // 2. 상대 경로인 경우 (기존 로직)
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
}

function closeReadme() {
    const modal = document.getElementById('readme-modal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // 스크롤 복원
}

// 외부 클릭 시 모달 닫기
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('readme-modal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeReadme();
            }
        });
    }
});
