import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhlfComponent } from './mhlf.component';

describe('MhlfComponent', () => {
  let component: MhlfComponent;
  let fixture: ComponentFixture<MhlfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MhlfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MhlfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
