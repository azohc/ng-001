import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

export const checkoutSuccessGuard: CanActivateFn = () => {
  const cartService = inject(CartService);
  const router = inject(Router);
  return cartService.checkedOut$.pipe(
    map(
      (checkedOut) => checkedOut || router.parseUrl('/shop')
    )
  );
};
