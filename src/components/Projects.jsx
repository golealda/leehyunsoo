import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import ReadmeModal from './ReadmeModal';

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentRepo, setCurrentRepo] = useState('');

    const handleOpenReadme = (repo) => {
        setCurrentRepo(repo);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setCurrentRepo('');
    };

    return (
        <>
            <section id="projects" className="container section-center">
                <h2 className="section-title">메인 프로젝트</h2>
                <p className="section-desc">최근 진행한 프로젝트들을 소개합니다</p>

                <div className="project-grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onOpenReadme={handleOpenReadme}
                        />
                    ))}
                </div>
            </section>

            <ReadmeModal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                repoPath={currentRepo}
            />
        </>
    );
};

export default Projects;
