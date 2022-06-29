import whiteLogo from '../images/logo2.png'


const Nav = ({ minimal, authToken, setShowModal, showModal ,setIsSignup }) => {




    const handleClick = () => {
        console.log('clicked')
        setShowModal(true)
        setIsSignup(false)
    }

    return (
        <nav minimal={false} authtoken={authToken} setShowModal={setShowModal} showmodal={showModal}>
            <div className="logo-container">
                <img className="logo" src={whiteLogo} alt="logo"/>
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