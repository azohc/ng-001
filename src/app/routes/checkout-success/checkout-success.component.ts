import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  imports: [RouterModule, SharedModule],
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
