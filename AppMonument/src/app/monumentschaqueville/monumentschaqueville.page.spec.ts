import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonumentschaquevillePage } from './monumentschaqueville.page';

describe('MonumentschaquevillePage', () => {
  let component: MonumentschaquevillePage;
  let fixture: ComponentFixture<MonumentschaquevillePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonumentschaquevillePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonumentschaquevillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
