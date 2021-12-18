import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProddetailComponent } from './proddetail.component';

describe('ProddetailComponent', () => {
  let component: ProddetailComponent;
  let fixture: ComponentFixture<ProddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
