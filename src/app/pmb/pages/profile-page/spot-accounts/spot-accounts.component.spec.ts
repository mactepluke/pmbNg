import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotAccountsComponent } from './spot-accounts.component';

describe('SpotAccountsComponent', () => {
  let component: SpotAccountsComponent;
  let fixture: ComponentFixture<SpotAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
