"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Chidiom = (function () {
    function Chidiom() {
    }
    return Chidiom;
}());
exports.Chidiom = Chidiom;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Chidioms';
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>{{chidiom.name}} details!</h2>\n    <div><label>id: </label>{{chidiom.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"chidiom.name\" placeholder=\"name\">\n    </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map