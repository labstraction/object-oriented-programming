class Teacher extends Person{

    constructor(name, surname, yob, students){
        super(name, surname, yob);
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
        const bestStudent = this.findBestStundent();
        return super.toString()
             + "MIGLIOR STUDENTE: " + bestStudent.name + " " + bestStudent.surname + '\n'
    }
    //NOME: Andrea
    //COGNOME: Asioli
    //ETA': 45
    //MIGLIOR STUDENTE: Valentina Cherubini

    // calculateAge(){
    //     const actualDate = new Date();
    //     const actualYear = actualDate.getFullYear()
    //     const age = actualYear - this._yob;
    //     return age;
    // }
    //45
}