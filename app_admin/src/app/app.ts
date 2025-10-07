import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Navbar, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Town Restaurant Admin'
}
