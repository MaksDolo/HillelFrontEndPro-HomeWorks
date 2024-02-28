class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null);
        this.attendanceCount = 0;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    calculateAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    present() {
        if (this.attendanceCount < 25) {
            this.attendance[this.attendanceCount] = true;
            this.attendanceCount++;
        }
    }

    absent() {
        if (this.attendanceCount < 25) {
            this.attendance[this.attendanceCount] = false;
            this.attendanceCount++;
        }
    }

    calculateAttendancePercentage() {
        if (this.attendanceCount === 0) return 0;
        const presentCount = this.attendance.filter(status => status === true).length;
        return presentCount / this.attendanceCount;
    }

    sum() {
        const averageGrade = this.calculateAverageGrade();
        const attendancePercentage = this.calculateAttendancePercentage();
        
        if (averageGrade > 90 && attendancePercentage > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendancePercentage > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const studentNumOne = new Student("Максим", "Доломанчук", 2006);
studentNumOne.addGrade(85);
studentNumOne.addGrade(95);
studentNumOne.present();
studentNumOne.present();
studentNumOne.present();

console.log("Студент:", studentNumOne.firstName, studentNumOne.lastName);
console.log("Вік:", studentNumOne.getAge());
console.log("Середній бал:", studentNumOne.calculateAverageGrade());
console.log("Відвідуваність:", studentNumOne.calculateAttendancePercentage());
console.log("Висновок:", studentNumOne.sum());
