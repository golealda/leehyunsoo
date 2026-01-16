import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="container section-center">
            <h2 className="section-title">기술</h2>

            <div className="skills-container-new">
                {/* 언어 */}
                <div className="skill-category-row">
                    <div className="category-header">
                        <div className="category-icon-box">
                            <i className="fas fa-code"></i>
                        </div>
                        <span className="category-label">Language</span>
                    </div>
                    <div className="category-badges">
                        <span className="tech-badge java">Java</span>
                        <span className="tech-badge js">JavaScript</span>
                    </div>
                </div>

                {/* 프론트엔드 */}
                <div className="skill-category-row">
                    <div className="category-header">
                        <div className="category-icon-box">
                            <i className="fas fa-desktop"></i>
                        </div>
                        <span className="category-label">Frontend</span>
                    </div>
                    <div className="category-badges">
                        <span className="tech-badge html">HTML / CSS</span>
                        <span className="tech-badge react">React</span>
                    </div>
                </div>

                {/* 백엔드 */}
                <div className="skill-category-row">
                    <div className="category-header">
                        <div className="category-icon-box">
                            <i className="fas fa-server"></i>
                        </div>
                        <span className="category-label">Backend</span>
                    </div>
                    <div className="category-badges">
                        <span className="tech-badge spring">Spring Boot</span>
                        <span className="tech-badge spring">Spring MVC</span>
                        <span className="tech-badge jpa">JPA / Hibernate</span>
                        <span className="tech-badge node">Node.js</span>
                        <span className="tech-badge mysql">MySQL</span>
                        <span className="tech-badge mongo">MongoDB</span>
                    </div>
                </div>

                {/* 데브옵스 */}
                <div className="skill-category-row">
                    <div className="category-header">
                        <div className="category-icon-box">
                            <i className="fas fa-network-wired"></i>
                        </div>
                        <span className="category-label">DevOps</span>
                    </div>
                    <div className="category-badges">
                        <span className="tech-badge docker">Docker</span>
                        <span className="tech-badge aws">AWS</span>
                        <span className="tech-badge git">Git / GitHub</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
