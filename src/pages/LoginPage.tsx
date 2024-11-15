import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonLoading, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth';
import { auth, signInWithEmailAndPassword } from '../firebase';
import { useState } from 'react';


const LoginPage: React.FC = () => {
  const { loggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({ loading: false, error: false });

  if (loggedIn) {
    return <Redirect to="/my/entries" />;
  }

  const handleLogin = async () => {
    try {
      setStatus({ loading: true, error: false });
      const credential = await signInWithEmailAndPassword(auth, email, password);
      console.log({ credential });
    } catch (err) {
      setStatus({ loading: false, error: true });
      console.log(err.message);
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
        {status.error && <IonText className="ion-margin-top" color="danger">Invalid credentials</IonText>}
        <IonButton className="ion-margin-top" expand="block" onClick={handleLogin}>Login</IonButton>
        {status.loading && <IonLoading isOpen={true} />}
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
