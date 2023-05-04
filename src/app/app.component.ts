import { Component, OnInit } from '@angular/core';
import { Obj } from '@popperjs/core';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';
import { Title } from '@angular/platform-browser';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private titleService: Title, private breadcrumbService: BreadcrumbService) {
  }
  ngOnInit(): void {
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
      this.titleService.setTitle(this.createTitle(crumbs));
    });
  }
  onActivate(event){
    window.scroll(0,0);
  }
  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'MoneyLend';
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) { return title; }

    const routeTitle = this.titlesToString(titles);
    return `${routeTitle} ${title}`;
  }

  private titlesToString(titles) {
    return titles.reduce((prev, curr) => {
      return `${curr.displayName} - ${prev}`;
    }, '');
  }
 
}
