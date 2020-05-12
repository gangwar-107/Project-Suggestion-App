// Through component we use dispatch inside which we 
// pass call an action creator... if we use do not use redux thunk
// then we return an object
// else we use redux thunk then we return a function
// which halts dispatch and make async request
// then later resume the dispatch 

export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
       // async call to database 
       const firestore = getFirestore();
       const profile = getState().firebase.profile
       const authorId = getState().firebase.auth.uid
       firestore.collection('projects').add({
          ...project,
          authorFirstName: profile.firstName,
          authorLastName: profile.lastName,
          authorId: authorId,
          createdAt: new Date()
       }).then(() => {
          dispatch({type: 'CREATE_PROJECT', project:project})
       }).catch((err) => {
           dispatch({type: 'CREATE_PROJECT-ERROR',err})
       })
      
    }
}  