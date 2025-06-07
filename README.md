# 📋 Portfolio Application – 개인 포트폴리오 어플리케이션

## 📌 Summary  
노션으로 만든 경력기술서가 있지만 지금까지 만들었던 프로젝트들을 한번에 모아놓은
나만의 포트폴리오도 있으면 좋을 것 같아 제작하게 되었습니다.

> 🎯 반응형으로 제작되어 모바일 환경에서도 최적화된 UI를 제공합니다.

<br>

## 🛠️ 사용 기술 및 언어  
- **Frontend**: React, JavaScript  
- **Styling**: Styled-Components
- **Library**: Framer-Motion

<br>

## 🔗 프로젝트 링크  
- GitHub: [https://github.com/SW-Yerim/PortfolioAPI](https://github.com/SW-Yerim/PortfolioAPI)  
- Live Demo: [https://sw-yerim.github.io/PortfolioAPI](https://sw-yerim.github.io/PortfolioAPI)
- 프로젝트 상세내용: https://wooye.tistory.com/30

<br>

## ✨ 주요 기능 및 특징  
- 페이지 진입 시 로딩창 출력
  - ( API 가 있다면 데이터 로딩이 완료 된 후 출력하려 했으나 현재는 2초로 고정 되어있음 )
- 버튼 클릭 시 특정 위치로 이동 
- Framer-motion, keyframes 를 사용하여 자연스러운 애니메이션 구현
- 반응형 UI (모바일/태블릿 대응)

<br>

## 🎯 프로젝트 선정 이유 및 느낀점  

1. **정보 전달을 우선순위로 한 UI 구성**  
   - 가장 중요한 정보들이 한 눈에 들어올 수 있도록 메인에는 간략한 정보만 노출하고, 상세 내용은 모달 또는 다른 사이트로 이동 할 수 있게 UI 구성하였습니다.

2. **Framer-motion 라이브러리 사용**  
   - 애니메이션이 더 자연스럽게 구현 될 수 있도록 Framer-motion 라이브러리를 사용하였습니다.

3. **반응형 스타일링 실습**  
   - `Styled-Components`를 활용하여 다양한 디바이스에서도 자연스럽게 동작할 수 있도록 레이아웃을 구성해보며 실무 적용을 대비하였습니다.

<br>

## 🧩 트러블슈팅  

| 문제 상황 | 원인 | 해결 방법 |
|-----------|------|------------|
| JSON 데이터 출력 시 UI가 깨지는 현상이 발생 | "Object.entries() 를 사용했는데 flat() 을 사용해서 발생한 오류 | flatMap 을 사용해서 클립보드 기능을 구현 |
| 공통 컴포넌트에 CSS가 적용되지 않음 | styled-components 에서 props 를 구조분해 할당 없이 그대로 사용해서 발생한 오류 | 소스를 구조분해 시켜줘서 해결 |

