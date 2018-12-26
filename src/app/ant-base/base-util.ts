import { FormControl, FormGroup } from '@angular/forms';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms/src/directives/validators';

export class BaseUtil {
  /**
   * true <=> false;
   * 使用场景：model显隐调用
   * @param {string} pro
   */
  static triggerObverse(pro: string): void {
    let proArr;
    const proArrs = pro.split('.');
    let _me = this;
    while ((proArr = proArrs.shift())) {
      if (proArrs.length === 0) {
        _me[proArr] = !_me[proArr];
      } else {
        _me = _me[proArr]; // 多层级对象的时候；
      }
    }
  }
  /**
   * 生成FormGroup,不需要this.fb.group({})的方式
   * @param formConfig:{key:[value,[validateFn]]}
   * returns {FormGroup}
   */
  static addFormGroup(formConfig: Config): FormGroup {
    const fgInstance = new FormGroup({});
    this.addControlReactive(formConfig, fgInstance);
    return fgInstance;
  }
  /**
   * 给FormGroup 每个表单 new FormControl;
   * @param formConfig:{key:[value,[validateFn]]}
   * @param {FormGroup} validateForm
   */
  static addControlReactive(formConfig: Config, validateForm: FormGroup): void {
    Object.keys(formConfig).forEach((ele, i) => {
      validateForm.addControl(ele, new FormControl(...formConfig[ele]));
    });
  }
  /**
   * 为表单设置一个新的 FormControl
   * 仅改变表单的验证规则不该使用此方法，使用此方法验证样式会有问题
   * @param formConfig:{key:[value,[validateFn]]}
   * @param {FormGroup} validateForm
   */
  static setControlReactive(formConfig: Config, validateForm: FormGroup): void {
    Object.keys(formConfig).forEach((ele, i) => {
      validateForm.setControl(ele, new FormControl(...formConfig[ele]));
    });
  }
  /**
   * 动态改变验证规则时候使用
   * @param formConfig:{key:[value,[validateFn]]}
   * @param {FormGroup} validateForm
   * @param {boolean} useBeforeValue
   */
  static changeValidateReactive(formConfig: Config, validateForm: FormGroup, useBeforeValue?: boolean): void{
    Object.keys(formConfig).forEach((ele, i) => {
      const [value, validateFns] = formConfig[ele];
      if (value || useBeforeValue) {
        const _value = value || validateForm.get(ele).value;
        validateForm.get(ele).setValue(_value);
      } else {
        validateForm.get(ele).reset();
      }
      validateForm.get(ele).setValidators(validateFns);
    });
  }
  /**
   * 删除指定的表单项
   * @param formConfig:{key:[value,[validateFn]]}
   * @param {FormGroup} validateForm
   */
  static removeControlReactive(formConfig: Config, validateForm: FormGroup): void {
    Object.keys(formConfig).forEach((ele, i) => {
      validateForm.removeControl(ele);
    });
  }
  /**
   * 验证入口
   * @param {FormGroup | Array<{id: Number; fgInstance: FormGroup}> | FormGroup[]} param
   * returns {any}
   */
  static executeValidate(param: FormGroup | Array<{ id: Number; fgInstance: FormGroup }> | FormGroup[]) {
    if (param instanceof FormGroup) {
      return this.validateFg(param);
    }
    if (Array.isArray(param) && param.length > 0) {
      return this.validateFgArr(param);
    }
  }
  /**
   * 对多个执行executeValidate返回结果进行提交前验证；
   * @param {Array<{valid: boolean; value: any}>} param
   * returns {boolean}
   */
  static isValidGroupArr(param: Array<{ valid: boolean; value: {} }>): boolean {
    let isValid = true;
    for (const o of param) {
      if (!o) {
        continue;
      }
      if (!o.valid) {
        isValid = o.valid;
        break;
      }
    }
    return isValid;
  }
  /**
   * 对多个FormGroup 进行验证
   * @param {Array<{id: Number; fgInstance: FormGroup}> | FormGroup[]} valiFormGroup
   * returns {{value: any[]; valid: boolean}}
   */
  static validateFgArr(valiFormGroup: Array<{ id: Number; fgInstance: FormGroup }> | FormGroup[]): {value: {}, valid: boolean} {
    const _backFormValue = [];
    let valid = true;
    for (const obj of valiFormGroup) {
      let _instanceFg: FormGroup;
      if (obj instanceof FormGroup) {
        _instanceFg = obj;
      } else {
        _instanceFg = obj.fgInstance;
      }
      const _formValue: any = this.validateFg(_instanceFg);
      if (!_formValue.valid) {
        valid = _formValue.valid;
      }
      _backFormValue.push(_formValue.value);
    }
    return { value: _backFormValue, valid: valid };
  }
  /**
   * 对单个 FormGroup 进行验证
   * 显示提示信息
   * @param {FormGroup} validateForm
   * returns {{value: any; valid: boolean}}
   */
  static validateFg(validateForm: FormGroup): {value: {}, valid: boolean} {
    for (const i in validateForm.controls) {
      if (validateForm.controls.hasOwnProperty(i)) {
        validateForm.controls[i].markAsDirty();
        validateForm.controls[i].updateValueAndValidity();
      }
    }
    return { value: validateForm.value, valid: validateForm.valid };
  }
}
type FormControlController = [any, ValidatorFn | ValidatorFn[] | null, AsyncValidatorFn | AsyncValidatorFn[] | null];

interface Config {
  [property: string]: any[] | FormControlController;
}
