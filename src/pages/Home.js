import Nav from '../components/Nav'
import AuthModal from "../components/AuthModal";
import { useState } from "react";

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        <div className="overlay">
            <Nav setShowModal={setShowModal} setIsSignUp={setIsSignUp}/>
            <div className="mb-3">
                <h1 className="primary-title">Balayer vers la droite</h1>
                <button className="primary-button" onClick={handleClick}>
                    Créer un compte
                </button>

                {showModal && <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>}
            </div>
        </div>
    )
}

export default Home