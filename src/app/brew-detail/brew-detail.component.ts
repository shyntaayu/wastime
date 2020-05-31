import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brew-detail',
  template: `
    <h3>You selected brewID {{brewId}}</h3>
  `,
  styles: []
})
export class BrewDetailComponent implements OnInit {

  brewId;
  constructor(private _activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.brewId = parseInt(this._activeroute.snapshot.paramMap.get('id'));
  }

}
