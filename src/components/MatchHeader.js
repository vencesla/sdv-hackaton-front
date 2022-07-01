import userImage from '../images/Hermine-logo.jpg'
import { Power } from 'react-bootstrap-icons';
import TokenManager from '../utils/TokenManager';
import {Link} from "react-router-dom";

const MatchHeader = ({user}) => {

    //const navigate = useNavigate();

    const handleProfile = (e) => {
        e.preventDefault()
        //navigate("/profile");
    }

    const handleDisconnect = () => {
        TokenManager.removeToken();
        window.location.reload();
    }

    return(
        <div className="chat-container-header">
            <Link to={"/profile"}>
            <div className="profile-info">
                <img className="profile-image" src={userImage} alt="user-image"/>
                {user?.firstName && user?.lastName && <span className="profile-name">{user.firstName + ' ' + user.lastName}</span>}
            </div></Link>
            <Power color="white" size="2em" type="button" onClick={handleDisconnect}/>
        </div>
    )
}

export default MatchHeader