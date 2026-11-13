import { chargerDonnees } from "./api.js";
import { renderCards } from "./render.js";
import { handleFilter } from "./filters.js";
import { renderFavorites } from "./favorites.js";

async function initialiser() {
    try{
        const donnees = await chargerDonnees();
        console.log(donnees);
        renderCards(donnees);
        renderFavorites();

        document.getElementById("search").addEventListener("input",handleFilter);
        document.getElementById("filter").addEventListener("change",handleFilter)
        
    }catch(error){
       console.error("Erreur détaillé :",error)
    }
}
initialiser();



