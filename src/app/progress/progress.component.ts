import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { step } from '../model/stepper.model';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit, AfterViewInit {
  @Input() data:step[] = [];

  title = 'stepper';
  width:any;
  constructor(private elem: ElementRef){}

  ngOnInit(): void {
   this.width = 45;
  }

  ngAfterViewInit() {

    const  previousBtn:any  =  document.getElementById('previousBtn');
    const  nextBtn : any =  document.getElementById('nextBtn');
    const  finishBtn : any =  document.getElementById('finishBtn');
    const  content : any =  document.getElementById('content');
    let bullets = this.elem.nativeElement.querySelectorAll(".bullet");

    const MAX_STEPS = 7;
    let currentStep = 1;
    this.elem.nativeElement.querySelector('#nextBtn').addEventListener('click', (event:any) => {
      bullets[currentStep  -  1].classList.add('completed');
      currentStep  +=  1;
      previousBtn.disabled  =  false;
      if  (currentStep  ===  MAX_STEPS)  {
        nextBtn.disabled  =  true;
        finishBtn.disabled  =  false;
      }
      content.innerText  =  `Step Number ${currentStep}`;  
    });

    this.elem.nativeElement.querySelector('#previousBtn').addEventListener('click', (event:any) => {
      bullets[currentStep  -  2].classList.remove('completed');
      currentStep  -=  1;
      nextBtn.disabled  =  false;
      finishBtn.disabled  =  true;
      if  (currentStep  ===  1)  {
        previousBtn.disabled  =  true;
      }
      content.innerText  =  `Step Number ${currentStep}`;  
    });
  }
}
