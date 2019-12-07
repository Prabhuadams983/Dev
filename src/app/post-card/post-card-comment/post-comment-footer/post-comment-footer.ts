import { Component, Input } from '@angular/core';

@Component({
    selector:'post-comment-footer',
    templateUrl:'./post-comment-footer.html',
    styleUrls:['./post-comment-footer.css']
})
export class PostCommentFooter{
    @Input() commentLikes;
}