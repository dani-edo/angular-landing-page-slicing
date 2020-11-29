import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UNSPLASH_ID, UNSPLASH_URL } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  photo = 'assets/img/notfound.png';
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(
        `${UNSPLASH_URL}/photos/${this.route.snapshot.params.id}?client_id=${UNSPLASH_ID}`
      )
      .subscribe((e: any) => (this.photo = e.urls.regular));
  }
}
