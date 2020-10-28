import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';



  constructor(public httpClient: HttpClient) { }

getPost(){
  return this.httpClient.get(this.url);

}
createPost(post){
  return this.httpClient.post(this.url,post);
}
updatePost(post){
  return this.httpClient.put(this.url+'/'+post.id,post);
}
deletePost(post){
  return this.httpClient.delete(this.url+'/'+post.id);
}
}
