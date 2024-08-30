// Json has two methods stringify, parse 
// Json module is mostly used when working with databased or api requests 
const user = '{"name":"Divyanshu","age":"21","likes":"cricket"}'

const userJson = JSON.parse(user)
console.log(userJson)



const user1 = {
  name : "Divyanshu",
  age : "21",
  likes : "cricket"
  
}
const userString = JSON.stringify(user1)
console.log(userString)