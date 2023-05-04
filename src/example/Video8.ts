//Type inference: Tự động gán type
//Union type ('|')
let name1: string | number = "Ask Dung Bum"
name1 = 10
//Object type
/*Type*/
type TEmployee = {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
}

let employee: TEmployee = {
    firstName: "Dung",
    lastName: "Bum",
    age: 20,
    jobTitle: "Trader"
}
/*Interfaces*/
interface TEmployee1 {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
}

let employee1: TEmployee1 = {
    firstName: "Dung1",
    lastName: "Bum1",
    age: 20,
    jobTitle: "Trader1"
}


