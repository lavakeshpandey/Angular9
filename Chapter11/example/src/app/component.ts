import { Model } from './repository.model';
import { Component, ApplicationRef } from '@angular/core';
import { Product } from './product.model';

@Component({
    selector: 'app',
    templateUrl: 'template.html'
})
export class ProductComponent {
    model: Model = new Model();
    fontSizeWithUnits: string = '30px';
    fontSizeWithoutUnits: string = '30';
    targetName: string = "Kayak";

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
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
        let product = this.model.getProduct(key);

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
        let product = this.getProductByPosition(position);
        return 'p-2' + (product.price < 50 ? 'bg-info' : 'bg-warning');
    }
    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }
    getProducts(): Product[] {
        this.model.getProducts();
    }
    getProductCount(): number {
        return this.getProducts().length;
    }


}
