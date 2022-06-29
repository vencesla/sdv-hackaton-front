import Nav from '../components/Nav'
import AuthModal from "../components/AuthModal";
import { useState } from "react";

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const authToken = false

    const handleClick = () => {
        console.log("clicked")
        setShowModal(true)
    }
    return (
        <div className="overlay">
            <Nav
                authToken={authToken}
                minimal={false}
            />
            <div className="home">
                <h1 className="primary-title">Balayer vers la droite</h1>
                <button className="primary-button" onClick={handleClick}>
                    {!authToken ? 'Inscription': 'Créer un compte'}
                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal}/>
                )}
            </div>
        </div>
    )
}

export default Home