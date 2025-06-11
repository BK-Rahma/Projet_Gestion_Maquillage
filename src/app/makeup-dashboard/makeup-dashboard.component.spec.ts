import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupDashboardComponent } from './makeup-dashboard.component';

describe('MakeupDashboardComponent', () => {
  let component: MakeupDashboardComponent;
  let fixture: ComponentFixture<MakeupDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeupDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
