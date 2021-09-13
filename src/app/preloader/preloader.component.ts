import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
})
export class PreloaderComponent implements AfterViewInit {

  // Loader
  isLoading: boolean;

  ngAfterViewInit() {
    this.isLoading = false;
  }

}
