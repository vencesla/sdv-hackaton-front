import MatchHeader from "./MatchHeader";
import img1 from '../images/Martin 1.png';
import img2 from '../images/Martin 2.jpg';

const MatchList = ({user, refreshUser}) =>{
    return (
        <div className="chat-container">
            <MatchHeader user={user} refreshUser={refreshUser}/>
            <div className="chat-container-body">
                <div className="profile">
                    <img src={img1}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
                <div className="profile">
                    <img src={img2}/>
                </div>
            </div>
        </div>
    )
}

export default MatchList