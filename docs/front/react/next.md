---
title: Next.js
date: 2026-01-06
---
## 性能优化坑
### force-static
- 注意避免页面的Link，prefetch可能会预加载链接失效
1. 在页面中使用Link组件，并设置prefetch为false
```jsx
<Link href="/about" prefetch={false}>About</Link>
```
### ISR（Incremental Static Regeneration）
- 定期让缓存失效
```jsx
export const revalidate = 3600;
```
- 适用场景
```jsx
export const revalidate = 3600;

export default async function PricingPage() {
  const pricing = await fetch("https://cms.xxx/pricing").then(r => r.json());
  return <div>价格：{pricing.price}</div>;
}

```