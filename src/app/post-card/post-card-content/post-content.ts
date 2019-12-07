import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector:'post-content',
    templateUrl:'./post-content.html',
    styleUrls:['./post-content.css']
})
export class PostContent implements OnInit{
    @Input() content;
    constructor(){}
    ngOnInit(){
            console.log('footer',this.content);
    }
}