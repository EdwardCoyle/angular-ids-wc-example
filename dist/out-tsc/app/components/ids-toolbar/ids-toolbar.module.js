import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdsToolbarRoutingModule } from './ids-toolbar-routing.module';
import { IdsToolbarComponent } from './ids-toolbar.component';
import { ExampleComponent } from './demos/example/example.component';
import { OverflowedComponent } from './demos/overflowed/overflowed.component';
import { CenteredComponent } from './demos/centered/centered.component';
import { DemoListingModule } from '../demo-listing/demo-listing.module';
let IdsToolbarModule = class IdsToolbarModule {
};
IdsToolbarModule = __decorate([
    NgModule({
        declarations: [
            IdsToolbarComponent,
            ExampleComponent,
            OverflowedComponent,
            CenteredComponent
        ],
        imports: [
            CommonModule,
            IdsToolbarRoutingModule,
            DemoListingModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
], IdsToolbarModule);
export { IdsToolbarModule };
//# sourceMappingURL=ids-toolbar.module.js.map