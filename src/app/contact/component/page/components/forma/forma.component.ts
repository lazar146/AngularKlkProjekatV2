import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaComponent{
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  messageFormControl = new FormControl('', [Validators.required]);

  constructor(private router: Router) {}
  

  forma(e: any) {
    e.preventDefault();
    if (this.emailFormControl.valid && this.messageFormControl.valid) {
      console.log('sss');
      this.router.navigateByUrl('/home');
    }
    else{
      alert("Popunite polja!")
    }
  }
}
