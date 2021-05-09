import { DisplayComponent } from './display.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [DisplayComponent], // Import all component here
    imports: [CommonModule, FormsModule, IonicModule],
    exports: [DisplayComponent], // Import all component here
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DisplayModule { }
