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