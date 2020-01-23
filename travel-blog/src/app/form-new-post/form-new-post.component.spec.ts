import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewPostComponent } from './form-new-post.component';

describe('FormNewPostComponent', () => {
  let component: FormNewPostComponent;
  let fixture: ComponentFixture<FormNewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
