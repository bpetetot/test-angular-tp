import { TestBed, inject } from '@angular/core/testing';

import { CheckoutCustomerService } from './checkout-customer.service';

describe('CheckoutCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckoutCustomerService]
    });
  });

  it('should be created', inject([CheckoutCustomerService], (service: CheckoutCustomerService) => {
    expect(service).toBeTruthy();
  }));
});
