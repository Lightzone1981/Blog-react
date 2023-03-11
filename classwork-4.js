var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var factorial = function (n) {
    return n === 1 ? 1 : n * factorial(n - 1);
};
console.log(factorial(5));
var users3 = [
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
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg",
        "age": 40
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg",
        "age": 36
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg",
        "age": 70
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg",
        "age": 45
    }
];
var getUserNames = function (users) {
    return users.map(function (_a) {
        var first_name = _a.first_name, last_name = _a.last_name;
        return "".concat(first_name, " ").concat(last_name);
    }).join(',');
};
console.log(getUserNames(users3));
var sortEmails = function (mails, type) {
    if (type === void 0) { type = 'asc'; }
    return __spreadArray([], mails, true).sort(function (a, b) { return type === 'asc' ? (a > b ? 1 : -1) : (a < b ? 1 : -1); });
};
var getSortEmails = function (users, type) {
    if (type === void 0) { type = 'asc'; }
    return sortEmails(users.map(function (el) { return el.email; }), type);
};
console.log(getSortEmails(users3, 'asc'));
var getShortUsers = function (users3, keys) {
    return users3.map(function (elem) {
        var str = '';
        for (var key in elem) {
            if (keys.indexOf(key) !== -1)
                str = str + elem[key] + ' ';
        }
        return { newId: elem.id, userName: str };
    });
};
console.log(getShortUsers(users3, ['last_name', 'age']));
var getSortedUsers = function (users, sortAge) {
    return users.filter(function (_a) {
        var age = _a.age;
        return age < sortAge;
    }).sort(function (a, b) { return a.age - b.age; });
};
console.log(getSortedUsers(users3, 35));
// const getAgeStatistic = (users: IUser[]): IStatistic => {
//     return {
//         avgAge: users.reduce((acc: number, user: IUser) => acc += user.age, 0) / users.length,
//         over18: users.reduce((acc: number, user: IUser) => user.age> 18? acc++: acc, 0),
//         over30: users.reduce((acc: number, user: IUser) => user.age> 30? acc++: acc, 0),
//         over40: users.reduce((acc: number, user: IUser) => user.age> 40? acc++: acc, 0)
//     }
// }
var getAgeStatistic = function (users) {
    var ageStat = users.reduce(function (res, elem) {
        res.avgAge = res.avgAge + elem.age;
        if (elem.age > 18)
            res.over18++;
        if (elem.age > 30)
            res.over30++;
        if (elem.age > 40)
            res.over40++;
        return res;
    }, {
        avgAge: 0,
        over18: 0,
        over30: 0,
        over40: 0
    });
    ageStat.avgAge = ageStat.avgAge / users.length;
    return ageStat;
};
console.log(getAgeStatistic(users3));
var getObject = function (users3) {
    return users3.reduce(function (acc, el) {
        var _a;
        var last_name = el.last_name;
        var firstLetter = last_name ? last_name[0].toLowerCase() : '';
        var accValue = acc[firstLetter] || [];
        accValue.push(el.last_name);
        return (__assign(__assign({}, acc), (_a = {}, _a[firstLetter] = accValue, _a)));
    }, {});
};
console.log(getObject(users3));
