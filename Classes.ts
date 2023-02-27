// class Programmer {
//     name: string;
//     age: number;
//     stack: string;

//     constructor(name: string, age: number, stack: string){
//         this.name = name;
//         this.age = age;
//         this.stack = stack;

//     }
// }

//visibility modifiers


class Person{
    public name: string;
    private age: number;
    protected address: string;

constructor(name: string, age: number, address: string){
    this.name = name;
    this.age = age;
    this.address = address;

}
public greet(){
    console.log(`my name is ${this.name}`);
    
}
private getAge(){
    console.log(`my name is ${this.age}`);
    
}
protected getAddress(){
    console.log(`my address is ${this.address}`);
    
}
}

const Alex = new Person('Alex', 23, 'mole park');
console.log(Alex.name);
// console.log(Alex.age);
// console.log(Alex.address);

// Alex.greet()
// Alex.getAge()
// Alex.getAddress()