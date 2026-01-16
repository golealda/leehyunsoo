import React from 'react';

const ProjectCard = ({ project, onOpenReadme }) => {
    return (
        <article className="project-card detail-card">
            <div className="card-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                        <span key={idx} className={`badge-new ${project.theme}`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="card-body">
                <div className="section-block">
                    <h4><i className="fas fa-info-circle"></i> 프로젝트 소개</h4>
                    <p>
                        {project.desc.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                {i < project.desc.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
                </div>
                <div className="section-block">
                    <h4><i className="fas fa-check-circle"></i> 주요 기능</h4>
                    <ul className="feature-list">
                        {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="card-footer">
                <a href="#" className={`card-link ${project.theme}`} onClick={(e) => { e.preventDefault(); onOpenReadme(project.repo); }}>
                    Readme <i className="fas fa-book-open"></i>
                </a>
                <a href={project.repoLink} className={`card-link ${project.theme}`} target="_blank" rel="noopener noreferrer">
                    GitHub Repository <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </article>
    );
};

export default ProjectCard;
