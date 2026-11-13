import { getFavorites,saveFavorites } from "./storage.js";
export function addFavorite(item){
    const favs=getFavorites();
    const existe = favs.find(film=>film.id=== item.id);

    if(!existe){
        favs.push(item);
        saveFavorites(favs);
        renderFavorites();
    }
}
export function renderFavorites(){
    const favs=getFavorites();
    const favoriteList=document.getElementById("favorites-list");
    const mobileFavoriteList=document.getElementById("mobile-favorites-list")
    const html=favs.map(film=>{
        return `
            <li>
                <img src="${film.image}" alt="${film.title}" class="w-16 lg:w-28 h-auto object-contain">
                <p>${film.title}</p>
                <button class="remove-favorite bg-red-500" id="${film.id}">supprimer</button>
            </li>`;
    }).join("");
    favoriteList.innerHTML=html
    mobileFavoriteList.innerHTML=html
    const buttons=document.querySelectorAll(".remove-favorite");
    buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            removeFavorite(Number(button.id));
            });
        });
}
export function removeFavorite(id){
    const favs=getFavorites()
    const newFavs = favs.filter(film=>Number(film.id) !== id);
    saveFavorites(newFavs);
    renderFavorites();
}