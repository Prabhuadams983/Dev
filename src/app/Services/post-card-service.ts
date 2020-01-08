import { Injectable } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable()
export class PostCardService{
   public jsonData = [
        {
          "userId": "userId0",
          "name": "Marquita",
          "img": "https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156__340.jpg",
          "time": 8,
          "type": '1',
          "msgPost": "Commodo reprehenderit aliqua aliquip do do ad voluptate eu.",
          "likesCount": 100,
          "likes": [
            {
              "img": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              "name": "Derick",
            },
            {
              "img": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              "name": "Cathy"
            }
          ],
          "cmtCount": 35,
          "shareCnt": 56,
          "comments": [
            {
              "name": "Barbara",
              "cmntTime": 6,
              "img": "https://images.pexels.com/photos/516927/pexels-photo-516927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              "cmnt": "Labore irure qui et commodo occaecat reprehenderit laborum id aute.",
              "cmntLikes": 58,
              "cmntReply": [
                {
                  "name": "Marks",
                  "img": "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  "replyMsg": "Aliquip sint voluptate fugiat anim.",
                  "replyLikes": 62
                }
              ]
            }
          ]
        },
        {
          "userId": "userId1",
          "name": "Kim",
          "img": "https://cdn.pixabay.com/photo/2017/06/20/22/14/men-2425121__340.jpg",
          "time": 9,
          "type": '2',
          "imagePost": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "likesCount": 100,
          "likes": [
            {
              "img": "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              "name": "Marie"
            },
            {
              "img": "https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156__340.jpg",
              "name": "Ann"
            }
          ],
          "cmtCount": 53,
          "shareCnt": 91,
          "comments": [
            {
              "name": "Bond",
              "cmntTime": 2,
              "img": "https://images.pexels.com/photos/516927/pexels-photo-516927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              "cmnt": "Aute labore nisi pariatur quis.",
              "cmntLikes": 57,
              "cmntReply": [
                {
                  "name": "Stuart",
                  "img": "https://images.pexels.com/photos/516927/pexels-photo-516927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  "replyMsg": "Exercitation anim et velit culpa ut enim excepteur eiusmod.",
                  "replyLikes": 89
                }
              ]
            }
          ]
        },
        {
          "userId": "userId2",
          "name": "Atkinson",
          "img": "https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728__340.jpg",
          "time": 20,
          "type": '3',
          "question": "What is Angular ?",
          "ans": [
            {
              "option": "Framework",
              "answeredUser": [
                "https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              ],
              "ansCounts": 20
            },
            {
              "option": "Programming Language",
              "answeredUser": [
                "https://images.pexels.com/photos/1722072/pexels-photo-1722072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              ],
              "ansCounts": 12
            },
            {
              "option": "None of the above",
              "answeredUser": [
                "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              ],
              "ansCounts": 9
            }
          ],
        "likesCount": 1,
        "likes": [
          {
            "img": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "morris"
          },
          {
            "img": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "James"
          }
        ],
        "cmtCount": 46,
        "shareCnt": 28,
        "comments": [
          {
            "name": "Anastasia",
            "cmntTime": 17,
            "img": "https://images.pexels.com/photos/516927/pexels-photo-516927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "cmnt": "Excepteur do consectetur eiusmod laboris.",
            "cmntLikes": 41,
            "cmntReply": [
              {
                "name": "Bernadette",
                "img": "https://images.pexels.com/photos/516927/pexels-photo-516927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "replyMsg": "Veniam duis tempor voluptate eiusmod officia laborum occaecat.",
                "replyLikes": 34
              }
            ]
          }
        ]
      }
    ];

    public friendsList=[
      {
        "friendId": 33,
        "friendName": "Deanna",
        "friendImg": "https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727__340.jpg"
      },
      {
        "friendId": 34,
        "friendName": "Randall",
        "friendImg": "https://cdn.pixabay.com/photo/2017/02/02/13/48/girl-2032802__340.jpg"
      },
      {
        "friendId": 5,
        "friendName": "Katrina",
        "friendImg": "https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727__340.jpg"
      },
      {
        "friendId": 46,
        "friendName": "Galloway",
        "friendImg": "https://cdn.pixabay.com/photo/2017/01/23/19/40/woman-2003647__340.jpg"
      },
      {
        "friendId": 25,
        "friendName": "Hess",
        "friendImg": "https://cdn.pixabay.com/photo/2017/02/02/13/48/girl-2032802__340.jpg"
      }
    ];
    getPost(post){
      console.log("Data from Component",post);
      this.jsonData.push(post);
    }
}