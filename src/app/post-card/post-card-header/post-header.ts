import { Component, OnInit, Input } from '@angular/core';
import { PostCardService } from 'src/app/Services/post-card-service';

@Component({
    selector:'post-header',
    templateUrl:'./post-header.html',
    styleUrls:['./post-header.css']
})
export class PostHeader implements OnInit{
    @Input() header;
    constructor(private postCardService:PostCardService){}
    ngOnInit(){
        console.log('header',this.header);
       this.postCardService.subjectObs.subscribe((url:string)=>{
        this.header.img = url;
       });
    }

    
}