import {useState} from "react";
import {useCookies} from 'react-cookie'

const AuthModal = ({ setShowModal, setISignUp, isSignUp }) =>{

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [ cookies, setCookie, removeCookie] = useCookies(null)


    const handleClick = () => {
        console.log('clicked')
        setShowModal(false)
        setISignUp(true)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError('les deux mots de passe doivent être  identiques!')
                return
            }

            window.location.reload()

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="auth-modal">
            <div className="auth-modal-content">
                <div className="close-icon" onClick={handleClick}>X</div>
                <h2>{isSignUp ? 'Créer un compte' : 'Connexion'}</h2>
                <p>Découvrez comment nous traitons vos données dans notre politique de confidentialité.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Mot de passe"
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {isSignUp && <input
                        type="password"
                        id="password-check"
                        name="password-check"
                        className="form-control"
                        placeholder="Confirmer mot de passe"
                        required={true}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />}
                    <input className="primary-button w-100" type="submit" value={isSignUp ? 'VALIDER' : 'SE CONNECTER'}/>
                    {error && error !== '' && <p>{error}</p>}
                </form>
            </div>
        </div>
    )
}
export default AuthModal