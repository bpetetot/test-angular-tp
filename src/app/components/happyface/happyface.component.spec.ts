import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyfaceComponent } from './happyface.component';

describe('HappyfaceComponent', () => {
  let component: HappyfaceComponent;
  let fixture: ComponentFixture<HappyfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
