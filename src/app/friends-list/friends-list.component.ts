import { PostCardService } from './../Services/post-card-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

  public friendsListJson;
  public value='none';

  constructor(private PostCardService:PostCardService){
    console.log("Friends-List-Comp");
  }
  

  ngOnInit() {
    this.friendsListJson=this.PostCardService.friendsList;
  }

}
