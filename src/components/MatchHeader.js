import userImage from '../images/Hermine-logo.jpg'
import { useNavigate } from 'react-router-dom';

const MatchHeader = () => {

    const navigate = useNavigate();

    const handleProfile = (e) => {
        e.preventDefault()
        navigate("/profile");
    }
    return(
        <div className="chat-container-header">
            <div className="profile-info" onClick={handleProfile}>
                <img className="profile-image" src={userImage} alt="user-image"/>
                <span className="profile-name">Martin Barré</span>
            </div>
        </div>
    )
}

export default MatchHeader