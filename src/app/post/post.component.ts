import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:any [];
  data;
  status=true;
  //  post:Array<any>;
   post={
    id:0,
    title:'',
    body:'',
    userId:0
  };
  constructor( private postService:PostService) {
    
   }

  ngOnInit() {
    this.postService.getPost().subscribe((data : any[])=> {
      console.log(data);
      this.posts = data;
      
    })
    
  }


  createPost(){
    this.postService.createPost(this.post).subscribe(data =>
    {
    console.log(data);
     this.post.id=data.id;
     this.posts.unshift(this.post);
     this.post={
      id:0,
      title:'',
      body:'',
      userId:0
    }
    }
    )
  }

  editPost(post){
    this.post=post;
    this.status=false;
  }

  updatePost(){
    // this.httpClient.put('https://jsonplaceholder.typicode.com/posts/'+this.post.id, this.post)
  this.postService.updatePost(this.post)
    .subscribe(data =>
       {
        this.post={
          id:0,
         title:'',
          body:'',
          userId:0
        }
        this.status= true;
    })
  }


  deletePost(post){
    // this.httpClient.delete('https://jsonplaceholder.typicode.com/posts/'+this.post.id, post)
    this.postService.deletePost(this.post)
    .subscribe(data=>
      {
    let index=this.posts.indexOf(post)
    this.posts.splice(index, 1);
        
      })
  }



}
