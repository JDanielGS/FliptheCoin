function cambiarImagen() {
    const result = Math.random() < 0.3 ? "Tails" : "Heads"

    const img = document.getElementById('imagen')
    
    document.getElementById('text_result').textContent = result

    if (result === "Heads") {
        img.src = "src/resources/heads.svg"
    }else{
        img.src = "src/resources/tails.svg"
    }
}