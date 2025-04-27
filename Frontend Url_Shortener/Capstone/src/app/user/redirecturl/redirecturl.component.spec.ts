import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirecturlComponent } from './redirecturl.component';

describe('RedirecturlComponent', () => {
  let component: RedirecturlComponent;
  let fixture: ComponentFixture<RedirecturlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedirecturlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirecturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
