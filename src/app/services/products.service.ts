import { Injectable } from '@angular/core';

import { Product } from '../model/product'

@Injectable()
export class ProductsService {

  public products: Product[] = [
    new Product(
      "Tronçoneuse",
      "Super pour découper du zombie.",
      "https://cdn.manomano.fr/tronconneuse-thermique-pro-ps5105ckit45-dolmar-L-12-42402_1.jpg",
      50,
      5
    ),
    new Product(
      "Glock",
      "Visez bien la tête du zombie et il ne resistera pas.",
      "https://www.armurerie-lavaux.com/images/produit/opti/Glock26_gen4_9x19.jpg",
      200,
      10
    ),
    new Product(
      "AK47",
      "Très pratique face à une horde de zombies.",
      "https://www.sportsmansoutdoorsuperstore.com/prodimages/35727-DEFAULT-m.jpg",
      300,
      3
    ),
    new Product(
      "Bazooka",
      "Dégommez tout avec ce bazooka multi-roquettes.",
      "https://img-new.cgtrader.com/items/9644/c262dbff12/bazooka-rocket-launcher-3d-model-max-obj-3ds-fbx-c4d.jpg",
      1000,
      1
    )
  ];

  constructor() { }

  getProducts = () => this.products

  decreaseStock = product => product.stock -= 1

  hasProducts = () => this.products.map(p => p.stock).reduce((a, v) => a + v, 0) !== 0
}
