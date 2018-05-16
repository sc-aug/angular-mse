import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FavPageComponent } from './fav-page.component';
import { FavTableComponent } from './fav-table/fav-table.component';
import { FavTableRowComponent } from './fav-table-row/fav-table-row.component';

@NgModule({
    declarations: [
        FavPageComponent,
        FavTableComponent,
        FavTableRowComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class FavPageModule { }