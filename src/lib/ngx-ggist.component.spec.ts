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
    expect(component).toBeInstanceOf(NgxGgistComponent);
  });

  it('should render default gist', () => {
    expect(component.iframe?.nativeElement.contentDocument.querySelector('script').attributes.src.value)
      .toBe(component.scriptSrc);
  });

  it('should load default options', () => {
    expect(component.lines.length).toBe(0);
    expect(component.width).toBe('600px');
    expect(component.height).toBe('inherit');
    expect(component.user).toBe('jocelo');
    expect(component.scriptId).toBe('dab6058aab6491b1da49336887d9d935');
  });

  it('should inject values into component', () => {
    component.lines = [1, 2, 3, 5, 8];
    component.updateLines();
    expect(component.theStyle).toContain('tr:nth-of-type(1)');
    expect(component.theStyle).toContain('tr:nth-of-type(2)');
    expect(component.theStyle).toContain('tr:nth-of-type(3)');
    expect(component.theStyle).toContain('tr:nth-of-type(5)');
    expect(component.theStyle).toContain('tr:nth-of-type(8)');
  })
});
