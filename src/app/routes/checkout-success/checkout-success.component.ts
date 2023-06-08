import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss'],
})
export class CheckoutSuccessComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.resetCheckedOutFlag();
  }

  resetCheckedOutFlag() {
    this.cartService.deCheckOut();
  }
}
