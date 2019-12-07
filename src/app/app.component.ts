import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title='Angular App';
  public name:string;
  
  jsonData=[
    {
      "userId": "ProfileId 0",
      "name": "Wilkins",
      "img": "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "time": 13,
      "msg": "Culpa enim aliquip velit minim occaecat velit excepteur. Sit pariatur duis adipisicing sit incididunt.",
      "likesCount": 47,
      "likes": [
        {
          "img": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "name": "Gill"
        },
        {
          "img": "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "name": "Angelica"
        },
        {
          "img": "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "name": "Effie"
        }
      ],
      "cmtCount": 96,
      "shareCnt": 83,
      "comments": [
        {
          "name": "Sawyer",
          "cmntTime": 20,
          "img": "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "cmnt": "Laboris ad do mollit sint labore laboris nulla veniam velit minim. Incididunt sunt pariatur mollit mollit do nulla.",
          "cmntLikes": 55,
          "cmntReply": [
            {
              "name": "Ryan",
              "replyMSg": "Exercitation non mollit occaecat duis officia.",
              "replyLikes": 97
            },
            {
              "name": "Clarissa",
              "replyMSg": "Labore dolore nisi nostrud cillum culpa ipsum adipisicing reprehenderit amet ex fugiat.",
              "replyLikes": 93
            },
            {
              "name": "Therese",
              "replyMSg": "Tempor eu veniam minim nostrud officia anim magna adipisicing ad.",
              "replyLikes": 52
            }
          ]
        },
        {
          "name": "Silvia",
          "cmntTime": 5,
          "img": "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "cmnt": "Ipsum commodo irure occaecat officia adipisicing mollit elit esse pariatur nostrud. Quis do mollit labore fugiat exercitation amet velit excepteur velit aliquip in nostrud nisi occaecat.",
          "cmntLikes": 71,
          "cmntReply": [
            {
              "name": "Estelle",
              "replyMSg": "Aliquip ullamco incididunt id labore deserunt laborum reprehenderit exercitation dolore consequat sint eiusmod laborum exercitation.",
              "replyLikes": 80
            },
            {
              "name": "Kirkland",
              "replyMSg": "Eu sunt aliquip veniam Lorem excepteur esse anim aute et pariatur nulla ipsum.",
              "replyLikes": 39
            },
            {
              "name": "Blanchard",
              "replyMSg": "Id in nostrud ex consequat quis esse dolore.",
              "replyLikes": 86
            }
          ]
        },
        {
          "name": "Katrina",
          "cmntTime": 11,
          "img": "https://images.pexels.com/photos/374044/pexels-photo-374044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "cmnt": "Duis tempor eiusmod quis consectetur aute. Consequat anim consequat fugiat laborum labore.",
          "cmntLikes": 59,
          "cmntReply": [
            {
              "name": "Davis",
              "replyMSg": "Dolor ullamco ad anim occaecat magna consequat in adipisicing.",
              "replyLikes": 58
            },
            {
              "name": "Eileen",
              "replyMSg": "Nisi do duis minim laborum culpa nulla laboris nulla pariatur.",
              "replyLikes": 18
            },
            {
              "name": "Joyce",
              "replyMSg": "Elit proident et id amet ad aliquip tempor aliqua ad incididunt fugiat nulla anim commodo.",
              "replyLikes": 96
            }
          ]
        }
      ]
    },
    {
      "userId": "ProfileId 1",
      "name": "Kari",
      "img": "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "time": 15,
      "msg": "Minim laboris dolor commodo voluptate. Ipsum consectetur nostrud id consequat enim nisi ea minim.",
      "likesCount": 81,
      "likes": [
        {
          "img": "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "name": "Loretta"
        },
        {
          "img": "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "name": "Wilma"
        },
        {
          "img": "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "name": "Hilary"
        }
      ],
      "cmtCount": 83,
      "shareCnt": 83,
      "comments": [
        {
          "name": "Harper",
          "cmntTime": 23,
          "img": "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "cmnt": "Minim proident ut fugiat voluptate qui magna consectetur exercitation sint adipisicing in. Mollit anim sunt ullamco id nisi ipsum esse cupidatat magna cillum eiusmod ipsum in.",
          "cmntLikes": 50,
          "cmntReply": [
            {
              "name": "Simmons",
              "replyMSg": "Occaecat dolore consectetur magna proident fugiat nostrud magna non elit pariatur pariatur cupidatat proident magna.",
              "replyLikes": 16
            },
            {
              "name": "Shelly",
              "replyMSg": "Pariatur velit consequat nulla qui amet quis occaecat esse nostrud proident sint ut nisi voluptate.",
              "replyLikes": 34
            },
            {
              "name": "Avery",
              "replyMSg": "Id aute qui veniam eu proident Lorem sit in duis nisi sunt.",
              "replyLikes": 18
            }
          ]
        },
        {
          "name": "Campbell",
          "cmntTime": 14,
          "img": "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "cmnt": "Sunt sint culpa Lorem laboris sunt labore nisi in. Ad consequat velit proident anim magna nostrud id nulla enim ea pariatur Lorem voluptate.",
          "cmntLikes": 48,
          "cmntReply": [
            {
              "name": "Foreman",
              "replyMSg": "Non tempor incididunt magna quis incididunt reprehenderit laboris eiusmod reprehenderit elit.",
              "replyLikes": 57
            },
            {
              "name": "Fitzgerald",
              "replyMSg": "Lorem voluptate aliqua fugiat nulla ipsum esse non sunt tempor est aliquip voluptate.",
              "replyLikes": 48
            },
            {
              "name": "Spence",
              "replyMSg": "Ipsum nisi deserunt mollit velit nulla labore cupidatat eu.",
              "replyLikes": 65
            }
          ]
        },
        {
          "name": "Manning",
          "cmntTime": 3,
          "img": "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "cmnt": "Nisi pariatur ex duis excepteur esse sit laboris consequat. Dolore minim quis culpa adipisicing ea aliquip cillum anim ullamco quis fugiat magna adipisicing.",
          "cmntLikes": 37,
          "cmntReply": [
            {
              "name": "Mckinney",
              "replyMSg": "Occaecat ea sint aliqua consectetur fugiat ad magna veniam id cupidatat.",
              "replyLikes": 49
            },
            {
              "name": "Rosemary",
              "replyMSg": "Nisi culpa irure magna commodo ad dolore mollit do voluptate dolore magna ea.",
              "replyLikes": 24
            },
            {
              "name": "Everett",
              "replyMSg": "Tempor ullamco laborum mollit id.",
              "replyLikes": 70
            }
          ]
        }
      ]
    },
    {
      "userId": "ProfileId 2",
      "name": "Alford",
      "img": "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "time": 9,
      "msg": "Nulla est proident amet ex sunt sunt voluptate id velit laboris occaecat proident ea. Ex eu consequat voluptate culpa non proident amet qui dolore.",
      "likesCount": 14,
      "likes": [
        {
          "img": "https://images.pexels.com/photos/374044/pexels-photo-374044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "name": "Bethany"
        },
        {
          "img": "https://images.pexels.com/photos/374044/pexels-photo-374044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "name": "Blackwell"
        },
        {
          "img": "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "name": "Reba"
        }
      ],
      "cmtCount": 95,
      "shareCnt": 72,
      "comments": [
        {
          "name": "Fernandez",
          "cmntTime": 1,
          "img": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "cmnt": "Aliqua nostrud laboris qui cillum in ex irure elit in. Nostrud ipsum esse proident mollit dolore.",
          "cmntLikes": 44,
          "cmntReply": [
            {
              "name": "Leslie",
              "replyMSg": "Dolore aliqua ad do ipsum in dolore culpa ullamco veniam ad occaecat mollit eiusmod proident.",
              "replyLikes": 29
            },
            {
              "name": "Lynch",
              "replyMSg": "Ipsum ex veniam mollit do cupidatat veniam tempor pariatur eiusmod amet non consequat fugiat tempor.",
              "replyLikes": 51
            },
            {
              "name": "Wiley",
              "replyMSg": "Sit incididunt laborum fugiat do laborum sit qui tempor exercitation nisi proident consectetur eiusmod aute.",
              "replyLikes": 8
            }
          ]
        },
        {
          "name": "Delaney",
          "cmntTime": 14,
          "img": "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "cmnt": "Veniam velit esse nisi eu consectetur fugiat cupidatat anim. Duis ex quis minim incididunt cupidatat labore dolore est qui quis.",
          "cmntLikes": 62,
          "cmntReply": [
            {
              "name": "Cherry",
              "replyMSg": "Dolor veniam ea labore veniam tempor tempor commodo cupidatat enim pariatur ad eu do.",
              "replyLikes": 34
            },
            {
              "name": "Neva",
              "replyMSg": "Anim nulla commodo elit Lorem qui incididunt officia do nostrud sint consequat ea labore.",
              "replyLikes": 29
            },
            {
              "name": "Justice",
              "replyMSg": "Labore ad in nostrud in aliquip aliqua veniam minim.",
              "replyLikes": 99
            }
          ]
        },
        {
          "name": "Tonya",
          "cmntTime": 18,
          "img": "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "cmnt": "Aliquip quis velit reprehenderit duis sint incididunt dolor labore labore occaecat eu. Fugiat Lorem ullamco labore qui.",
          "cmntLikes": 66,
          "cmntReply": [
            {
              "name": "Kemp",
              "replyMSg": "Excepteur nostrud do reprehenderit anim laboris ad velit ex anim officia ullamco Lorem.",
              "replyLikes": 14
            },
            {
              "name": "Clayton",
              "replyMSg": "Enim minim incididunt ut deserunt occaecat laboris.",
              "replyLikes": 47
            },
            {
              "name": "Velazquez",
              "replyMSg": "Nisi nisi in pariatur do sint culpa ad culpa officia laborum.",
              "replyLikes": 3
            }
          ]
        }
      ]
    }
  ]
    constructor(){}
  ngOnInit(){
  }
}
