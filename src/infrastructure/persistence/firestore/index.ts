import * as admin from 'firebase-admin'
import { initializeApp } from 'firebase/app'

const serviceAccount = require('../../../../recardbus-afbc6-firebase-adminsdk-zmcps-5877e98a3f.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

const firebaseConfig = {
    apiKey: 'AIzaSyCMOuihwQueQVGuWnc6-LOj9fknrHUTh7o',
    authDomain: 'recardbus-afbc6.firebaseapp.com',
    projectId: 'recardbus-afbc6',
    storageBucket: 'recardbus-afbc6.appspot.com',
    messagingSenderId: '734503175977',
    appId: '1:734503175977:web:0d5ffcefa26eb0a22ad938',
}

export const firebaseAuth = initializeApp(firebaseConfig)

export const db = admin.firestore()
