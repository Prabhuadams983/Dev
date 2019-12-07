import { Component, Input } from '@angular/core';

@Component({
    selector:'sub-comment-footer',
    templateUrl:'./sub-comment-footer.html'
})
export class SubCommentFooter{
    @Input() subCommentFoot;
}