import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth';
import { auth, signInWithEmailAndPassword } from '../firebase';
import { useState } from 'react';

interface Props {
  onLogin: () => void;
}

const LoginPage: React.FC<Props> = ({ onLogin }) => {
  const { loggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (loggedIn) {
    return <Redirect to="/my/entries" />;
  }

  const handleLogin = async () => {
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);
      console.log({ credential });
      onLogin();
    } catch (err) {
      console.error('Login error: ', err);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type="email" value={email}
              onIonChange={(event) => setEmail(event.detail.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" value={password}
              onIonChange={(event) => setPassword(event.detail.value)} />
          </IonItem>
        </IonList>
        <IonButton className="ion-margin-top" expand="block" onClick={handleLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
