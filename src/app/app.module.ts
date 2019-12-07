import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PostHeader } from './post-card/post-card-header/post-header';
import { PostContent } from './post-card/post-card-content/post-content';
import {PostFooter} from './post-card/post-card-footer/post-footer';
import { PostCard } from './post-card/post-card';
import { PostCommentHeader } from './post-card/post-card-comment/post-comment-header/post-comment-header';
import { PostCommentContent } from './post-card/post-card-comment/post-comment-content/post-comment-content';
import { PostCardComment } from './post-card/post-card-comment/post-card-comment';
import { PostCommentFooter } from './post-card/post-card-comment/post-comment-footer/post-comment-footer';
import { SubCommentHeader } from './post-card/post-card-comment/post-sub-comment/sub-comment-header/sub-comment-header';
import { SubCommentFooter } from './post-card/post-card-comment/post-sub-comment/sub-comment-footer/sub-comment-footer';
import { SubCommentContent } from './post-card/post-card-comment/post-sub-comment/sub-comment-content/sub-comment-content';
import { PostSubComments } from './post-card/post-card-comment/post-sub-comment/post-sub-comment';
@NgModule({
  declarations: [
    AppComponent,
    PostHeader,
    PostContent,
    PostFooter,
    PostCard,
    PostCommentHeader,
    PostCardComment,
    PostCommentContent,
    PostCommentFooter,
    SubCommentHeader,
    SubCommentFooter,
    SubCommentContent,
    PostSubComments
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
