//for loop

// for(i=1;i<=5;i++){
//     console.log(i)
// }

// for(i=8;i>=1;i--){
//     document.write(i+ "<br>")
// }

// a='abhi';
// for(i=1;i<=5;i++){
//     document.write(a+"<br>")
// }


//while loop

// var i=10;
// while(i<=20){
//     document.write(i+ "<br/>");
//     i++;
// }


//do while loop

// var i=5;
// do{
//     document.write(i+ "<br>");
//     i++;
// }while(i<=10);


//for in loop

// var tutorial = [81, 31, 15, 41, 52, 75, 69, 67,45];  
// let i = 1;  
// for(var tut in tutorial) {    
//    document.write("values[" +i+ " ]: " +tutorial[tut] +"<br>");  
//     i++;  
// }  


const user={
    name:'Abhiraj',
    age:19,
    add:'Sre',
    func(){
        console.log("My name is"+" "+this.name+" "+"and my age is"+" "+this.age)
    }
}
// for(const key in user){
//     document.write(`${key}: ${user[key]}`+"<br>")
// }
// user.num=7545464466;
// console.log(user)
user.func()


//for in loop
/*let person={
    boy:{
        boy1:{
            name:'abhiraj',
            age:19,
        },
        boy2:{
            name:'aryan',
            age:18,
        },
    },
    girl:{
        girl1:{
            name:'Kannu',
            age:19,
        },
        girl2:{
            name:'Vani',
            age:19,
        },
    },
}
for(const key in person.boy.boy1){
    document.write(`${key}: ${person.boy.boy1[key]}`+"<br>")
}
for(const key in person.girl.girl1){
    document.write(`${key}: ${person.girl.girl1[key]}`+"<br>")
}*/


