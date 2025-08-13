# 무료 영상 도네이션 프로젝트

- donate.html: 영상 제출 페이지 (닉네임, 메시지, URL 입력 가능)
- overlay.html: OBS용 투명 오버레이, 제출된 영상 재생
- common.js: Firebase 연동 및 queue 관리
- common.css: 기본 스타일

## 사용법
1. Firebase 프로젝트 생성 후 config 복사
2. common.js의 firebaseConfig 수정
3. GitHub Pages 또는 웹 서버에 배포
4. OBS에 overlay.html을 브라우저 소스로 추가
