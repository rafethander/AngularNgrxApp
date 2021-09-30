import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationDetailComponent } from './user-information-detail.component';

describe('UserInformationDetailComponent', () => {
  let component: UserInformationDetailComponent;
  let fixture: ComponentFixture<UserInformationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInformationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
