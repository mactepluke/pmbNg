import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsHistoryPageComponent } from './operations-history-page.component';

describe('OperationsHistoryPageComponent', () => {
  let component: OperationsHistoryPageComponent;
  let fixture: ComponentFixture<OperationsHistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsHistoryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
