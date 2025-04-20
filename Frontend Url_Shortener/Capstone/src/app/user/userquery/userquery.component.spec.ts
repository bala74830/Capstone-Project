import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserqueryComponent } from './userquery.component';

describe('UserqueryComponent', () => {
  let component: UserqueryComponent;
  let fixture: ComponentFixture<UserqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserqueryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
