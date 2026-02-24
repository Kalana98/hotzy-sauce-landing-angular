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
  category: string;
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
      name: 'Snake Bite Hot Sauce',
      level: 4,
      img: 'assets/sauces/snake-bite.png',
      fullDesc: 'Snake Bite is Hotzy’s ultimate heat experience. Crafted with juicy pineapple and powerful chilies, this sauce delivers a bold tropical sweetness followed by a serious, lingering burn. Designed for true heat lovers who crave intensity without sacrificing flavor.',
      ingredients: ['Chili', 'pineapple'],
      price: 990,
      category: 'Spicy'
    },
    {
      id: 'scorpion-sauce',
      name: 'Scorpion Sting Hot Sauce',
      level: 3,
      img: 'assets/sauces/scorpion.png',
      fullDesc: 'Scorpion Sting balances rich mango sweetness with a clean, rising chili heat. Slightly gentler than Snake Bite but still boldly spicy, this sauce brings a vibrant fruity profile with a confident sting that keeps you coming back for more.',
      ingredients: ['Mango', 'Chili'],
      price: 900,
      category: 'Spicy'
    },
    {
      id: 'teriyaki-fire',
      name: 'Teriyaki Fire',
      level: 2,
      img: 'assets/sauces/teriyaki.png',
      fullDesc: 'Our Teriyaki sauce brings authentic Asian-style sweetness with a soft chili finish. Perfectly balanced and family-friendly, it adds a rich glaze and subtle heat to chicken, seafood, noodles, and stir-fried favorites.',
      ingredients: ['Soy', 'Sugar', 'Garlic', 'Chili'],
      price: 990,
      category: 'Asian'
    },
    {
      id: 'nak-muay',
      name: 'Nak Muay Heat',
      level: 3,
      img: 'assets/sauces/naumow.png',
      fullDesc: 'Inspired by classic Asian flavor profiles, Naumawk delivers a smooth, savory experience with gentle warmth. This versatile sauce enhances noodles, rice, stir-fries, and grilled dishes with its rich umami character and balanced spice.',
      ingredients: ['Chili', 'Fish Sauce', 'Garlic'],
      price: 900,
      category: 'Asian'
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