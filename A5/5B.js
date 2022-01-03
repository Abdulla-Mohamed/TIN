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
console.log(person1.showDetails());
console.log(Student.prototype);
