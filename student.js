class Student extends Person{

    constructor(name, surname, yob, grades = []){
        super(name, surname, yob);
        this._grades = grades;
    }

    get grades(){
        return this._grades;
    }

    // get yob(){
    //     return this._yob;
    // }

    // set yob(value){
    //     let oldYob = 1980;
    //     if (this._yob) {
    //         oldYob = this._yob;
    //     }
    //     this._yob = value;
    //     const newAge = this.calculateAge();
    //     if (newAge < 18 || newAge > 100) {
    //         this._yob = oldYob;
    //     }
    // }


    calculateMean(){
        const grades = this.grades;
        if (grades.length === 0) {
            return -1;
        }
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
            const grade = grades[i];
            sum+=grade;
        }
        const mean = sum / grades.length;
        return mean;
    }

    toString(){
        return super.toString()
             + "MEDIA: " + this.calculateMean() + '\n'
    }
    //NOME: Davide
    //COGNOME: Consigliere
    //ETA': 34
    //MEDIA: 5.4

    // calculateAge(){
    //     const actualDate = new Date();
    //     const actualYear = actualDate.getFullYear()
    //     const age = actualYear - this._yob;
    //     return age;
    // }
    //34

}