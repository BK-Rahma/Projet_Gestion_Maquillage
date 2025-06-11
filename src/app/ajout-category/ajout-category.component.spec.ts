import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCategoryComponent } from './ajout-category.component';

describe('AjoutCategoryComponent', () => {
  let component: AjoutCategoryComponent;
  let fixture: ComponentFixture<AjoutCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
