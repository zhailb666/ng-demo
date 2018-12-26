import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfHtmlComponent } from './pdf-html.component';

describe('PdfHtmlComponent', () => {
  let component: PdfHtmlComponent;
  let fixture: ComponentFixture<PdfHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
