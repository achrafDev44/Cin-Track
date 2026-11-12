export function renderPagination(donnees,page,size,afficherPage){
    let totalPages = Math.ceil(donnees.length / size);
    const pagination= document.getElementById("pagination");
    pagination.innerHTML="";

    if(page >1){
        const prevBtn=document.createElement("button");
        prevBtn.textContent="<";
        prevBtn.addEventListener("click",()=>{
            afficherPage(page-1);
        });
        prevBtn.className="bg-gray-700 text-white px-4 py-2 rounded";
        pagination.appendChild(prevBtn);
    }
    for(let i =1; i <= totalPages;i++){
        const button = document.createElement("button");
        button.textContent =i;
        button.addEventListener("click",() =>{
            afficherPage(i);
        })
        button.className="bg-gray-700 text-white px-4 py-2 rounded";
        pagination.appendChild(button);
    }

    if(page <totalPages){
        const nextBtn=document.createElement("button");
        nextBtn.textContent=">";
        nextBtn.addEventListener("click",()=>{
            afficherPage(page+1);
        });
        nextBtn.className="bg-gray-700 text-white px-4 py-2 rounded";
        pagination.appendChild(nextBtn);

    }
}   