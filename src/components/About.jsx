import React from 'react';

const About = () => {
    return (
        <section id="about" className="container section-center">
            <h2 className="section-title"><i className="fas fa-link"></i> ABOUT ME</h2>

            <div className="about-info-grid">
                <div className="info-item">
                    <div className="info-icon">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="info-content">
                        <h3 className="info-label">이름</h3>
                        <p className="info-value">이현수</p>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon">
                        <i className="fas fa-calendar-alt"></i>
                    </div>
                    <div className="info-content">
                        <h3 className="info-label">생년월일</h3>
                        <p className="info-value">00.06.20</p>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info-content">
                        <h3 className="info-label">위치</h3>
                        <p className="info-value">경기도 안산시</p>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon">
                        <i className="fas fa-phone"></i>
                    </div>
                    <div className="info-content">
                        <h3 className="info-label">연락처</h3>
                        <p className="info-value">010-6683-4125</p>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="info-content">
                        <h3 className="info-label">이메일</h3>
                        <p className="info-value">dlgustn4125@gmail.com</p>
                    </div>
                </div>

                <div className="info-item">
                    <div className="info-icon">
                        <i className="fas fa-pencil-alt"></i>
                    </div>
                    <div className="info-content">
                        <h3 className="info-label">학력</h3>
                        <p className="info-value">경운대학교<br />(항공소프트웨어학과)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
