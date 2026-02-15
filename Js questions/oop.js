// class Person{
//     constructor(){
//         console.log("enter the parent constructor");
//         this.species="homo sapiens";
//     }

//     eat(){
//         console.log("eat");
//     }
// }

// class Engineer extends Person{
//     constructor(branch){
//         console.log("enter the child constructor");
//         super(); //to invoke parent class constructor
//         this.branch=branch;
//         console.log("exit child constructor");
//     }
//     work(){
//         console.log("solve problems,build something");
//     }
// }

// let engObj=new Engineer("chemical engg");



// let DATA="secret information";

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("data=",DATA);
//     }
// }

// let student1=new User("shradha","abc@email.com");
// let student2=new User("aman","aman@email.com");

// let teacher1= new User("dean","dean@email.com");

// function hello(){
//     console.log("hello");
// }

// setTimeout(hello,5000);  //timeout 2s=2000ms

// console.log("one");
// console.log("two");

// setTimeout(() =>{
//     console.log("hello");
// },4000);      //timeout;

// console.log("three");
// console.log("four");

//callback

// function getData(dataId,getNextData){
//     //2s
//     setTimeout{() =>{
//         console.log("data",dataId);
//         if (getNextData){
//             getNextData();
//         }
//     },2000;
// }


// callback hell
// getData(1,{} =>{
//    getData(2,()=>{
//     getData(3);
// });
// });    // 2s ke baad har data print hoga  1 2s 2 2s 3

// let promise =new Promise((resolve,reject) =>{
//     console.log("I am a promise");
   
//     reject("i am a error");
// })

// function asyncFunc1() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         console.log("data1");
//     resolve("success");
// },4000);
//     });
// };

// function asyncFunc2(){
//     return new Promise((resilve,reject) => {
//         setTimeout(() =>{
//             console.log("data2");
//             resolve("success");
//         },4000);

//     });
// }

// console.log("fetching data1...");
// let p1=asyncFunc1();
// p1.then((res) =>{
//     console.log("fetching data2...");
//     let p2=asyncFunc2();
//     p2.then((res) =>{});

// });

// function api() {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         },2000);
        
//     });
// }

// async function getWeatherData(){
//     await api();  //1st
//     await api();   //2nd
// }
// const URL = "https://cat-fact.herokuapp.com/facts";

// const getFacts =async()=>{
//     console.log("getting data....");
//     let response =await fetch(URL);
//     console.log(response.status);

// };

//  const URL = "https://cat-fact.herokuapp.com/facts";
// const factPara=document.querySelector("#fact");
// const btn=document.querySelector("#btn");

//  const getFacts= async() => {
//     console.log("getting data....");
//     let response= await fetch(URL);
//     console.log(response);
//     let data=await response.json();
//     factPara.innerText=data[0].text;
//  };
//  btn.addEventListener("click",getFacts);

function getFacts(){
    fetch(URL)
    .then((response)) =>{
        return response.json();
    })
    .then((data)) =>{
        console.log(data);
        factPara.innerText=data[2].text;
    });
}

 btn.addEventListener("click",getFacts);