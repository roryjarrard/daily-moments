import { IonContent, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import { Link } from 'react-router-dom';

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Go <IonRouterLink routerLink="/home">Home</IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
