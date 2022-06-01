import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteobjectComponent } from './siteobject.component';

describe('SiteobjectComponent', () => {
  let component: SiteobjectComponent;
  let fixture: ComponentFixture<SiteobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteobjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
