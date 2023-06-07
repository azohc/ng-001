import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

export const checkoutSuccessGuard: CanActivateFn = () => {
  if (inject(CartService).checkedOut) {
    inject(Router).navigate(['/shop']);
    return false;
  }
  return true;
};
