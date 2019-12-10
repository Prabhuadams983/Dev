import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector:'post-sub-comments',
    templateUrl:'./post-sub-comment.html',
    styleUrls:['./post-sub-comment.css']
})
export class PostSubComments implements OnInit{
    @Input() subComments;
    
    ngOnInit(){
        console.log("SubComments",this.subComments);
    }
}