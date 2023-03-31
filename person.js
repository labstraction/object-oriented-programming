class Person{

    constructor(name, surname, yob){
        this.name = name;
        this.surname = surname;
        this._yob = yob;
    }


    get yob(){
        return this._yob;
    }

    set yob(value){
        let oldYob = 1980;
        if (this._yob) {
            oldYob = this._yob;
        }
        this._yob = value;
        const newAge = this.calculateAge();
        if (newAge < 18 || newAge > 100) {
            this._yob = oldYob;
        }
    }

    calculateAge(){
        const actualDate = new Date();
        const actualYear = actualDate.getFullYear()
        const age = actualYear - this._yob;
        return age;
    }

    toString(){
        return "NOME: " + this.name + '\n' 
             + "COGNOME: " + this.surname + '\n'
             + "ETA': " + this.calculateAge() + '\n'
    }


}