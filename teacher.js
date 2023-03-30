class Teacher{

    constructor(name, surname, yob, students){
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.students = students;
    }

    findBestStundent(){
        const students = this.students;
        let bestStudent = students[0];
        for (let i = 1; i < students.length; i++) {
            const actualStudent = students[i];
            const bestMean = bestStudent.calculateMean();
            const actualMean = actualStudent.calculateMean();
            if (actualMean > bestMean) {
                bestStudent = actualStudent;
            }
        }
        return bestStudent;
    }

    toString(){

    }
    //NOME: Andrea
    //COGNOME: Asioli
    //ETA': 45
    //MIGLIOR STUDENTE: Valentina Cherubini

    calculateAge(){

    }
    //45
}