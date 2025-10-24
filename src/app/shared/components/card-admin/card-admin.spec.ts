import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAdmin } from './card-admin';

describe('CardAdmin', () => {
  let component: CardAdmin;
  let fixture: ComponentFixture<CardAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
