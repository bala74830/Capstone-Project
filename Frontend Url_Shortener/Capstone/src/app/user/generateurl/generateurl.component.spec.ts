import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateurlComponent } from './generateurl.component';

describe('GenerateurlComponent', () => {
  let component: GenerateurlComponent;
  let fixture: ComponentFixture<GenerateurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateurlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
