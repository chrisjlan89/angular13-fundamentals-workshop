import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { AdminPayrollComponent } from './examples/child-routes/admin-payroll/admin-payroll.component';
import { AdminVacationComponent } from './examples/child-routes/admin-vacation/admin-vacation.component';
import { AdminComponent } from './examples/child-routes/admin.component';
import { ExamplesComponent } from './examples/examples.component';
import { ProtectedComponent } from './examples/protected/protected.component';
import { RouteParamsComponent } from './examples/route-params/route-params.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'examples',
    component: ExamplesComponent,
    children: [
      {
        path: 'child',
        component: AdminComponent,
        children: [
          {
            path: 'payroll',
            component: AdminPayrollComponent,
          },
          { path: 'vacation', component: AdminVacationComponent },
        ],
      },
      { path: 'params', component: RouteParamsComponent },
      { path: 'params/:id', component: RouteParamsComponent },
      {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]}
    ],
  },

  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
