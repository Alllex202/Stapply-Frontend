import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnInit {

  @Input() Swidth: number | undefined;
  @Input() Sheight: number | undefined;
  @Input() circle: number | undefined;
  @Input() percent: boolean | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  getStyle(): object {
    return !this.percent
      ? {
        'width.px': this.Swidth ? this.Swidth : '',
        'height.px': this.Sheight ? this.Sheight : '',
        'border-radius': this.circle ? `${this.circle}px` : '',
      }
      : {
        width: `${this.Swidth}%` ? `${this.Swidth}%` : '',
        height: `${this.Sheight}%` ? `${this.Sheight}%` : '',
        'border-radius': this.circle ? `${this.circle}%` : '',
      };
  }
}
