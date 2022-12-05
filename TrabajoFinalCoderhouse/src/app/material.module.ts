import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';  
import { MatDividerModule } from '@angular/material/divider';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from '@angular/material/menu';
import { DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule} from '@angular/material/select';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';


export const MY_FORMATS = {
    parse: {
      dateInput: "DD-MM-YYYY"
    },
    display: {
      dateInput: "DD-MM-YYYY",
      monthYearLabel: "MMM YYYY",
      dateA11yLabel: "DD-MM-YYYY",
      monthYearA11yLabel: "MMMM YYYY"
    }
  };


@NgModule({
    imports: [
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatSidenavModule,
        MatDividerModule, 
        MatTooltipModule,
        MatMenuModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatSnackBarModule,
        MatCardModule,
        MatDialogModule
    ],
    exports: [
        MatTableModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDatepickerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatDividerModule, 
        MatMenuModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatSnackBarModule,
        MatCardModule,
        MatDialogModule
    ],
    providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE]
        },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
    ]
})
export class MaterialModule{}