import { chargerDonnees } from "./api.js";
async function initialiser() {
    try{
        const donnees = await chargerDonnees();
        console.log(donnees);
    }catch(error){
        console.log("Impossible de charger les données.")
    }
}
initialiser();