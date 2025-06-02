import { Component, HostListener, OnInit } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, MatIconModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories = [ {categorie: 'categoria 1', ico: 'local cafe'}, {categorie: 'categoria 1', ico: 'local cafe'},{categorie: 'categoria 1', ico: 'local cafe'} ,{categorie: 'categoria 1', ico: 'local cafe'},{categorie: 'categoria 1', ico: 'local cafe'},{categorie: 'categoria 1', ico: 'local cafe'}];
  windowWidth: number = 1000;

  ngOnInit(): void {
    this.windowWidth = window.innerWidth
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
      this.windowWidth = window.innerWidth; // Example: Small screen if width < 768px
  }

}
