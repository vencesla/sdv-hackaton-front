import logoWhite from '../images/logo-white.png'

const Nav = ({ minimal, authToken, setShowModal, showModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={logoWhite} alt="logo"/>
            </div>
            {!authToken && !minimal && <button
                className="nav-button"
                onClick={handleClick}
                disabled={showModal}
            >Connexion</button>}
        </nav>
    )
}
export default Nav