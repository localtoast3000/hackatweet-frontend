import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, addUser } from '../reducers/user';
import styles from '../page_styles/index.module.css';
import TwitterLogo from '../components/twiiter_logo';
import Page from '../components/page';
import Modal from '../components/modal/modal';

export default function Index() {
  const [signupModal, setSignupModal] = useState(false);
  const [signinModal, setSigninModal] = useState(false);

  return (
    <Page className={styles.mainContainer} darkMode={true}>
      <div className={styles.imageWrapper}>
        <TwitterLogo className={styles.twitterImageLogo} />
      </div>
      <section className={styles.actionSection}>
        <div className={styles.actionInnerWrapper}>
          <TwitterLogo className={styles.twitterTopLogo} />
          <div className={styles.actionLowerWrapper}>
            <div className={styles.headerText}>
              <h2>See what's happening</h2>
              <p>Join Hackatweet today.</p>
            </div>
            <div className={styles.btnsContainer}>
              <button
                onClick={() => {
                  setSignupModal(true);
                  setSigninModal(false);
                }}
                className={styles.signupBtn}>
                Sign up
              </button>
              <p>Already have an account?</p>
              <button
                onClick={() => {
                  setSigninModal(true);
                  setSignupModal(false);
                }}
                className={styles.signinBtn}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </section>
      {signupModal ? (
        <Modal show={signupModal} onClose={setSignupModal} className={styles.modal}>
          <form>
            <input type='text' />
          </form>
        </Modal>
      ) : (
        ''
      )}
      {signinModal ? (
        <Modal show={signinModal} onClose={setSigninModal} className={styles.modal}>
          <form>
            <input type='text' />
          </form>
        </Modal>
      ) : (
        ''
      )}
    </Page>
  );
}
