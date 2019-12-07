import { Component, Input } from '@angular/core';

@Component({
    selector:'sub-comment-content',
    templateUrl:'./sub-comment-content.html'
})
export class SubCommentContent{
    @Input() subCommentContent;
}