import {renderPagination } from "./pagination.js";
export function renderCards(donnees,page,size){
    if(!page){
        page = 1;
    }
    if(!size){
        size = 8;
    }
    let skipElements =(page-1) * size;
    let takeElements = skipElements + size;
    let printSlice = donnees.slice(skipElements,takeElements);
    const grid = document.getElementById("grid");
    console.log(grid)

    grid.innerHTML = printSlice.map(film =>{ return `
        <div>
            <img src="${film.image}" alt="${film.title}">
        </div>    
    `}).join("");
    renderPagination(donnees,page,size,(nouvellePage) =>{
        renderCards(donnees,nouvellePage,size);
    })
}