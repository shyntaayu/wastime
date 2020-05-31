import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  brews: Object;

  constructor(private _http: HttpService,
    private _router: Router) { }

  ngOnInit(): void {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    },
      error => {
        console.log(error)
      })
  }

  onSelect(param){
this._router.navigate(['/list', param.id])
  }

}
