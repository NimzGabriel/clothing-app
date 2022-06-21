import SignUpForm from "../../components/sign-up/SignUpForm";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utilities/firebase/firebase'

export default function SignIn() {
  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In</h1>

      <button onClick={logGooglePopupUser}>
        Sign In With Google Popup
      </button>

      <SignUpForm />

    </div>
  )
}
