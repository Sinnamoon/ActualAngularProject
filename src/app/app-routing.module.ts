import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { GuardianArticlesComponent } from './guardian-articles/guardian-articles.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'guardianarticle/:id', component: GuardianArticlesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'article/:id', component: ArticleComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
