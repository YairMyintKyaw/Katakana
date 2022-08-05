const imageElement = document.querySelector("img.image");
const randomButton =  document.querySelector("button.randomBtn");
const clickButton = document.querySelector(".inputContainer button")
const inputContainer= document.querySelector(".inputContainer");
const input1 = document.querySelectorAll(".inputContainer>input")[0];
const input2 = document.querySelectorAll(".inputContainer>input")[1];
const imageLink = [];
let totalImage = 46;
let startValue=1;
let endValue=46;
for(let i=0;i<totalImage;i++){
    imageLink.push("AkariKatakana/Slide"+(i+49)+".JPG");
}
let index=-1;
randomButton.addEventListener("click",()=>{  
    index=Math.floor(Math.random()*totalImage)
    if(totalImage==0){
        imageElement.src="image/1.png";
    }else{
        imageElement.src=imageLink[index];
        imageLink.splice(index,1);
        totalImage--;
    }
    
})

input1.addEventListener("keyup",(e)=>{
    startValue = e.target.value;
})

input2.addEventListener("keyup",(e)=>{
    endValue = e.target.value;
})

clickButton.addEventListener("click",()=>{
    if(isNaN(endValue) || isNaN(startValue)){
        return;
    }
    totalImage=endValue-startValue+1;
    imageLink.splice(0,imageLink.length)
    for(let i=parseInt(startValue);i<=parseInt(endValue);i++){
        const link = "AkariKatakana/Slide"+(i+48)+".JPG"
        imageLink.push(link);
    }
    imageElement.src="image/Slide1.JPG";
})
