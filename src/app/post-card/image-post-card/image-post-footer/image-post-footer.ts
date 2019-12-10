import { Component, Input } from '@angular/core';

@Component({
    selector:'image-post-footer',
    templateUrl:'./image-post-footer.html'
})
export class ImagePostFooter{
    @Input() imagePostFoot;
}