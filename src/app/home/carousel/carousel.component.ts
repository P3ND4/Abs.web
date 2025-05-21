import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-carousel',
  imports: [MatIconModule, MatButtonModule, MatCardModule, CommonModule],
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  currentIndex = 0;
  products = [
    {
      id: 1,
      name: 'Producto 1',
      price: 100,
      image: 'https://cdn.aeroenvio.com/banner/lg/De_a_CUBA_650_x_250_px_650_x_250_px_1560_x_360_px.png',
      description: 'Descripción del producto 1'
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 200,
      image: 'https://cdn.aeroenvio.com/banner/lg/WhatsApp_Image_2025-01-15_at_8.18.42_AM.jpeg',
      description: 'Descripción del producto 2'
    },
    // Añade más productos...
  ];

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
  }
}
