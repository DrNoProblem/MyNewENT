import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartComponent } from './admin-part.component';

describe('AdminPartComponent', () => {
  let component: AdminPartComponent;
  let fixture: ComponentFixture<AdminPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
