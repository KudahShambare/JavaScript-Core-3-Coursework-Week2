
let url=" https://dog.ceo/api/breeds/image/random"
let firstButton=document.querySelector("#first");

let secondButton=document.querySelector("#second");

function displayDog(){
    fetch(url).then(response=>{
        return response.json();
    }).then(img=>{
    
        
            let list=document.querySelector("ul");
        let listItem=document.createElement("li");
        listItem.id="image-style";
        let image=document.createElement("img");
        listItem.appendChild(image);
        image.src=img["message"]
        list.appendChild(listItem);
        alert("Another dog image added, scroll down to view it.");            
    
    }).catch(error=>{
        console.error(error);
    })

}
firstButton.addEventListener("click",displayDog)

secondButton.addEventListener("click",function(){
    location.reload();
});
