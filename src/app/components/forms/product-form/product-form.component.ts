import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from 'src/app/products/product.model';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html' 
})
export class ProductFormComponent implements OnInit {
    @Input() product: Product;

    @Output() handleSubmit: EventEmitter<Product> = new EventEmitter<Product>();
    
    constructor() {}

    ngOnInit() {
    }

    onSubmit(f: any) {
        if (f.valid) {
            this.handleSubmit.emit(this.product);
        }
    }
}