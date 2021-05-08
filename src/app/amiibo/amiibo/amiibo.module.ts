import { AmiiboComponent } from './amiibo.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from '../display/display.component';


@NgModule({
    declarations: [AmiiboComponent,DisplayComponent], // Import all component here
    imports: [CommonModule, FormsModule, IonicModule],
    exports: [AmiiboComponent], // Import all component here
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AmiiboModule { }
