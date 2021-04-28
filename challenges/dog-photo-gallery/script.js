
let url=" https://dog.ceo/api/breeds/image/random"
fetch(url).then(response=>{
    return response.json();
}).then(img=>{
    let firstButton=document.querySelector("#first");
    firstButton.addEventListener("click",photo)
    let secondButton=document.querySelector("#second");
    secondButton.addEventListener("click",photo);
    function photo(){
        let list=document.querySelector("ul");
    let listItem=document.createElement("li");
    let image=document.createElement("img");
    listItem.appendChild(image);
    image.src=img["message"]
    list.appendChild(listItem);
    }
        

}).catch(error=>{
    console.error(error);
})
