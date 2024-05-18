import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-loader',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-loader.component.html',
  styleUrl: './data-loader.component.css'
})
export class DataLoaderComponent {

  @Input() url: string = 'https://smartnetar.github.io/English-Book-Pre-intermediate/lessons.json';

  @Output() urlChange = new EventEmitter<string>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['source']) {
        this.url = params['source'];
      }
      this.urlChange.emit(this.url);
    });
  }

  handleUrlChange() {
    this.router.navigate([], {
      queryParams: { source: this.url },
      queryParamsHandling: 'merge'
    });
  }


}
