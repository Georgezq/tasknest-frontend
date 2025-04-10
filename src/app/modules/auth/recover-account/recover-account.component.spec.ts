import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverAccountComponent } from './recover-account.component';

describe('RecoverAccountComponent', () => {
  let component: RecoverAccountComponent;
  let fixture: ComponentFixture<RecoverAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoverAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
