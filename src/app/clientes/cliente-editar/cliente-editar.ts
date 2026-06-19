import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClienteModel } from '../../models/cliente.model';

@Component({
  selector: 'app-cliente-editar',
  imports: [FormsModule, RouterLink],
  templateUrl: './cliente-editar.html',
  styleUrl: './cliente-editar.scss',
})
export class ClienteEditar {
  cliente = signal<ClienteModel>({
    id: "",
    email: "",
    nome: "",
    telefone: ""
  });

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    const idParaEditar = activeRoute.snapshot.paramMap.get("id");

    const clientesString = localStorage.getItem("clientes");
    if (clientesString === null) {
      alert("Nenhum cliente cadastrado")
      router.navigate(["/clientes"]);
      return;
    }

    const clientes = JSON.parse(clientesString) as ClienteModel[];
    const clientesEncontrados = clientes.filter(cliente => cliente.id === idParaEditar);
    if (clientesEncontrados.length === 0) {
      alert("Cliente não encontrado")
      router.navigate(["/clientes"]);
      return;
    }

    this.cliente.set(clientesEncontrados[0]);
  }

  salvar(): void{
    const clientes = this.carregarClientesDoLocalStorage();

    const indiceClienteParaEditar = clientes.findIndex(x => x.id === this.cliente().id);
    clientes[indiceClienteParaEditar].nome = this.cliente().nome;
    clientes[indiceClienteParaEditar].email = this.cliente().email;
    clientes[indiceClienteParaEditar].telefone = this.cliente().telefone;    

    const clienteString = JSON.stringify(clientes);
    localStorage.setItem("clientes", clienteString)

    alert("Cliente alterado com sucesso");

    this.router.navigate(["/clientes"]);
  }

  carregarClientesDoLocalStorage(): ClienteModel[]{
    const clientesString = localStorage.getItem("clientes");

    if (clientesString === null) {
      return [];
    }

    return JSON.parse(clientesString) as ClienteModel[];
  }
}
