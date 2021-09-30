import { ProvideUsers, GetById } from './../../Store/Actions';
import { UserInformationService } from './user-information.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'],
  providers:[
    UserInformationService
  ]
})
export class UserInformationComponent implements OnInit {
  public title: string="Users Informations";
  public titlePopup: string="Information Details";
  public userList: User[]=[];
  public isActive:boolean=false;
  public selectedItem!: number;
  public dataSource: Observable<User[]>;
  public openDialog!: EventEmitter<any>;
  public sendItem: User=new User();


  
  constructor(
    private userInformationService: UserInformationService,
    private store: Store<{users: User[]}>) {
      this.dataSource=this.store.select(state=>state.users);
     }

   ngOnInit(): void {
    this.userInformationService.GetDatas().subscribe(result=>{
      this.userList=User.mapList(result);
      this.store.dispatch(ProvideUsers({users: this.userList}));
    });


    
  }



  OnClick(e: any){
    this.isActive=true;
    this.selectedItem=e;
    this.store.dispatch(GetById({id: this.selectedItem}));
    this.dataSource.subscribe((data)=>{
      console.log(data[0])
      this.sendItem=data[0];
    })
  }

  onHiding(){
    this.isActive=false;
    this.store.dispatch(ProvideUsers({users: this.userList}))
  }

}
