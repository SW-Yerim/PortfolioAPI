export const projects = [
  {
    title: "포트폴리오 사이트",
    subtitle: "포트폴리오 웹사이트",
    date: "2025.05",
    person: "1인",
    language: {
      frontend: ["React", "JavaScript"],
      backend: [],
      styling: ["Styled-Components"],
      library: ["Framer-Motion"],
      api: [],
      database: [],
    },
    card: {
      summary: [
        "개발자로서의 능력과 경험을 효과적으로 전달하기 위해 개발",
        "framer-motion, keyframes를 이용해 자연스러운 애니메이션 적용",
        "Styled-Components를 활용한 컴포넌트 단위의 디자인 시스템 구성",
        "GitHub Pages를 통해 배포",
      ],
    },
    modal: {
      summary: [
        "노션으로 만든 경력기술서가 있지만 지금까지 만들었던 프로젝트들을 한번에 모아놓은",
        "나만의 포트폴리오도 있으면 좋을 것 같아 제작하게 되었습니다.",
        "🎯 반응형으로 제작되어 모바일 환경에서도 최적화된 UI를 제공합니다.",
      ],
      url: {
        github: "https://github.com/SW-Yerim/PortfolioAPI",
        live: "https://sw-yerim.github.io/PortfolioAPI",
        tistory: "https://wooye.tistory.com/30",
      },
      features: [
        "페이지 진입 시 로딩창 출력",
        "버튼 클릭 시 특정 위치로 이동",
        "Framer-motion, keyframes 를 사용하여 자연스러운 애니메이션 구현",
        "반응형 UI (모바일/태블릿 대응)",
      ],
      takeaway: [
        {
          title: "정보 전달을 우선순위로 한 UI 구성",
          content:
            "가장 중요한 정보들이 한 눈에 들어올 수 있도록 메인에는 간략한 정보만 노출하고, 상세 내용은 모달 또는 다른 사이트로 이동 할 수 있게 UI 구성하였습니다.",
        },
        {
          title: "Framer-motion 라이브러리 사용",
          content:
            "애니메이션이 더 자연스럽게 구현 될 수 있도록 Framer-motion 라이브러리를 사용하였습니다.",
        },
        {
          title: "반응형 스타일링 실습",
          content:
            "Styled-Components를 활용하여 다양한 디바이스에서도 자연스럽게 동작 할 수 있도록 레이아웃을 구성해보며 실무 적용을 대비하였습니다.",
        },
      ],
      trouble: [
        {
          problem: "JSON 데이터 출력 시 UI가 깨지는 현상이 발생했습니다.",
          cause:
            "Object.entries() 를 사용했는데 flat() 을 사용해서 발생한 오류였습니다.",
          solution: "flatMap 을 사용해서 클립보드 기능을 구현하였습니다.",
          detail: "https://wooye.tistory.com/29",
        },
        {
          problem: "공통 컴포넌트에 CSS가 적용되지 않았습니다.",
          cause:
            "styled-components 에서 props 를 구조분해 할당 없이 그대로 사용해서 발생한 오류였습니다.",
          solution:
            "${( width ) => width || 100%} 로 되어있던 소스를 구조분해 시켜줘서 ${( { width } ) 로 변경해서 해결하였습니다.",
          detail: "https://wooye.tistory.com/28",
        },
      ],
    },
  },
  {
    title: "모바일 청첩장",
    subtitle: "모바일 맞춤형 청첩장 애플리케이션",
    date: "2025.04",
    person: "1인",
    language: {
      frontend: ["React", "TypeScript"],
      backend: [],
      styling: ["Tailwind CSS"],
      library: ["Swiper", "React-Copy-To-Clipboard"],
      api: ["React-Kakao-Maps-Sdk API"],
      database: ["Firebase"],
    },
    card: {
      summary: [
        "세상에 하나밖에 없는 나만의 모바일 청첩장을 만들기 위해 개발",
        "Sass를 활용한 반응형 디자인 및 슬라이드형 갤러리 구현",
        "사용자가 정보를 확인하기 쉽게 직관적인 최적화된 UI/UX 설계",
      ],
    },
    modal: {
      summary: [
        "내가 직접 만든 세상에 하나뿐인 나만의 청첩장 어플리케이션입니다.",
        "Swiper를 활용한 사진첩, 결혼식 날 까지의 D-Day 조회, 결혼식장 위치 표시, 방명록 등록 및 조회 기능들을 확인 하실 수 있습니다.",
        "🎯 반응형으로 제작되어 모바일 환경에서도 최적화된 UI를 제공합니다.",
      ],
      url: {
        github: "https://github.com/SW-Yerim/InvitationAPI",
        live: "https://sw-yerim.github.io/InvitationAPI",
        tistory: "https://wooye.tistory.com/27",
      },
      features: [
        "Firebase 로 DB를 생성하여 방명록 등록, 출력",
        "맵 API 사용해서 위치 표시",
        "dayjs 를 사용하여 D-Day 계산",
        "전화, 문자 아이콘 출력 시 전화앱, 문자앱 연동",
        "카드 아이콘 클릭 시 계좌번호 클립보드 복사",
        "반응형 UI (모바일/태블릿 대응)",
      ],
      takeaway: [
        {
          title: "Firebase 로 DB 생성",
          content: "Firebase 에 DB를 생성해서 방명록 기능 구현하였습니다.",
        },
        {
          title: "Swiper 슬라이드 UI 구성",
          content:
            "시각적인 요소가 중요한 프로젝트에서 Siper 라이브러리를 활용하여 사용자 친화적인 UI를 구성하는 방법을 경험해보았습니다.",
        },
        {
          title: "카카오 Map API 로 지도 구현",
          content:
            "OpenAPI 를 사용하여 필요한 정보를 필터링하고 가공하여 컴포넌트에 적용하는 과정을 실습하였습니다.",
        },
        {
          title: "반응형 스타일링 실습",
          content:
            "Tailwind CSS를 활용하여 다양한 디바이스에서도 자연스럽게 동작 할 수 있도록 레이아웃을 구성해보며 실무 적용을 대비하였습니다.",
        },
      ],
      trouble: [
        {
          problem:
            "클립보드인 writeText 사용 시 모바일에서 오류가 발생했습니다.",
          cause: "로컬 환경이 HTTPS 로 되어있지 않아 발생한 오류였습니다.",
          solution:
            "react-copy-to-clipboard 를 사용해서 클립보드 기능을 구현하였습니다.",
          detail: "https://wooye.tistory.com/26",
        },
        {
          problem: "firebase에서 가져온 데이터의 줄바꿈이 적용되지 않았습니다.",
          cause:
            "div 와 p 태그는 줄바꿈 데이터인 \n를 무시하고 한줄로 출력이 돼서 발생한 오류였습니다.",
          solution: "css 의 white-space를 사용해서 해결하였습니다.",
          detail: "https://wooye.tistory.com/24",
        },
      ],
    },
  },
  {
    title: "영화 어플리케이션",
    subtitle: "TMDB API를 활용한 최신 영화 추천 애플리케이션",
    date: "2025.04",
    person: "1인",
    language: {
      frontend: ["React", "JavaScript"],
      backend: [],
      styling: ["Module CSS"],
      library: ["React-Router", "React-Query", "React-Slick"],
      api: ["The Movie Database (TMDB) API"],
      database: [],
    },
    card: {
      summary: [
        "React-Query를 활용한 비동기 데이터 처리 및 로딩/에러 핸들링 적용",
        "React-Slick 라이브러리 사용",
        "데이터 호출 등의 중복 로직을 정리하기 위해 커스텀 훅 제작 및 적용",
        "URL 파라미터에 따른 영화 상세 페이지 라우팅 구현",
      ],
    },
    modal: {
      summary: [
        "TMDB API를 활용하여 다양한 장르의 영화를 검색하고, 상세 정보를 조회할 수 있는 영화 탐색 어플리케이션입니다.",
        "최신 인기 영화, 장르별 영화, 선택한 영화의 상세 정보 를 확인할 수 있으며 ",
        "영화 검색 기능을 통해 원하는 영화를 빠르게 찾을 수 있습니다.",
        "🎯 반응형으로 제작되어 모바일 환경에서도 최적화된 UI를 제공합니다.",
      ],
      url: {
        github: "https://github.com/SW-Yerim/MovieAPI",
        live: "https://sw-yerim.github.io/MovieAPI",
        tistory: "https://wooye.tistory.com/19",
      },
      features: [
        "TMDB API 연동을 통한 실시간 영화 데이터 조회",
        "React Query를 통한 API 데이터 캐싱 및 로딩/에러 처리 자동화",
        "선택한 영화 클릭 시 상세 모달창 출력",
        "장르 필터링 기능 (장르 선택 시 해당 장르 영화만 출력)",
        "영화 검색 기능",
        "반응형 UI (모바일/태블릿 대응)",
      ],
      takeaway: [
        {
          title: "React Router 학습 목적",
          content:
            "페이지 간 이동과 URL 파라미터를 이용한 상세 페이지 구현 등 라우팅 기반 구조를 익히는 데에 중점을 두었습니다.",
        },
        {
          title: "React Query 도입으로 API 상태 관리 최적화",
          content:
            "로딩, 에러, 캐싱 등의 처리를 라이브러리를 통해 자동화함으로써 실무에서의 데이터 흐름 관리 방식을 실습할 수 있었습니다.",
        },
        {
          title: "슬라이드 UI 구성 학습",
          content:
            "시각적인 요소가 중요한 프로젝트에서 react-slick 라이브러리를 활용하여 사용자 친화적인 UI를 구성하는 방법을 경험해보았습니다.",
        },
        {
          title: "Open API 연동 실습",
          content:
            "실시간 API 응답 데이터를 활용해 필요한 정보를 필터링하고 가공하여 컴포넌트에 적용하는 과정을 실습하였습니다.",
        },
        {
          title: "반응형 스타일링 실습",
          content:
            "CSS Module과 media query를 활용하여 다양한 디바이스에서도 자연스럽게 동작할 수 있도록 레이아웃을 구성해보며 실무 적용을 대비하였습니다.",
        },
      ],
      trouble: [
        {
          problem:
            "영화 상세 페이지에 진입한 뒤 새로고침 시 데이터가 출력되지 않았습니다.",
          cause: "이전 페이지에서 전달된 props가 사라졌기 때문입니다.",
          solution:
            "useParams로 영화 ID를 받아오고, 해당 ID를 기반으로 React Query를 통해 상세 데이터를 다시 요청하도록 처리하였습니다.",
          // detail: "",
        },
      ],
    },
  },
  {
    title: "날씨 어플리케이션",
    subtitle: "OpenWeatherMap API를 활용한 날씨 예보 애플리케이션",
    date: "2025.03",
    person: "1인",
    language: {
      frontend: ["React", "JavaScript"],
      backend: [],
      styling: ["Module CSS"],
      library: [],
      api: ["OpenWeatherMap API"],
      database: [],
    },
    card: {
      summary: [
        "실시간 날씨 정보 사이트를 통해 React API 호출과 상태관리를 학습하고자 개발",
        "사용자가 도시를 클릭하면 5일간의 3시간 단위 예보 데이터 제공",
        "반응형 디자인과 CSS Module을 이용한 컴포넌트 단위 스타일링 적용",
        "기온, 습도, 날씨 아이콘 등 직관적인 정보 제공을 위한 UI 구성",
      ],
    },
    modal: {
      summary: [
        "지역별 현재 날씨와 대기질 상태를 확인할 수 있는 일기예보 어플리케이션입니다.",
        "사용자는 내 위치를 포함해 미국, 영국, 한국, 호주 등 총 5개 지역의",
        "현재 일기예보, 3시간 간격 시간대별 날씨, 5일치 주간 예보를 확인할 수 있습니다.",
        "📍 현재는 지역 리스트가 하드코딩되어 있으며, 추후 지역 검색 기능 추가 예정입니다.",
        "🎯 반응형으로 제작되어 모바일 환경에서도 최적화된 UI를 제공합니다.",
      ],
      url: {
        github: "https://github.com/SW-Yerim/WeatherAPI",
        live: "https://sw-yerim.github.io/WeatherAPI",
        tistory: "https://wooye.tistory.com/14",
      },
      features: [
        "버튼 클릭 시 지역별 날씨 정보 요청 및 출력",
        "현재 선택된 지역의 상세 정보 출력 : 최저/최고 기온, 체감온도, 습도, 일출/일몰 시간 등",
        "대기질 정보 표시 : 미세먼지(PM10), 초미세먼지(PM2.5), 일산화탄소(CO) 등",
        "시간대별(3시간 간격) 날씨 예보 제공",
        "5일치 주간 날씨 요약 제공",
        "반응형 UI (모바일/태블릿 대응)",
      ],
      takeaway: [
        {
          title: "React 기초 설계 학습",
          content:
            "언어마다 기본적인 폴더 구조에 차이가 있는데, React에서는 폴더를 어떤 방식으로 구성하는지 학습하고자 하였습니다.",
        },
        {
          title: "데이터 상태 관리 경험",
          content:
            "useState, useEffect, useContext, useMemo 등 다양한 Hook을 실습하며 상태 관리 방법에 대해 경험해보았습니다.",
        },
        {
          title: "Open API 연동 실습",
          content:
            "실시간 API 응답 데이터를 활용해 필요한 정보를 필터링하고 가공하여 컴포넌트에 적용하는 과정을 실습하였습니다.",
        },
        {
          title: "반응형 스타일링 실습",
          content:
            "CSS Module과 media query를 활용하여 다양한 디바이스에서도 자연스럽게 동작할 수 있도록 레이아웃을 구성해보며 실무 적용을 대비하였습니다.",
        },
      ],
      trouble: [
        {
          problem: "API 응답이 불규칙하게 렌더링됨",
          cause: "useEffect 의존성 배열 누락되었기 때문입니다.",
          solution:
            "의존성 배열 추가 후 필요한 조건에 따라 재렌더링 하도록 제어하였습니다.",
          // detail: "",
        },
        {
          problem: "대기질 수치 단위 혼란",
          cause: "단위에 대한 사전 정보가 부족했기 때문입니다.",
          solution:
            "API 응답값을 기준으로 수치를 해석하고 필요한 단위로 변환하였습니다.",
          // detail: "",
        },
      ],
    },
  },
];
