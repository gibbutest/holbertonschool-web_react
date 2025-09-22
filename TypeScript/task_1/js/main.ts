// Task 1
interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	location: string;
	yearsofExperience?: number;
	[key: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
};

console.log(teacher3);

// Task 2

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};
console.log(director1);

// Task 3

type printTeacherFunction = (firstName: string, lastName: string) => string;

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName[0]}. ${lastName}`;
};

// Task 4

interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClassMethods;
}
interface StudentClassMethods {
	workOnHomework(): string;
	displayName(): string;
}

const StudentClass: StudentClassConstructor = class StudentClass implements StudentClassMethods {
	constructor(public firstName: string, public lastName: string) {}

	workOnHomework(): string {
		return 'Currently working';
	}
	displayName(): string {
		return this.firstName;
	}
};
