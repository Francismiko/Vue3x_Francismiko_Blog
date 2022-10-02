const getMethods = {
  getScrollTop(): number {
    // 获取当前距离顶部高度
    return (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    );
  },

  getScreenHeight(): number {
    // 获取当前窗口高度
    return window.innerHeight;
  },

  getRoutePath(): string {
    // 获取当前路由路径
    return window.document.location.pathname;
  },
  getNoRepeatRandomNumArray(needNum: number, allNum: number): number[] {
    // 获取一个不重复的随机数组
    const randomList = [];
    while (randomList.length < needNum) {
      const num = Math.floor(Math.random() * allNum);
      if (randomList.indexOf(num) === -1) {
        randomList.push(num);
      }
    }
    return randomList;
  },
};

export default getMethods;
