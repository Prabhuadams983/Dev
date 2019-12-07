import { Component, Input } from '@angular/core';

@Component({
    selector:'sub-comment-header',
    templateUrl:'./sub-comment-header.html'
})
export class SubCommentHeader{
    @Input() subCommentHead;
}