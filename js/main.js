import { chargerDonnees } from "./api.js";
import { renderCards } from "./render.js";
async function initialiser() {
    try{
        const donnees = await chargerDonnees();
        console.log(donnees);
        renderCards(donnees);
        
    }catch(error){
        console.log("Impossible de charger les données.")
    }
}
initialiser();
