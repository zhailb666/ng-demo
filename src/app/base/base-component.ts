import {OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

/**
 * 所有 Component 的父类

 * 用来取消组件中对 Observable 的 订阅。
 * 如果不在组件销毁时取消所有的订阅，则会发生内存泄漏，页面卡死
 * @example
 * export class AComponent extends BaseComponent implements OnInit, OnDestroy{
 *  protected unsubscribe$ = new Subject<any>();
 *  ngOnInit(){
 *    this.userService.getUsers()
 *    .pipe(
 *      takeUntil(this.unsubscribe$)
 *    ).subscribe(...);
 *  }
 *  ngOnDestroy(){
 *    this.unsubscribe$.next();
 *  }
 * }
 * 继承此类后，可以在所有组件中省略掉重复代码：
 * unsubscribe$ 属性和 ngOnDestroy/ngOnInit 方法已经得到继承
 * @example
 * export class AComponent extends BaseComponent implements OnInit {
 *  ngOnInit(){
 *    this.userService.getUsers()
 *    .pipe(
 *      takeUntil(this.unsubscribe$)
 *    ).subscribe(...);
 *  }
 * }
 * 如果组件要覆盖 ngOnDestroy 方法，必须在方法内显式调用父类的 ngOnDestroy
 * @example
 * export class AComponent extends BaseComponent implements OnDestroy{
 *  ngOnDestroy(){
 *    super.ngOnDestroy();
 *    // do something else ...
 *  }
 * }
 */
export abstract class BaseComponent implements OnDestroy, OnInit {
  protected readonly unsubscribe$ = new Subject<any>();

  ngOnInit() {
    this.init();
    this.launch();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

  /**
   * 初始化实例变量
   */
  protected abstract init(): void;

  /**
   * 初始化之后发送 http 请求等动作
   */
  protected abstract launch(): void;
}
