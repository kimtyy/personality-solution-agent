# DESIGN.md - 입체 성격 분석 에이전트 프리미엄 디자인 가이드

## 1. 브랜드 비전 (Design Vision)
**"The Sovereign AI Consultant"**
본 서비스는 단순한 성격 테스트가 아닌, 사용자의 내면을 통찰하고 비즈니스 성공을 돕는 '격조 높은 AI 전문 컨설턴트'의 이미지를 지향합니다. 

## 2. 디자인 키워드
- **Editorial Luxury**: 마치 고급 잡지나 전문 보고서를 읽는 듯한 레이아웃과 서체.
- **Glassmorphism**: 투명하고 입체적인 인터페이스를 통해 미래지향적이고 깨끗한 깊이감을 표현.
- **Atmospheric Depth**: 깊은 우주 혹은 전문 연구소와 같은 차분하고 지적인 다크 모드 환경.

---

## 3. 디자인 시스템 (Design System)

### 🎨 Color Palette
- **Primary (Vibrant Violet)**: `#8B5CF6` - 직관, 통찰, AI의 지능을 상징. (핵심 버튼 및 강조)
- **Secondary (Ice Blue)**: `#7DD3FC` - 신뢰, 기술, 명확한 분석을 상징. (데이터 시각화 및 서브 강조)
- **Background (Deep Dark Navy)**: `#0F172A` - 무한한 가능성과 내면의 깊이를 상징.
- **Accent (Luxury Gold)**: `#F59E0B` - 'PRO' 단계의 분석과 가치를 상징.

### ✍️ Typography
- **Headlines (Outfit)**: 기하학적이면서도 현대적인 세련미가 돋보이는 폰트. (타이틀, 섹션 헤더)
- **Body & Data (Plus Jakarta Sans / Inter)**: 가독성이 뛰어나고 신뢰감 있는 폰트. (분석 텍스트, 설명글)

### 💎 Glassmorphism Rule
- **Backdrop-blur**: `20px ~ 30px` - 뒤 배경의 컬러가 은은하게 비쳐 보이며 고급스러운 질감을 형성.
- **Border**: `1px solid rgba(255, 255, 255, 0.1)` - 선이 아닌 '빛의 맺힘'처럼 아주 얇고 투명한 테두리.
- **Background-color**: `rgba(255, 255, 255, 0.03)` - 극도의 투명함을 유지.

---

## 4. 핵심 컴포넌트 가이드

### 1) 진단 모드 카드 (Selection Cards)
- 마우스 호버 시 `transform: translateY(-5px)` 및 보라색 광채(Shadow Glow) 효과를 부여하여 상호작용성 강화.
- 텍스트는 좌측 정렬을 기본으로 하되, 여백을 충분히 두어 고급스러운 느낌을 유지.

### 2) 테스트 UI (Immersion Test)
- 한 번에 한 질문만 노출하여 인지 부하를 최소화.
- 응답 버튼은 알약 모양(Pill-shaped)의 글래스모피즘 디자인을 적용.

### 3) 분석 리포트 대시보드 (Analysis Dashboard)
- **Radar Chart**: Chart.js를 활용하되, 차트 영역 하단에 은은한 Radial Glow를 배치하여 입체감을 부여.
- **Sectioning**: 가로 구분선 대신 콘텐츠 사이의 여백(Margin)과 톤앤매너 변화(Tonal shift)로 영역을 구분.

### 4) 협업 시너지 보드 (Collaboration Synergy)
- 두 사용자의 타입을 대비시키기 위해 보라색(`primary`)과 파란색(`secondary`) 보색 대비를 활용.
- '주의사항'은 붉은색 틴트가 섞인 글래스 카드(`rgba(239, 68, 68, 0.05)`)를 통해 시각적 경고 의미 전달.

---

## 5. 애니메이션 지침
- 모든 트랜지션은 `transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1)` 처럼 부드럽고 우아하게 적용.
- 화면 전환 시 `fade-in` 및 `slide-up` 효과를 결합하여 사용자에게 분석 프로세스의 리듬감을 부여.

---
**Created by 영자 (AI Design Director) & Stitch MCP**
