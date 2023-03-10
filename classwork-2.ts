function getArea(a: number | string, b: number | string): number{
    return +a * +b
}

console.log(getArea('3', 3))

// --------------------------------------------------------------------------------------

function getSum(a: number | string, b: number | string): number | boolean{
    if (+a !== a || +b !== b) {
        return true;
    }
    else {
        return a + b;
    }
}
console.log(getSum(5, 3));

// --------------------------------------------------------------------------------------

const getSum2 = (a: number | string, b: number | string): number | boolean =>
   +a !== a || +b !== b ? true: a+b

console.log(getSum('6', 7));

// --------------------------------------------------------------------------------------

interface IUser{
    id: number,
    email: string,
    first_name: string,
    last_name?: string,
    avatar: string,
    age: number
}

const users:IUser[] = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
         "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
         "age": 20
     }
];

const getLawsonAge = (user:IUser): string | number =>
    user.last_name === "Lawson"? user.age : `It's not Lawson`


const getData = (array:IUser[]) :void =>{
    array.forEach((user:IUser) => console.log(getLawsonAge(user)))
}

getData(users)

// --------------------------------------------------------------------------------------

const users2:Array<IUser> = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
         "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
         "age": 20,
    },
    {
        "id": 10,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
         "age": 20
    },
];

const customSelector = (array: IUser[], key: string = 'last_name', val: string | number = 'Lawson'): IUser | string => {
    return array.find((user:IUser) => user[key] === val) ||'No such criteria'
}

console.log(customSelector(users2))

// --------------------------------------------------------------------------------------
