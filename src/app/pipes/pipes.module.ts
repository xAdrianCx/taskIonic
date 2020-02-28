import { NgModule } from '@angular/core';
import { FiltroCompletadoPipe } from './filtro-completado.pipe';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [FiltroCompletadoPipe],
  exports: [FiltroCompletadoPipe],
  imports: [
    IonicModule
  ]
})
export class PipesModule { }
