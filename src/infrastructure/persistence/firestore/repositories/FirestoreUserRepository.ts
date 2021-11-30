import { db, firebaseAuth } from '..'
import { UserEntity } from '../../../../domain/entities/UserEntity'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { UserRepository } from '../../../../domain/repositories/UserRepository'

export class FirestoreUserRepository implements UserRepository {
    get: (email: string, password: string) => Promise<UserEntity>

    public async save(email: string, password: string) {
        let user = {}
        const auth = getAuth()
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                user = userCredential.user
                // ...
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                // ..
            })
        return user as UserEntity
    }
}
