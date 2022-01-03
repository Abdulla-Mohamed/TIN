class Student
{
    constructor(first, last, id , grades)
    {
        this.first = first;
        this.last = last;
        this.id = id;
        this.grades = grades;
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
}

let person1 = new Student("Student", "Tato", "1", [4,66,4,32,34]);

Student.prototype.subjects = ["Science", "Math", "English"];
createStudent= function(id, firstName, lastName, grades, subjects)
{
    return Object.create(person1, {
        "id": {
            value: id,
            enumerable: true,
            configurable: true
        },

        "firstName":
            {
                value: firstName,
                enumerable: true,
                configurable: true
            },
        "lastName":
            {
                value: lastName,
                enumerable: true,
                configurable: true
            },
        "grades": {
            value: grades,
            enumerable: true,
            configurable: true
        },
        "subjects":
            {
                value: subjects,
                enumerable: true,
                configurable: true
            }
    });
};
let person2 = createStudent(2, "Sweet", "Potato", [1,2,3,4], ["Math","Chemistry"]);
Student.prototype.getAverage = function(){
    return this.average;
};
Student.prototype.getFirstName = function()
{
    return this.firstName;
};
Student.prototype.setFirstName = function(name)
{
    Object.defineProperties(person2,{"firstName":
            {
                value: name,
                writable: true
            }});
};
Student.prototype.getLastName = function()
{
    return this.lastName
};
Student.prototype.setLastName = function(name)
{
    Object.defineProperties(person2,{"lastName":
            {
                value: name,
                writable: true
            }});
};
console.log(person2.showDetails());
console.log(person2.subjects[0]);
person2.setFirstName("potato");
console.log(person2.getFirstName());