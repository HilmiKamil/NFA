let container = document.getElementById("container");
let gambar = document.getElementById("gambar");
let clickCount = 0;

function tambahGambar(){
    clickCount++;

    if(clickCount === 1){
        container.classList.remove("background-color");
        gambar.style.display = "block";
    } else {
        let imageContainer = document.getElementById("image-container");

        if(!imageContainer){
            imageContainer = document.createElement("div");
            imageContainer.id = "image-container";
            document.body.appendChild(imageContainer);
        }

        let gambarBaru = document.createElement("img");
        gambarBaru.src = "img/lofi.jpg";
        gambarBaru.alt = "Gambar Tambahan";
        gambarBaru.style.width = "300px";

        imageContainer.appendChild(gambarBaru);
    }
}