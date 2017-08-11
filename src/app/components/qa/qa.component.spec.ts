import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaComponent } from './qa.component';

describe('QaComponent', () => {
  let component: QaComponent;
  let fixture: ComponentFixture<QaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});