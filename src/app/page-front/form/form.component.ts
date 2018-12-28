import { Component, OnInit } from '@angular/core';
import {BaseUtil} from '../../ant-base/base-util';
import {FormGroup, Validators} from '@angular/forms';
// import {any} from '@ngx-formly/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent {
  // 动态表单
  form: FormGroup = BaseUtil.addFormGroup({
    name: [null, Validators.required],
    phone: [null, Validators.required],
  });
  formGroup = new FormGroup({});
  model_ly = {};
  fields: any[] = [
    {
      type: 'textInput',
      template: '<span>abc</span>',
      // hide: true,
      key: 'securityId',
      templateOptions: {
        label: 'id标识',
        // required: true,
      }
    },
    {
      type: 'textInput',
      key: 'resName',
      name: 'abc',
      templateOptions: {
        hidden: true,
        label: '资源名称',
        required: true,
        // pattern: /^\d+$/,
        cols: 24,
        max: 90,
        maxLength: 2,
        step: 1,
        tabIndex: 2,
        change: (field: any, event: any) => {
          console.log(field, event.target.value);
          // event.target.value
        },
        attributes: {
          a: 111,
          b: 222,
        },
      },
      optionsTypes: ['select'],
      validation: {
        messages: {
          pattern: 'fdsfdff',
        },
        show: true,
      },
      validators: {
        ip: {
          expression: (c) => !c.value || /^\d+$/.test(c.value),
          message: (error, field: any) => `"${field.formControl.value}" is not a valid IP Address`,
        },
      },
      wrappers: ['wrapper'],
      className: 'kfc',
      fieldGroupClassName: 'kfc_group',
      lifecycle: {
        onInit: (c: FormGroup) => console.log('kfc', c)
      },
      defaultValue: 19,
      parsers: [(value) => {
        console.log(value);
        return value;
      }]
    },
    {
      type: 'radio',
      key: 'radio',
      templateOptions: {
        label: 'radio',
        step: 2,
        options: [
          {
            label: 'a',
            value: 'a'
          },
          {
            label: 'b',
            value: 'b'
          }
        ]
      },
    },
    {
      type: 'checkbox',
      key: 'checkbox',
      templateOptions: {
        label: 'checkbox',
        options: [
          {
            label: 'a',
            value: 'a'
          },
          {
            label: 'b',
            value: 'b'
          }
        ]
      }
    },
    {
      type: 'textInput',
      key: 'resValue',
      hideExpression: (model: any, formState: any) => {
        return model.resType === 'PAGE';
      },
      templateOptions: {
        label: '资源值',
        required: true,
        cols: 24
      }
    },
    {
      type: 'select',
      key: 'resType',
      templateOptions: {
        label: '资源类型',
        required: true,
        cols: 24,
        options: [{ label: 'PAGE', value: 'PAGE', checked: true }, { label: 'MENU', value: 'MENU' }]
      }
    }
  ];
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  formChanged($event: any) {
    return;
    // console.log($event);
  }

  submit() {
    // if (this.formGroup.valid) {
    //   console.log(JSON.stringify(this.formGroup.value));
    // }
    console.log('model', JSON.stringify(this.model_ly));
    console.log('form_value', JSON.stringify(this.formGroup.value));
  }
}

class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }
}
