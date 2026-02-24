import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true, // ⭐ REQUIRED
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.scss'], // ⭐ plural
})
export class NavBar {}