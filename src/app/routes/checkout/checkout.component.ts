import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  //  TODO  If users select USA (or any other specific country of your choice) in the country selectbox, the “State” input field will NOT be required. Otherwise it will be required.

  checkoutForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    termsAndConditions: new FormControl(
      false,
      Validators.requiredTrue
    ),
  });

  onSubmit() {
    console.warn(this.checkoutForm.value);
    this.router.navigateByUrl('/success');
    this.cartService.clearCart();
  }

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}
}