import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCutSelectComponent } from './short-cut-select.component';

describe('ShortCutSelectComponent', () => {
  let component: ShortCutSelectComponent;
  let fixture: ComponentFixture<ShortCutSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortCutSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortCutSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
