import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="cta-section">
            <div className="container section-center">
                <h2 className="cta-title">실행력 있는 프로젝트를 함께 만듭니다</h2>
                <div className="cta-buttons">
                    <a href="mailto:dlgustn4125@gmail.com" className="btn btn-primary"><i className="fas fa-envelope"></i> 이메일 보내기</a>
                </div>
                <div className="social-icons">
                    <a href="https://github.com/golealda" target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/%ED%98%84%EC%88%98-%EC%9D%B4-89a28a300/" className="social-btn"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
