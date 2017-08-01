import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginCarritoComponent } from './loggin-carrito.component';

describe('LogginCarritoComponent', () => {
  let component: LogginCarritoComponent;
  let fixture: ComponentFixture<LogginCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogginCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogginCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
