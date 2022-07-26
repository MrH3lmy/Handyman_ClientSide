import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSginupComponent } from './client-sginup.component';

describe('ClientSginupComponent', () => {
  let component: ClientSginupComponent;
  let fixture: ComponentFixture<ClientSginupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSginupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSginupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
