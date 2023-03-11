function findFirst<T>(args: Array<T>): T {
    return args[0];
}

const findFirstArrow = <T>(args: Array<T>): T => {
    return args[0];
}

findFirst<number>([1, 2, 3])

interface ICommon {
    name: string,
    last_name: string,
}

interface IHosp {
    weight: number,
    height: number
}

interface IResult extends ICommon, IHosp {
    id: number
}

const user: IResult = {
    id: 12354321,
    name: 'vasya',
    last_name: 'pupkin',
    weight: 70,
    height: 180,
}

interface IBase {
    id: number,
    name: string,
    getName: () => string,
}

class ClassBase implements IBase {

    static all_ids: number[] = [];

    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        ClassBase.addId(id);
    }
    getName(){
        return this.name;
    };

    static addId(id: number) {
        this.all_ids.push(id);
    }

    static getAllIds(): number[] {
        return this.all_ids;
    }
    
}

const baseObj = new ClassBase(12321, 'Hello');
const baseObj1 = new ClassBase(5656, 'Hello1');

console.log(ClassBase.getAllIds());

enum INGR {
    salad,
    tomato,
    cucumber,
}
const myType = Object.keys(INGR) as Array<keyof typeof INGR>

interface ITest {
    ingr: typeof myType
}

const newBurger = {}
const burger: ITest = {
    ingr: ['salad', 'tomato', 'cucumber']
}

const countries = [
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
]

interface ICountry {
    country: string,
        abbreviation: string,
        city: string,
        currency_name: string,
        population: number
}

const getAllNames = (arr: ICountry[]): string =>
arr.map((el: ICountry): string => el.country).toString()

const getAllPopulation = (arr: ICountry[]): number =>
    arr.reduce((prev: number, el: ICountry): number => prev + el.population, 0)

const getSortedCounties = (arr: ICountry[]): ICountry[] =>
    [...arr].sort((a: ICountry, b: ICountry): number => {
        return a.country > b.country ? 1 : -1
})

const getCurrencyArray = (arr: ICountry[]): string[] =>
    arr.map((el: ICountry): string => el.currency_name)

const getSortedCitiesArray = (arr: ICountry[]): string[] =>
    arr.map((el: ICountry): string => el.city).sort()

const getAvgPopulation = (arr: ICountry[]): number => getAllPopulation(arr)/arr.length

const factorial = (x: number): number => {
    if (x <= 1) {
        return 1
    }
    return x * factorial(x - 1);
}

factorial(5);

const users2 : IUser[] = [
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
];;

interface IUser{
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
    age: number
}

const getNames = (arr: IUser[]): string => arr.map((el: IUser): string =>
    el.first_name + ' ' + el.last_name).toString()

const sortAsc = (a: string, b: string): number => a > b ? 1 : -1;

const sortDesc = (a: string, b: string): number => a > b ? -1 : 1;

const sortMails = (arr: string[] = [], order: string = 'asc'): string[] =>
    [...arr].sort(order === 'asc' ? sortAsc : sortDesc)

const getSortedEmails = (arr: IUser[], order: string = 'asc'): string[] => {
    const emails = arr.map((el: IUser): string => el.email);
    const newSortedEmails = sortMails(emails, order)
    return newSortedEmails;
}

getSortedEmails(users2);
getSortedEmails(users2, 'asc');
getSortedEmails(users2, 'desc');

type NewUser = {
    id: number,
    username: string,
}

type StringOrNumber = string | number

const shortInfo = (arr: IUser[], keys: string[]): NewUser[] =>
    arr.map((el: IUser) => {
    const { id } = el
    const values = [] as StringOrNumber[];
    keys.forEach((key) => {
        const hasProperty = key in el;
        if (hasProperty) {
            values.push(el[key])
        }
    })
    return {
        id,
        username: values.join(' '),
    }
})

shortInfo(users2, ['last_name', 'email'])

const getSortedUnderAge = (arr: IUser[], maxAge: number): IUser[] => 
arr.filter((el: IUser) => el.age < maxAge).sort((a: IUser, b: IUser) => a.age - b.age)

interface IStatistic {
    avgAge: number,
    over18: number,
    over30: number,
    over40: number
}

const getStat = (arr: IUser[]): IStatistic => {
    const reduceValue = arr.reduce((prev, el) => {
        const { total, over18, over30, over40 } = prev;
        return ({
            total: total + el.age,
            over18: el.age > 18 ? over18 + 1 : over18,
            over30: el.age > 30 ? over30 + 1 : over30,
            over40: el.age > 40 ? over40 + 1 : over40,
        })
    }, {
        total: 0,
        over18: 0,
        over30: 0,
        over40: 0
    })
    return ({
        avgAge: reduceValue.total/arr.length,
        over18: reduceValue.over18,
        over30: reduceValue.over30,
        over40: reduceValue.over40,
    })
}



const getLastNameObj = (arr: IUser[]): any => 
    arr.reduce((prev, el) => {
        const { last_name } = el;
        const firstLetter = last_name?.charAt(0).toLowerCase();
        const prevLetterValue = prev[firstLetter] || [];
        prevLetterValue.push(last_name);
        return ({
            ...prev,
            [firstLetter]: prevLetterValue,
        })
    }, {})