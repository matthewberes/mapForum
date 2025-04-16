import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPinFormComponent } from './new-pin-form.component';

describe('NewPinFormComponent', () => {
  let component: NewPinFormComponent;
  let fixture: ComponentFixture<NewPinFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPinFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
