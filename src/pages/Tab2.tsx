import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonMenu,
  IonList,
  IonListHeader,
  IonTitle,
  IonLabel,
  IonItem,
  IonIcon,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonCardContent,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';
import './Tab2.css';
import { call, cart, search, bag, person } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader className="header">
          <IonToolbar>
            <br />
            <img alt="Logo" id="logo" src="/assets/images/logo.png" />
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonListHeader lines="full" className="list-header">
              <IonLabel>THE PROJECT</IonLabel>
            </IonListHeader>
            <br />
            <br />
            <IonItem>
              <IonIcon icon={cart} />
              <IonButton fill="clear" href="/Tab1">
                Cart
              </IonButton>
            </IonItem>
            <br />
            <IonItem>
              <IonIcon icon={bag} />
              <IonButton fill="clear" href="/Tab2">
                Products
              </IonButton>
            </IonItem>
            <br />
            <IonItem>
              <IonIcon icon={search} />
              <IonButton fill="clear" href="/Tab3">
                About Us
              </IonButton>
            </IonItem>
            <br />
            <IonItem>
              <IonIcon icon={person} />
              <IonButton fill="clear" href="/Tab4">
                Developers
              </IonButton>
            </IonItem>
            <br />
            <IonItem>
              <IonIcon icon={call} />
              <IonButton fill="clear" href="/Tab5">
                Contact Us
              </IonButton>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader className="header">
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>THE PROJECT</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-main">
          <IonCard>
            <IonCardHeader>
              <div id="card">
                <img alt="Logo" id="logo2" src="/assets/images/logo.png" />
              </div>
              <br />
              <IonCardTitle>
                <b>THE PROJECT Collections</b>
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <div className="collections">
                <IonCard id="cardcolor" className="products">
                  <IonCardHeader>
                    <img alt="Logo" id="logo" src="/assets/images/s1.png" />
                    <IonCardTitle>HangOut Tee</IonCardTitle>
                    <IonCardSubtitle>Available in S, M, L</IonCardSubtitle>
                    <IonCardSubtitle color="tertiary">650</IonCardSubtitle>
                    <IonButton fill="clear" href="/Tab3">
                      Add to Cart
                    </IonButton>
                  </IonCardHeader>
                </IonCard>

                <IonCard id="cardcolor" className="products">
                  <IonCardHeader>
                    <img alt="Logo" id="logo" src="/assets/images/s2.jpg" />
                    <IonCardTitle>Kanye Tee</IonCardTitle>
                    <IonCardSubtitle>Available in S, M, L</IonCardSubtitle>
                    <IonCardSubtitle color="tertiary">2050</IonCardSubtitle>
                    <IonButton fill="clear" href="/Tab3">
                      Add to Cart
                    </IonButton>
                  </IonCardHeader>
                </IonCard>

                <IonCard id="cardcolor" className="products">
                  <IonCardHeader>
                    <img alt="Logo" id="logo" src="/assets/images/logo.png" />
                    <IonCardTitle>Travis Scotty</IonCardTitle>
                    <IonCardSubtitle>Available in S, M, L</IonCardSubtitle>
                    <IonCardSubtitle color="tertiary">1250</IonCardSubtitle>
                    <IonButton fill="clear" href="/Tab3">
                      Add to Cart
                    </IonButton>
                  </IonCardHeader>
                </IonCard>

                <IonCard id="cardcolor" className="products">
                  <IonCardHeader>
                    <img alt="Logo" id="logo" src="/assets/images/logo.png" />
                    <IonCardTitle>Skully</IonCardTitle>
                    <IonCardSubtitle>Available in S and L</IonCardSubtitle>
                    <IonCardSubtitle color="tertiary">350</IonCardSubtitle>
                    <IonButton fill="clear" href="/Tab3">
                      Add to Cart
                    </IonButton>
                  </IonCardHeader>
                </IonCard>

                <IonCard id="cardcolor" className="products">
                  <IonCardHeader>
                    <img alt="Logo" id="logo" src="/assets/images/logo.png" />
                    <IonCardTitle>Suffocation Tee</IonCardTitle>
                    <IonCardSubtitle>Available in S, M, L</IonCardSubtitle>
                    <IonCardSubtitle color="tertiary">250</IonCardSubtitle>
                    <IonButton fill="clear" href="/Tab3">
                      Add to Cart
                    </IonButton>
                  </IonCardHeader>
                </IonCard>

                <IonCard id="cardcolor" className="products">
                  <IonCardHeader>
                    <img alt="Logo" id="logo" src="/assets/images/logo.png" />
                    <IonCardTitle>Kanye Format</IonCardTitle>
                    <IonCardSubtitle>Available in S, M, L</IonCardSubtitle>
                    <IonCardSubtitle color="tertiary">1550</IonCardSubtitle>
                    <IonButton fill="clear" href="/Tab3">
                      Add to Cart
                    </IonButton>
                  </IonCardHeader>
                </IonCard>

                <IonCard id="cardcolor" className="products">
                  <IonCardHeader>
                    <img alt="Logo" id="logo" src="/assets/images/logo.png" />
                    <IonCardTitle>Blonde FO</IonCardTitle>
                    <IonCardSubtitle>Available in S, M, L</IonCardSubtitle>
                    <IonCardSubtitle color="tertiary">950</IonCardSubtitle>
                    <IonButton fill="clear" href="/Tab3">
                      Add to Cart
                    </IonButton>
                  </IonCardHeader>
                </IonCard>

                <IonCard id="cardcolor" className="products">
                  <IonCardHeader>
                    <img alt="Logo" id="logo" src="/assets/images/logo.png" />
                    <IonCardTitle>Street Japan</IonCardTitle>
                    <IonCardSubtitle>Available in only S</IonCardSubtitle>
                    <IonCardSubtitle color="tertiary">350</IonCardSubtitle>
                    <IonButton fill="clear" href="/Tab3">
                      Add to Cart
                    </IonButton>
                  </IonCardHeader>
                </IonCard>

                <IonCard id="cardcolor" className="products">
                  <IonCardHeader>
                    <img alt="Logo" id="logo" src="/assets/images/logo.png" />
                    <IonCardTitle>Butterflies Tee</IonCardTitle>
                    <IonCardSubtitle>Available in S, M, L</IonCardSubtitle>
                    <IonCardSubtitle color="tertiary">250</IonCardSubtitle>
                    <IonButton fill="clear" href="/Tab3">
                      Add to Cart
                    </IonButton>
                  </IonCardHeader>
                </IonCard>

                <IonCard id="cardcolor" className="products">
                  <IonCardHeader>
                    <img alt="Logo" id="logo" src="/assets/images/logo.png" />
                    <IonCardTitle>Junji Ito Tee</IonCardTitle>
                    <IonCardSubtitle>Available in S, M, L</IonCardSubtitle>
                    <IonCardSubtitle color="tertiary">250</IonCardSubtitle>
                    <IonButton fill="clear" href="/Tab3">
                      Add to Cart
                    </IonButton>
                  </IonCardHeader>
                </IonCard>
              </div>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab2;
