let list=document.querySelector("#list");
let input=document.querySelector("#enter");
let button=document.querySelector("button");
button.addEventListener("click",async()=>{
let text=input.value;
api(text);
});

async function api(text){
list.innerText="";
let data=await axios.get("http://universities.hipolabs.com/search?name=india")
for( a of data.data)
{
if(text==a["state-province"])
{
let li=document.createElement("li");
li.innerText=a.name;
list.appendChild(li);
console.log(a.name);
}
}
}