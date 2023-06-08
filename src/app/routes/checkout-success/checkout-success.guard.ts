import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

export const checkoutSuccessGuard: CanActivateFn = () => {
  const cartService = inject(CartService);
  const router = inject(Router);
  return cartService.checkedOut$.pipe(
    tap((checkedOut) => console.log('GUARD', checkedOut)),
    map(
      (checkedOut) => checkedOut || router.parseUrl('/shop')
    )
  );
};
