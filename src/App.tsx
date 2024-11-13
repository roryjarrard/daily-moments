import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" exact={true}>
            <HomePage />
          </Route>
          <Route path="/settings" exact={true}>
            <SettingsPage />
          </Route>
          <Redirect exact path="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
