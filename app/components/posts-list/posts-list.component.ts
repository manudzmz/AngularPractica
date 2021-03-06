import { Component, Input } from "@angular/core";

import { Post } from "../../models/post";
import { AppRoutingModule } from '../../app.routing';
import { Router } from '@angular/router';

@Component({
    selector: "posts-list",
    templateUrl: "./app/components/posts-list/posts-list.component.html"
})
export class PostsListComponent {

    @Input() posts: Post[];

     constructor(private _router: Router) {}
    /*------------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~                                                                                                 |
     |------------------------------------------------------------------------------------------------------------------|
     | Maneja el evento del componente PostPreviewComponent que indica la selección del autor de un post y navega a la  |
     | dirección correspondiente. Recuerda que para hacer esto necesitas inyectar como dependencia el Router de la app. |
     | La ruta a navegar es '/posts/users', pasando como parámetro el identificador del autor.                          |
     |------------------------------------------------------------------------------------------------------------------*/
     
     irPostsAutor(authorId) {
         this._router.navigate([`/posts/users/${authorId}`]);
     }


    /*-----------------------------------------------------------------------------------------------------------------|
     | ~~~ Green Path ~~~        HECHO                                                                                 |
     |-----------------------------------------------------------------------------------------------------------------|
     | Maneja el evento del componente PostPreviewComponent que indica la selección de un post y navega a la dirección |
     | correspondiente. Recuerda que para hacer esto necesitas inyectar como dependencia el Router de la app.  La ruta |
     | a navegar es '/posts', pasando como parámetro el identificador del post.                                        |
     |-----------------------------------------------------------------------------------------------------------------*/

     irDetallePost(postId) {
         this._router.navigate([`/posts/${postId}`]);
     }
}
