import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-add-disabilitas',
  templateUrl: './add-disabilitas.component.html',
  styleUrls: ['./add-disabilitas.component.scss']
})
export class AddDisabilitasComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
  @ViewChild('resetDisabilitasForm') myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  disabilitasForm: FormGroup;

  ngOnInit() {
    this.submitBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private disabilitasApi: ApiService
  ) { }

  /* Reactive book form */
  submitBookForm() {
    this.disabilitasForm = this.fb.group({
      kategori: ['', [Validators.required]]
    })
  }

  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    // if ((value || '').trim() && this.subjectArray.length < 5) {
    //   this.subjectArray.push({ name: value.trim() })
    // }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  // remove(subject: Subject): void {
  //   const index = this.subjectArray.indexOf(subject);
  //   if (index >= 0) {
  //     this.subjectArray.splice(index, 1);
  //   }
  // }  

  /* Date */
  formatDate(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.disabilitasForm.get('dob').setValue(convertDate, {
      onlyself: true
    })
  }  

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.disabilitasForm.controls[controlName].hasError(errorName);
  }  

  /* Submit book */
  submitDisabilitasForm() {
    if (this.disabilitasForm.valid) {
      this.disabilitasApi.AddDisabilitas(this.disabilitasForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/disabilitas-list'))
      });
    }
  }

}
