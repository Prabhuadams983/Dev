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
    PostCommentFooter
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
