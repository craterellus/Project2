function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

const clickableElementIds = ["piracy","homeless","how-to-dem", "graffiti", "dad-story", "mirror","evil", "cops", "maze","demonstration","dreamgirl","self-portrait", "bordome"]
// Get the modal
const modal = document.getElementById("myModal");


clickableElementIds.forEach(id => {
const img = document.getElementById(id);
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
function handleClick(){
 modalImg.src = this.dataset.readMore
 modalImg.style.maxWidth = this.dataset.maxWidth || "100%"
  modal.style.display = "block";
  captionText.innerHTML = this.alt;
}
img.addEventListener("click",handleClick);
})





// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 