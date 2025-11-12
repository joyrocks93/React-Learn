// import yoyo from "./util.js";
// console.log("Yoyo Key is: ", yoyo);

// import { apikey } from "./util.js";
// console.log("API Key is: ",apikey);

// import { apikey as hopsy} from "./util.js";
// console.log("API Key is: ", hopsy);

// import * as util from "./util.js";
// console.log("Yoyo Key is: ", util.default);
// console.log("API Key is: ", util.apikey);   

// function greet(name,message){
//     // console.log(name + ", " + message);
//     return "hi i am "+name+" "+message;
// }
// let k=greet("yoyo","hello");
// console.log(k);

// export default (name,message)=>{
//     return "hi i am "+name+" "+message;
// }
// const user ={
//     name: "Max",
//     age:34,
//      greet() {
//         console.log("Hello");
//         console.log(this.age)
//     }
// };
// console.log(user.name);
// user.greet();

// class User{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log("Hi!");
//     }

// }
// const user1=new User("Manual",24);
// console.log(user1)
// user1.greet();

// const hobb=["pop","LOP","HOP"];
// console.log(hobb[1]);
// hobb.push("working");
// console.log(hobb);
// const index=hobb.findIndex((item)=>item==="pop");
// console.log(index);
// const ff=hobb.map((item)=>({key:item}));
// console.log(ff);

// const[fn,ln]=["max","kal"];
// console.log(fn);
// console.log(ln);

// const {name:username,age}={
//     name:"max",
//     age:23
// }
// console.log(username);  
// console.log(age);

// const hobb=["pop","LOP","HOP"];
// const user={
//     name:"Max",
//     age:24
// };
// const newhobbies=["Reading"];

// const merge=[...hobb,...newhobbies];
// console.log(merge);

// const exUser={
//     isAdmin:true,
//     ...user
// }
// console.log(exUser);

// const password =prompt("AYour password")

// if(password==="Hello"){
//     console.log("Hello works");
// }
// else if(password==="hello"){
//     console.log("hello works");
// }
// else{
//     console.log("Access not granted");
// }

// const hobb=["sport","cooking"];

// for(const hobbe of hobb){
//     console.log(hobbe);
// }
// function handle1(){
//     console.log("time out");
// }

// const handle2 =()=>{
//     console.log("timed out....again!");
// };

// setTimeout(handle1,2000)
// setTimeout(handle2,3000)
// setTimeout(()=>{
//     console.log("More time out");   
// },4000)

// function greet(gro){
//     gro();
// }

// greet(()=>{
//     console.log("hi");
// })

// function inti(){
//     function greet(){
//         console.log("hello");   
//     }
//     greet();
// }
// inti()