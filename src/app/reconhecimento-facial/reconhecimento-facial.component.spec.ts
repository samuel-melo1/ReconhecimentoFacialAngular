import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconhecimentoFacialComponent } from './reconhecimento-facial.component';

describe('ReconhecimentoFacialComponent', () => {
  let component: ReconhecimentoFacialComponent;
  let fixture: ComponentFixture<ReconhecimentoFacialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReconhecimentoFacialComponent]
    });
    fixture = TestBed.createComponent(ReconhecimentoFacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
