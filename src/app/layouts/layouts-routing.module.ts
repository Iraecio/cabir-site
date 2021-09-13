import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency/agency.component';

const routes: Routes = [
  {
    path: '',
    component: AgencyComponent,
    data: {
      title: "Cabir | Consultoria de negócios de TI",
      content: "Agência de Design e Desenvolvimento Web"
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
