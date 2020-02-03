const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super(name, id, email, "Intern")
        this.school = school;
    };

    getSchool() {
        return this.school;
    }
};

module.exports = Intern