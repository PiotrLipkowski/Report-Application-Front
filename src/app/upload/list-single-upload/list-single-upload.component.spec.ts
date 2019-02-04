import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSingleUploadComponent } from './list-single-upload.component';

describe('ListSingleUploadComponent', () => {
  let component: ListSingleUploadComponent;
  let fixture: ComponentFixture<ListSingleUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSingleUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSingleUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
