class Person
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get name()
    {
        return this.firstName;
    }
    set setName(name)
    {
        this.firstName = name;
    }
    get surname()
    {
        return this.lastName;
    }
    set setSurname(name)
    {
        this.lastName = name;
    }
}
let person = new Person("Student", "Tato");
person.setName = "hi";
console.log(person.firstName);

class Student extends Person
{
    constructor(first, last, id , grades, subjects)
    {
        super(first, last);
        this.id = id;
        this.grades = grades;
        this.subjects = subjects;
        this.showDetails = function()
        {
            let sum = 0;
            let i;
            for(i = 0; i < grades.length; i++)
            {
                sum += grades[i];
            }
            let average = sum / i;
            return this.firstName + " " + this.lastName + " " + average;
        };
        this.calcAverage = function () {
            let sum = 0;
            let i;
            for(i = 0; i < grades.length; i++)
            {
                sum += grades[i];
            }
            return sum/i;
        };
        this.average = this.calcAverage();
    }
    get getAverage()
    {
        return this.average;
    }
}
let someone = new Student("Sweet", "Potato", "1", [1,2,3,4], ["Math","Chemistry"]);
console.log(someone.surname);