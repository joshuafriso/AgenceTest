import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrawPage } from './draw';
import { CanvasDrawComponent } from '../../components/canvas-draw/canvas-draw';




@NgModule({
  declarations: [
    DrawPage,
    CanvasDrawComponent
  ],
  imports: [
    IonicPageModule.forChild(DrawPage),
  ],
})
export class DrawPageModule {}
