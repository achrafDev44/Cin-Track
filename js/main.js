import { chargerDonnees } from "./api.js";
import { renderCards } from "./render.js";
import { handleFilter } from "./filters.js";

async function initialiser() {
    try{
        const donnees = await chargerDonnees();
        console.log(donnees);
        renderCards(donnees);

        document.getElementById("search").addEventListener("input",handleFilter);
        document.getElementById("filter").addEventListener("change",handleFilter)
        
    }catch(error){
        console.log("Impossible de charger les données.")
    }
}
initialiser();



