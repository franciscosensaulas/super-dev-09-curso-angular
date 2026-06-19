import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutoModel } from '../../models/produto.model';

@Component({
  selector: 'app-produto-listar',
  imports: [RouterLink],
  templateUrl: './produto-listar.html',
  styleUrl: './produto-listar.scss',
})
export class ProdutoListar {
  produtos = signal<ProdutoModel[]>([]);

  ngOnInit() {
    this.carregarProdutos();
  }

  readonly total = computed(() => {
    let total = 0;
    this.produtos().forEach(produto => {
      total += produto.preco! * produto.estoque!;
    });
    return total.toFixed(2).replace(".", ",");
  })

  carregarProdutos(): void {
    const produtosString = localStorage.getItem("produtos");
    if (produtosString === null) {
      return;
    }

    const produtosLista = JSON.parse(produtosString) as ProdutoModel[];

    const produtosOrdenados = produtosLista.sort((x, y) => x.nome.localeCompare(y.nome));
    this.produtos.set(produtosOrdenados);
  }

  apagar(id: string): void {
    this.produtos.update(produtos => produtos.filter(x => x.id !== id))
    const produtosString = JSON.stringify(this.produtos());
    localStorage.setItem("produtos", produtosString);
  }
}
