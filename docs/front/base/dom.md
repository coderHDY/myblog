# DOM
## 元素查找
### 汇总
::: warning 查找元素方法概览
|方法|作用|返回|
|---|---|---|
|querySelector|用【css选择器】获取第一个匹配的DOM元素|Element|
|querySelectorAll|用【css选择器】获取所有匹配的DOM元素集合|nodelist|
|getElementById|用【id】获取第一个匹配的DOM元素|Element|
|getElementsByClassName|用【class】获取匹配的DOM元素集合|nodelist|
|getElementsByName|用【name】获取匹配的DOM元素集合|nodelist|
|getElementByTagName|用【标签明】获取匹配的DOM元素集合|nodelist|
:::
### querySelector
::: tip querySelector
* 作用：获取第一个匹配的DOM元素
* 注意：
    1. 只返回第一个匹配的
    2. 选择器规则和css规则相同，但要注意特殊字符需转义
:::
:::: tabs
::: tab label=普通选择器
* 只有第一个被选中
```html{5}
<body>
    <div class='my-div'>哈哈哈</div>
    <div class='my-div'>哈哈哈</div>
    <script>
        const div = document.querySelector('.my-div');
        setTimeout(() => div.innerText = '呵呵', 2000 );
    </script>
</body>
```
:::
::: tab label=关系选择器
```html{9}
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

    <script>
        const div = document.querySelector('ul li');
        setTimeout(() => div.innerText = '呵呵', 2000 );
    </script>
</body>
```
:::
::::
### querySelectorAll
::: tip querySelectAll
* 作用：返回匹配nodelist
:::
::: warning nodelist
* nodelist是类数组，不是数组，可以用call/apply来调用数组方法
:::
```html{12}
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

    <script>
        const div = document.querySelectorAll('ul li');
        console.log(div instanceof Array); // false
        
        setTimeout(() => {
            Array.prototype.forEach.call(div, item => item.innerText = '呵呵')
        }, 2000 );
    </script>
</body>
```
### getElementById
::: tip getElementById
* 以id获取第一个匹配项
:::
```html
<body>
    <div id='1'>1</div>
    <div id='1'>2</div>
    <div id='1'>3</div>

    <script>
        const div = document.getElementById('1');
        setTimeout(() => div.innerText = '呵呵', 2000);
    </script>    
</body>
```
### getElementsByClassName
::: tip getElementByClassName
* 根据class获取nodelist
:::
```html{9}
<body>
    <ul>
        <li class='num'>1</li>
        <li class='num'>2</li>
        <li class='num'>3</li>
    </ul>

    <script>
        const div = document.getElementsByClassName('num');
        
        setTimeout(() => {
            Array.prototype.forEach.call(div, item => item.innerText = '呵呵')
        }, 2000 );
    </script>
</body>
```
### getElementsByName
::: tip getElementsByName
* 根据【name】属性获取nodelist
:::
```html{7}
<body>
    <div name='myDiv'>1</div>
    <div name='myDiv'>2</div>
    <div name='myDiv'>3</div>

    <script>
        const div = document.getElementsByName('myDiv');
        console.log(div)

        setTimeout(() => {
            Array.prototype.forEach.call(div, item => item.innerText = '呵呵')
        }, 2000);
    </script>    
</body>
```
### getElementByTagName
::: tip getElementByTagName
* 根据标签名获取nodelist
:::
```html
<body>
    <div name='myDiv'>1</div>
    <div name='myDiv'>2</div>
    <div name='myDiv'>3</div>

    <script>
        const div = document.getElementsByTagName('div');
        console.log(div)

        setTimeout(() => {
            Array.prototype.forEach.call(div, item => item.innerText = '呵呵');
        }, 2000);
    </script>    
</body>
```
## 查找关系
### 汇总
::: warning 元素按关系查找方法总结
|方法|作用|返回|
|---|---|---|
|children|获取子元素节点|HTMLCollection|
|childNodes|子节点【文本、属性、元素】|HTMLCollection|
|firstElementChild|第一个**元素**子节点|Element|
|lastElementChild|最后一个**元素**子节点|Element|
|firstChild|第一个子节点【可能是文本节点】|Element|
|ChildElementCount|子元素节点数量|Number|
|nextElementSibling|同一个父节点的下一个相邻节点|Element|
|previousElementSibling|同一个父节点的下一个相邻节点|Element|
|parentElement|父元素节点|Element|
|closest|以指定的选择器寻找祖先|Element \| null|

