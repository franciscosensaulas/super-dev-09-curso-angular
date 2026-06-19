import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClienteModel } from '../../models/cliente.model';

@Component({
  selector: 'app-cliente-listar',
  imports: [RouterLink],
  templateUrl: './cliente-listar.html',
  styleUrl: './cliente-listar.scss',
})
export class ClienteListar {
  clientes = signal<ClienteModel[]>([]);

  ngOnInit(){
    this.carregarClientes();
  }

  carregarClientes(): void {
    const clientesString = localStorage.getItem("clientes");
    if(clientesString === null){
      return;
    }

    const clientesLista = JSON.parse(clientesString) as ClienteModel[];
    const clientesOrdenados = clientesLista.sort((x, y) => x.nome.localeCompare(y.nome));
    this.clientes.set(clientesOrdenados);
  }

  apagar(id: string): void {
    this.clientes.update(cliente => cliente.filter(x => x.id != id));

    // Gerar uma string da lista de clientes
    const clientesString = JSON.stringify(this.clientes());
    localStorage.setItem("clientes", clientesString);
  }
}
