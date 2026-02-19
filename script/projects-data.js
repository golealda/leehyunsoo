const projects = [
    {
        id: 1,
        title: "실시간 음성-수화 번역기 (도와조)",
        tags: [
            { name: "Accessibility", color: "blue" },
            { name: "STT/TTS", color: "blue" },
            { name: "Flutter", color: "blue" }
        ],
        description: `
            시각장애인과 청각장애인 간의 직접적인 소통을 지원하는 실시간 번역 시스템입니다.
            제3자 통역사 없이 음성과 수화를 상호 변환해 현장 커뮤니케이션 장벽을 낮추는 것을 목표로 설계했습니다.
            <br><br>
            <b>핵심 구현 포인트:</b> STT(음성→자막 변환)와 Sign-To-Speech(수화→음성 변환) 흐름을 하나의 서비스로 통합해
            사용자 상황에 맞게 양방향 소통이 가능하도록 구현했습니다.
            의료/교육/복지 현장 등 다양한 접근성 환경에서 활용 가능한 프로토타입을 완성했습니다.
        `,
        features: [
            "STT 기능: 음성을 실시간 자막으로 변환",
            "Sign-To-Speech 기능: 수화 동작을 인식해 음성으로 변환",
            "Flutter 기반 인터페이스로 실시간 번역 흐름 제공",
            "MediaPipe 기반 모션/랜드마크 처리로 수화 인식 보조",
            "특수학교·병원·복지기관 등 접근성 환경 적용 가능성 검증"
        ],
        techStack: [
            "Backend Python",
            "Frontend Flutter",
            "AI MediaPipe",
            "Feature STT/TTS",
            "Tools GitHub"
        ],
        aiAssist: [
            "지피티 (기능 아이디어 정리)"
        ],
        repoConfig: {
            path: "DoWaJo-KW/Speech-To-Sign-Translator",
            url: "https://github.com/DoWaJo-KW/Speech-To-Sign-Translator"
        },
        duration: "2024.03 ~ 2024.06"
    },
    {
        id: 2,
        title: "Marker 기반 AR 공간정보시스템 (KW-Space)",
        tags: [
            { name: "Unity", color: "green" },
            { name: "AR Foundation", color: "green" },
            { name: "Marker AR", color: "green" }
        ],
        description: `
            Marker 기반 증강현실(AR) 기술로 경운대학교 캠퍼스 공간 정보를 직관적으로 제공하는 시스템입니다.
            지정된 마커를 인식하면 건물 및 공간 정보를 AR 콘텐츠로 시각화해 방문자의 탐색 경험을 개선하도록 설계했습니다.
            <br><br>
            <b>핵심 구현 포인트:</b> 단일 마커 인식을 넘어 멀티 이미지 트래킹, 영상 증강(Video AR), 챗봇 연동 기능을 포함한 프로토타입을 구현했습니다.
            인식 콘텐츠를 컬렉션으로 관리할 수 있게 구성해 사용자 경험을 높였고, 스마트 캠퍼스 적용 가능성을 검증했습니다.
        `,
        features: [
            "마커 인식 기반 AR: 캠퍼스 내 지정 마커 인식 후 건물/공간 정보 시각화",
            "멀티 이미지 트래킹: 다수 이미지 마커를 활용한 다양한 위치 콘텐츠 제공",
            "컬렉션 기능: 인식한 AR 콘텐츠를 사용자 컬렉션 형태로 저장/관리",
            "영상 증강(Video AR): 마커 인식 시 안내/홍보 영상 콘텐츠 AR 재생",
            "챗봇 기능: AR 환경 연계 질의응답으로 캠퍼스 정보 접근성 강화"
        ],
        techStack: [
            "Frontend Unity",
            "Frontend AR Foundation",
            "Tools Marker-based Tracking",
            "Tools AR Prototype"
        ],
        aiAssist: [
            "지피티 (기능 설계/문서 정리)"
        ],
        repoConfig: {
            path: "WHCC-KW/KW-Space",
            url: "https://github.com/WHCC-KW/KW-Space"
        },
        duration: "2024.09 ~ 2024.12"
    },
    {
        id: 3,
        title: "BLE 기반 실시간 감지 및 화면 차단 시스템 (팔만대장벽)",
        tags: [
            { name: "Security", color: "blue" },
            { name: "BLE", color: "blue" },
            { name: "Real-time", color: "blue" }
        ],
        description: `
            보안 구역 내 비인가 모바일 기기를 BLE로 탐지하고, 즉시 화면을 차단하는 실시간 보안 시스템입니다.
            탐지부터 차단, 관리자 알림, 로그 저장까지 하나의 흐름으로 구성해 정보 유출을 사전에 방지하도록 설계했습니다.
            <br><br>
            <b>핵심 구현 포인트:</b> BLE 1차 탐지 후 ARP 스캔 기반 화이트리스트 2차 검증을 적용해 인가 기기는 자동 해제, 비인가 기기는 차단 유지로 분기 처리했습니다.
            또한 React Native 관리자 앱에서 socket.io 실시간 알림과 구역별 기기 현황 모니터링을 제공해 운영 대응 속도를 높였습니다.
        `,
        features: [
            "BLE RSSI 임계값 기반 근접 탐지 및 제조사 필터링으로 오탐 최소화",
            "탐지 즉시 Tkinter 전체 화면 차단 + 카운트다운 경고 UI 실행",
            "ARP 스캔 + whitelist.json 기반 이중 검증으로 인가/비인가 분기 처리",
            "React Native 관리자 앱에서 socket.io 실시간 알림 및 구역별 현황 모니터링",
            "MySQL(ble_logs, router_connections) 기반 탐지/접속 이력 영구 로깅"
        ],
        techStack: [
            "Backend Python 3.8 + FastAPI",
            "Backend BLE Scanner (bluepy)",
            "Backend ARP Scan + Whitelist",
            "Frontend React Native (Expo)",
            "Frontend Socket.io-client + Axios",
            "Database MySQL (pymysql)",
            "Infrastructure Linux/macOS + BLE Adapter",
            "Tools Tkinter",
            "Tools GitHub"
        ],
        aiAssist: [
            "지피티 (트러블슈팅/실험 로그 정리)"
        ],
        repoConfig: {
            path: "4-1-capstone-palman/BLEsniffing",
            url: "https://github.com/4-1-capstone-palman/BLEsniffing"
        },
        duration: "2025.03 ~ 2025.07"
    },
    {
        id: 4,
        title: "술-안주 페어링 커뮤니티 & 추천 서비스 (오늘! 뭐랑?)",
        tags: [
            { name: "Web Service", color: "purple" },
            { name: "Recommender", color: "purple" },
            { name: "CQRS", color: "purple" }
        ],
        description: `
            술 취향과 상황에 맞는 안주를 추천하고, 후기/레시피/팁을 공유하는 커뮤니티 서비스입니다.
            추천, 커뮤니티, SNS형 기록 기능을 하나로 통합해 탐색부터 기록까지 이어지는 사용자 흐름을 설계했습니다.
            <br><br>
            <b>핵심 구현 포인트:</b> 쓰기 작업은 JPA, 조회 작업은 MyBatis로 분리한 CQRS 구조를 적용해 도메인 규칙과 조회 성능을 함께 확보했습니다.
            또한 게시 승인/신고/블랙리스트 정책, 반응 4종, 술BTI/월드컵 이벤트를 통해 서비스 참여도와 운영 안정성을 높였습니다.
        `,
        features: [
            "술 종류 + 맛 태그 기반 안주 페어링 추천 및 필터 탐색 기능",
            "게시글/댓글/사진리뷰/라운지 기반 커뮤니티 및 후기 공유 기능",
            "리액션 4종(술술 들어가요/참신해요/맛없어요/궁금해요) 반응 시스템",
            "신고 누적 제재, 블랙리스트, 운영자 승인 기반 콘텐츠 관리 정책",
            "회원별 기록(작성글/댓글/즐겨찾기/팔로우) 제공",
            "술BTI 테스트, 월드컵 게임, 랭킹 조회 이벤트 기능"
        ],
        techStack: [
            "Backend Java 17 + Spring Boot",
            "Backend Spring Security + JWT",
            "Backend JPA(Command) + MyBatis(Query)",
            "Database MariaDB",
            "Build Gradle",
            "Tools GitHub",
            "Tools Postman",
            "Tools Notion + Discord",
            "Tools Figma + ERDCloud"
        ],
        aiAssist: [
            "클로드 코드 (쿼리/도메인 로직 검토 및 API 코드 작성 보조)"
        ],
        repoConfig: {
            path: "Youth-Leap-Squad/EatToday_store",
            url: "https://github.com/Youth-Leap-Squad/EatToday_store"
        },
        duration: "2025.07 ~ 2025.08"
    },
    {
        id: 5,
        title: "맞춤형 운동 다이어트 & 식단 관리 서비스 (CalMate)",
        tags: [
            { name: "AI/LLM", color: "green" },
            { name: "Gamification", color: "green" },
            { name: "Full Stack", color: "green" }
        ],
        description: `
            체형 정보와 기초대사량(BMR)을 기반으로 식단·운동을 관리하는 맞춤형 헬스케어 서비스입니다.
            AI 추천, 커뮤니티 소통, 이벤트형 미션을 결합해 사용자의 지속 참여를 유도하도록 설계했습니다.
            <br><br>
            <b>핵심 구현 포인트:</b> AI 식단/운동 추천과 감정 기반 추천, 식단 인식, 체형 변화 예측 기능을 구현하고
            빙고·포인트·칭호·랭킹·가챠 등 게이미피케이션을 적용해 기록 습관을 강화했습니다.
            또한 Jenkins + ArgoCD 기반 CI/CD 파이프라인으로 배포 자동화를 구성해 운영 효율을 높였습니다.
        `,
        features: [
            "AI 기반 맞춤 식단/운동 추천 및 BMR 기반 감량 목표 가이드",
            "음식 이미지 기반 칼로리 분석 및 식단 기록 자동화",
            "감정·건강 상태를 반영한 개인화 추천 로직 적용",
            "빙고 챌린지, 포인트, 칭호, 랭킹, 가챠 이벤트로 참여도 향상",
            "커뮤니티 게시판/신고 기능 및 사용자 간 정보 공유 기능 제공",
            "Jenkins + ArgoCD 파이프라인 기반 CI/CD 자동 배포"
        ],
        techStack: [
            "Backend Spring Boot",
            "Backend Spring Security + JPA",
            "Frontend Vue.js + Vuetify",
            "Database MariaDB",
            "Infrastructure Docker + Kubernetes",
            "Infrastructure Jenkins + ArgoCD",
            "Tools GitHub",
            "Tools Postman",
            "Tools Figma"
        ],
        aiAssist: [
            "제미나이 (요구사항 정리/버그 분석)",
            "클로드 코드 (컴포넌트/서비스 코드 보조)"
        ],
        repoConfig: {
            path: "Cal-Mate/be19-4th-Cal-Mate-Dev",
            url: "https://github.com/Cal-Mate/be19-4th-Cal-Mate-Dev"
        },
        duration: "2025.09 ~ 2025.10"
    },
    {
        id: 6,
        title: "방문 요양 고객관리 ERP (OnCare)",
        tags: [
            { name: "Web Service", color: "green" },
            { name: "Full Stack", color: "green" },
            { name: "Spring Boot", color: "green" },
            { name: "Vue.js", color: "green" }
        ],
        description: `
            현장 중심의 방문 요양 운영을 위한 올인원 고객관리 ERP 시스템입니다.
            수급자, 요양보호사, 방문 일정, 직원, 용품, 업무 현황을 하나의 서비스에서 통합 관리하도록 설계했습니다.
            <br><br>
            <b>프로젝트 기획 배경:</b> 고령화로 방문 요양 수요가 증가하는 반면, 기존 ERP는 복잡한 UI와 낮은 현장 적합성으로 활용도가 떨어졌습니다.
            실제 요양보호사 설문을 통해 UI 단순화, 기능 접근성, 고객 맞춤 관리 니즈를 확인하고 서비스 요구사항을 정의했습니다.
            <br><br>
            <b>문제 해결 접근:</b> 도메인 이벤트 스토밍 기반 DDD 설계를 통해 업무 흐름을 정리하고, 요양 기록 AI 요약/위험도 시각화/맞춤 매칭 기능을 중심으로
            반복 행정업무를 줄이며 현장 의사결정을 지원하는 구조를 구현했습니다. 또한 알림 및 대시보드를 통해 운영 리스크를 빠르게 파악할 수 있도록 개선했습니다.
        `,
        features: [
            "직원 관리: 전자결재, 자격증 만료 알림, 근무 상태/이력 통합 관리",
            "수급자 관리: 병력/특이사항/등급 만료/청구 알림 기반 맞춤형 정보 관리",
            "요양보호사 관리: 방문 일정/근무 스케줄/수급자 위험요소 및 위험등급 제공",
            "업무 효율화: 요양일지 AI 요약 기능으로 인수인계 및 기록 작성 부담 완화",
            "고객 관리: 잠재고객 상담, 이탈 사유 관리, 인텐션 분석 기반 대응 지원",
            "운영 관리: 물품 렌탈/회수/교체 이력 및 예상 수익 분석, 실시간 알림/대시보드 제공"
        ],
        techStack: [
            "Backend Spring Boot",
            "Backend Spring Security + JPA",
            "Frontend Vue.js + Vuetify",
            "Database MariaDB",
            "Database Redis",
            "Infrastructure AWS (EC2, RDS, S3)",
            "Infrastructure Docker",
            "Monitoring Prometheus + Grafana",
            "Tools GitHub",
            "Tools Postman"
        ],
        aiAssist: [
            "지피티 (기획 문안/요구사항 문서 정리)",
            "제미나이 (리팩토링/반복 코드 보조)",
            "지피티를 활용한 코드 리뷰, 코드 검사"
        ],
        repoConfig: {
            path: "golealda/be19-final-A-Team",
            url: "https://github.com/golealda/be19-final-A-Team"
        },
        duration: "2025.11 ~ 2026.01"
    },
    {
        id: 7,
        title: "부모-자녀 연동형 퀘스트 보상 플랫폼 (YumYumQuest)",
        tags: [
            { name: "Gamification", color: "orange" },
            { name: "Parent-Child System", color: "green" },
            { name: "Firebase", color: "blue" }
        ],
        description: `
        아이의 식습관 형성을 게임처럼 재미있게 유도하는 보호자-연동형 식습관 개선 플랫폼입니다.
        단순 기록 앱이 아니라 퀘스트, 포인트, 보상 시스템을 통해 아이가 스스로 참여하도록 설계했습니다.
        <br><br>
        <b>핵심 구현 포인트:</b> 보호자 계정과 아이 프로필을 분리한 구조를 설계하여
        보호자가 승인·관리하고, 아이는 퀘스트 기반으로 활동하는 양방향 참여형 시스템을 구현했습니다.
        Firebase 기반 인증 및 실시간 데이터 구조를 활용해 확장 가능한 구조로 설계했습니다.
    `,
        features: [
            "부모 계정 + 아이 프로필 구조 설계",
            "아이 초대 코드 기반 로그인 및 보호자 승인 시스템",
            "식습관 퀘스트 생성 및 완료 체크 기능",
            "포인트 적립 및 보상 시스템 (마일스톤 보상 구조 포함)",
            "실시간 데이터 동기화 (Firebase)",
            "테마/아이템 구매 구조 설계 (구독이 아닌 개별 구매 방식)"
        ],
        techStack: [
            "Frontend React Native",
            "Backend Firebase",
            "Database Firestore (NoSQL)",
            "Authentication Firebase Auth",
            "Tools GitHub"
        ],
        aiAssist: [
            "ChatGPT (기획 구조 설계 및 DB 모델링 정리)",
            "AI 기반 UX 흐름 개선 아이디어 도출"
        ],
        repoConfig: {
            path: "golealda/YumYumQuest",
            url: "https://github.com/golealda/YumYumQuest"
        },
        duration: "2026.01 ~ 진행중"
    }
];
