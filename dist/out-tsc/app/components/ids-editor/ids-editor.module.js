import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsEditorRoutingModule } from './ids-editor-routing.module';
import { IdsEditorComponent } from './ids-editor.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsEditorModule = class IdsEditorModule {
};
IdsEditorModule = __decorate([
    NgModule({
        declarations: [
            IdsEditorComponent,
            ExampleComponent
        ],
        imports: [
            CommonModule,
            IdsEditorRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsEditorModule);
export { IdsEditorModule };
//# sourceMappingURL=ids-editor.module.js.map