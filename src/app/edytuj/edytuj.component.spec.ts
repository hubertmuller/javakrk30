import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdytujComponent } from './edytuj.component';

describe('EdytujComponent', () => {
  let component: EdytujComponent;
  let fixture: ComponentFixture<EdytujComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdytujComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdytujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
