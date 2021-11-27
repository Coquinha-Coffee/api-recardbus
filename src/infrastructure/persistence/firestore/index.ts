import * as admin from 'firebase-admin'

const serviceAccount = require('../../../../recardbus-afbc6-firebase-adminsdk-zmcps-5877e98a3f.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

export const db = admin.firestore()
