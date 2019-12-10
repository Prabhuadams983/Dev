import { Component, Input } from '@angular/core';

@Component({
    selector:'polls-post-card',
    templateUrl:'./polls-post-card.html'
})
export class PollsPostCard{
    @Input() pollsData;
}