import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // this.product = this.productService.getProductById(params.get('productId')!)
      // this.product = products[+params.get('productId')!]
      const productObservable = this.productService.getProductById(params.get('productId')!)
      productObservable.subscribe(
        (data) => {
          this.product = data
        },
        (err) => {

        }
      )
    })


    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // debugger
    // console.log('just before subscribe');
    // debugger
    // observable.subscribe({
    //   next(x) {
    //     console.log('got value ' + x);
    //   },
    //   error(err) {
    //     console.error('something wrong occurred: ' + err);
    //   },
    //   complete() {
    //     console.log('done');
    //   },
    // });
    // console.log('just after subscribe');

  }

}
