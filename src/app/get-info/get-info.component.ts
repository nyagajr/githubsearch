import { Component, OnInit } from '@angular/core';
import { GetInfoService } from '../get-info.service';
import { RepositoryService } from '../repository-service';
import { Users } from '../users';
import { Repository } from '../repository';

@Component({
  selector: 'app-get-info',
  templateUrl: './get-info.component.html',
  providers:[
    GetInfoService,
    RepositoryService
  ],
  styleUrls: ['./get-info.component.css']
})
export class GetInfoComponent implements OnInit {
  repoArrayNew: any[];
  rep: Repository;
  repoService:any[]
  constructor(private infoService:GetInfoService, private repoServices:RepositoryService){
    this.repoServices.getRepository();

   }

     ngOnInit() {

       this.infoService.updateUserName(this.userName);
       console.log(this.userName);

       this.repoServices.updateUserName(this.userName);
       console.log(this.userName);

       this.infoService.getUser();
       this.name=this.infoService.info;
  }
  }
