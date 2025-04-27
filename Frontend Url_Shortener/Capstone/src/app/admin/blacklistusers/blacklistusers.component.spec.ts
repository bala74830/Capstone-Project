import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistusersComponent } from './blacklistusers.component';

describe('BlacklistusersComponent', () => {
  let component: BlacklistusersComponent;
  let fixture: ComponentFixture<BlacklistusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlacklistusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlacklistusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
