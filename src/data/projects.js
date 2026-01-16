export const projects = [
    {
        id: 1,
        title: "양방향 음성-수화 번역 서비스",
        tags: ["Deep Learning", "STT/TTS", "Flutter"],
        desc: "시청각 장애인을 위한 실시간 의사소통 시스템입니다.\n딥러닝 기반의 음성↔수화 양방향 변환을 통해 장벽 없는 소통을 지원합니다.",
        features: [
            "음성 인식(STT) 텍스트 변환 및 수화 영상 생성",
            "카메라를 통한 수화 동작 인식 및 텍스트/음성 변환",
            "Flutter 기반의 사용자 친화적 모바일 앱 UI 구현"
        ],
        repo: "DoWaJo-KW/Speech-To-Sign-Translator",
        repoLink: "https://github.com/DoWaJo-KW/Speech-To-Sign-Translator",
        theme: "" // 기본값: 파란색
    },
    {
        id: 2,
        title: "경운대 AR (Campus Guide)",
        tags: ["Unity", "AR Foundation"],
        tagsTheme: "green",
        desc: "증강현실(AR)을 활용한 캠퍼스 안내 시스템입니다.\n카메라로 비추면 건물 정보 및 편의시설을 직관적으로 시각화하여 제공합니다.",
        features: [
            "GPS 및 가속도 센서 기반 AR 위치 추적",
            "POI(관심 지점) 건물 정보 3D 오버레이 표시",
            "교내 주요 시설 길안내 및 정보 팝업 제공"
        ],
        repo: "WHCC-KW/KW-Space",
        repoLink: "https://github.com/WHCC-KW/KW-Space",
        theme: "green"
    },
    {
        id: 3,
        title: "ARP 활용 보안 구역 제어",
        tags: ["Network", "IoT/RF", "React"],
        desc: "RF 센서와 네트워크 스캔(ARP)을 결합한 보안 솔루션입니다.\n캡티브 포털 인증 및 IP 제어를 통해 비인가 장치를 차단합니다.",
        features: [
            "ARP Spoofing 기술을 응용한 비인가 기기 네트워크 차단",
            "RF 센서 태깅을 통한 물리적 출입 감지",
            "웹 기반 관리자 대시보드 및 Captive Portal 구현"
        ],
        repo: "4-1-capstone-palman/BLEsniffing",
        repoLink: "https://github.com/4-1-capstone-palman/BLEsniffing",
        theme: ""
    },
    {
        id: 4,
        title: "술과 안주 페어링 커뮤니티",
        tags: ["Web Service", "Algorithm"],
        tagsTheme: "purple",
        desc: "취향 기반 술-안주 페어링 추천 및 공유 플랫폼입니다.\n사용자 후기 데이터를 분석하여 맞춤형 조합을 추천합니다.",
        features: [
            "사용자 선호도 기반 주류-안주 조합 추천 알고리즘",
            "커뮤니티 게시판 (리뷰 작성, 좋아요, 댓글)",
            "MySQL 기반 데이터베이스 설계 및 최적화"
        ],
        repo: "Youth-Leap-Squad/EatToday_Backend",
        repoLink: "https://github.com/Youth-Leap-Squad/EatToday_Backend",
        theme: "purple"
    },
    {
        id: 5,
        title: "운동 커뮤니티 (Health & Fit)",
        tags: ["AI/Recsys", "Community"],
        tagsTheme: "green",
        desc: "체형 및 기초대사량 기반 맞춤형 운동/식단 관리 서비스입니다.\nAI 추천 시스템과 게이미피케이션 요소를 도입했습니다.",
        features: [
            "사용자 입력 데이터(키, 몸무게 등) 기반 운동 루틴 추천",
            "식단 기록 및 칼로리 계산 기능",
            "커뮤니티 챌린지 참여 및 소셜 피드"
        ],
        repo: "Cal-Mate/CalMate-Backend",
        repoLink: "https://github.com/Cal-Mate/CalMate-Backend",
        theme: "green"
    },
    {
        id: 6,
        title: "방문 요양 ERP",
        tags: ["Web Service", "Full Stack"],
        tagsTheme: "green",
        desc: "방문 요양사의 일일 업무를 효율적으로 관리할 수 있는 ERP 시스템입니다.\n요양보호사와 수급자를 관리합니다.",
        features: [
            "요양보호사 급여 및 일정 관리 자동화",
            "수급자(어르신) 상태 기록 및 모니터링 대시보드",
            "공지사항 및 업무 알림 시스템"
        ],
        repo: "Ace-Time/be19-final-A-Team",
        repoLink: "https://github.com/golealda/be19-final-A-Team",
        theme: "green"
    }
];
