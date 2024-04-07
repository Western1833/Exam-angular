import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastThreeProductsComponent } from './last-three-products.component';

describe('LastThreeProductsComponent', () => {
  let component: LastThreeProductsComponent;
  let fixture: ComponentFixture<LastThreeProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastThreeProductsComponent]
    });
    fixture = TestBed.createComponent(LastThreeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
