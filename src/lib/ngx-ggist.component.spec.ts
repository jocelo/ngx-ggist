import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGgistComponent } from './ngx-ggist.component';

describe('NgxGgistComponent', () => {
  let component: NgxGgistComponent;
  let fixture: ComponentFixture<NgxGgistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxGgistComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGgistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render default gist', () => {
    console.log(component);
  });
});
