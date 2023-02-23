type schoolDetails = {
    headMaster: string,
    NumbOfMales?: number,
    isActive: boolean

}

interface loginDetails{
    id: number | string,
    password: string | number ,
    isAuth: boolean

}

let login = {
    id: 1,
    password: "alexadam269@gmail.com",
    isAuth: true

}
console.log(login.password);


let detailsOfSchool: schoolDetails = {
    headMaster: "ALEX ADAM",
    NumbOfMales: 20,
    isActive: true

}

const greet = (greetings: schoolDetails) =>{
    return `Hello ${greetings.headMaster}`
};

console.log(greet((detailsOfSchool)))
;
