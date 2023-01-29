const clicked=()=>{
    let redComponent=Math.floor(Math.random()*258);
    let greenComponent=Math.floor(Math.random()*258);
    let blueComponent=Math.floor(Math.random()*258);
    let col=`rgb(${redComponent},${greenComponent},${blueComponent})`
    document.querySelector("p").innerHTML=`Random Color: ${col}`
    document.querySelector("#randomColor").style.backgroundColor=col;
}

document.querySelector("button").addEventListener("click",clicked)