import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianArticlesComponent } from './guardian-articles.component';

describe('GuardianArticlesComponent', () => {
  let component: GuardianArticlesComponent;
  let fixture: ComponentFixture<GuardianArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardianArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardianArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
