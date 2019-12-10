import { Component, Input } from '@angular/core';

@Component({
    selector:'polls-post-header',
    templateUrl:'./polls-post-header.html'
})
export class PollsPostHeader{
    @Input() pollsHeader;
}