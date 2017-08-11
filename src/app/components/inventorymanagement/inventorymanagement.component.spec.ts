import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorymanagementComponent } from './inventorymanagement.component';

describe('InventorymanagementComponent', () => {
  let component: InventorymanagementComponent;
  let fixture: ComponentFixture<InventorymanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorymanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
