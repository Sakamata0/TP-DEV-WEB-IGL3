import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adresse } from './adresse';

describe('Adresse', () => {
  let component: Adresse;
  let fixture: ComponentFixture<Adresse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adresse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adresse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
