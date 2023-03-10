import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientsComponent } from '././recipients.component';

describe('BuddiesComponent', () => {
  let component: RecipientsComponent;
  let fixture: ComponentFixture<RecipientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
