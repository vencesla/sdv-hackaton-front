import {useState} from "react";
import API from '../utils/API';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AuthModal = ({ setShowModal, isSignUp }) =>{

    const navigate = useNavigate();
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)

    const handleClose = () => {
        setShowModal(false)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        try {
            if(isSignUp) {
                if (password !== confirmPassword) {
                    setError('Les mots de passe ne sont pas identiques')
                    return
                }
                API.get('http://localhost:8080/signup?email=' + email + '&password=' + password).then(() => {
                    setError("Votre compte à bien été créer")
                }).catch(() => {
                    setError("Impossible de créer ce compte")
                });
            } else {
                API.get('http://localhost:8080/login?email=' + email + '&password=' + password).then(() => {
                    window.location.reload()
                }).catch(() => {
                    setError("Email ou mots de passe incorrect")
                });
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="auth-modal">
            <div className="auth-modal-content">
                <div className="close-icon" onClick={handleClose}>X</div>
                <h2>{isSignUp ? 'Créer un compte' : 'Connexion'}</h2>
                <p>Découvrez comment nous traitons vos données dans notre politique de confidentialité.</p>
                <form onSubmit={handleSubmit}>
                    {error && error !== '' && <Alert variant="danger">{error}</Alert>}
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
                </form>
            </div>
        </div>
    )
}
export default AuthModal