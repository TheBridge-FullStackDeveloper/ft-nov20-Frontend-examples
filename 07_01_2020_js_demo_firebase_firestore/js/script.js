// Your web app's Firebase configuration
var firebaseConfig = {
        apiKey: "####",
        authDomain: "####",
        projectId: "####",
        storageBucket: "####",
        messagingSenderId: "####",
        appId: "####"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//"Conecta" a la BBDD. Devuelve el objeto BBDD
var db = firebase.firestore();

// Operaciones sobre la BBDD

function escribir(){
    db
    .collection("users")
    .add({
        first: "Pepe",
        last: "Perez",
        born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}


function leer(){
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
}


db.collection("users").doc("XPpnERuRxNgwwRzvZQrK")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
    });