function getArea(a, b) {
    return +a * +b;
}
console.log(getArea('3', 3));
// --------------------------------------------------------------------------------------
function getSum(a, b) {
    if (+a !== a || +b !== b) {
        return true;
    }
    else {
        return a + b;
    }
}
console.log(getSum(5, 3));
// --------------------------------------------------------------------------------------
const getSum2 = (a, b) => +a !== a || +b !== b ? true : a + b;
console.log(getSum('6', 7));
const users = [
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
const getLawsonAge = (user) => user.last_name === "Lawson" ? user.age : `It's not Lawson`;
const getData = (array) => {
    array.forEach((user) => console.log(getLawsonAge(user)));
};
getData(users);
// --------------------------------------------------------------------------------------
const users2 = [
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
const customSelector = (array, key = 'last_name', val = 'Lawson') => {
    return array.find((user) => user[key] === val) || 'No such criteria';
};
console.log(customSelector(users2));
// --------------------------------------------------------------------------------------
