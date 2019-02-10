import firebase from 'firebase';
import { Facebook } from 'expo';

import { appId } from '../secrets/facebook'

export async function loginWithFacebook(callback){
  const options = {}
  const result = await Expo.Facebook.logInWithReadPermissionsAsync(appId, options)

  if (result.type == 'success'){
    const credential = firebase.auth.FacebookAuthProvider.credential(result.token);
    promise = firebase.auth().signInAndRetrieveDataWithCredential(credential)
    _notifyResult(promise, callback)
  } else {
    callback.onError(result.type)
  }
}

export function createUserWithEmail(email, password, callback){
  promise = firebase.auth().createUserWithEmailAndPassword(email, password)
  _notifyResult(promise, callback)
}

export function loginWithEmail(email, password, callback){
  promise = firebase.auth().signInWithEmailAndPassword(email, password)
  _notifyResult(promise, callback)
}

_notifyResult = (promise, callback) => {
  var success = true;
  promise.catch(error => {
    success = false;
    console.log(`callback.onError('${error.message}')`);
    callback.onError(error.message)
  }).then(() => {
    if(success) {
      console.log('callback.onSuccess()');
      callback.onSuccess()
    }
  })
}
