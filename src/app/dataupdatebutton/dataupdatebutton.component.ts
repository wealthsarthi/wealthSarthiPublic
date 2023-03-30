import { Component, OnInit, ElementRef} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StepperFormComponent } from '../stepper-form/stepper-form.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-dataupdatebutton',
  templateUrl: './dataupdatebutton.component.html',
  styleUrls: ['./dataupdatebutton.component.css']
})
export class DataupdatebuttonComponent implements OnInit {

  
  constructor(private elementRef: ElementRef) { }
  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  onSubmit(form: NgForm) {
    const myFormData = form.value; // declare and initialize the variable inside onSubmit

    //const formDataJson = JSON.stringify(myFormData);
    //console.log(formDataJson);

    console.log(myFormData); // log the form data
  }
  

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
