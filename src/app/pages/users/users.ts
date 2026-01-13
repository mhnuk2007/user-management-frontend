import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from '../../services/user-service';
import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { User } from '../../models/User';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  private readonly userService = inject(UserService);

  readonly users = toSignal<User[]>(this.userService.getUsers());

  }
