import { Company } from './../../../Models/Company';
import { Address } from './../../../Models/Address';
import { GetById, ProvideUsers } from './../../../Store/Actions';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/Models/User';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-information-detail',
  templateUrl: './user-information-detail.component.html',
  styleUrls: ['./user-information-detail.component.css']
})
export class UserInformationDetailComponent implements OnInit {

  @Input() set item(parameter: User){
    
    this.editForm.controls.name.setValue(parameter.name);
    this.editForm.controls.username.setValue(parameter.username);
    this.editForm.controls.email.setValue(parameter.email);
    this.editForm.controls.address1.setValue(`${parameter.address?.suite} / ${parameter.address?.street}`);
    this.editForm.controls.address2.setValue(`${parameter.address?.city} / ${parameter.address?.zipcode}`);
    this.editForm.controls.phone.setValue(parameter.phone);
    this.editForm.controls.website.setValue(parameter.website);
    this.editForm.controls.company1.setValue(parameter.company?.name);
    this.editForm.controls.company2.setValue(`${parameter.company?.catchPhrase} / ${parameter.company?.bs}`);
    this.editForm.controls.geo1.setValue(parameter.address?.geo?.lat);
    this.editForm.controls.geo2.setValue(parameter.address?.geo?.lng);
    
    
  }

  
 public editForm: FormGroup=new FormGroup({
    name: new FormControl(""),
    username: new FormControl(""),
    email: new FormControl(""),
    address1: new FormControl(""),
    address2:new FormControl(""),
    phone: new FormControl(""),
    website: new FormControl(""),
    company1: new FormControl(""),
    company2: new FormControl(""),
    geo1: new FormControl(""),
    geo2: new FormControl("")
  })


  constructor() {
   }

  ngOnInit(): void {
    
  }


  


  
}
