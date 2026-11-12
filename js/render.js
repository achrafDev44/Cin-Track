import {renderPagination } from "./pagination.js";
import { openModal } from "./modal.js";
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

    grid.querySelectorAll("div").forEach((card,index)=>{
        card.addEventListener("click",()=>{
            const id=printSlice[index].id;
            const item=donnees.find(film=>film.id===id);
            openModal(item);
        });
    })
    renderPagination(donnees,page,size,(nouvellePage) =>{
        renderCards(donnees,nouvellePage,size);
    })
}