import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

import { render, screen, fireEvent } from '@testing-library/angular';


describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('Counter with Angular Testing Library', () => {
  test('should render counter', async () => {
    await render(CounterComponent, {
      componentProperties: { counter: 5 },
    })
    expect(screen.getByText('Current Count: 5')).toBeInTheDocument()
  })

  test('should increment the counter on click', async () => {
    await render(CounterComponent, {
      componentProperties: { counter: 5 },
    })
    fireEvent.click(screen.getByText('+'))
    expect(screen.getByText('Current Count: 6')).toBeInTheDocument()
  })
})