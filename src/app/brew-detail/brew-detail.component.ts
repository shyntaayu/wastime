import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-brew-detail',
  template: `
    <h3>You selected brewID {{brewId}}</h3>
    <button mat-button (click)="showOverview()">Overview</button>
    <button mat-raised-button (click)="showContact()">Contact</button>
    <router-outlet></router-outlet>
    <button (click)="goPrevious()">Previous</button>&nbsp;
    <button (click)="goNext()">Next</button>
    <div><button (click)="goBack()">Back</button></div>
    <button mat-icon-button color="warn" aria-label="Example icon button with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button mat-fab color="warn" aria-label="Example icon button with a home icon">
          <mat-icon>home</mat-icon>
        </button>
  `,
  styles: []
})
export class BrewDetailComponent implements OnInit {

  brewId;
  constructor(private _activeroute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    // this.brewId = parseInt(this._activeroute.snapshot.paramMap.get('id'));
    this._activeroute.paramMap.subscribe((param: ParamMap) => {
      this.brewId = parseInt(param.get('id'))
    })
  }

  goPrevious() {
    this._router.navigate(['/list', this.brewId - 1])
  }

  goNext() {
    this._router.navigate(['/list', this.brewId + 1])
  }

  goBack() {
    let id = this.brewId ? this.brewId : null;
    // this._router.navigate(['/list', {id:id}])
    this._router.navigate(['../', { id: id }], { relativeTo: this._activeroute })
  }

  showOverview() {
    this._router.navigate(['overview'], { relativeTo: this._activeroute })
  }
  showContact() {
    this._router.navigate(['contact'], { relativeTo: this._activeroute })
  }

}
