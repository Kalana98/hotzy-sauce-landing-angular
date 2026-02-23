import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="details">
      <a routerLink="/" class="back">← Back</a>

      <div *ngIf="product; else notFound">
        <h1>{{ product.name }}</h1>
        <p class="heat">{{ product.level }}</p>
        <img [src]="product.img" [alt]="product.name" />
        <p class="desc">{{ product.fullDesc }}</p>
      </div>

      <ng-template #notFound>
        <h2>Product not found</h2>
      </ng-template>
    </section>
  `
})
export class ProductDetailsComponent {
  product: any;

  private allProducts = [
    {
      id: 'scorpion-sting',
      name: 'Scorpion Sting',
      level: '🔥🔥🔥🔥',
      img: 'assets/p1.png',
      fullDesc: 'A bold smoky sauce with intense heat and deep flavor.'
    },
    {
      id: 'mango-blaze',
      name: 'Mango Blaze',
      level: '🔥🔥🔥',
      img: 'assets/p2.png',
      fullDesc: 'Sweet mango meets clean chili heat for a smooth burn.'
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.allProducts.find(p => p.id === id);
  }
}