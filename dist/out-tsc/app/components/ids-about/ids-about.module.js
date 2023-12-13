import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsAboutRoutingModule } from './ids-about-routing.module';
import { IdsAboutComponent } from './ids-about.component';
import { ExampleComponent } from './demos/example/example.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsAboutModule = class IdsAboutModule {
};
IdsAboutModule = __decorate([
    NgModule({
        declarations: [
            IdsAboutComponent,
            ExampleComponent,
        ],
        imports: [
            CommonModule,
            IdsAboutRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsAboutModule);
export { IdsAboutModule };
//# sourceMappingURL=ids-about.module.js.map