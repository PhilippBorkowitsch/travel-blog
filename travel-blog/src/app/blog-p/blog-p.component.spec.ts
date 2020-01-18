import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPComponent } from './blog-p.component';

describe('BlogPComponent', () => {
  let component: BlogPComponent;
  let fixture: ComponentFixture<BlogPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
