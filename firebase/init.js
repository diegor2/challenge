import firebase from 'firebase';

import { config } from '../secrets/firebase'

export default function initializeFirebase(){
  firebase.initializeApp(config);
}
