import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'my-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})

  password1:string="";
  password2:string="";
 constructor(){
  this.password1;
  this.password2;
 }
  submitForm():void {
    
    if (this.password1 === this.password2) {
      // Passwords match, you can proceed with further actions
      console.log("Passwords match!");
      alert("Passwords match!");
    } else {
      // Passwords do not match, handle the error
      console.log('Passwords do not match!');
      alert("Passwords do not match!");
}
}
}

 

    
  
