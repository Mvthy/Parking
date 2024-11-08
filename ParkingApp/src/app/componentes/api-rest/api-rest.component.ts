import { Component, OnInit } from '@angular/core';
import { DataService} from '../../servicios/api-rest.service';

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
  users: User[] = [];
  newUser: User = { id: 0, name: '', email: '', comment: '' }; // Incluye comentario
  editingUser: User | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  addUser() {
    if (!this.newUser.name || !this.newUser.email) return;

    const newUser: User = {
      id: this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) + 1 : 1,
      name: this.newUser.name,
      email: this.newUser.email,
      comment: this.newUser.comment // Captura el comentario
    };

    this.dataService.createUser(newUser).subscribe((user) => {
      this.users.push(user);
      this.resetForm();
    });
  }

  updateUser(user: User) {
    this.editingUser = user;
    this.newUser.name = user.name;
    this.newUser.email = user.email;
    this.newUser.comment = user.comment || ''; // Carga el comentario en el formulario
  }

  saveUser() {
    if (!this.editingUser) return;

    const updatedUser: User = {
      id: this.editingUser.id,
      name: this.newUser.name,
      email: this.newUser.email,
      comment: this.newUser.comment // Guarda el comentario actualizado
    };

    this.dataService.updateUser(updatedUser).subscribe((user) => {
      const index = this.users.findIndex(u => u.id === user.id);
      if (index !== -1) {
        this.users[index] = user;
      }
      this.resetForm();
      this.editingUser = null;
    }, (error) => {
      console.error("Error al actualizar al usuario:", error);
    });
  }

  deleteUser(userId: number) {
    this.dataService.deleteUser(userId).subscribe(() => {
      this.users = this.users.filter(user => user.id !== userId);
    }, (error) => {
      console.error("Error al eliminar el usuario:", error);
    });
  }

  resetForm() {
    this.newUser = { id: 0, name: '', email: '', comment: '' };
    this.editingUser = null;
  }
}
