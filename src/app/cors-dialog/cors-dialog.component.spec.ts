import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsDialogComponent } from './cors-dialog.component';

describe('CorsDialogComponent', () => {
  let component: CorsDialogComponent;
  let fixture: ComponentFixture<CorsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
