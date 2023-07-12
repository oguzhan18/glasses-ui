import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsUiLibraryComponent } from './as-ui-library.component';

describe('AsUiLibraryComponent', () => {
  let component: AsUiLibraryComponent;
  let fixture: ComponentFixture<AsUiLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsUiLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsUiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
