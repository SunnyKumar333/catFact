
const btn=document.querySelector("button");
let url ="https://catfact.ninja/fact";

btn.addEventListener("click",async ()=>{
    let p=document.querySelector("#fact");
    p.style.height="200px";
    p.style.fontSize="20px";
    p.style.backgroundColor="blue";
    p.style.color="White";
    p.style.border="15px solid yellow";
    let data=await getFact();
    console.log(data);
    p.innerText=data.fact;
   

})
async function getFact(){
    try{
    let res=await fetch(url);
    let data=await res.json();
    console.log(data);
    return data;
    }
    catch(err){
        return "Fact Not Found";
    }
}
