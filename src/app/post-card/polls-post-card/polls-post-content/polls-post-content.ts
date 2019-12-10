import { Component, Input } from '@angular/core';

@Component({
    selector:'polls-post-content',
    templateUrl:'./polls-post-content.html'
})
export class PollsPostContent{
    @Input() pollsContent;
}