import {useState} from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const AuthModal = ({setShowModal, isSignUp }) =>{

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [ cookies, setCookie, removeCookie] = useCookies(null)

    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError('Passwords need to match!')
                return
            }

            window.location.reload()

        } catch (error) {
            console.log(error)
        }
    }

    const inSignup = true
    return (
        <div className="auth-modal">
           <div className="close-icon" onClick={handleClick}>ⓧ</div>
            <h2>{inSignup ? 'Créer un compte': 'Se connecter'}</h2>
            <p>En cliquant sur Se connecter, vous acceptez nos conditions. Découvrez comment nous traitons vos données
                dans notre politique de confidentialité et notre politique en matière de cookies.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="email"
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
                    placeholder="confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className="secondary-button btn-primary" type="submit"/>
                <p>{error}</p>
            </form>

        </div>
    )
}
export default AuthModal