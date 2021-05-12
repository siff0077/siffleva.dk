"use strict"

window.addEventListener("load", get);

function get(){
fetch("https://sifflevadk-774a.restdb.io/rest/photography", {
    method: "get",
    headers: {
        "content-Type": "application/json; charset=utf-8",
        "x-apikey": "6093cca7e3b6e02545eda49a",
        "cache-control": "no-cache",
    }
})

.then(e => e.json())
.then((data) => data.forEach(showData));
}

function showData(image) {
    console.log(image);
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("img").src = image.image;

    document.querySelector("#data_template").appendChild(copy);
}
