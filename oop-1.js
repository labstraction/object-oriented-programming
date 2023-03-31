

const student1 = new Student('Davide', 'Consigliere', 1989, [4, 6, 7, 4, 6])
const student2 = new Student('Francesco', 'Badile', 1993, [5, 8, 6, 7, 10])
const student3 = new Student('Valentina', 'Cherubini', 2001, [8, 7, 10, 9, 8])
const student4 = new Student('Simone', 'Maccarone', 2003);
const teacher = new Teacher('Andrea', 'Asioli', 1978, [student1, student2, student3]);


const vecchietto = new Person('Battista', 'Parodi', 1934);

console.log(vecchietto.toString());


student1.yob = 1979;

console.log(student1.toString());
console.log(student4.toString());
student2.grades = [10, 10, 10 , 10]

console.log(teacher + '');
console.log(student1.yob);
console.log(student3.yob);
console.log(student2.grades)

console.log(student2.calculateMean());

console.log(teacher.findBestStundent())