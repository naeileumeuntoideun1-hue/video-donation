
// common.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded, remove } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBiDe-6X-nKUfAgwWWWriI2U9wpNpQ9hk8",
  authDomain: "toiden.firebaseapp.com",
  databaseURL: "https://toiden-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "toiden",
  storageBucket: "toiden.firebasestorage.app",
  messagingSenderId: "696461176231",
  appId: "1:696461176231:web:2120f172e52eaba91a1a82"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function submitVideo(room, url) {
  push(ref(db, `rooms/${room}/queue`), { url });
}

export function listenQueue(room, callback) {
  onChildAdded(ref(db, `rooms/${room}/queue`), snapshot => {
    callback(snapshot.key, snapshot.val().url);
  });
}

export function removeFromQueue(room, key) {
  remove(ref(db, `rooms/${room}/queue/${key}`));
}
