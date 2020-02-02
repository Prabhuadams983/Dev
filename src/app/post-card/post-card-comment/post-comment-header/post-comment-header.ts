import { Component, Input, OnInit } from '@angular/core';
import { PostCardService } from 'src/app/Services/post-card-service';

@Component({
    selector :'post-comment-header',
    templateUrl:'./post-comment-header.html',
    styleUrls:['./post-comment-header.css']
})
export class PostCommentHeader implements OnInit{
    @Input() cmntHeader;
    constructor(private postCardService:PostCardService){}
    ngOnInit(){
        console.log("Comment Header:",this.cmntHeader);
        this.postCardService.subjectObs.subscribe((url:string)=>{
            this.cmntHeader.img = url;
        });
    }
}