import { Component, Input } from '@angular/core';

@Component({
    selector:'image-post-card',
    templateUrl:'./image-post-card.html'
})
export class ImagePostCard{
    @Input() imagePost;
}