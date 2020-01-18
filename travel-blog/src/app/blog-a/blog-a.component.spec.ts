import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAComponent } from './blog-a.component';

describe('BlogAComponent', () => {
  let component: BlogAComponent;
  let fixture: ComponentFixture<BlogAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
