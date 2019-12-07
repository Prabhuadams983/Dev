import { Component, Input } from '@angular/core';

@Component({
    selector:'post-comment-content',
    templateUrl:'./post-comment-content.html',
    styleUrls:['./post-comment-content.css']
})
export class PostCommentContent{
    @Input() commentMsg;
}