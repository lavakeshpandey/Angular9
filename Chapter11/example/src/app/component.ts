import { Model } from './repository.model';
import { Component, ApplicationRef } from '@angular/core';
import { Product } from './product.model';

@Component({
    selector: 'app',
    templateUrl: 'template.html'
})
export class ProductComponent {
    model: Model = new Model();
    fontSizeWithUnits = '30px';
    fontSizeWithoutUnits = '30';
    targetName = 'Kayak';
    counter: number = 1;

    constructor(ref: ApplicationRef) {
        ( window as any).appRef = ref;
        ( window as any).model = this.model;
    }
    getClasses(key: number): string {
        const product = this.model.getProduct(key);

        return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
    }
    getClassMap(key: number): Object {
        const product = this.model.getProduct(key);

        return {
            'text-center bg-danger': product.name == 'Kayak',
            'bg-info': product.price < 50
        };
    }
    getStyles(key: number) {
        const product = this.model.getProduct(key);

        return {
            fontSize: '30px',
            'margin.px': 100,
            color: product.price > 50 ? 'red' : 'green'
        };
    }
    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }
    getClassesByPosition(position: number): string {
        const product = this.getProductByPosition(position);
        return 'p-2' + (product.price < 50 ? 'bg-info' : 'bg-warning');
    }
    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }
    getProducts(): Product[] {
        return this.model.getProducts();
    }
    getProductCount(): number {
        console.log('getProductCount invoked.');
        return this.getProducts().length;
    }
    getKey(index: number, product: Product) {
        return product.id;
    }
    get nextProduct(): Product{
        return this.model.getProducts().shift();
    }
    getProductPrice(index: number): number{
        return Math.floor(this.getProduct(index).price);
    }
}
