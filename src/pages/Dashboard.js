import MatchList from '../components/MatchList';
import API from '../utils/API';
import { useEffect, useState } from 'react';
import { CheckCircleFill, XCircleFill } from 'react-bootstrap-icons';
import { Spinner, Toast } from 'react-bootstrap';
import NavTab from "../components/NavTab";
import NoImage from "../images/no-image.png";

const Dashboard = ({ user, refreshUser }) => {

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        API.get('user/random').then(result => {
            setCurrentUser(result.data);
            setLoading(false);
        });
    }, []);

    const handleVote = (liked) => {
        if (!currentUser?.id) return;
        setLoading(true);
        API.post('/vote/' + currentUser?.id + '/' + liked).then((result) => {
            if(result.data) {
                setShow(true);
            }
            API.get('user/random').then(result => {
                setCurrentUser(result.data);
                setLoading(false);
            });
        });
    };

    return (
        <div className="dashboard">
            <section>
                <MatchList user={user} refreshUser={refreshUser}/>
            </section>
            <main>
                <div className="phone-container">
                    <div className="body">
                        <Toast className="match-toast" bg="warning" onClose={() => setShow(false)} show={show} delay={10000} autohide>
                            <Toast.Body>C'est un match !</Toast.Body>
                        </Toast>
                        {loading && <Spinner animation="grow" variant="danger"/>}
                        {!loading && currentUser && <>
                            {!currentUser?.imageUrl && <img className="main-image" src={NoImage}/>}
                            {currentUser?.imageUrl && <img className="main-image" src={currentUser.imageUrl}/>}
                            <div className="description">
                                <strong>
                                    {!currentUser?.firstName ? '' : currentUser?.firstName}
                                    {!currentUser?.lastName ? '' : ' ' + currentUser?.lastName}
                                </strong>
                                {currentUser?.description && <p style={{ 'whiteSpace': 'pre' }}>{!currentUser?.description ? 'Pas de description' : currentUser?.description}</p>}
                                <strong>Information</strong>
                                <p>
                                    {currentUser?.phoneNumber && <span>Numero : {currentUser.phoneNumber}<br/></span>}
                                    {currentUser?.country && <span>Ville : {currentUser.country}<br/></span>}
                                </p>
                            </div>
                        </>}
                        {!loading && !currentUser && <div>
                            <div>Plus aucun profil</div>
                            <Spinner animation="grow" variant="danger"/>
                        </div>}
                    </div>
                    <div className="header">
                        <XCircleFill className="text-danger" onClick={() => handleVote(false)}/>
                        <CheckCircleFill className="text-success" onClick={() => handleVote(true)}/>
                    </div>
                </div>
                <NavTab/>
            </main>
        </div>
    );
};
export default Dashboard;