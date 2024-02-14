import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendasTableComponent } from './tiendas-table.component';

describe('TiendasTableComponent', () => {
  let component: TiendasTableComponent;
  let fixture: ComponentFixture<TiendasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendasTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
