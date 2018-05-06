import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavPageComponent } from './fav-page.component';

describe('FavPageComponent', () => {
  let component: FavPageComponent;
  let fixture: ComponentFixture<FavPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
