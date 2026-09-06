# wvdaDPSRC 홈페이지

Wil van der Aalst Data & Process Science Research Center, POSTECH.

- 홈페이지: https://wvdadpsc.github.io/
- 기존 홈페이지: https://dpsrc.postech.ac.kr/
- 배포: GitHub Pages / GitHub Actions

## 내용 수정

- 메인 화면: `app/page.tsx`
- 센터 소개·연구분야·교수 정보: `content/pages.json`
- 공지사항 목록: `app/[slug]/page.tsx`의 notice 분기
- 현판식 기사: `content/pages.json`의 ceremony 항목
- 공통 메뉴·주소·전화번호: `app/layout.tsx`
- 디자인: `app/globals.css`
- 이미지: `public/assets/` (원본 출처는 `content/asset-sources.json`)

GitHub에서 파일의 연필 버튼으로 수정한 뒤 main 브랜치에 커밋하면 Actions가 홈페이지를 다시 배포합니다. 다른 담당자는 Organization의 People에서 초대하고 이 저장소에 Write 권한을 부여하세요.

## 로컬 실행

Node.js 22.13 이상이 필요합니다.

```sh
npm ci
npm run dev
```

## 빌드 및 배포

```sh
npm run build
```

저장소 Settings → Pages → Source를 **GitHub Actions**로 설정합니다. main 브랜치에 푸시하면 `.github/workflows/pages.yml`이 정적 사이트를 빌드하고 배포합니다.

## 이전 범위

2026-09-06 기준 기존 사이트의 공개 본문과 이미지 자료를 가져왔습니다. 소개 4개, 연구분야 4개, 구성원 3개, 소식 2개 메뉴 및 현판식 기사와 메인 페이지를 제공합니다. 디자인과 모바일 레이아웃은 재구성했습니다. 기존 WordPress의 관리자 화면·DB·게시판 플러그인은 포함하지 않습니다. 공지사항은 저장소 파일로 관리합니다.

기존 페이지에서 외부 단축 주소로 이동시키는 난독화된 클릭 스크립트가 확인되어 실행 코드는 이전하지 않았습니다. 텍스트와 이미지만 추출했습니다.

기존 dpsrc.postech.ac.kr 주소의 DNS는 변경하지 않았습니다. 기존 도메인을 연결하려면 POSTECH 도메인 담당자의 DNS 설정이 필요합니다.
