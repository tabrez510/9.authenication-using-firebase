import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const firebaseApiKey = process.env.REACT_APP_FIREBASE_API_KEY;
  const authCtx = useContext(AuthContext)
  const newPasswordInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newEnteredPassword = newPasswordInputRef.current.value;

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${firebaseApiKey}`,
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newEnteredPassword,
          returnSecureToken: false
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((res) => {
      alert('Password changed successfully');
    })
  }
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
