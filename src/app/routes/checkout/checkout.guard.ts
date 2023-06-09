import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

export const checkoutGuard: CanActivateFn = () => {
  const cartService = inject(CartService);
  const router = inject(Router);
  return cartService.cartItems$.pipe(
    map(
      (items) => !!items.length || router.parseUrl('/shop')
    )
  );
};
