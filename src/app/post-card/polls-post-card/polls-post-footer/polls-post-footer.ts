import { Component, Input } from '@angular/core';

@Component({
    selector:'polls-post-footer',
    templateUrl:'./polls-post-footer.html'
})
export class PollsPostFooter{
    @Input() pollsFooter;
}