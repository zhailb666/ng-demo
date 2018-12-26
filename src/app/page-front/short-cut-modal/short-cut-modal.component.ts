import {Component, Input, OnInit} from '@angular/core';
import {BaseUtil} from '../../ant-base/base-util';
import {FormGroup, Validators} from '@angular/forms';
import {NzModalService} from 'ng-zorro-antd';
import {ShortCutModalPageService} from './short-cut-modal-page.service';

/**
 * 快捷语弹框组件
 */
@Component({
  selector: 'app-short-cut-modal',
  templateUrl: './short-cut-modal.component.html',
  styleUrls: ['./short-cut-modal.component.less'],
  providers: [ShortCutModalPageService]
})
export class ShortCutModalComponent implements OnInit {
  @Input()
  itemClickBack: Function;
  triggerObverse: Function;
  selectedIndex = 0;
  tabs: TabItem[] = [{label: '详情页小计', value: '详情页小计'}, {label: '完结-调解口径', value: '完结-调解口径'}, {label: '新建-处理要求', value: '新建-处理要求'}];
  list: any[] = [];
  nzLoading = true;
  isVisible = false;
  form: FormGroup;
  deleteFlagArr = [false, false, false];
  selectedItem: string[];
  constructor(private nzModalService: NzModalService, private shortCutModalPageService: ShortCutModalPageService) {
    this.triggerObverse = BaseUtil.triggerObverse.bind(this);
  }
  ngOnInit() {
    this.getData();
    this.form = BaseUtil.addFormGroup({
      comment: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  /**
   * 关闭添加快捷语modal
   */
  closeAddModel() {
    this.triggerObverse('isVisible');
    this.form.reset();
  }

  /**
   * 触发添加快捷语modal
   */
  toAddModel() {
    this.triggerObverse('isVisible');
  }

  /**
   * 新增快捷语提交
   */
  submitAddModel() {
    if (BaseUtil.executeValidate(this.form).valid) {
      // TODO 添加保存接口
      console.log(this.form.value);
      // success
      this.closeAddModel();
      this.getData();
    }
  }

  /**
   * 获取数据
   */
  getData(): void {
    this.shortCutModalPageService.getData().subscribe((res: any) => {
      this.list = res.results;
      this.nzLoading = false;
    });
  }

  /**
   * 每行click时候触发
   * param $event
   */
  itemClick($event) {
    this.itemClickBack($event);
  }

  /**
   * 删除快捷语
   */
  toDelete() {
    if (this.selectedItem && this.selectedItem.length) {
      this.nzModalService.warning({
        nzTitle: '提示',
        nzContent: '确定要删除当前选中的快捷语吗？',
        nzOnOk: () => {
          this.submitDeleteItems();
        }
      });
    } else {
      /**
       *隐藏checkbox
       */
      this.deleteFlagArr[this.selectedIndex] = !this.deleteFlagArr[this.selectedIndex];
    }
  }

  /**
   * 提交删除的item
   */
  submitDeleteItems() {
    console.log(this.selectedItem);
    // TODO 删除成功后重新加载数据
    this.getData();
  }
  /**
   * 清除其他tab的checkbox
   */
  clearAllCheck($event: {index: number}) {
    this.deleteFlagArr = [false, false, false];
    this.selectedItem = null;
  }

  /**
   * 获取选中items
   * param {string[]} value
   */
  setSelectItem(value: string[]): void {
    this.selectedItem = value;
  }
}

interface TabItem {
  label?: string;
  value?: string;
  content?: string;
}
