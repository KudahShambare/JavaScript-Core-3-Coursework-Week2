
const url=" https://xkcd.now.sh/?comic=latest";
fetch(url).then(response=>{
    return response.json();
}).then(
    img=>{
        let image=document.createElement("img");
        image.src=img["img"]
        let body=document.querySelector("body");
        body.appendChild(image);
        
    }
).catch(error=>{
    console.error(error);
})

