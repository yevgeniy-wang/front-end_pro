class Student {
    constructor(name, age) {
        this.name = name
        this.age = age
        this._grade = []
        this._visit = new Array(25)
    }

    set name(value) {
        this._name = value
    }

    get name() {
        return this._name
    }

    set age(value) {
        this._age = value
    }

    get age() {
        return this._age
    }

    set grade(value) {
        this._grade.push(value)
    }

    get averageGrade() {
        if (this._grade.length > 0) {
            return this._grade.reduce((a, b) => a + b, 0) / this._grade.length
        } else return `There is no grades for student ${this.name}`
    }

    get averageVisit(){
        let count = 0
        const averageVisit = this._visit.reduce(function (a, b)  {
            count++
            return a + b
        }, 0) / count
        return averageVisit
    }

    present() {
        const firstBlankElementIndex = this._visit.findIndex((element) => element === undefined)
        if (firstBlankElementIndex >= 0) {
            this._visit[firstBlankElementIndex] = true
        } else alert(`visit array is already full`)
    }

    absent() {
        const firstBlankElementIndex = this._visit.findIndex((element) => element === undefined)
        if (firstBlankElementIndex >= 0) {
            this._visit[firstBlankElementIndex] = false
        } else alert(`visit array is already full`)
    }

    summary() {
        if (this.averageGrade >= 90 && this.averageVisit >= 0.9){
            return 'Молодець!'
        } else if (this.averageGrade >= 90 || this.averageVisit >= 0.9){
            return 'Добре, але можна краще '
        } else return 'Редиска!'
    }


}

const student1 = new Student('Ivan', 22)

student1.grade = 100
student1.grade = 90

for (let i = 0; i<25 ; i++){
    student1.present()
}

console.log(student1.averageGrade)
console.log(student1.averageVisit)
console.log(student1.summary())

const student2 = new Student('Anatoliy', 22)

student2.grade = 100
student2.grade = 90

for (let i = 0; i<25 ; i++){
    student2.absent()
}

console.log(student2.averageGrade)
console.log(student2.averageVisit)
console.log(student2.summary())


