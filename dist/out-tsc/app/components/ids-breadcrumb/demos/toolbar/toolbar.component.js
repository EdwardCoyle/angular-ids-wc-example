import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ToolbarComponent = class ToolbarComponent {
    constructor() { }
    ngOnInit() {
        console.log('toolbar init');
    }
};
ToolbarComponent = __decorate([
    Component({
        selector: 'app-toolbar',
        templateUrl: './toolbar.component.html',
        styleUrls: ['./toolbar.component.css']
    })
], ToolbarComponent);
export { ToolbarComponent };
//# sourceMappingURL=toolbar.component.js.map