function updateClock(){
    const now = new Date();
    const husor = now.getHours().toString().padStart(2, 0)
    const minil = now.getMinutes().toString().padStart(2, 0)
    const cecond = now.getSeconds().toString().padStart(2, 0)

    const timestring = `${husor}:${minil}:${cecond}`
    document.getElementById('span').innerHTML= timestring
}

updateClock()
setInterval(updateClock, 1000);