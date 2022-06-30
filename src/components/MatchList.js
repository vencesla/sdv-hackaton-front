import MatchHeader from "./MatchHeader";
import img1 from '../images/Martin 1.png';
import API from '../utils/API';
import { useEffect, useState } from 'react';
import NavTab from "./NavTab";

const MatchList = ({user, refreshUser}) => {

    const [allMatch, setAllMatch] = useState([])

    useEffect(() => {
        API.get("/match").then(result => {
            setAllMatch(result.data);
        });
    }, [])

    return (
        <div className="chat-container-container">
            <div className="chat-container">
                <MatchHeader user={user} refreshUser={refreshUser}/>
                <div className="chat-container-body">
                    {allMatch.map(match =>
                        <div key={match} className="profile">
                            <img src={img1}/>
                            <p>{match.firstName}</p>
                        </div>
                    )}
                </div>
            </div>
            <NavTab/>
        </div>
    )
}

export default MatchList