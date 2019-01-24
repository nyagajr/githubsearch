import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInfoComponent } from './get-info.component';

describe('GetInfoComponent', () => {
  let component: GetInfoComponent;
  let fixture: ComponentFixture<GetInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
