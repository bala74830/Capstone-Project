import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewqueiresComponent } from './viewqueires.component';

describe('ViewqueiresComponent', () => {
  let component: ViewqueiresComponent;
  let fixture: ComponentFixture<ViewqueiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewqueiresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewqueiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
