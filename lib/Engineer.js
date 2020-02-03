const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email, "Engineer")
        this.github = github;
    };

    getGithub() {
        return this.github;
    }
};

module.exports = Engineer