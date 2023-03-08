var findFirst = function (arr) { return arr[0]; };
// function findFirst<T>(arr: Array<T>): T {
// 	return arr[0];
// }
console.log(findFirst([12, '22', true]));
var user = {
    name: 'Ivan',
    last_name: 'Ivanov',
    weight: 5,
    height: 45,
    id: 22
};
var Base = /** @class */ (function () {
    function Base(id, name) {
        var _this = this;
        this.getName = function () { return _this.name; };
        this.id = id;
        this.name = name;
        Base.setId(id);
    }
    Base.getAllIds = function () {
        return this.Ids;
    };
    var _a;
    _a = Base;
    Base.Ids = [];
    Base.setId = function (id) { return _a.Ids.push(id); };
    return Base;
}());
var user1 = new Base(1, 'Ivan');
var user2 = new Base(2, 'Fedor');
console.log(Base.getAllIds());
var countries = [
    {
        country: "United Arab Emirates",
        abbreviation: "AE",
        city: "Abu Dhabi",
        currency_name: "Arab Emirates Dirham",
        population: 9630959
    },
    {
        country: "Poland",
        abbreviation: "PL",
        city: "Warszawa",
        currency_name: "Polish Zloty",
        population: 37974750
    },
    {
        country: "Russian Federation",
        abbreviation: "RU",
        city: "Moscow",
        currency_name: "Russian Ruble",
        population: 144478050
    }
];
var getAllCountries = function (arr) {
    return arr.map(function (elem) { return elem.country; }).toString();
};
console.log(getAllCountries(countries));
//Task5
var getAllPeopleCount = function (arr) {
    return arr.reduce(function (res, elem) { return res += elem.population; }, 0);
};
console.log(getAllPeopleCount(countries));
// Task6
var getSortedCountries = function (arr) {
    return arr.sort(function (a, b) {
        return a.country > b.country ? 1 : -1;
    });
};
console.log(getSortedCountries(countries));
// Task7
var getAllcurrency = function (arr) {
    return arr.map(function (elem) { return elem.currency_name; });
};
console.log(getAllcurrency(countries));
// Task8
var getSortedCities = function (arr) {
    return arr.map(function (elem) { return elem.city; }).sort();
};
console.log(getSortedCities(countries));
// task 9
var getMiddlePeopleCount = function (arr) {
    return arr.reduce(function (res, elem) { return res += elem.population; }, 0) / arr.length;
};
console.log(getMiddlePeopleCount(countries));
