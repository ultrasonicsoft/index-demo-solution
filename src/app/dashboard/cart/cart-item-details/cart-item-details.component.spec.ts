import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemDetailsComponent } from './cart-item-details.component';

describe('CartItemDetailsComponent', () => {
  let component: CartItemDetailsComponent;
  let fixture: ComponentFixture<CartItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
