const API_URL = "https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json";

export async function chargerDonnees() {
    try{
        const response = await fetch(API_URL);
        if(response.ok === false){
            throw new Error("erreur API");
        }
        const donnees = await response.json();
        return donnees;
    } catch (error){
        console.error("erreur du chargement des données :",error);
        throw error;
    }
}

