import {Redirect, Route} from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import './App.scss';
import './index.scss';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {useEffect, useState} from "react";
import TokenManager from "./utils/TokenManager";
import API from "./utils/API";
import Dashboard from "./pages/Dashboard";
import MatchList from "./components/MatchList";
import Profile from "./pages/Profile";

setupIonicReact();
/*<IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>*/
const App: React.FC = () => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    const refreshUser = () => {
        if(TokenManager.isConnected()) {
            API.get('user/owner').then(result => {
                setUser(result.data);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }

    useEffect(() => {
        refreshUser();
    }, [])

    return (<IonApp>
      {loading && <div>LOADING...</div>}
      {!loading && <IonReactRouter>
          <IonRouterOutlet>
			  <Route path="/">{TokenManager.isConnected() ? <Redirect to="/dashboard" /> : <IonPage><Home/></IonPage>}</Route>
			  <Route path="/dashboard">{
                  !TokenManager.isConnected()
                      ? <Redirect to="/" />
                      : !user?.firstName
                          ? <Redirect to="/profile" />
                          : <IonPage><Dashboard user={user} refreshUser={setUser}/></IonPage>
              }</Route>
			  <Route path="/matchlist">{!TokenManager.isConnected() ? <Redirect to="/" /> : <IonPage><MatchList user={user} refreshUser={refreshUser}/></IonPage>}</Route>
			  <Route path="/profile">{!TokenManager.isConnected() ? <Redirect to="/" /> :
                  <IonPage><Profile user={user} refreshUser={refreshUser}/></IonPage>}</Route>
          </IonRouterOutlet>
      </IonReactRouter>}
  </IonApp>)
};

export default App;
