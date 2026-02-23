import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotzyLandingComponent } from './hotzy-landing';

describe('HotzyLanding', () => {
  let component: HotzyLandingComponent;
  let fixture: ComponentFixture<HotzyLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotzyLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotzyLandingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
