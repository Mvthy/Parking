import { Component, OnInit } from '@angular/core';
import { DataService, Comment} from '../../servicios/api-rest.service';

export interface User {
  id: number;
  name: string;
  email: string;
  comment?: string; // Campo opcional para el comentario
}


@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.component.html',
  styleUrls: ['./api-rest.component.css']
})
export class ApiRestComponent implements OnInit {
  comments: Comment[] = [];  // Lista para almacenar los comentarios
  newComment: Comment = { id: 0, content: '' };  // Para el nuevo comentario

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadComments();  // Cargar los comentarios cuando el componente se inicializa
  }

  // Función para cargar los comentarios
  loadComments() {
    this.dataService.getComments().subscribe((comments) => {
      this.comments = comments;  // Asigna los comentarios obtenidos al array de comentarios
    });
  }

  // Función para agregar un nuevo comentario
  addComment() {
    if (!this.newComment.content) return;  // Validación básica para asegurar que el comentario no esté vacío

    // Asignamos un ID único para el nuevo comentario
    const newComment: Comment = {
      id: this.comments.length > 0 ? Math.max(...this.comments.map(c => c.id)) + 1 : 1,
      content: this.newComment.content,
    };

    // Llamamos al servicio para agregar el nuevo comentario
    this.dataService.createComment(newComment).subscribe((comment) => {
      this.comments.push(comment);  // Agrega el comentario a la lista
      this.newComment = { id: 0, content: '' };  // Resetea el formulario
    });
  }
}