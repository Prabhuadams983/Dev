import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector :'post-comment-header',
    templateUrl:'./post-comment-header.html',
    styleUrls:['./post-comment-header.css']
})
export class PostCommentHeader implements OnInit{
    @Input() cmntHeader;
    ngOnInit(){
        console.log("Comment Header:",this.cmntHeader);
    }
}