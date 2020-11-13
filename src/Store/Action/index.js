import Firebase from "../../Config/firebase"
import firebase from "firebase"

const set_data = (data) => {
    return (dispatch) => {
        dispatch({ type: "SETDATA", data: data })
    }
}

const facebook_login = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider(); firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;

            let create_user = {
                name: user.displayName,
                email: user.email,
                profile: user.photoURL,
                uid: user.uid
            }

            firebase.database().ref('/').child(`user/${user.uid}`).set(create_user)
                .then(() => {
                    dispatch({ type: "SETUSER", payload: create_user })
                    alert(`Logedin as ${user.email}`)
                    // window.location = "/"
                })

        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)

        });

    }
}


export {
    set_data,
    facebook_login
}