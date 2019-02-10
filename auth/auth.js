import firebase from 'firebase';
import { Facebook } from 'expo';

import { appId } from '../secrets/facebook'

export async function loginWithFacebook(callback){
  const options = {}
  const result = await Expo.Facebook.logInWithReadPermissionsAsync(appId, options)

  if (result.type == 'success'){
    const credential = firebase.auth.FacebookAuthProvider.credential(result.token);
    firebase.auth().signInAndRetrieveDataWithCredential(credential).catch(error => {
      callback.onError(error.message)
    });
    callback.onSuccess()
  } else {
    callback.onError(result.type)
  }
}
