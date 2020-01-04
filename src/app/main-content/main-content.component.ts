import { Component, OnInit } from '@angular/core';
import {PostCardService } from '../Services/post-card-service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  private jsonData;
  constructor(private PostCardService:PostCardService) { }

  ngOnInit() {
    this.jsonData=this.PostCardService.jsonData;
  }

}
