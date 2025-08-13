
// Firebase 초기화 (여기서 config 변경 가능)
const firebaseConfig = {
  apiKey: "AIzaSyBiDe-6X-nKUfAgwWWWriI2U9wpNpQ9hk8",
  authDomain: "toiden.firebaseapp.com",
  databaseURL: "https://toiden-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "toiden",
  storageBucket: "toiden.firebasestorage.app",
  messagingSenderId: "696461176231",
  appId: "1:696461176231:web:2120f172e52eaba91a1a82"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function submitVideo(){
    const videoUrl = document.getElementById('videoUrl').value.trim();
    const username = document.getElementById('username').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!videoUrl){ alert('영상 URL을 입력해주세요.'); return; }
    const room = new URLSearchParams(window.location.search).get('room') || 'default';
    const videoData = { url: videoUrl, user: username||'익명', message: message||'', timestamp: Date.now() };
    firebase.database().ref(`rooms/${room}/queue`).push(videoData)
        .then(()=>{ alert('영상이 제출되었습니다!'); document.getElementById('videoUrl').value=''; document.getElementById('username').value=''; document.getElementById('message').value=''; })
        .catch(err=>{ console.error(err); alert('제출 중 오류 발생'); });
}
