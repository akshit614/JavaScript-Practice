const data = [
  {
  name1 : "AKshit",
  gender: "male"  
  },
  {
    name1 : "hero",
    gender: "male" 
  },
  {
    name1 : "meera",
    gender: "female" 
  }
]


for(let i = 0; i < data.length; i++ ){
  if(data[i]["gender"] == "male"){
    console.log(data[i]["name1"])
  }
}