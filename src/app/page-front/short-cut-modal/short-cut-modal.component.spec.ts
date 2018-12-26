import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCutModalComponent } from './short-cut-modal.component';

describe('ShortCutModalComponent', () => {
  let component: ShortCutModalComponent;
  let fixture: ComponentFixture<ShortCutModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortCutModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortCutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
