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
    favoriteList.innerHTML=favs.map(film=>{
        return `
            <li> ${film.title}</li>
            <img src="${film.image}" alt="${film.title}">
            <button class="remove-favorite bg-red-500" id="${film.id}">supprimer</button>`;
    }).join("");
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