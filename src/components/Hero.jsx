import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="container hero-section">
            <div className="hero-content">
                <h1>안녕하세요! <span className="text-highlight">백엔드 개발자</span><br />이현수입니다</h1>
                <p className="hero-desc">
                    창의적인 아이디어를 혁신적인 디지털 솔루션으로 구현하는 백엔드 개발자입니다.<br />
                    사용자 경험을 최우선으로 생각하며, 안정적인 서버 구축에 관심이 많습니다.
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">프로젝트 보기</a>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vSl81CsFoZg7RvQhiQLarVEFLB8nZ66EtZfQIp5Y01jrAQNqrmx9YvD3ZLIHRVLtcyzfESY7EYgkgng/pub?embedded=true"
                        className="btn btn-secondary">자소서</a>
                </div>
            </div>
            <div className="hero-image">
                <img src="/img/developer.png" alt="개발자 책상" />
            </div>
        </section>
    );
};

export default Hero;
