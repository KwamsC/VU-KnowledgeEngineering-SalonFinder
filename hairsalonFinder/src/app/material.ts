import { MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatSelectModule,
        MatChipsModule,
        MatRadioModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatSelectModule,
        MatChipsModule,
        MatRadioModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
    ],
})
export class MaterialModule { }
