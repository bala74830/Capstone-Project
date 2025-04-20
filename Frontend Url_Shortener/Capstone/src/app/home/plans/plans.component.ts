import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-plans',
  standalone: false,
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {

  constructor(private planservice:ServiceService){}
  data:any[]=[]
  currentIndex: number = 0;
  ngOnInit(){
    this.getAllPlans();
  }

  getAllPlans(){
    this.planservice.getPlan().subscribe({next:(response)=>{
      this.data = response.content;
        console.log(this.data);
    },
    error:(error)=>{
      console.error(error);
      alert("Something went wrong");
    }
  })
  }

  showNextPlan() {
    if (this.data.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.data.length;
      console.log(this.data)
    }
  }

}
