import {renderPagination } from "./pagination.js";
import { openModal } from "./modal.js";
import { addFavorite } from "./favorites.js";
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
        <div class= "relative">
            <img src="${film.image}" alt="${film.title}">
            <button class="favorite-btn absolute top-2 right-2  rounded-full">❤️</button>
        </div>    
    `}).join("");

    grid.querySelectorAll(".favorite-btn").forEach((button,index)=>{
        button.addEventListener("click",(event)=>{
            event.stopPropagation();
            addFavorite(printSlice[index]);
        })
    });


    grid.querySelectorAll(".relative").forEach((card,index)=>{
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