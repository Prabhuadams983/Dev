import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector:'post-footer',
    templateUrl:'./post-footer.html',
    styleUrls:['./post-footer.css']
})
export class PostFooter implements OnInit{
    @Input() footer:string;
    constructor(
    ){}
    ngOnInit(){
        console.log("footer",this.footer);
    }
}