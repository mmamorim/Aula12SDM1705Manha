import database from "./firebase-db.js"
import { ref, get, set } from "firebase/database"

//console.log(database);



set(ref(database,"/pessoas/bia"),{
    id: "bia",
    nome: "BIA SILVA",
    idade: 30
}).then(() => {
    console.log("Adicionado")
})

get(ref(database,"/pessoas/ana/nome")).then((snap) => {
    console.log(snap.val())
})