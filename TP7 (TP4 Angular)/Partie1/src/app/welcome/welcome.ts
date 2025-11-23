import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-welcome',
  imports: [NgIf, FormsModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  isLoggedIn: boolean = false;
  correctUsername: string = "skander";
  username: string = '';
}
