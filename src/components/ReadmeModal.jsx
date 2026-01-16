import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const ReadmeModal = ({ isOpen, onClose, repoPath }) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isOpen && repoPath) {
            setLoading(true);
            setError(null);
            setContent('');
            document.body.style.overflow = 'hidden';

            const fetchReadme = async () => {
                try {
                    // main 브랜치를 먼저 시도하고, 실패하면 master 브랜치 시도
                    let response = await fetch(`https://raw.githubusercontent.com/${repoPath}/main/README.md`);
                    if (!response.ok) {
                        response = await fetch(`https://raw.githubusercontent.com/${repoPath}/master/README.md`);
                    }

                    if (!response.ok) {
                        throw new Error('README 파일을 찾을 수 없습니다.');
                    }

                    const text = await response.text();

                    // 1. 마크다운 문법 상대 경로 수정: ![alt](path)
                    let formattedText = text.replace(
                        /!\[(.*?)\]\((?!http)(.*?)\)/g,
                        `![$1](https://raw.githubusercontent.com/${repoPath}/main/$2)`
                    );

                    // 2. HTML src 상대 경로 수정: src="path"
                    formattedText = formattedText.replace(
                        /src="(?!(http|\/\/))(.*?)"/g,
                        `src="https://raw.githubusercontent.com/${repoPath}/main/$2"`
                    );

                    // 3. GitHub Blob URL을 Raw URL로 변환: src="https://github.com/.../blob/..."
                    // GitHub UI 페이지 링크를 원본 이미지 링크로 자동 수정하여 엑박 방지
                    formattedText = formattedText.replace(
                        /src="https:\/\/github\.com\/([^"]+)\/blob\/([^"]+)"/g,
                        `src="https://raw.githubusercontent.com/$1/$2"`
                    );

                    setContent(formattedText);


                } catch (err) {
                    console.error(err);
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchReadme();
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen, repoPath]);

    if (!isOpen) return null;

    return (
        <div className={`readme-modal-overlay active`} onClick={onClose}>
            <div className="readme-modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title-bar">
                        <i className="fab fa-github"></i>
                        <span>{repoPath}</span>
                    </div>
                    <button className="close-modal-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="markdown-body">
                        {loading && (
                            <div style={{ textAlign: 'center', padding: '3rem' }}>
                                <i className="fas fa-spinner fa-spin fa-2x"></i><br /><br />
                                README를 불러오는 중입니다...
                            </div>
                        )}

                        {error && (
                            <div style={{ textAlign: 'center', padding: '2rem', color: '#ef4444' }}>
                                <i className="fas fa-exclamation-circle fa-2x"></i><br /><br />
                                <p>README를 불러오지 못했습니다.<br />({error})</p>
                                <a href={`https://github.com/${repoPath}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                                    GitHub에서 직접 보기
                                </a>
                            </div>
                        )}

                        {!loading && !error && (
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                            >
                                {content}
                            </ReactMarkdown>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadmeModal;
