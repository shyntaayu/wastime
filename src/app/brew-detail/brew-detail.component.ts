import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-brew-detail',
  template: `
    <h3>You selected brewID {{brewId}}</h3>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
  `,
  styles: []
})
export class BrewDetailComponent implements OnInit {

  brewId;
  constructor(private _activeroute: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    // this.brewId = parseInt(this._activeroute.snapshot.paramMap.get('id'));
    this._activeroute.paramMap.subscribe((param:ParamMap)=>{
      this.brewId = parseInt(param.get('id'))
    })
  }

  goPrevious() {
    this._route.navigate(['/list', this.brewId - 1])
  }

  goNext() {
    this._route.navigate(['/list', this.brewId + 1])
  }

}
