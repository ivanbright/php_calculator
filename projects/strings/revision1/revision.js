/*class User {
static PI = Math.PI;
static circumference(radius){
return this.PI *2 *radius;
}
static getTheArea(radius){
    return this.PI*Math.pow(radius,2);
}
}
console.log(User.circumference(1));
console.log(User.getTheArea(2));


class User{
        static count=0;
    static counting =this.count+1;

    static newUser (userName){
 return userName + this.counting;
 } 

 constructor(username){
    this.username=username;
    User.userCount++;
 }
}
const use1 =new User('SPONOB');
const use2 =new User('PATRICK');
const use3 =new User('SANDY');

console.log(use2.username);
console.log|(use2.username);
console.log(User.counting);



class Animal{
    alive=true
    eat(){
        console.log(`This ${this.name} is eating `);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }

}
class rabbit extends Animal{
name ='rabbit';
}
class fish extends Animal{
    name='fish';
}
class hawk extends Animal{
    name ='hawk';
}
const Rabbit =new rabbit();
const Fish = new fish();
const Hawk = new hawk();
console.log(eat())
*/

class user{
    counter =0;
    constructor(username){
        this.username =username;
        this.counter++;
    }
}

const user1 =new user('MUGISHA')
const user2 =new user('ivan');
console.log('')