import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesClothesComponent } from './clothes-clothes.component';

describe('ClothesClothesComponent', () => {
  let component: ClothesClothesComponent;
  let fixture: ComponentFixture<ClothesClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesClothesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
