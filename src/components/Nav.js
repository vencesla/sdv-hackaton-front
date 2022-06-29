import whiteLogo from '../images/logo2.png'


const Nav = ({ minimal, authToken, setShowModal }) => {

    const handleClick = () => {
        setShowModal(false)
    }

    return (
        <nav minimal={false} authtoken={authToken} setShowModal={setShowModal} showmodal={setShowModal}>
            <div className="logo-container">
                <img className="logo" src={whiteLogo} alt="logo"/>
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