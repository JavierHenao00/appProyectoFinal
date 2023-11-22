import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'edit-student',
    loadChildren: () => import('./Edit/edit-student/edit-student.module').then( m => m.EditStudentPageModule)
  },
  {
    path: 'registrar-alumno',
    loadChildren: () => import('./registrar-alumno/registrar-alumno.module').then( m => m.RegistrarAlumnoPageModule)
  },
  {
    path: 'recoger',
    loadChildren: () => import('./recoger/recoger.module').then( m => m.RecogerPageModule)
  },
  {
    path: 'registro-padre',
    loadChildren: () => import('./registro-padre/registro-padre.module').then( m => m.RegistroPadrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
