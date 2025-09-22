const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

let teacher = {
	firstName: 'John',
	lastName: 'Doe',
	experienceTeachingC: 35,
};

console.log('C++');
cpp.setTeacher = teacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher = teacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher = teacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
