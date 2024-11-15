import { useEffect, useState } from 'react';
import { IonApp, IonLoading } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from './auth';
import { auth } from './firebase';
import AppTabs from './AppTabs';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';



const App: React.FC = () => {
  const [authState, setAuthState] = useState({loading: true, loggedIn: false});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setAuthState({loading: false, loggedIn: Boolean(user)});
    });
  }, []);

  if (authState.loading) {
    return <IonLoading isOpen />;
  };

  return (
    <IonApp>
      <AuthContext.Provider value={{ loggedIn: authState.loggedIn }}>
        <IonReactRouter>
          <Switch>
            <Route path="/login" exact={true}>
              <LoginPage />
            </Route>
            <Route path="/my">
              <AppTabs />
            </Route>
            <Redirect exact path="/" to="/my/entries" />
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
