class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title || "Employee";
    };

    getName() {
        return this.name
    };

    getID() {
        return this.id
    };

    getEmail() {
        return this.email
    };

    getRole() {
        return this.title
    };
};

module.exports = Employee