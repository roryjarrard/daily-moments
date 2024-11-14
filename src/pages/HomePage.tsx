import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { entries } from '../data';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
         <IonList>
          {entries.map((entry) => (
            <IonItem button={true} key={entry.id} routerLink={`/my/entries/${entry.id}`}>
              <IonLabel>
                <h2>{entry.title}</h2>
                <p>{entry.description}</p>
              </IonLabel>
            </IonItem>
          ))}
         </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
