import { Component, Input } from '@angular/core';

@Component({
    selector:'image-post-content',
    templateUrl:'./image-post-content.html'
})
export class ImagePostContent{
    @Input() imagePostContent;
}