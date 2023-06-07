import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

export const checkoutGuard: CanActivateFn = () => {
  if (inject(CartService).isEmpty) {
    inject(Router).navigate(['/shop']);
    return false;
  }
  return true;
};
