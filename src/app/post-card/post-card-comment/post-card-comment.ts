import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector:'post-card-comment',
    templateUrl:'./post-card-comment.html',
    styleUrls:['./post-card-comment.css']
})
export class PostCardComment implements OnInit{
    @Input() comments;
    constructor(){
    }
    ngOnInit(){
        console.log("Comments:",this.comments);
    }
}