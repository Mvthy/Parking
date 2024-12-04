import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Comment {
  id: number;
  content: string;
 }

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/comments'; // Ruta del JSON Server para comentarios

  constructor(private http: HttpClient) {}

  // Obtener todos los comentarios
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl);
  }

  // Crear un nuevo comentario
  createComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.apiUrl, comment);
  }

  // Actualizar un comentario
  updateComment(updatedComment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${this.apiUrl}/${updatedComment.id}`, updatedComment);
  }

  // Eliminar un comentario por ID
  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
