import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-hotzy-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotzy-landing.html',
  styleUrls: ['./hotzy-landing.scss']
})
export class HotzyLandingComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // 🔥 spicy particles
  particleArray = Array.from({ length: 25 });

  // 🔥 PRODUCTS (YOUR REAL DATA)
  products = [
    {
      name: 'Snake Bite',
      level: '🔥🔥🔥🔥🔥 Spiciest',
      desc: 'Extreme heat for serious chili warriors.',
      img: 'assets/sauces/snake-bite.png'
    },
    {
      name: 'Scorpion Sauce',
      level: '🔥🔥🔥🔥 2nd Spiciest',
      desc: 'Deadly scorpion heat with rich flavor.',
      img: 'assets/sauces/scorpion.png'
    },
      {
      name: 'Nak Muay Asian',
      level: '🌶️ Asian Series',
      desc: 'Authentic Asian-inspired spicy sauce.',
      img: 'assets/sauces/naumow.png'
    },
    {
      name: 'Teriyaki Fire',
      level: '🌶️ Asian Series',
      desc: 'Sweet teriyaki meets Hotzy heat.',
      img: 'assets/sauces/teriyaki.png'
    }
  ];

  @ViewChildren('revealEl') revealEls!: QueryList<ElementRef>;

  // 🔥 scroll reveal
 ngAfterViewInit(): void {
  // ✅ run only in browser (fix SSR crash)
  if (!isPlatformBrowser(this.platformId)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.15 }
  );

  this.revealEls?.forEach(el => observer.observe(el.nativeElement));
}
}

