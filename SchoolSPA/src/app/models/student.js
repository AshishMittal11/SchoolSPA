"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student() {
        this.id = 0;
        this.firstName = "";
        this.middleName = "";
        this.lastName = "";
        this.gender = "";
        this.email = "";
        this.currentAddress = "";
        this.permanentAddress = "";
        this.dob = new Date();
        this.isActive = false;
        this.createdDate = new Date();
        this.modifiedDate = new Date();
    }
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=student.js.map