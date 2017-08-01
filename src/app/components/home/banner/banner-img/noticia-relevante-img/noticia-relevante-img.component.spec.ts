import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaRelevanteImgComponent } from './noticia-relevante-img.component';

describe('NoticiaRelevanteImgComponent', () => {
  let component: NoticiaRelevanteImgComponent;
  let fixture: ComponentFixture<NoticiaRelevanteImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaRelevanteImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaRelevanteImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
