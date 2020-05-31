import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-brew-detail',
  template: `
    <h3>You selected brewID {{brewId}}</h3>
    <a (click)="goPrevious()">Previous</a>&nbsp;
    <a (click)="goNext()">Next</a>
    <div><button (click)="goBack()">Back</button></div>
  `,
  styles: []
})
export class BrewDetailComponent implements OnInit {

  brewId;
  constructor(private _activeroute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    // this.brewId = parseInt(this._activeroute.snapshot.paramMap.get('id'));
    this._activeroute.paramMap.subscribe((param:ParamMap)=>{
      this.brewId = parseInt(param.get('id'))
    })
  }

  goPrevious() {
    this._router.navigate(['/list', this.brewId - 1])
  }

  goNext() {
    this._router.navigate(['/list', this.brewId + 1])
  }

  goBack(){
    let id = this.brewId?this.brewId:null;
    // this._router.navigate(['/list', {id:id}])
    this._router.navigate(['../', {id:id}], {relativeTo:this._activeroute})
  }

}
