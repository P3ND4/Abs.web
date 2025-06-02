import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { ApiServiceService } from '../services/api-service.service';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-catalog',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  products: IProduct[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private apiService: ApiServiceService) {
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.apiService.getProducts().subscribe(
      (data: IProduct[]) => {
        this.products = data;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error fetching products:', error);
        this.error = 'Failed to load products';
        this.loading = false;
      }
    );
  }


}
