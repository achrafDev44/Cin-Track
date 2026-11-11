export function renderCards(donnees){
    const grid = document.getElementById("grid");
    console.log(grid)

    grid.innerHTML = donnees.map(film =>{ return `
        <div>
            <img src="${film.image}" alt="${film.title}">
        </div>    
    `}).join("");
}