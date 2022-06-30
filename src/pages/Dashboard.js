import MatchList from '../components/MatchList';
import API from '../utils/API';
import { useEffect, useState } from 'react';
import { CheckCircleFill, XCircleFill} from 'react-bootstrap-icons';

const Dashboard = ({user, refreshUser}) => {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        API.get("user/random").then(result => {
            setCurrentUser(result.data);
        });
    }, [])

    const handleVote = (liked) => {
        if(!currentUser?.id) return;
        API.post('/vote/' + currentUser?.id + '/' + liked).then(() => {
            API.get("user/random").then(result => {
                setCurrentUser(result.data);
            });
        })
    }

    return (
       <div className="dashboard">
           <section>
               <MatchList user={user} refreshUser={refreshUser}/>
           </section>
           <main>
               <div className="phone-container">
                   <div className="body">
                       <img className="main-image" src="https://f.hellowork.com/obs-static-images/seo/ObsJob/chef-dentreprise.jpg"/>
                       <div className="description">
                           <strong>Description</strong>
                           {currentUser?.description && <p>{!currentUser?.description ? 'Pas de description' : currentUser?.description}</p>}
                           <strong>Information</strong>
                           <p>{!currentUser?.phoneNumber ? '' : currentUser?.phoneNumber}</p>
                       </div>
                   </div>
                   <div className="header">
                       <XCircleFill className="text-danger" onClick={() => handleVote(false)}/>
                       <CheckCircleFill className="text-success" onClick={() => handleVote(true)}/>
                   </div>
               </div>
           </main>
       </div>
    )
}
export default Dashboard