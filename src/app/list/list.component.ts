import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  brews: Object;
  selectedBrewId;

  constructor(private _http: HttpService,
    private _router: Router,
    private _activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    },
      error => {
        console.log(error)
      })

      this._activeroute.paramMap.subscribe((param:ParamMap)=>{
        this.selectedBrewId = parseInt(param.get('id'))
      })
  }

  onSelect(param) {
    this._router.navigate(['/list', param.id])
  }

  isSelected(param){
    return param.id === this.selectedBrewId;
  }

}
