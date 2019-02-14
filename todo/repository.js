import firebase from 'firebase';

export function addTodo(task) {
  var user = firebase.auth().currentUser.uid;
  firebase.database().ref(`users/${user}/tasks`).push({ task: task })
}

export function watchTodoList(onListChanged) {
  var user = firebase.auth().currentUser.uid;
  firebase.database().ref(`users/${user}/tasks`).on('value', snapshot => {
    const todoList = _extractTodoListFromSnapshot(snapshot)
    onListChanged(todoList);
  });
}

export function removeTodo(id) {
  var user = firebase.auth().currentUser.uid;
  firebase.database().ref(`users/${user}/tasks/${id}`).remove()
}

_extractTodoListFromSnapshot = snapshot => {
  const tasks = snapshot.val()
  return tasks ? Object.keys(tasks).map(
      key => ({id: key, task: tasks[key].task})
    ) : []
}
