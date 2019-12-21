import {Component,Input} from '@angular/core';

@Component({
    selector:'post-card',
    templateUrl:'post-card.html'
})
export class PostCard{
    private name:string;
    private uname:string;
    @Input() userData;
    @Input() subCommentsArray;
    constructor(){
        console.log("working",this.userData);
    }
    change(){
        let a = "Voldemort";
        this.name=a;
    }
    getName(name: any){
        console.log(name);
        // this.uname=name;
    }

    newcheck(serverData: any) {
        // this.title = serverData.name;
        console.log(serverData.name, "sdfghjk");
        this.uname=serverData.name;
      }

}
