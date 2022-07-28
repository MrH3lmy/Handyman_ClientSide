import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEditProfileComponent } from './client-edit-profile.component';

describe('ClientEditProfileComponent', () => {
  let component: ClientEditProfileComponent;
  let fixture: ComponentFixture<ClientEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientEditProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
