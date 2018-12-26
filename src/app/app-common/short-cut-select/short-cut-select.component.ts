import {Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {ShortCutSelectService} from './short-cut-select.service';
import {ShortCutModalService} from '../../page-front/short-cut-modal/short-cut-modal.service';

@Component({
  selector: 'app-short-cut-select',
  templateUrl: './short-cut-select.component.html',
  styleUrls: ['./short-cut-select.component.less'],
  providers: [
    { provide: NG_VALUE_ACCESSOR,
      useExisting: ShortCutSelectComponent,
      multi: true}
  ]
})
export class ShortCutSelectComponent implements OnInit, ControlValueAccessor {
  value: string;
  disabled: boolean;
  change = Function.prototype;
  /**
   * 下拉菜单数组 subject
   *
   * @memberof CommonSelectComponent
   */
  options$ = new BehaviorSubject<ShortCut[]>([]);
  /**
   * 是不是多选
   */
  @Input() mode = 'default';

  @Input()
  set mult(mult: boolean) {
    this.mode = mult ? 'multiple' : 'default';
  }
  /**
   * 多选最大数量
   *
   *  {number}
   * @memberof CommonSelectComponent
   */
  @Input() maxMultipleCount: number;

  constructor(private shortCutSelectService: ShortCutSelectService, private shortCutModalService: ShortCutModalService) { }

  ngOnInit() {
    this.getData();
    this.shortCutModalService.clickItem$.subscribe((data: {nat: string}) => {
      this.value = data.nat;
      this.change(this.value);
      this.getData();
    });
  }

  getData(): void {
    this.shortCutSelectService.getData().subscribe((res: any) => {
      this.options$.next(res.results);
    });
  }

  shortCutManager() {
    this.shortCutModalService.showModel();
  }

  registerOnChange(fn: any): void {
    this.change = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  modelChange(value: string) {
    this.change(value);
  }
}

interface ShortCut {
  gender: string;
  nat: string;
}
