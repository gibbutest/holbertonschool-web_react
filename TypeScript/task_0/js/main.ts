interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 14,
	location: 'Woop woop',
};
const student2: Student = {
	firstName: 'Jane',
	lastName: 'Doe',
	age: 13,
	location: 'Woop woop',
};

const studentsList: Student[] = [student1, student2];
const labels: (keyof Pick<Student, 'firstName' | 'location'>)[] = ['firstName', 'location'];

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = table.createTHead();
const tbody: HTMLTableSectionElement = table.createTBody();

document.body.append(table);

thead.insertRow().append(
	...labels.map((label) => {
		const th = document.createElement('th');
		th.textContent = label;
		return th;
	})
);

studentsList.forEach((student) => {
	tbody.insertRow().append(
		...labels.map((label) => {
			const td = document.createElement('td');
			td.textContent = student[label];
			return td;
		})
	);
});
