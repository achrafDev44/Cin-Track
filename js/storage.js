export function getFavorites(){
    const favs=JSON.parse(localStorage.getItem("favorites")) || [];
    return favs;
}
export function saveFavorites(favs){
    localStorage.setItem("favorites",JSON.stringify(favs));
}