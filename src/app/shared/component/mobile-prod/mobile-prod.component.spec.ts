import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileProdComponent } from './mobile-prod.component';

describe('MobileProdComponent', () => {
  let component: MobileProdComponent;
  let fixture: ComponentFixture<MobileProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
