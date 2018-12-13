import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatSelectModule],
    exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatSelectModule],
})
export class MaterialModule { }
