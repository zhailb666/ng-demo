import { Component, OnInit } from '@angular/core';
import {ShortCutModalService} from '../short-cut-modal/short-cut-modal.service';
import {FormGroup, Validators} from '@angular/forms';
import {BaseUtil} from '../../ant-base/base-util';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.less'],
  providers: [ShortCutModalService]
})
export class ReadmeComponent implements OnInit {
  form: FormGroup;
  constructor(private shortCutModalService: ShortCutModalService) { }

  ngOnInit() {
    this.shortCutModalService.clickItem$.subscribe((data) => {
      console.log('回值', data);
    });
    this.form = BaseUtil.addFormGroup( {name: [] , typeTwo: [], 'type': ['', Validators.required]});
  }
  submitForm() {
    if (BaseUtil.executeValidate(this.form).valid) {
      console.log(this.form.value)
      return;
    }
  }
  formChange($event) {
    console.log($event);
  }
  toTest() {
    this.shortCutModalService.showModel();
  }

}
