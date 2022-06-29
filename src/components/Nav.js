import logoWhite from '../images/logo-white.png'


const Nav = ({ minimal, authToken, setShowModal }) => {

    const handleClick = () => {
        setShowModal(false)
    }

    return (
        <nav minimal={false} authtoken={authToken} setShowModal={setShowModal} showmodal={setShowModal}>
            <div className="logo-container">
                <img className="logo" src={logoWhite} alt="logo"/>
            </div>
            {!authToken && !minimal && <button
                className="nav-button"
                onClick={handleClick}
                disabled={true}
            >Connexion</button>}
        </nav>
    )
}
export default Nav