import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-message',
  imports: [NgIf, FormsModule],
  templateUrl: './message.html',
  styleUrl: './message.css',
})
export class Message {
  isLoggedIn: boolean = false;
  correctUsername: string = "skander";
  username: string = '';
}
