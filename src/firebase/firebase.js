import app from "firebase/app"
import fb from "firebase"
import "firebase/auth"
import "firebase/firestore"
import firebaseConfig from "./config"

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    // firebase.analytics();
    this.auth = app.auth()
    this.db = app.firestore()
    this.storage = fb.storage()
  }

  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    )
    return await newUser.user.updateProfile({
      displayName: name,
    })
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password)
  }

  async logout() {
    await this.auth.signOut()
  }

  async resetPassword(email) {
    await this.auth.sendPasswordResetEmail(email)
  }
}

const firebase = new Firebase()
export default firebase
