import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SearchPageComponent } from './search-page.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { ResultTableRowComponent } from './result-table-row/result-table-row.component';
import { SearchBoxComponent } from './search-box/search-box.component';


@NgModule({
    declarations: [
        SearchPageComponent,
        SearchBoxComponent,
        ResultTableComponent,
        ResultTableRowComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class SearchPageModule { }