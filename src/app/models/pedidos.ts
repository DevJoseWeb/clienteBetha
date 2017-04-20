 import {Pessoas} from './pessoas';
 import {Produtos} from './produtos';
 export class Pedidos {
   idpedidos: number;
   datapedido: string;
   public fkprodutos:  Produtos = new Produtos();
   public fkpessoas:  Pessoas = new Pessoas();
 }