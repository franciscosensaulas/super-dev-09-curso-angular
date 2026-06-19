import { Routes } from '@angular/router';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { CidadeIndaial } from './cidade-indaial/cidade-indaial';
import { FormCamposBasico } from './form-campos-basico/form-campos-basico';
import { ProdutoCadastrar } from './produtos/produto-cadastrar/produto-cadastrar';
import { ProdutoListar } from './produtos/produto-listar/produto-listar';
import { ProdutoEditar } from './produtos/produto-editar/produto-editar';
import { ClienteCadastrar } from './clientes/cliente-cadastrar/cliente-cadastrar';
import { ClienteListar } from './clientes/cliente-listar/cliente-listar';
import { ClienteEditar } from './clientes/cliente-editar/cliente-editar';

export const routes: Routes = [
    { path: "cidade/blumenau", loadComponent: () => CidadeBlumenau},
    { path: "cidade/indaial", loadComponent: () => CidadeIndaial},
    { path: "formulario/campos-basico", loadComponent: () => FormCamposBasico},
    { path: "produtos/cadastrar", loadComponent: () => ProdutoCadastrar },
    { path: "produtos", loadComponent: () => ProdutoListar},
    { path: "produtos/editar/:id", loadComponent: () => ProdutoEditar},
    
    { path: "clientes/cadastrar", loadComponent: () => ClienteCadastrar},
    { path: "clientes", loadComponent: () => ClienteListar},
    // http://localhost:4200/clientes/editar/qpokewpowqkep12ui903i1203k12k3
    { path: "clientes/editar/:id", loadComponent: () => ClienteEditar }
];