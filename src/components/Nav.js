import logoWhite from '../images/logo-white.png'


const Nav = ({ minimal, authToken, setShowModal, showModal ,setIsSignup }) => {




    const handleClick = () => {
        console.log('clicked')
        setShowModal(true)
        setIsSignup(false)
    }

    return (
        <nav minimal={false} authtoken={authToken} setShowModal={setShowModal} showmodal={showModal}>
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