const usersArr = [
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
];
// Task1. Создать строку из имен пользователей через запятую
const getUserNames = (usersArr) => usersArr.map((elem) => elem.name).toString();
console.log(getUserNames(usersArr));
// Task2. Посчитать общее количнство машин у пользователей
const getUsersCarsCount = (usersArr) => usersArr.reduce((res, elem) => res += elem.cars ? elem.cars.length : 0, 0);
console.log(getUsersCarsCount(usersArr));
// Task3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
const getEducatedUsers = (usersArr) => usersArr.filter((elem) => elem.hasEducation);
console.log(getEducatedUsers(usersArr));
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
const getAnimalsOwner = (usersArr) => usersArr.filter((elem) => elem.animals);
console.log(getAnimalsOwner(usersArr));
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
const getUsersCars = (usersArr) => [...new Set(usersArr.reduce((res, elem) => [...res, ...elem.cars ? elem.cars : []], []))].toString();
console.log(getUsersCars(usersArr));
