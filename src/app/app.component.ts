import { PostCardService } from './Services/post-card-service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  public title = 'Angular App';
  public type = 0;
  private hideModal;
  private userImg = "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  private hideAlert = 'none';
  private hideImgModal;
  private msgData:any= new Object();
  private pollsPost={};
  private date = new Date();
  private msg;
  private image;
  private changePost={};
  private pollsData={
    question:"",
    ans1:"",
    ans2:"",
    ans3:""
  };
private profilePic = "../assets/imgs/user-pic.jpg";
  public userData = {
    name : "Prabhu",
    id : "1234567890",
    img : "https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156__340.jpg"
  };

constructor(private PostCardService:PostCardService){ }
ngOnInit(){
  this.PostCardService.subjectObs.subscribe((url:string)=>{
    this.userImg = url;
    this.profilePic =url;
  });
}
alert(){
  this.hideAlert = 'none';
}
hide(){
  this.hideModal='none';
}
show(){
  this.hideModal='block';
}
imageModal(){
  this.hideImgModal = 'block';
}
hideImg(){
  this.hideImgModal='none';
}


subjectObs = new Subject();


createPost(type){
  var uio = {
    "userId": "userId0",
    "name": this.userData.name,
    "img": this.userData.img,
    "time": 1,
    "type":1,
    "msgPost": this.msg,
    "likesCount": 0,
    "likes": [],
    "cmtCount": 0,
    "shareCnt": 0,
    "comments": []
  };
  var imageObj = {
    "userId": "userId0",
    "name": this.userData.name,
    "img": this.userData.img,
    "time": 3,
    "type":1,
    "imagePost": this.image,
    "likesCount": 0,
    "likes": [],
    "cmtCount": 0,
    "shareCnt": 0,
    "comments": []
  };
  var pollsObj= {
    "userId": "userId2",
    "name": this.userData.name,
    "img": this.userData.img,
    "time": 20,
    "type": 1,
    "question":this.pollsData.question ,
    "ans": [
      {
        "option": this.pollsData.ans1,
        "answeredUser": [
          "https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ],
        "ansCounts": 20
      },
      {
        "option": this.pollsData.ans2,
        "answeredUser": [
          "https://images.pexels.com/photos/1722072/pexels-photo-1722072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ],
        "ansCounts": 12
      },
      {
        "option": this.pollsData.ans3,
        "answeredUser": [
          "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ],
        "ansCounts": 9
      }
    ],
  "likesCount": 1,
  "likes": [],
  "cmtCount": 46,
  "shareCnt": 28,
  "comments": []
};
  if(type == 0){
    this.hideAlert = 'block';
  }else if(type ==1){
    uio.type = type;
    this.passData(uio);
    this.hideModal = 'none';
  }else if(type == 2){
    imageObj.type=type;
    this.passData(imageObj);
    this.hideModal = 'none';
    console.log("");
  }else{
    pollsObj.type=type;
    this.passData(pollsObj);
    this.hideModal = 'none';
  }
}
passData(data){
  console.log(data);
  this.PostCardService.getPost(data).subscribe((response)=>{
    console.log("Response from Firebase:",response);
    this.PostCardService.jsonData.push(response);
  });
}
newPrflImg(url){
  this.PostCardService.subjectObs.next(url);
  this.hideImgModal='none';
}

}
