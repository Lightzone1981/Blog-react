const subjects = {
	mathematics: {
		students: 200,
		teachers: 6,
	},
	biology: {
		students: 120,
		teachers: 6,
	},
	geography: {
		students: 60,
		teachers: 2,
	},
	chemistry: {
		students: 100,
		teachers: 3,
	},
};

// Task 1 Создать строку из названий предметов написаных через запятую
//first way
const getSubjectsString1 = function (subjects) {
	let result = "";
	for (key in subjects) {
		result += key + ",";
	}
	return result.slice(0, -1);
};

//second way
const getSubjectsString2 = function (subjects) {
	return Object.keys(subjects).join(",");
};

console.log(getSubjectsString1(subjects));
console.log(getSubjectsString2(subjects));

// Task 2 Посчитать общее количество студентов и учителей на всех предметах
// first way
const getStudentsAndTeachersCount1 = function (subjects) {
	let sum = 0;
	for (key in subjects) {
		sum += subjects[key].students + subjects[key].teachers;
	}
	return sum;
};

// second way
const getStudentsAndTeachersCount2 = function (subjects) {
	return Object.entries(subjects).reduce((sum, elem) => {
		return (sum += elem[1].students + elem[1].teachers);
	}, 0);
};

console.log(getStudentsAndTeachersCount1(subjects));
console.log(getStudentsAndTeachersCount2(subjects));

// Task 3 Получить среднее количество студентов на всех предметах
// first way
const getMiddleStudentsCount1 = (subjects) => {
	let sum = 0;
	let subjectsCount = 0;
	for (key in subjects) {
		sum += subjects[key].students;
		subjectsCount += 1;
	}
	return sum / subjectsCount;
};

// second way
const getMiddleStudentsCount2 = function (subjects) {
	const subjectsArray = Object.entries(subjects);
	return (
		subjectsArray.reduce((sum, elem) => {
			return (sum += elem[1].students);
		}, 0) / subjectsArray.length
	);
};

console.log(getMiddleStudentsCount1(subjects));
console.log(getMiddleStudentsCount2(subjects));

//Task 4 Создать массив из объектов предметов
//first way
const getArrayFromObject1 = (object) => {
	let array = [];
	for (key in subjects) {
		subjects[key].subject = key;
		array.push(subjects[key]);
	}
	return array;
};

//second way
const getArrayFromObject2 = (object) => {
	return Object.entries(object).map((elem) => {
		const res = elem[1];
		res.subject = elem[0];
		return res;
	});
};

console.log(getArrayFromObject1(subjects));
console.log(getArrayFromObject2(subjects));

// Task5 Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
const getDescSortArray = (object) => {
	return getArrayFromObject1(object).sort((a, b) => b.teachers - a.teachers);
};

console.log(getDescSortArray(subjects));
