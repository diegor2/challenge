import firebase from 'firebase';

export async function addTodo(task) {
  var user = firebase.auth().currentUser.uid;
  firebase.database().ref(`users/${user}/tasks`).push({ task: task })
}
