const links = ["https://i.imgur.com/DaajwK9.jpg", "https://i.imgur.com/VrcOlpL.jpg", "https://i.imgur.com/pRTdxLj.jpg", "https://i.imgur.com/pWJGhn9.jpg", "https://i.imgur.com/2sLEQfJ.jpg"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var random = getRandomInt(links.length)

console.log(random)

var randomImg = document.createElement("img")
randomImg.src = links[random]

document.body.appendChild(randomImg)