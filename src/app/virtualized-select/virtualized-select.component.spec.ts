import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualizedSelectComponent } from './virtualized-select.component';

describe('VirtualizedSelectComponent', () => {
  let component: VirtualizedSelectComponent;
  let fixture: ComponentFixture<VirtualizedSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualizedSelectComponent]
    });
    fixture = TestBed.createComponent(VirtualizedSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
