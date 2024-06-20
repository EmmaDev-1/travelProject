import { Routes } from '@angular/router';
import { CountrySelectionComponent } from './country-selection/country-selection.component';
import { BudgetInputComponent } from './budget-input/budget-input.component';
import { SummaryComponent } from './summary/summary.component';
import { HistorialComponent } from './history/history.component';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';

export const routes: Routes = [
    { path: '', redirectTo: '/country-selection', pathMatch: 'full' },
    { path: 'country-selection', component: CountrySelectionComponent },
    { path: 'budget-input', component: BudgetInputComponent },
    { path: 'summary', component: SummaryComponent },
    { path: 'history', component: HistorialComponent },
    { path: 'language-switch', component: LanguageSwitchComponent }
  ];
