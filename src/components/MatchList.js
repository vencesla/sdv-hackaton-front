import MatchHeader from "./MatchHeader";
import img1 from '../images/Martin 1.png';
import API from '../utils/API';
import { useEffect, useState } from 'react';
import NavTab from "./NavTab";

const MatchList = ({user, refreshUser}) => {

    const [loading, setLoading] = useState(true);
    const [allMatch, setAllMatch] = useState([]);

    useEffect(() => {
        API.get("/match").then(result => {
            setAllMatch(result.data);
            setLoading(false);
        });
    }, [])

    return (
        <div className="chat-container">
            <MatchHeader user={user} refreshUser={refreshUser}/>
            {!loading && allMatch.length === 0 && <div className="pt-3">Vous n'avez pas de match</div>}
            <div className="chat-container-body">
                {!loading && allMatch.map(match =>
                    <div key={match} className="profile">
                        <img src={img1}/>
                        <p>{match.firstName}</p>
                    </div>
                )}
            </div>
            <NavTab/>
        </div>
    )
}

export default MatchList