import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from '@angular/material/icon';

import { MatDialogModule } from '@angular/material/dialog';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatGridListModule } from '@angular/material/grid-list';

import { MatButtonModule } from '@angular/material/button';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatCardModule } from '@angular/material/card';

import { MatMenuModule } from '@angular/material/menu';

import { MatTableModule } from '@angular/material/table';

import { MatSnackBarModule } from '@angular/material/snack-bar';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatSidenavModule,
  MatGridListModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatSnackBarModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules],
})
export class MaterialModule {}
