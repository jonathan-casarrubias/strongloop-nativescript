"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var definitions_1 = require('./definitions');
var lb_services_1 = require('./sdk/lb.services');
var AppComponent = (function () {
    function AppComponent(ts) {
        this.ts = ts;
        this.todo = new definitions_1.Todo();
        this.list = new Array();
        this.ts.setBaseURL('http://192.168.0.166:3000/api');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    AppComponent.prototype.addTodo = function () {
        var _this = this;
        this.ts.create(this.todo).subscribe(function (res) {
            _this.todo = new definitions_1.Todo();
            _this.list.push(res);
        });
    };
    AppComponent.prototype.getTodos = function () {
        var _this = this;
        this.ts.find().subscribe(function (res) {
            alert(res);
            (_this.list = res);
        });
    };
    AppComponent.prototype.removeItem = function (item) {
        alert(JSON.stringify(item));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: './app.component.html',
            providers: [lb_services_1.TodoApi, http_1.HTTP_PROVIDERS],
        }), 
        __metadata('design:paramtypes', [lb_services_1.TodoApi])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map