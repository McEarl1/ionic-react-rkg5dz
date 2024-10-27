import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonCard,
  IonListHeader,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonThumbnail,
  IonButtons,
  IonButton,
  IonMenu,
  IonMenuButton,
} from '@ionic/react';
import { call, cart, search, bag, person } from 'ionicons/icons';
import './Tab1.css';
import './Tab2.css';
import './Tab3.css';
import './Tab4.css';

const Tab1: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader className="header">
          <IonToolbar>
            <IonCard>
              <img alt="Logo" id="logo" src="/assets/images/logo.png" />
            </IonCard>
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
              <IonButton fill="clear" href="/Cartpage">
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
        <br />
        <IonContent id="main">
          {' '}
          <br />
          <div id="one">
            <IonLabel>
              YOUR CART <IonIcon icon={cart} />{' '}
            </IonLabel>{' '}
          </div>
          <ion-list id="cart-list">
            <div class="cart-item">
              <ion-item>
                <ion-checkbox labelPlacement="end"></ion-checkbox>
                <IonLabel class="item-label ">Vintage Vendetta - 250</IonLabel>
              </ion-item>
            </div>
            <div class="cart-item">
              <ion-item>
                <ion-checkbox labelPlacement="end"></ion-checkbox>
                <IonLabel class="item-label ">
                  Travis Scott Vintage - 550
                </IonLabel>
              </ion-item>
            </div>
            <div class="cart-item">
              <ion-item>
                <ion-checkbox labelPlacement="end"></ion-checkbox>
                <IonLabel class="item-label ">Retro Tee - 300</IonLabel>
              </ion-item>
            </div>
            <div class="cart-item">
              <ion-item>
                <ion-checkbox labelPlacement="end"></ion-checkbox>
                <IonLabel class="item-label ">Nirvana Shirt - 450</IonLabel>
              </ion-item>
            </div>
          </ion-list>
          <ion-button shape="round" id="checkout-button">
            Checkout
          </ion-button>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab1;
