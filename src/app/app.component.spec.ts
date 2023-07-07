import { TestBed } from '@angular/core/testing';
import {AppMainComponent} from "./main/app-main.component";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppMainComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppMainComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'A3'`, () => {
  //   const fixture = TestBed.createComponent(AppMainComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('A3');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppMainComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('A3 app is running!');
  });
});
