import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ApproverComponent } from './components/approver/approver.component';
import { ManagerComponent } from './components/manager/manager.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { PrintComponent } from './components/print/print.component';
import { QaComponent } from './components/qa/qa.component';
import { ShipmentComponent } from './components/shipment/shipment.component';
import { InventorymanagementComponent } from './components/inventorymanagement/inventorymanagement.component';
import { BarchatComponent } from './shared/charts/barchat/barchat.component';
import { StackbarComponent } from './shared/charts/stackbar/stackbar.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApproverComponent,
    ManagerComponent,
    InventoryComponent,
    PrintComponent,
    QaComponent,
    ShipmentComponent,
    InventorymanagementComponent,    
      BarchatComponent, StackbarComponent,

  ],
  imports: [
      BrowserModule,
      ChartsModule,
    RouterModule.forRoot([
      {
        path:"approver",
        component:ApproverComponent

      },
      {
        path:"inventory",
        component:InventoryComponent

      },
      {
        path:"manager",
        component:ManagerComponent

      },
       {
        path:"print",
        component:PrintComponent

      },
       {
        path:"qa",
        component:QaComponent

      },
      {
        path:"inventorymanagement",
        component:InventorymanagementComponent
      },
      {
        path:"shipment",
        component:ShipmentComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
