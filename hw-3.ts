interface IUserObj{
    name: string,
    phone: string,
    email: string,
    animals?: Array<string>,
    cars?: Array<string>,
    hasChildren: boolean,
    hasEducation: boolean
}

const usersArr: Array<IUserObj> = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
        
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

// Task1. Создать строку из имен пользователей через запятую
const getUserNames = (usersArr: Array<IUserObj>): string =>
    usersArr.map((elem: IUserObj) => elem.name).toString();

console.log(getUserNames(usersArr));

// Task2. Посчитать общее количнство машин у пользователей
const getUsersCarsCount = (usersArr: Array<IUserObj>): number =>
    usersArr.reduce((res: number, elem: IUserObj) => res += elem.cars ? elem.cars.length : 0, 0);

console.log(getUsersCarsCount(usersArr));

// Task3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
const getEducatedUsers = (usersArr: Array<IUserObj>): Array<IUserObj> =>
    usersArr.filter((elem: IUserObj) => elem.hasEducation);

console.log(getEducatedUsers(usersArr));

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

const getAnimalsOwner = (usersArr: Array<IUserObj>): Array<IUserObj> =>
    usersArr.filter((elem: IUserObj) => elem.animals);

console.log(getAnimalsOwner(usersArr));

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
const getUsersCars = (usersArr: Array<IUserObj>): string =>
   [...new Set(usersArr.reduce((res: Array<string>,elem: IUserObj) => [...res, ...elem.cars? elem.cars: []], []))].toString();

console.log(getUsersCars(usersArr));