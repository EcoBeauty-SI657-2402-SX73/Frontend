import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DbService} from "../../../core/services/db.service";

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent {
  post: any;
  newComment: string = '';

  constructor(private route: ActivatedRoute, private dbService: DbService) {}

  ngOnInit(): void {
    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.dbService.getPostById(postId).subscribe((data: any) => {
      this.post = data;
    });
  }

  addComment(): void {
    if (this.newComment.trim()) {
      const newComment = {
        author: 'Current User', // Replace with actual user data
        date: new Date().toLocaleDateString(),
        text: this.newComment
      };
      this.post.comments.push(newComment);
      this.newComment = '';
    }
  }
}
