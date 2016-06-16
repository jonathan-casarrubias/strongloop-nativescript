"use strict";
var core_1 = require("@angular/core");
var Todo_1 = require('./sdk/models/Todo');
var sdk_1 = require('./sdk');
var AppComponent = (function () {
    function AppComponent(ts) {
        this.ts = ts;
        this.todo = new Todo_1.Todo();
        this.list = new Array();
        // Update with your API Address, IP in same network or DNS
        sdk_1.LoopBackConfig.setBaseURL('http://192.168.100.5:3000');
        sdk_1.LoopBackConfig.setApiVersion('api');
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    AppComponent.prototype.addTodo = function () {
        var _this = this;
        this.ts.create(this.todo).subscribe(function (res) {
            _this.todo = new Todo_1.Todo();
            _this.list.push(res);
        });
    };
    AppComponent.prototype.getTodos = function () {
        var _this = this;
        this.ts.find().subscribe(function (res) { return (_this.list = res); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: './app.component.html',
            providers: [sdk_1.API_PROVIDERS, sdk_1.TodoApi],
        }), 
        __metadata('design:paramtypes', [sdk_1.TodoApi])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map