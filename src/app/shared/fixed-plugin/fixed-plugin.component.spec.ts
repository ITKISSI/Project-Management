import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedPluginComponent } from './fixed-plugin.component';

describe('FixedPluginComponent', () => {
  let component: FixedPluginComponent;
  let fixture: ComponentFixture<FixedPluginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedPluginComponent]
    });
    fixture = TestBed.createComponent(FixedPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
