function Student(first, last, id, grades)
{
    this.firstName = first;
    this.lastName = last;
    this.id = id;
    this.grades = grades;
    this.showDetails = function()
    {
        let sum = 0;
        let counter = 0;
        for(x in grades)
        {
            sum += grades[counter];
            counter++;
        }
        let average = sum / counter;
        return this.firstName + " " + this.lastName + " " + average;
    }
}

let person1 = new Student("Student", "Tato", "1", [4,66,4,32,34]);

Student.prototype.subjects = ["Science", "Math", "English"];
createStudent= function(id, firstName, lastName, grades, subjects)
{
    let person2 = Object.create(person1, {
        "id": {
            value: id,
            enumerable: true
        },

        "firstName":
            {
                value: firstName,
                enumerable: true
            },
        "lastName":
            {
                value: lastName,
                enumerable: true
            },
        "grades": {
            value: grades,
            enumerable: true
        },
        "subjects":
            {
                value: subjects,
                enumerable: true
            }
    });
    return person2;
};
let person2 = createStudent(2, "Sweet", "Potato", [1,2,3,4], ["Math","Chemistry"]);
console.log(person2.showDetails());
console.log(person2.subjects[0]);