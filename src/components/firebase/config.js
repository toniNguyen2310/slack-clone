import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: 'AIzaSyBza_UnuZfMbjdcXDAPkf2qVb-MzwgcE9I',
  authDomain: 'slack-clone-by-tnx.firebaseapp.com',
  projectId: 'slack-clone-by-tnx',
  storageBucket: 'slack-clone-by-tnx.appspot.com',
  messagingSenderId: '532083058575',
  appId: '1:532083058575:web:00be0c12388cd86c1ecdfa',
  measurementId: 'G-YEQQ8QT827'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, db }