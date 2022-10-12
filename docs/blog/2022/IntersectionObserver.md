---
title: Intersection Observer
date: 2022-10-09 19:51:00
---
## IntersectionObserver
::: tip
* 可作为观察者，观察DOM对象`是否与可视窗口交叉`
* 可以用来做`图片懒加载`、`进场动画`等一系列动作。
:::
```html{140-147,149}
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li>32</li>
        <li>33</li>
        <li>34</li>
        <li>35</li>
        <li>36</li>
        <li>37</li>
        <li>38</li>
        <li>39</li>
        <li>40</li>
        <li>41</li>
        <li>42</li>
        <li>43</li>
        <li>44</li>
        <li>45</li>
        <li>46</li>
        <li>47</li>
        <li>48</li>
        <li>49</li>
        <li>50</li>
        <li>51</li>
        <li>52</li>
        <li>53</li>
        <li>54</li>
        <li>55</li>
        <li>56</li>
        <li>57</li>
        <li>58</li>
        <li>59</li>
        <li>60</li>
        <li>61</li>
        <li>62</li>
        <li>63</li>
        <li>64</li>
        <li>65</li>
        <li>66</li>
        <li>67</li>
        <li>68</li>
        <li>69</li>
        <li>70</li>
        <li>71</li>
        <li>72</li>
        <li>73</li>
        <li>74</li>
        <li>75</li>
        <li>76</li>
        <li>77</li>
        <li>78</li>
        <li>79</li>
        <li>80</li>
        <li>81</li>
        <li>82</li>
        <li>83</li>
        <li>84</li>
        <li>85</li>
        <li>86</li>
        <li>87</li>
        <li>88</li>
        <li>89</li>
        <li>90</li>
        <li>91</li>
        <li>92</li>
        <li>93</li>
        <li>94</li>
        <li>95</li>
        <li>96</li>
        <li>97</li>
        <li>98</li>
        <li>99</li>
        <li>100</li>
    </ul>
    <style>
        ul {
            list-style: none;
            padding: 1rem;
        }

        li {
            margin-top: .5rem;
            background-color: rgb(231, 231, 231);
            width: 100%;
            height: 2rem;
            padding: .5rem 1rem;
            border-radius: 4px;
            transform: scale(1);
        }

        .active {
            animation: bigger .4s linear 1;
        }

        @keyframes bigger {
            0% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.1);
            }

            100% {
                transform: scale(1);
            }
        }
    </style>
    <script>
        const lis = document.querySelectorAll("li");
        const callback = ([IntersectionObserverEntry, IntersectionObserver]) => {
            IntersectionObserverEntry.target.classList[IntersectionObserverEntry.isIntersecting ? "add" : "remove"]('active');
        };
        const options = {
            root: document.rootElement, // 判断交叉的根元素
            rootMargin: "-10px", // 判断的偏差值，默认是0，一交叉就出发
            threshold: 0, // 交叉判定比例，1为整个元素都可见才触发,默认 0
        };

        const observer = new IntersectionObserver(callback, options);
        Array.prototype.forEach.call(lis, item => observer.observe(item));
    </script>

</body>
```