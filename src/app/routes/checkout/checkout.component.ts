import { CommonModule } from '@angular/common';
import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent
  implements OnInit, OnDestroy
{
  COUNTRY_USA = 'USA';
  COUNTRY_SPAIN = 'Spain';
  countries = [this.COUNTRY_USA, this.COUNTRY_SPAIN];

  sub?: Subscription;

  checkoutForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    country: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    termsAndConditions: new FormControl(
      false,
      Validators.requiredTrue
    ),
  });

  get stateRequired() {
    const country =
      this.checkoutForm.controls.country.value;
    return country === this.COUNTRY_USA;
  }

  onSubmit() {
    this.cartService.checkOut(this.checkoutForm.value);
    // TODO navigate to success depending on checkOut's http request success/failure
    this.router.navigateByUrl('/success');
  }

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.sub =
      this.checkoutForm.controls.country.valueChanges.subscribe(
        (country) => {
          const stateFC = this.checkoutForm.controls.state;
          stateFC.clearValidators();
          if (country === this.COUNTRY_USA) {
            stateFC.addValidators(Validators.required);
          }
          stateFC.updateValueAndValidity();
        }
      );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
