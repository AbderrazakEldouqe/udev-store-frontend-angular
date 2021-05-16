import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  UrlSegment,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [TitleCasePipe],
})
export class HeaderComponent implements OnInit {
  title: String = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pipeCaseUpper: TitleCasePipe
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.title = this.pipeCaseUpper.transform(
          event?.urlAfterRedirects.split('/')[2]
        );
      });
  }

  ngOnInit(): void {}
}
