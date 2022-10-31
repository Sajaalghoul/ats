import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangaugesAddComponent } from './langauges-add.component';

describe('LangaugesAddComponent', () => {
  let component: LangaugesAddComponent;
  let fixture: ComponentFixture<LangaugesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangaugesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangaugesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
