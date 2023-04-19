import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { InvestmentComponent } from 'src/app/pages/investment/investment.component';
import { Component } from '@angular/core';
import { InvestmentAddComponent } from 'src/app/investment-add/investment-add.component';
import { EditinvestmentComponent } from 'src/app/editinvestment/editinvestment.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'investment',      component: InvestmentComponent },
    { path : 'investmentAdd', component : InvestmentAddComponent},
    { path : 'investmentedit', component : EditinvestmentComponent},
    { path : 'investmentedit/:idInvest', component : EditinvestmentComponent},
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
