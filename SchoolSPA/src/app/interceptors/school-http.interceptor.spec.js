"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var school_http_interceptor_1 = require("./school-http.interceptor");
describe('SchoolHttpInterceptor', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        providers: [
            school_http_interceptor_1.SchoolHttpInterceptor
        ]
    }); });
    it('should be created', function () {
        var interceptor = testing_1.TestBed.inject(school_http_interceptor_1.SchoolHttpInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
//# sourceMappingURL=school-http.interceptor.spec.js.map