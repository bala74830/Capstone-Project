import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewurlComponent } from './renewurl.component';

describe('RenewurlComponent', () => {
  let component: RenewurlComponent;
  let fixture: ComponentFixture<RenewurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RenewurlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