:::
### children
::: tip children
* 获取子元素节点【不包括文本节点和属性节点】
:::
```html{11,13-15}
<body>
    <ul>
        <li class='num'>1</li>
        <li class='num'>2</li>
        <li class='num'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');
        const children = ul.children;
        console.log(children); // HTMLCollection(3) [li.num, li.num, li.num]

        setTimeout(() => {
            Array.prototype.forEach.call(children, item => item.innerText = '呵呵');
        }, 2000 );
    </script>
</body>
```
### childNodes
::: tip childNodes
* 获取所有子节点，包括【文本节点、属性节点、元素节点】
* 可以用nodeType属性来区分节点
    * 1：元素节点
    * 2：属性节点
    * 3：文本节点
:::
::: warning
* 换行算空文本
:::
:::: tabs
::: tab label=使用
```html{10-11}
<body>
    <ul>
        <li class='num'>1</li>
        <li class='num'>2</li>
        <li class='num'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');
        const children = ul.childNodes;
        console.log(children); // NodeList(7) [text, li.num, text, li.num, text, li.num, text]
    </script>
</body>
```
:::
::: tab label=区分节点
```html{10-12}
<body>
    <ul>
        <li class='num'>1</li>
        <li class='num'>2</li>
        <li class='num'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');
        let childNodes = ul.childNodes;
        childNodes = Array.prototype.filter.call(childNodes, item => item.nodeType === 1)
        console.log(childNodes); // [li.num, li.num, li.num]
    </script>
</body>
```
:::
::::
### firstElementChild
::: tip firstElementChild
* 第一个元素子节点
:::
```html
<body>
    <ul>
        <li class='num'>1</li>
        <li class='num'>2</li>
        <li class='num'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');
        const firstElement = ul.firstElementChild;
        console.log(firstElement); // <li class="num">"1"</li>
    </script>
</body>
```
### firstChild
::: tip firstChild
* 返回第一个子节点（包括文本节点）
:::
```html
<body>
    <ul>
        <li class='num'>1</li>
        <li class='num'>2</li>
        <li class='num'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');
        const firstElement = ul.firstChild;
        console.log(firstElement); // #test 【换行空白文本】
    </script>
</body>
```
### lastElementChild
::: tip lastElementChild
* 第一个元素子节点
:::
```html{10-11}
<body>
    <ul>
        <li class='num'>1</li>
        <li class='num'>2</li>
        <li class='num'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');
        const lastElement = ul.lastElementChild;
        console.log(lastElement); // <li class="num">"1"</li>
    </script>
</body>
```
### childElementCount
::: tip childElementCount
* 获取子元素节点个数【不包含跨层级的，直系子元素个数】
:::
```html{11}
<body>
    <ul>
        <li class='num'>1</li>
        <li class='num'>2</li>
        <li class='num'><span>3</span></li>
    </ul>

    <script>
        const ul = document.querySelector('ul');
        let childElementCount = ul.childElementCount;
        console.log(childElementCount); // 3
    </script>
</body>
```
### previousElementSibling
::: tip previousElementSibling
* 作用：返回同一个父节点的前一个相邻节点，无则返回null
* 调用：refrence.previousElementSubling
:::
```html
<body>
    <ul>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const li2 = document.querySelector('.num2');
        console.log(li2.previousElementSibling); // <li class="num1">1</li>
    </script>
</body>
```
### nextElementSibling
::: tip nextElementSibling
* 返回同一个父节点的下一个相邻节点，无则返回null
:::
```html
<body>
    <ul>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const li2 = document.querySelector('.num2');
        console.log(li2.nextElementSibling); // <li class="num3">3</li>
    </script>
</body>
```
### parentElement
::: tip parentElement
* 当前元素的父节点
* parentNode效果相同
:::
```html{10-11}
<body>
    <ul>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const li2 = document.querySelector('.num2');
        console.log(li2.parentElement); // <ul>...</ul>
        console.log(li2.parentNode); // <ul>...</ul>
    </script>
</body>
```
### closest
::: tip closest
* 作用：以指定的选择器寻找祖先
* 返回：Element | null
:::
* 两秒钟后【爷爷】变【奶奶】，【爸爸】变【妈妈】
* 注：有两个outer选择器，选近的
```html{2,4,18-19}
<body>
    <div class='outer'>
        <span>祖先</span>
        <div class='outer'>
            <span>爷爷</span>
            <div class='parent'>
                <span>爸爸</span>
                <div class='child'>
                    <span>孙子</span>
                </div>
            </div>
        </div>
    </div>

    <script>
        const child = document.querySelector('.child');

        const father = child.closest('.parent');
        const outer = child.closest('.outer');

        setTimeout(() => {
            father.firstElementChild.innerText = '妈妈';
            outer.firstElementChild.innerText = '奶奶';
        }, 2000)
    </script>
</body>
```
### 其他节点
::: warning 特殊元素提取
|属性|获取|返回值|
|---|---|---|
|title|获取文档标题|String|
|head|head节点|Element|
|body|body节点|Element|
|forms|from表单|HTML Collection|
|images|img图片列表|HTML Collection|
|links|所有< area >< a >元素集合|HTML Collection|
|URL|浏览器地址|String|
|documentURI|documentURI 适用于所有类型的文档|String|
|hidden|的hidden属性。注：display:none不触发|Boolean|
|lastModified|文档的最后更改时间|lastModified|
|location|返回Location对象|Object|
|activeElement|返回当前活跃的元素：被选中的input/button|Object|
:::
## 元素增删
### 汇总
::: tip 汇总
|方法|作用|调用|
|---|---|---|
|prepend|【第一个子节点前】增【1-多】|father.prepend(node1, node2)|
|append|【最后一个子节点后】增【1-多】，建议|father.append(node1, node2)|
|appendChild|【最后一个子节点后】增【1个】，不支持domString，不灵活|father.appendChild(node)|
|insertBefore|【最某个子节点前】增【1个】，建议|father.insertBefore(newNode, referenceNode)|
|after|本节点之后增【1-多】|node.after(node1, node2)|
|before|本节点之前增【1-多】|node.before(node1, node2)|
|removeChild|移除某个子元素|father.removeChild(child)|
|replaceChild|替换某个子元素|father.replaceChild(newChild, oldChild)|
|replaceChildren|替换全部子元素|father.replaceChildren(node1, node2)|
|remove|移除本节点|node.remove()|
|cloneNode|克隆节点|node.cloneNode(isDeep)|
|insertAdjacentElement|指定位置插入节点|node.insertAdjacentElement(position, node)|
|insertAdjacentText|指定位置插入文本|node.insertAdjacentText(position, node)|
|createElement|创造元素|document.createElement(tagName)|
:::
### prepend
::: tip prepend
* 作用：在父节点的第一个子节点之前插入节点【们】
* 调用：parent.prepend(node[, node...])
:::
* 【1】前面加【4】【5】
```html
<body>
    <ul>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');

        const li4 = document.createElement('li');
        li4.innerText = '4';
        const li5 = document.createElement('li');
        li5.innerText = '5';

        setTimeout(() => {
            ul.prepend(li4, li5);
        }, 2000 );
    </script>
</body>
```
### appendChild
::: tip appendChild
* 作用：父节点最后添加子节点
* 调用：parent.appendChild(child)
:::
```html
<body>
    <ul class='my-ul list'>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');
        const li4 = document.createElement('li');
        li4.innerText = '哈哈哈';
        console.log(ul.classList);

        setTimeout(() => {
            ul.appendChild(li4);
        }, 2000 );
    </script>
</body>
```
### append
::: tip append
* 作用：在本元素节点的【最后一个子元素节点之后】添加元素，node或DOMString
* 调用：parent.append(node[, node...])
* 入参：Node或DOMString
* append比appendChild更加灵活，一般用这个更多
:::
* 2s后【3】后面加【4】
```html
<body>
    <ul>
        <li class='num'>1</li>
        <li class='num'>2</li>
        <li class='num'>3</li>
    </ul>

    <script>
        const li4 = document.createElement('li');
        li4.innerText = '4';
        
        const ul = document.querySelector('ul');
        setTimeout(() => ul.append(li4), 2000);
    </script>
</body>
```
### insertBefore
::: tip insertBefore
* 在父节点的某个子节点之前插入节点
* 调用：father.insertBefore(newNode, referenceNode)
:::
```html
<body>
    <ul>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const li2 = document.querySelector('.num2');
        const parent = document.querySelector('ul');
        const li4 = document.createElement('li');
        li4.innerText = '哈哈哈';

        setTimeout(() => {
            parent.insertBefore(li4, li2);
        }, 2000 );
    </script>
</body>
```
### after
::: tip after
* 作用：在指定节点之后插入节点/文本
* 调用：node.after(node[, node...])
:::
* 在整个【ul】之后插入【哈哈哈】
```html{14}
<body>
    <ul class='my-ul list'>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');
        const li4 = document.createElement('li');
        li4.innerText = '哈哈哈';

        setTimeout(() => {
            ul.after(li4);
        }, 2000 );
    </script>
</body>
```
### before
::: tip before
* 作用：在指定节点前插入节点
* 调用：node.before(node)
:::
* 在【ul】之前插入【哈哈哈】
```html
<body>
    <ul class='my-ul list'>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');
        const li4 = document.createElement('li');
        li4.innerText = '哈哈哈';

        setTimeout(() => {
            ul.before(li4);
        }, 2000 );
    </script>
</body>
```
### createElement
::: tip createElement
* 作用：创建指定标签的元素
* 调用：document.querySelector(tag[, options])
:::
### removeChild
::: tip removeChild
* 移除某个子元素
:::
```html{11-13}
<body>
    <ul>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const li2 = document.querySelector('.num2');
        const father = li2.parentElement;
        setTimeout(() =>{
            console.log(father.removeChild(li2));
        }, 2000);
    </script>
</body>
```
### replaceChild
::: tip replaceChild
* 替换子节点，oldNode节点会被删除，newNode如果在页面上会被移动
* 调用：father.replaceChild(newNode, oldNode)
:::
```html{14-16}
<body>
    <ul>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <span>哈哈哈</span>
    <script>
        const span =document.querySelector('span');
        const li2 = document.querySelector('.num2');
        const father = li2.parentElement;

        setTimeout(() =>{
            console.log(father.replaceChild(span, li2));
        }, 2000);
    </script>
</body>
```
### replaceChildren
::: tip replaceChildren
* 作用：把子节点全部换掉
* 调用：parent.replaceChildren(node[, node...])
:::
:::: tabs
::: tab label=元素替换
```html{19}
<body>
    <ul>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');

        const lis = [];
        for(let i = 0; i < 5; i++) {
            const li = document.createElement('li');
            li.innerText = `新节点：哈哈${i}`;
            lis.push(li);
        }

        setTimeout(() => {
            ul.replaceChildren(...lis);
        }, 2000 );
    </script>
</body>
```
:::
::: tab label=整体移动
* 2s后 ul2的子节点 整体替换掉ul1的子节点
```html{21}
<body>
    <ul id='ul1'>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <ul id='ul2'>
        <li class='1'>haha</li>
        <li class='2'>haha</li>
        <li class='3'>haha</li>
    </ul>

    <script>
        const ul1 = document.querySelector('#ul1');
        const ul2 = document.querySelector('#ul2');

        const lis = ul2.children;

        setTimeout(() => {
            ul1.replaceChildren(...lis);
        }, 2000 );
    </script>
</body>
```
:::
::::
### cloneNode
::: tip cloneNode
* 拷贝一个节点
* 调用：node.clone(deep)
* 入参：Boolean
* 返回：克隆节点
* tip：入参为是否要拷贝后代节点
:::
:::: tabs
::: tab label=非克隆
* 非克隆的添加页面已有的节点。会直接移动节点
> 两秒后【哈哈哈】直接移动到ul下面
```html{13-15}
<body>
    <ul>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <span>哈哈哈</span>
    <script>
        const span = document.querySelector('span');
        const ul = document.querySelector('ul');

        setTimeout(() =>{
            ul.append(span);
        }, 2000);
    </script>
</body>
```
:::
::: tab label=浅拷贝
* 两秒钟后【span】元素进去【ul】了，【哈哈哈】没有
```html{12,14-16}
<body>
    <ul>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <span>哈哈哈</span>
    <script>
        const span = document.querySelector('span');
        const ul = document.querySelector('ul');
        const clone = span.cloneNode();

        setTimeout(() =>{
            ul.append(clone);
        }, 2000);
    </script>
</body>
```
:::
::: tab label=深拷贝
* 两秒钟后页面多了一个【哈哈哈】
```html{12}
<body>
    <ul>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <span>哈哈哈</span>
    <script>
        const span = document.querySelector('span');
        const ul = document.querySelector('ul');
        const clone = span.cloneNode(true);

        setTimeout(() =>{
            ul.append(clone);
        }, 2000);
    </script>
</body>
```
:::
::::
### remove
::: tip remove
* 删除本节点
* 调用：node.remove()
:::
```html{12}
<body>
    <ul>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const num2 = document.querySelector('.num2');

        setTimeout(() => {
            num2.remove();
        }, 2000 );
    </script>
</body>
```
### insertAdjacentElement
::: tip insertAdjacentElement
* 作用：指定位置插入节点
* 调用：node.insertAdjacentElement(position, node)
:::
```html{17-20}
<body>
    <ul id='box'>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const box = document.querySelector('#box');
        const nodelist = ['头前', '头后', '尾前', '尾后'];

        nodelist.forEach((item, index, arr) => {
            arr[index] = document.createElement('span');
            arr[index].innerText = item;
        })

        box.insertAdjacentElement('beforebegin', nodelist[0]);
        box.insertAdjacentElement('afterbegin', nodelist[1]);
        box.insertAdjacentElement('beforeend', nodelist[2]);
        box.insertAdjacentElement('afterend', nodelist[3]);
    </script>
</body>
```
### insertAdjacentText
::: tip insertAdjacentText
* 作用：指定位置插入文本
* 调用：node.insertAdjacentText(position, text)
:::
```html
<body>
    <ul id='box'>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const box = document.querySelector('#box');
        box.insertAdjacentText('beforebegin', '头前');
        box.insertAdjacentText('afterbegin', '头后');
        box.insertAdjacentText('beforeend', '尾前');
        box.insertAdjacentText('afterend', '尾后');
    </script>
</body>
```
## 常用属性
### id
::: tip id
* 获取id属性
:::
```html
<body>
    <ul>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');
        console.log(ul.id); // ''
        ul.id = 'box';
        console.log(ul.id); // box
    </script>
</body>
```
### tagName
::: tip tagName
* 获取tagName【大写形式返回】
:::
```html
<body>
    <ul id='box'>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const box = document.querySelector('#box');
        console.log(box?.tagName); // UL
    </script>
</body>
```
### className
::: tip className
* 作用：以字符串的形式返回元素所有类名
* tip：classList完全可替代此方法
:::
```html
<body>
    <ul id='box' class='list select'>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');
        console.log(ul.className); // list select
    </script>
</body>
```
### classList
::: tip classList
* 作用：以DOMTokenList的形式返回元素的class
* 返回值是DOMTokenList，有专门的增删改查方法，比className好用
:::
```html
<body>
    <ul id='box' class='list select'>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');

        // 获取
        const classList = ul.classList;
        console.log(classList); // DOMTokenList(2) ['list', 'select']
        
        // 增
        classList.add('choose');
        console.log(classList); // DOMTokenList(3) ['list', 'select', 'choose']

        // 删
        classList.remove('select');
        console.log(classList); // DOMTokenList(2) ['list', 'choose']

        // 查
        console.log(classList.contains('list')); // true
        
        // 改
        console.log(classList.toggle('list')); // false
        console.log(classList.contains('list')); // false
        
        console.log(classList.toggle('list')); // true
        console.log(classList.contains('list')); // true
    </script>
</body>
```
### xxxAttribute
::: tip xxxAttribute
* 作用：增删改查属性
* 增：node.setAttribute(key, value)
* 删：node.removeAttribute(key)
* 改：node.toggleAttribute(key)
* 查：node.getAttribute(key)
* 查：node.hasAttribute(key)
:::
```html
<body>
    <ul id='box' class='list select'>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const ul = document.querySelector('ul');
        // 增
        ul.setAttribute('name', 'list');

        // 查
        console.log(ul.getAttribute('name')); // list
        console.log(ul.hasAttribute('name')); // true

        // 改
        ul.toggleAttribute('name');
        console.log(ul.hasAttribute('name')); // false
        
        // 删
        ul.removeAttribute('class');
        console.log(ul.hasAttribute('class')); // false
    </script>
</body>
```
### matchs
::: tip matches
* 作用：判断元素是否符合选择器
* 调用：node.matches(selector)
:::
```html
<body>
    <ul id='box'>
        <li class='num1'>1</li>
        <li class='num2'>2</li>
        <li class='num3'>3</li>
    </ul>

    <script>
        const box = document.querySelector('#box');

        console.log(box.matches('ul')); // true
        console.log(box.matches('#box')); // true
        console.log(box.matches('.list')); // false
    </script>
</body>
```
### getComputedStyle
::: tip getComputedStyle
* 获取元素的计算属性
:::
:::: tabs
::: tab label=示例
```html{16-18}
<body>
    <div class="father">你好</div>

    <style>
        .father {
            width: 200px;
            height: 200px;
            background-color: red;

            line-height: 200px;
            text-align: center;
        }
    </style>

<script>
    const div = document.querySelector('.father');
    console.log(getComputedStyle(div).boxSizing); // content-box
    console.log(getComputedStyle(div).backgroundColor); // rgb(255, 0, 0)
</script>
</body>
```
:::
::::
## 坐标/大小
### scrollxxx
::: tip scrollHeight/scrollWidth
* 元素包括padding的大小值，不包括【border、margin】
* **可滚动元素时包括不可见的部分的值**
:::
::: tip scrollTop/scrollLeft
* 【可滚动元素的】元素的滚动位置，相当于元素border内的【左上顶点】已经滚动出来的距离
* 不可滚动的元素默认是0
* 元素滚动触发scroll事件
:::
:::: tabs
::: tab label=不滚动不超出
```html{8-9,16-19}
<body>
    <div class='container'>
        我不会溢出
    </div>

    <style>
        .container {
            width: 100px;
            height: 100px;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    </style>
    <script>
        const child = document.querySelector('.container');
        console.log(child.scrollHeight); // 100
        console.log(child.scrollWidth); // 100
        console.log(child.scrollTop); // 0
        console.log(child.scrollLeft); // 0
    </script>
</body>
```
:::
::: tab label=不滚动超出
```html{8-9,16-19}
<body>
    <div class='container'>
        我会溢出，我会溢出，我会溢出，我会溢出，我会溢出，我会溢出，我会溢出，我会溢出，我会溢出，我会溢出，
    </div>

    <style>
        .container {
            width: 100px;
            height: 100px;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    </style>
    <script>
        const child = document.querySelector('.container');
        console.log(child.scrollHeight); // 220
        console.log(child.scrollWidth); // 100
        console.log(child.scrollTop); // 0
        console.log(child.scrollLeft); // 0
    </script>
</body>
```
:::
::: tab label=横向溢出
```html{12-13,19-22}
<body>
    <div class='container'>
        我会溢出，我会溢出，我会溢出，我会溢出，我会溢出，我会溢出，我会溢出，
        我会溢出，我会溢出，我会溢出，
    </div>

    <style>
        .container {
            width: 100px;
            height: 100px;

            /* 强制不换行 */
            white-space: nowrap;
            overflow: hidden;
        }
    </style>
    <script>
        const child = document.querySelector('.container');
        console.log(child.scrollHeight); // 100
        console.log(child.scrollWidth); // 805
        console.log(child.scrollTop); // 0
        console.log(child.scrollLeft); // 0
    </script>
</body>
```
:::
::: tab label=纵向滚动
```html{12,21-22,24-28}
<body>
    <div class='container'>
        我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，
        我会滚动，我会滚动，我会滚动，
    </div>

    <style>
        .container {
            width: 100px;
            height: 100px;

            overflow: scroll;
        }
    </style>
    <script>
        const container = document.querySelector('.container');
        console.log(container.scrollHeight); // 220
        console.log(container.scrollWidth); // 100

        // 滚动条会被纵向滚动
        container.scrollTop = 120;
        console.log(container.scrollTop); // 120

        container.addEventListener('scroll', event => {
            if (container.scrollTop === 0) {
                console.log('滚到顶了');
            }
        })
    </script>
</body>
```
:::
::: tab label=横向滚动
```html{12-13,21-23,25-30}

<body>
    <div class='container'>
        我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，
        我会滚动，我会滚动，我会滚动，
    </div>

    <style>
        .container {
            width: 100px;
            height: 100px;
            white-space: nowrap;
            overflow: scroll;
        }
    </style>
    <script>
        const container = document.querySelector('.container');
        console.log(container.scrollHeight); // 100
        console.log(container.scrollWidth); // 805

        // 横向滚到头
        container.scrollLeft= container.scrollWidth - 100;
        console.log(container.scrollLeft); // 705

        // 每次横向滚到最后都会提醒【要用this就不能用箭头函数】
        container.addEventListener('scroll', function() {
            if (this.scrollLeft === 705) {
                console.log('滚到头了');
            }
        })
    </script>
</body>
```
:::
::::
### clientXXX
::: tip clientHeight/clientWidth
* 作用：包括【padding】，【不包括scroll部分和hidden部分】的实际占位大小
:::
::: tip clientTop/clientLeft
* 作用：border-top/border-left 的值
:::
:::: tabs
::: tab label=clientHeight
* 和scrollHeight做对比：scrollHeight包括了未展示部分高度，clientHeight不包括
```html{16-17}
<body>
    <div class='container'>
        我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，
        我会滚动，我会滚动，我会滚动，
    </div>

    <style>
        .container {
            width: 100px;
            height: 100px;
            overflow: scroll;
        }
    </style>
    <script>
        const container = document.querySelector('.container');
        console.log(container.scrollHeight); // 220
        console.log(container.clientHeight); // 100
    </script>
</body>
```
:::
::: tab label=clientWidth
* 和scrollWidth做对比：scrollWidth包括了未展示部分高度，clientWidth不包括
```html{16-17}
<body>
    <div class='container'>
        我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，
        我会滚动，我会滚动，我会滚动，
    </div>

    <style>
        .container {
            width: 100px;
            height: 100px;
            white-space: nowrap;
            overflow: scroll;
        }
    </style>
    <script>
        const container = document.querySelector('.container');
        console.log(container.scrollWidth); // 805
        console.log(container.clientWidth); // 100
    </script>
</body>
```
:::
::: tab label=clientLeft
* border-left的值
> MDN是错误的？：「clientLeft包括【border-left + 本元素左滚动条的宽度】」
```html{9,20}
<body>
    <div class='container'>
        我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，
        我会滚动，我会滚动，我会滚动，
    </div>

    <style>
        .container {
            border-left: 10px #333 solid;
            margin-left: 20px;
            padding-left: 30px;
            width: 100px;
            height: 100px;
            overflow-y:scroll;
            direction:rtl;
        }
    </style>
    <script>
        const container = document.querySelector('.container');
        console.log(container.clientLeft); // 10
    </script>
</body>
```
:::
::: tab label=cliectTop
* border-top值
```html{9,18}
<body>
    <div class='container'>
        我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，
        我会滚动，我会滚动，我会滚动，
    </div>

    <style>
        .container {
            border-top: 20px #333 solid;
            width: 100px;
            height: 100px;
            overflow-y:scroll;
            direction:rtl;
        }
    </style>
    <script>
        const container = document.querySelector('.container');
        console.log(container.clientTop); // 20
    </script>
</body>
```
:::
::::
### offsetXXX
::: tip ofsetHeight/offsetWidth
* 【展示宽高 + 上下padding + 上下border】，不包括hidden和scroll大小
:::
::: tip ofsetTop/offsetLeft
* ofsetTop:【border的左上顶点】距离【有定位属性的】祖先元素的【border内边框】的距离
* offsetLeft在不同的浏览器中表现不同
:::
:::: tabs
::: tab label=offsetHeight
* border-top + 
```html{19-20}
<body>
    <div class='container'>
        我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，
        我会滚动，我会滚动，我会滚动，
    </div>

    <style>
        .container {
            border: 20px #333 solid;
            padding: 10px;
            width: 100px;
            height: 100px;
            overflow-y:scroll;
        }
    </style>
    <script>
        const container = document.querySelector('.container');

        // 20 + 10 + 100 + 10 + 20 = 160
        console.log(container.offsetHeight); // 160
    </script>
</body>
```
::: 
::: tab label=offsetWidth
```html{19-20}
<body>
    <div class='container'>
        我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，
        我会滚动，我会滚动，我会滚动，
    </div>

    <style>
        .container {
            border: 2px #333 solid;
            padding: 1px;
            width: 100px;
            height: 100px;
            overflow-y:scroll;
        }
    </style>
    <script>
        const container = document.querySelector('.container');

        // 2 + 1 + 100 + 1 + 2 = 106
        console.log(container.offsetHeight); // 106
    </script>
</body>
```
:::
::: tab label=offsetTop
```html{11-12,19,28-29}
<body>
    <div id='outer'>
        <div class='container'>
            我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，
            我会滚动，我会滚动，我会滚动，
        </div>
    </div>

    <style>
        #outer {
            position: relative;
            padding: 10px;
            margin: 11px;
            border: 12px solid #333;
        }
        .container {
            border: 2px #333 solid;
            padding: 1px;
            margin: 20px;
            width: 100px;
            height: 100px;
            overflow-y:scroll;
        }
    </style>
    <script>
        const container = document.querySelector('.container');

        // 10 + 20 = 30
        console.log(container.offsetTop); // 30
    </script>
</body>
```
:::
::: tab label=offsetLeft
```html{11-12,19,28-29}
<body>
    <div id='outer'>
        <div class='container'>
            我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，
            我会滚动，我会滚动，我会滚动，
        </div>
    </div>

    <style>
        #outer {
            position: relative;
            padding: 10px;
            margin: 11px;
            border: 12px solid #333;
        }
        .container {
            border: 2px #333 solid;
            padding: 1px;
            margin: 20px;
            width: 100px;
            height: 100px;
            overflow-y:scroll;
        }
    </style>
    <script>
        const container = document.querySelector('.container');

        // 10 + 20 = 30
        console.log(container.offsetLeft); // 30
    </script>
</body>
```
:::
::::
## 滚动
### scroll
::: tip scroll
* 作用：滚动到本元素的特定位置
* 调用：node.scroll(x, y)
:::
```html{16-17}
<body>
    <div class='container'>
        我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，
        我会滚动，我会滚动，我会滚动，
    </div>

    <style>
        .container {
            width: 100px;
            height: 100px;
            overflow-y: scroll;
        }
    </style>
    <script>
        const container = document.querySelector('.container');
        container.scroll(0, 50);
        console.log(container.scrollTop); // 50
    </script>
</body>
```
### scrollTo
::: tip scrollTo
* 作用：元素滚动到指定的位置【[同scroll](./dom.html#scroll)】
* 调用：node.scrollTo(x, y)
:::
### scrollBy
::: tip scrollBy
* 作用：元素滚动指定距离【参照当前的位置滚动】
:::
```html
<body>
    <div class='container'>
        我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，我会滚动，
        我会滚动，我会滚动，我会滚动，
    </div>

    <style>
        .container {
            width: 100px;
            height: 100px;
            overflow-y: scroll;
        }
    </style>
    <script>
        const container = document.querySelector('.container');
        container.scrollBy(0, 50);
        container.scrollBy(0, 50);
        console.log(container.scrollTop); // 100
    </script>
</body>
```
### scrollIntoView
::: tip scrollIntoView
* 滚动父元素让本元素可见
* 调用：node.scrollIntoView(options)
:::
:::: tabs
::: tab label=顶部对齐窗口
* 滚动container让绿盒子顶部对齐浏览器视口
```html{31}
<body>
    <div class='container'>
        <div class="child1"></div>
        <div class="child2"></div>
        <div class="child3"></div>
    </div>

    <style>
        .container {
            width: 100px;
            height: 1000px;
            background-color: rgba(241, 155, 155, 0.2);
            overflow-y: scroll;
        }
        .child1{
            height: 200px;
            width: 100px;
            background-color: rgb(147, 156, 240);
        }
        .child2{
            height: 200px;
            width: 100px;
            background-color: rgb(147, 240, 167);}
        .child3{
            height: 1000px;
            width: 100px;
            background-color: rgb(240, 147, 175);}
    </style>
    <script>
        const child2 = document.querySelector('.child2');
        setTimeout(() => child2.scrollIntoView(), 2000)
    </script>
</body>
```
:::
::: tab label=底部对齐窗口
* chrome除了顶部对齐其他对齐跳转比较混乱：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)
:::
::::