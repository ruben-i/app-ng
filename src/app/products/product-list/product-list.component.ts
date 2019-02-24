import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product} from '../product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    @Input() products: Product[];
    @Output() deleteProduct: EventEmitter<any> = new EventEmitter<any>();
    @Output() changeState: EventEmitter<any> = new EventEmitter<any>();

    constructor(private router: Router) {}

    ngOnInit() {
    }

    handleDelete(product: Product) {
        this.deleteProduct.emit(product);
    }

    handleState(product: Product) {
        this.changeState.emit(product);
    }

    handleUpdate(id: number) {
        this.router.navigate(['productos', id]);
    }
}