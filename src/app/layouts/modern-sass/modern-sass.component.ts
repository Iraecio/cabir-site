import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modern-sass',
  templateUrl: './modern-sass.component.html',
  styleUrls: ['./modern-sass.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModernSassComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }

}
