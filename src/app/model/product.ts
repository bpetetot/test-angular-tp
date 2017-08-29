export class Product {
  constructor(
    public title: string,
    public description: string,
    public photo: string,
    public price: number,
    public stock: number
  ) {}

  isTheLast = () => this.stock === 1;

  isAvailable = () => this.stock > 0;

  static clone = product =>
    new Product(
      product.title,
      product.description,
      product.photo,
      product.price,
      product.stock
    );
}
