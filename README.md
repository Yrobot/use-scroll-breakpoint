# use-scroll-breakpoint

[
![](https://img.shields.io/github/size/yrobot/use-scroll-breakpoint/lib/index.js)
![](https://img.shields.io/github/issues/yrobot/use-scroll-breakpoint)
![](https://img.shields.io/github/stars/yrobot/use-scroll-breakpoint)
](https://github.com/yrobot/use-scroll-breakpoint)

react hooks, 快速获取滚动状态  
快速实现 stikcy 效果  
小而精

## install

### npm

```
yarn add use-scroll-breakpoint
```

or

```
npm install use-scroll-breakpoint
```

## usage

```js
import useScrollBreakpoint from 'use-scroll-breakpoint';

const App = () => {
  // isBreak: window.scrollTop > 500
  const [isBreak] = useScrollBreakpoint({
    breakpoint: 500,
  });
  return <div className='app'>...</div>;
};
```

## demo on codesandbox

[react demo](https://codesandbox.io/s/use-scroll-breakpoint-demo-krmmt)
