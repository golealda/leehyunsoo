const projects = [
    {
        id: 1,
        title: "양방향 음성-수화 번역 서비스",
        tags: [
            { name: "Deep Learning", color: "blue" },
            { name: "STT/TTS", color: "blue" },
            { name: "Flutter", color: "blue" }
        ],
        description: `
            시청각 장애인을 위한 실시간 의사소통 시스템입니다.
            딥러닝 기반의 음성↔수화 양방향 변환을 통해 장벽 없는 소통을 지원합니다.
            <br><br>
            <b> 문제 해결 및 기술 선택:</b>
            기존 수화 번역기의 낮은 인식률 문제를 해결하기 위해, 최신 딥러닝 모델(Transformer)을 도입하여 번역 정확도를 15% 향상시켰습니다. 모바일 환경에서의 실시간성을 보장하기 위해 모델 경량화(TensorFlow Lite)를 적용했습니다.
        `,
        features: [
            "Transformer 기반 음성-수화 양방향 번역 모델 구축",
            "TensorFlow Lite를 활용한 온디바이스 AI 추론 최적화",
            "Flutter를 이용한 크로스 플랫폼 앱 개발 및 UI/UX 설계"
        ],
        repoConfig: {
            path: "DoWaJo-KW/Speech-To-Sign-Translator",
            url: "https://github.com/DoWaJo-KW/Speech-To-Sign-Translator"
        },
        duration: "2024.03 ~ 2024.06"
    },
    {
        id: 2,
        title: "경운대 AR (Campus Guide)",
        tags: [
            { name: "Unity", color: "green" },
            { name: "AR Foundation", color: "green" }
        ],
        description: `
            증강현실(AR)을 활용한 캠퍼스 안내 시스템입니다.
            카메라로 비추면 건물 정보 및 편의시설을 직관적으로 시각화하여 제공합니다.
            <br><br>
            <b> 협업 및 성과:</b>
            디자이너, 기획자와의 긴밀한 협업을 통해 사용성 높은 UI를 설계했습니다. AR 위치 오차를 줄이기 위해 센서 퓨전 기술을 연구하고 적용하여 위치 정확도를 개선했습니다.
        `,
        features: [
            "AR Foundation 및 GPS/IMU 센서 퓨전 기반 위치 추적",
            "Unity 3D 엔진을 활용한 실감형 POI 정보 시각화",
            "사용자 피드백을 반영한 직관적인 길안내 인터페이스 개선"
        ],
        repoConfig: {
            path: "WHCC-KW/KW-Space",
            url: "https://github.com/WHCC-KW/KW-Space"
        },
        duration: "2024.09 ~ 2024.12"
    },
    {
        id: 3,
        title: "ARP 활용 보안 구역 제어",
        tags: [
            { name: "Network", color: "blue" },
            { name: "IoT/RF", color: "blue" },
            { name: "React", color: "blue" }
        ],
        description: `
            RF 센서와 네트워크 스캔(ARP)을 결합한 보안 솔루션입니다.
            캡티브 포털 인증 및 IP 제어를 통해 비인가 장치를 차단합니다.
            <br><br>
            <b>🔒 기술적 의사결정:</b>
            비인가 기기의 네트워크 접근을 원천 차단하기 위해 ARP Spoofing 기술을 보안 목적으로 응용했습니다. 실시간 트래픽 분석을 위해 Node.js의 비동기 처리 방식을 활용했습니다.
        `,
        features: [
            "ARP Spoofing 메커니즘을 응용한 네트워크 접근 제어 엔진 개발",
            "RF 센서 데이터와 네트워크 로그를 결합한 이중 보안 검증",
            "React 및 WebSocket 기반의 실시간 보안 관제 대시보드 구축"
        ],
        repoConfig: {
            path: "4-1-capstone-palman/BLEsniffing",
            url: "https://github.com/4-1-capstone-palman/BLEsniffing"
        },
        duration: "2025.03 ~ 2025.07"
    },
    {
        id: 4,
        title: "술과 안주 페어링 커뮤니티",
        tags: [
            { name: "Web Service", color: "purple" },
            { name: "Algorithm", color: "purple" }
        ],
        description: `
            취향 기반 술-안주 페어링 추천 및 공유 플랫폼입니다.
            사용자 후기 데이터를 분석하여 맞춤형 조합을 추천합니다.
            <br><br>
            <b> 성능 최적화 경험:</b>
            게시글 조회 성능 저하 문제를 해결하기 위해, 자주 조회되는 데이터를 Redis에 캐싱하여 조회 속도를 3배 이상 단축했습니다. 복잡한 페어링 조회 쿼리는 QueryDSL을 도입하여 최적화했습니다.
        `,
        features: [
            "사용자 취향 분석 기반 협업 필터링 추천 알고리즘 구현",
            "Redis 캐싱 전략을 통한 인기 게시글 조회 성능 최적화",
            "Spring Security 및 JWT 기반의 안전한 인증/인가 시스템 구축"
        ],
        repoConfig: {
            path: "Youth-Leap-Squad/EatToday_Backend",
            url: "https://github.com/Youth-Leap-Squad/EatToday_Backend"
        },
        duration: "2025.07 ~ 2025.08"
    },
    {
        id: 5,
        title: "운동 커뮤니티 (Health & Fit)",
        tags: [
            { name: "AI/Recsys", color: "green" },
            { name: "Community", color: "green" }
        ],
        description: `
            체형 및 기초대사량 기반 맞춤형 운동/식단 관리 서비스입니다.
            AI 추천 시스템과 게이미피케이션 요소를 도입했습니다.
            <br><br>
            <b>문제 해결:</b>
            사용자의 운동 지속률을 높이기 위해 게이미피케이션 요소를 도입했습니다. 대용량 헬스 데이터 처리를 위해 DB 인덱싱을 최적화하고, 배치 처리를 도입하여 일일 리포트 생성 시간을 단축했습니다.
        `,
        features: [
            "빙고 게임 챌린지 구현",
            "웹 소켓을 활용한 뽑기 게임 구현"
        ],
        repoConfig: {
            path: "Cal-Mate/CalMate-Backend",
            url: "https://github.com/Cal-Mate/CalMate-Backend"
        },
        duration: "2025.09 ~ 2025.10"
    },
    {
        id: 6,
        title: "방문 요양 ERP",
        tags: [
            { name: "Web Service", color: "green" },
            { name: "Full Stack", color: "green" }
        ],
        description: `
            방문 요양사의 일일 업무를 효율적으로 관리할 수 있는 ERP 시스템입니다.
            요양보호사와 수급자를 관리합니다.
            <br><br>
            <b>협업 및 설계 경험:</b>
            복잡한 업무 프로세스를 명확히 하기 위해 DDD(도메인 주도 설계)를 도입하고, 팀원들과 이벤트 스토밍을 진행하며 도메인 지식을 공유했습니다. MSA 구조 설계를 경험하며 서비스 간 결합도를 낮추는 고민을 했습니다.
        `,
        features: [
            "업무 관리(출퇴근, 휴가, 별도 휴가)",
            "직원관리(요양보호사, 수급자)",
            "실시간 알림 및 대시보드를 통한 업무 효율성 증대"
        ],
        repoConfig: {
            path: "golealda/be19-final-A-Team",
            url: "https://github.com/golealda/be19-final-A-Team"
        },
        duration: "2025.11 ~ 2026.01"
    }
];
