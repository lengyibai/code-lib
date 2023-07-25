interface Trigger {
  /** 触发区间 */
  range: [number, number];
  /** 触发回调 */
  callback: (progress: number) => void;
  /** 锁住0 */
  lock0: boolean;
  /** 锁住1 */
  lock1: boolean;
}

export default class {
  private el: HTMLElement;
  private triggers: Trigger[] = [];
  private scrollPos: number = 0;

  constructor(el: HTMLElement) {
    this.el = el;
    this.el.addEventListener("scroll", this.handleScroll.bind(this));
  }

  /** @description 添加回调函数 */
  trigger(range: [number, number], callback: (progress: number) => void) {
    this.triggers.push({ range, callback, lock0: true, lock1: true });
  }

  // 处理滚动事件
  private handleScroll() {
    this.scrollPos = this.el.scrollTop;

    this.checkTriggers();
  }

  // 检查触发回调函数
  private checkTriggers() {
    // 遍历所有的回调函数
    this.triggers.forEach((t) => {
      const [start, end] = t.range;

      //检查是否进入区间
      if (this.scrollPos >= start && this.scrollPos <= end) {
        // 计算进度
        const progress = (this.scrollPos - start) / (end - start);

        //触发回调
        t.callback(Number(progress.toFixed(2)));

        //允许触发
        t.lock0 = false;
        t.lock1 = false;
      } /* 如果离开区间 */ else if (this.scrollPos < start) {
        //判断是否允许触发(此处只能触发一次)
        if (t.lock0) return;
        t.callback(0);
        t.lock0 = true; //设置禁止出发
      } else if (this.scrollPos > end) {
        //判断是否允许触发(此处只能触发一次)
        if (t.lock1) return;
        t.callback(1);
        t.lock1 = true; //设置禁止出发
      }
    });
  }
}
