import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector:'post-header',
    templateUrl:'./post-header.html',
    styleUrls:['./post-header.css']
})
export class PostHeader implements OnInit{
    @Input() header;
    constructor(){}
    ngOnInit(){
        console.log('header',this.header);
    }

    
}