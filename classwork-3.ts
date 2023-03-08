const findFirst = <T>(arr: Array<T>): T => arr[0]

// function findFirst<T>(arr: Array<T>): T {
// 	return arr[0];
// }

console.log(findFirst([12, '22', true]));


// расширение интерфейсов
interface IComon{
    name: string,
    last_name: string
}

interface IHosp{
    weight: number,
    height: number
}

interface IResult extends IComon, IHosp {
    id:number
}

const user:IResult = {
    name: 'Ivan',
    last_name: 'Ivanov',
    weight: 5,
    height: 45,
    id: 22
}

// Task3

interface IBase{
    id: number,
    name: string,
    getName: () => string
}


class Base implements IBase{
    id: number
    name: string
    static Ids: Array<number> = []

    constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
        Base.setId(id)
    }
    static getAllIds() {
        return this.Ids
    }

    static setId = (id:number) => this.Ids.push(id)
    getName = () => this.name;
}

const user1 = new Base(1, 'Ivan')
const user2 = new Base(2, 'Fedor')

console.log(Base.getAllIds())


// Task 4
interface ICountry{
    country: string,
    abbreviation: string,
    city: string,
    currency_name: string,
    population: number
}

const countries: Array<ICountry> = [
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

const getAllCountries = (arr: Array<ICountry>): string => 
    arr.map((elem: ICountry) => elem.country).toString()

console.log(getAllCountries(countries))

//Task5
const getAllPeopleCount = (arr: Array<ICountry>): number => 
    arr.reduce((res: number, elem: ICountry) => res += elem.population, 0)
    
console.log(getAllPeopleCount(countries))

// Task6

const getSortedCountries = (arr: Array<ICountry>): Array<ICountry>  => 
    arr.sort((a: ICountry, b: ICountry) => {
        return a.country > b.country? 1: -1
    })

console.log(getSortedCountries(countries))

// Task7

const getAllcurrency = (arr: Array<ICountry>): Array<string> => 
    arr.map((elem: ICountry) => elem.currency_name)

console.log(getAllcurrency(countries))

// Task8
const getSortedCities = (arr: Array<ICountry>): Array<string> => 
    arr.map((elem: ICountry) => elem.city).sort()

console.log(getSortedCities(countries))

// task 9
const getAveragePopulation = (arr: Array<ICountry>): number => 
    arr.reduce((res: number, elem: ICountry) => res += elem.population, 0) / arr.length
    
console.log(getAveragePopulation(countries))