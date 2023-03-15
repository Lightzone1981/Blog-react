const factorial = (n:number):number => {
    return n === 1?  1: n*factorial(n-1)
}
console.log(factorial(5))

interface IUser{
    id: number,
    email: string,
    first_name: string,
    last_name?: string,
    avatar: string,
    age: number
}

interface IUserShort{
    newId: number,
    userName: string,
}

const users3:Array<IUser> = [
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

const getUserNames = (users: Array<IUser>): string =>
    users.map(({first_name, last_name}) => `${first_name} ${last_name}`).join(',')

console.log(getUserNames(users3))
    
const sortEmails = (mails: Array<string>, type: string = 'asc'): Array<string> => 
  [...mails].sort((a:string,b:string)=> type==='asc'? (a>b? 1:-1):(a<b? 1:-1))

const getSortEmails = (users: Array<IUser>, type:string = 'asc'): Array<string> =>
    sortEmails(users.map((el: IUser): string => el.email),type)

    
console.log(getSortEmails(users3, 'asc'))


const getShortUsers = (users3:Array<IUser>, keys:Array<string>): Array<IUserShort> =>
    users3.map((elem: IUser) => {
        let str: string = ''
        for (let key in elem) {
            if (keys.indexOf(key) !== -1)str = str + elem[key]+ ' '
        }

        return {newId: elem.id, userName: str}
    })   

console.log(getShortUsers(users3, ['last_name', 'age']))


const getSortedUsers = (users:IUser[], sortAge:number):IUser[] =>
    users.filter(({ age }: IUser) => age < sortAge).sort((a:IUser, b:IUser) => a.age - b.age )

console.log(getSortedUsers(users3, 35))


interface IStatistic {
    avgAge: number,
    over18: number,
    over30: number,
    over40: number,
}

// const getAgeStatistic = (users: IUser[]): IStatistic => {
//     return {
//         avgAge: users.reduce((acc: number, user: IUser) => acc += user.age, 0) / users.length,
//         over18: users.reduce((acc: number, user: IUser) => user.age> 18? acc++: acc, 0),
//         over30: users.reduce((acc: number, user: IUser) => user.age> 30? acc++: acc, 0),
//         over40: users.reduce((acc: number, user: IUser) => user.age> 40? acc++: acc, 0)
//     }
// }

const getAgeStatistic = (users: IUser[]): IStatistic => {
    const ageStat =  users.reduce((res: IStatistic, elem: IUser) => {
        res.avgAge = res.avgAge + elem.age
        if (elem.age >18) res.over18++
        if (elem.age >30) res.over30++
        if (elem.age >40) res.over40++
        return res
    }, {
        avgAge: 0,
        over18: 0,
        over30: 0,
        over40: 0,
    })
    ageStat.avgAge = ageStat.avgAge / users.length
    return ageStat
}

console.log(getAgeStatistic(users3))


const getObject = (users3:IUser[]):any => {
    return users3.reduce((acc:any, el: IUser):any => {
        const { last_name } = el
        const firstLetter = last_name ? last_name[0].toLowerCase() : ''
        const accValue = acc[firstLetter] || []
        accValue.push(el.last_name)
        return ({...acc, [firstLetter]:accValue})
    },{})
}

console.log(getObject(users3))