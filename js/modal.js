const modal=document.getElementById("modal");
const modalContent=document.getElementById("modal-content");

export function openModal(item) {
    modal.classList.remove("hidden");
    modal.classList.add("flex")
    modalContent.innerHTML=`
        <h2 ">${item.title}</h2>
        <p>Année :${item.releaseYear}</p>
        <p>Description :${item.description}</p>
    `;
}

const closeBtn=document.getElementById("close-modal");
if(closeBtn){
    closeBtn.addEventListener("click",()=>{
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    })
}

