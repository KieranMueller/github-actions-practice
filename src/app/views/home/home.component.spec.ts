import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeComponent } from './home.component'
import { By } from '@angular/platform-browser'

describe('HomeComponent', () => {
    let component: HomeComponent
    let fixture: ComponentFixture<HomeComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeComponent]
        })
            .compileComponents()

        fixture = TestBed.createComponent(HomeComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should include button', () => {
        const buttonEl = fixture.debugElement.query(By.css('#btn1'))
        expect(buttonEl).toBeTruthy()
        expect(buttonEl.nativeElement.textContent).toContain('Click Me')
    })
})
