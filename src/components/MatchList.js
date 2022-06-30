import MatchHeader from "./MatchHeader";
import img1 from '../images/Martin 1.png';
import API from '../utils/API';
import { useEffect, useState } from 'react';

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
            <div className="chat-container-body">
                {!loading && allMatch.map(match =>
                    <div key={match} className="profile">
                        <img src={img1}/>
                        <p>{match.firstName}</p>
                    </div>
                )}
                {!loading && allMatch.length === 0 && <div>Vous n'avez pas de match</div>}
            </div>
        </div>
    )
}

export default MatchList