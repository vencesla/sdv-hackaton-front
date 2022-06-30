import logoWhite from '../images/logo-white.png'

const Nav = ({ setShowModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={logoWhite} alt="logo"/>
            </div>
            <button className="nav-button" onClick={handleClick}>
                Connexion
            </button>
        </nav>
    )
}
export default Nav