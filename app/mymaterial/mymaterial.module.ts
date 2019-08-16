import {NgModule} from '@angular/core';

// Import all needed libraries for our custom app
import {
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

// Add each imported library to the Components
const mymaterial = [
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [
    mymaterial
  ],
  exports: [
    mymaterial
  ]
})
export class MymaterialModule {
}
