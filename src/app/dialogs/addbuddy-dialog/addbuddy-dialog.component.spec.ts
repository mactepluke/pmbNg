import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbuddyDialogComponent } from './addbuddy-dialog.component';

describe('AddbuddyDialogComponent', () => {
  let component: AddbuddyDialogComponent;
  let fixture: ComponentFixture<AddbuddyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbuddyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbuddyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
