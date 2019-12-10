import { Component, Input } from '@angular/core';

@Component({
    selector:'image-post-header',
    templateUrl:'./image-post-header.html'
})
export class ImagePostHeader{
    @Input() imagePostHead;
}