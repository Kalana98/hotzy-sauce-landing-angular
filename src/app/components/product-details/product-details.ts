import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Sauce {
  id: string;
  name: string;
  level: number; // ⭐ number is better than emoji string
  img: string;
  fullDesc: string;
  ingredients: string[];
  price: number;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.scss']
})
export class ProductDetailsComponent {
  product?: Sauce;
  heatArray: number[] = [];

  private allProducts: Sauce[] = [
    {
      id: 'snake-bite',
      name: 'Scorpion Sting',
      level: 4,
      img: 'assets/sauces/snake-bite.png',
      fullDesc: 'A bold smoky sauce with intense heat and deep flavor.',
      ingredients: ['Chili', 'Vinegar', 'Garlic', 'Salt'],
      price: 12.99
    },
    {
      id: 'scorpion-sauce',
      name: 'Mango Blaze',
      level: 3,
      img: 'assets/sauces/scorpion.png',
      fullDesc: 'Sweet mango meets clean chili heat for a smooth burn.',
      ingredients: ['Mango', 'Chili', 'Sugar', 'Vinegar'],
      price: 10.99
    },
    {
      id: 'teriyaki-fire',
      name: 'Teriyaki Fire',
      level: 2,
      img: 'assets/sauces/teriyaki.png',
      fullDesc: 'Teriyaki sweetness with a gentle spicy finish.',
      ingredients: ['Soy', 'Sugar', 'Garlic', 'Chili'],
      price: 9.99
    },
    {
      id: 'nak-muay',
      name: 'Nak Muay Heat',
      level: 3,
      img: 'assets/sauces/naumow.png',
      fullDesc: 'Balanced Thai-style heat with deep savory notes.',
      ingredients: ['Chili', 'Fish Sauce', 'Garlic'],
      price: 11.49
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.allProducts.find(p => p.id === id);

    if (this.product) {
      this.heatArray = Array.from(
        { length: this.product.level },
        (_, i) => i
      );
    }
  }

  goBack() {
    this.router.navigate(['/'], { fragment: 'products' });
  }
}