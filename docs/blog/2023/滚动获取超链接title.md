---
title: 滚动获取超链接title
date: 2023-02-24
---
## 关键算法
```js
const AHL_HEADER_ANCHOR_SELECTOR = ".link";

const setActiveHash = () => {
  const anchors = [].slice.call(document.querySelectorAll(AHL_HEADER_ANCHOR_SELECTOR));

  const scrollTop = Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );

  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  );

  const bottomY = window.innerHeight + scrollTop;

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i]
    const nextAnchor = anchors[i + 1]

    const isActive = i === 0 && scrollTop === 0
      || (scrollTop >= anchor.offsetTop + 10
        && (!nextAnchor || scrollTop < nextAnchor.offsetTop - 10));

    const routeHash = decodeURIComponent(location.hash);
    if (isActive && routeHash !== decodeURIComponent(anchor.hash)) {
      const activeAnchor = anchor;
      if (bottomY === scrollHeight) {
        for (let j = i + 1; j < anchors.length; j++) {
          if (routeHash === decodeURIComponent(anchors[j].hash)) {
            return;
          }
        }
      }
      location.hash = decodeURIComponent(activeAnchor.hash);
    }
  }
}
```
## 例子
```html
<body>
    <a class="link" href="#one">1</a>
    <div id="">2</div>
    <div id="">3</div>
    <div id="">4</div>
    <div id="">5</div>
    <div id="">6</div>
    <div id="">7</div>
    <div id="">8</div>
    <div id="">9</div>
    <div id="">10</div>
    <div id="">11</div>
    <div id="">12</div>
    <div id="">13</div>
    <div id="">14</div>
    <div id="">15</div>
    <div id="">16</div>
    <div id="">17</div>
    <div id="">18</div>
    <div id="">19</div>
    <a class="link" href="#two">2</a>
    <div id="">21</div>
    <div id="">22</div>
    <div id="">23</div>
    <div id="">24</div>
    <div id="">25</div>
    <div id="">26</div>
    <div id="">27</div>
    <div id="">28</div>
    <div id="">29</div>
    <div id="">30</div>
    <div id="">31</div>
    <div id="">32</div>
    <div id="">33</div>
    <div id="">34</div>
    <div id="">35</div>
    <div id="">36</div>
    <div id="">37</div>
    <div id="">38</div>
    <div id="">39</div>
    <a class="link" href="#three">3</a>
    <div id="">41</div>
    <div id="">42</div>
    <div id="">43</div>
    <div id="">44</div>
    <div id="">45</div>
    <div id="">46</div>
    <div id="">47</div>
    <div id="">48</div>
    <div id="">49</div>
    <div id="">50</div>
    <div id="">51</div>
    <div id="">52</div>
    <div id="">53</div>
    <div id="">54</div>
    <div id="">55</div>
    <div id="">56</div>
    <div id="">57</div>
    <div id="">58</div>
    <div id="">59</div>
    <div id="">60</div>
    <div id="">61</div>
    <div id="">62</div>
    <div id="">63</div>
    <div id="">64</div>
    <div id="">65</div>
    <div id="">66</div>
    <div id="">67</div>
    <div id="">68</div>
    <div id="">69</div>
    <div id="">70</div>
    <a class="link" href="#four">4</a>
    <div id="">72</div>
    <div id="">73</div>
    <div id="">74</div>
    <div id="">75</div>
    <div id="">76</div>
    <div id="">77</div>
    <div id="">78</div>
    <div id="">79</div>
    <div id="">80</div>
    <div id="">81</div>
    <div id="">82</div>
    <div id="">83</div>
    <div id="">84</div>
    <div id="">85</div>
    <div id="">86</div>
    <div id="">87</div>
    <div id="">88</div>
    <div id="">89</div>
    <a class="link" href="#five">5</a>
    <div id="">91</div>
    <div id="">91</div>
    <div id="">91</div>
    <div id="">91</div>
    <div id="">91</div>
    <div id="">91</div>
    <div id="">91</div>
    <div id="">91</div>
    <div id="">91</div>
    <div id="">91</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">92</div>
    <div id="">93</div>
    <div id="">94</div>
    <div id="">95</div>
    <div id="">96</div>
    <div id="">97</div>
    <div id="">98</div>
    <div id="">99</div>
    <div id="">100</div>

    <style>
        .link {
            font-size: 50px;
        }
    </style>

    <script>
        const AHL_HEADER_ANCHOR_SELECTOR = ".link";

        const setActiveHash = () => {
          const anchors = [].slice.call(document.querySelectorAll(AHL_HEADER_ANCHOR_SELECTOR));

          const scrollTop = Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          );

          const scrollHeight = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight
          );

          const bottomY = window.innerHeight + scrollTop;

          for (let i = 0; i < anchors.length; i++) {
            const anchor = anchors[i]
            const nextAnchor = anchors[i + 1]

            const isActive = i === 0 && scrollTop === 0
              || (scrollTop >= anchor.offsetTop + 10
                && (!nextAnchor || scrollTop < nextAnchor.offsetTop - 10));

            const routeHash = decodeURIComponent(location.hash);
            if (isActive && routeHash !== decodeURIComponent(anchor.hash)) {
              const activeAnchor = anchor;
              if (bottomY === scrollHeight) {
                for (let j = i + 1; j < anchors.length; j++) {
                  if (routeHash === decodeURIComponent(anchors[j].hash)) {
                    return;
                  }
                }
              }
              location.hash = decodeURIComponent(activeAnchor.hash);
            }
          }
        }

        const debounce = (fn, daily = 300) => {
          let timer = null;
          return () => {
            if (timer) return;
            timer = setTimeout(() => {
              fn();
              timer = null;
            }, daily);
          }
        }

        window.addEventListener("scroll", debounce(setActiveHash));
    </script>
</body>
```