import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsunComponent } from './usun.component';

describe('UsunComponent', () => {
  let component: UsunComponent;
  let fixture: ComponentFixture<UsunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
