import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProdutosComponent } from 'app/produtos/produtos.component';
const homeRoutes: Routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full' }
    ];
export const leitoresRouting = RouterModule.forChild(homeRoutes);
