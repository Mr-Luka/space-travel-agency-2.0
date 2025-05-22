import welcomeVideo from '../../public/welcome-page.mp4';
import '../index.css';
import SignUpModal from './sign-up-modal.jsx';
import { useRef, useState } from 'react';

export default function WelcomePage({onRegisterSuccess}) {
    const [modalOpen, setModalOpen] = useState(false)
  const modalRef = useRef();

  function handleSignUpButton() {
    modalRef.current?.open();
    setModalOpen(true)
  }

  function handleCloseModal() {
  modalRef.current?.close();
  setModalOpen(false);
}

const handleSuccessfulSignUp = (name) => {
  handleCloseModal(); // close the modal
  onRegisterSuccess(name) // update the userRegistered state in app
}

  return (
    <>
      <div className="welcome-video-sign-up">
        <div className="content-welcome">
          {!modalOpen && (
            <>
              <h1>Welcome to Space Tourism</h1>
              <button onClick={handleSignUpButton} className="btn-sign-up" id="form-open-btn">
                Sign Up
              </button>
            </>
          )}
        </div>
        <div className="video-welcome">
        <video id="welcome-video" autoPlay loop muted playsInline>
          <source src={welcomeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
      <SignUpModal ref={modalRef} onClose={handleCloseModal} onSignUpSuccess={handleSuccessfulSignUp} />
    </>
  );
}