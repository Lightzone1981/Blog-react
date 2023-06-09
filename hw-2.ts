// Task1 Создать и протипизировать примитивные функции, принимающие в себя в качестве параметра массив. (возвращаемое значение - по желанию)

interface IFaculty {
	id: number;
	faculty: string;
	subjects: Array<string>;
	countStudents: number;
};

const faculties: Array<IFaculty> = [
	{
		id: 1,
		faculty: "History department",
		subjects: ["The World History", "History of Rome"],
		countStudents: 44,
	},
	{
		id: 2,
		faculty: "Department of Biology",
		subjects: ["biology", "chemistry"],
		countStudents: 50,
	},
	{
		id: 3,
		faculty: "Faculty of Mathematics",
		subjects: ["mathematics", "geometry", "trigonometry"],
		countStudents: 72,
	},
	{
		id: 4,
		faculty: "Faculty of Design",
		subjects: ["ui", "ux", "graphic design"],
		countStudents: 37,
	},
];

const getAllSubjects = (faculties: Array<IFaculty>): string =>
	faculties.reduce((res: Array<string>, faculty: IFaculty) =>
		res = [...res, ...faculty.subjects],[]).join(", ");

console.log(`List of all subjects on university: ${getAllSubjects(faculties)}`);

// Task2 -------------------------------------------------------------------

interface IMovie {
	id: number;
	title: string;
	year: number;
	released: string;
	runtime: string;
	genre: Array<string>;
	director: string;
	writer: string;
	actors: Array<string>;
	plot: string;
	country: string;
	poster: string;
	imdbRating: number;
	imdbVotes: number;
	type: string;
	boxOffice: string;
	production: string;
};

const movies: Array<IMovie> = [
	{
		id: 1,
		title: "Black Widow",
		year: 2021,
		released: "09 Jul 2021",
		runtime: "134 min",
		genre: ["Action", "Sci-Fi", "Adventure"],
		director: "Cate Shortland",
		writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
		actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
		plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
		country: "United States",
		poster:
			"https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		imdbRating: 6.9,
		imdbVotes: 121932,
		type: "movie",
		boxOffice: "$138,027,361",
		production: "Marvel Studios",
	},
	{
		id: 2,
		title: "Harry Potter and the Deathly Hallows: Part 2",
		year: 2011,
		released: "15 Jul 2011",
		runtime: "130 min",
		genre: ["Adventure", "Drama", "Fantasy"],
		director: "David Yates",
		writer: "Steve Kloves, J.K. Rowling",
		actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
		plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
		country: "United Kingdom, United States",
		poster:
			"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
		imdbRating: 8.1,
		imdbVotes: 790377,
		type: "movie",
		boxOffice: "$381,409,310",
		production: "Heyday Films, Moving Picture Company, Warner Bros.",
	},
];

const getTopRatedMovieValue = (movies: Array<IMovie>, key: string): string | number =>
	movies[movies.reduce((res: number, movie: IMovie, index: number, movies: Array<IMovie>) =>
	    movie.imdbRating > movies[res].imdbRating ? index : res,0)][key];

console.log(`The most popular movie is  "${getTopRatedMovieValue(movies, "title")}"`);
console.log(`imdb rating is ${getTopRatedMovieValue(movies, "imdbRating")}`);

// Task3 --------------------------------------------------------------------------------

interface IProduct{
    id: number,
    name: string,
    price: number,
    currency: string,
    ingredients: Array<keyof typeof IIngr>,
    type: string,
    available: boolean,
};

enum IIngr {
	flour = "flour",
	beef = "beef",
	salad = "salad",
	cheese = "cheese",
	sauce = "sauce",
	cucumber = "cucumber"
}


const products: Array<IProduct> = [
	{
		id: 1,
		name: "Burger Premium",
		price: 6,
		currency: "dollar",
		ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
		type: "burger",
		available: true,
	},
	{
		id: 2,
		name: "Burger Lite",
		price: 2.3,
		currency: "euro",
		ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
		type: "burger",
		available: true,
	},
];

const getIngredientsList = ({ ingredients }: IProduct, letter: string): string =>
    ingredients.filter(elem => elem[0] === letter).join(', ');

const logAllIngredients = (products: Array<IProduct>, letter: string): void =>
    products.forEach((product: IProduct) => console.log(getIngredientsList(product, letter)));

logAllIngredients(products, 's');