# Flex布局
flex布局可以理解为弹性布局，任何一个容器都可以被指定为Flex布局
## 指定为flex布局
- 块元素
```
display: flex;
```

- 行内元素
```
display: inline-flex;
```
**注意**：当我们所使用的浏览器内核是Webkit（safari浏览器） 要加上-webkit前缀
```
  display: -webkit-flex; /* Safari */
  display: flex;
```
## 理解
被指定为flex布局的元素，理解为是弹性容器，容器里面的元素，可以理解为容器元素。从这里我们可以看出来，想要使用弹性布局，要将父元素设置为弹性容器，这样里面子元素才能享受到弹性的感觉

flex布局有两个轴：主轴和交叉轴，水平方向的是主轴，与主轴垂直的轴是交叉轴，

## 相关属性
## 设置在容器上的属性（父元素）
### flex-direction
flex-direction决定**主轴**的方向 默认是水平的
flex-direction：row | row-reverse | column | column-reverse;
- row:是水平方  从左向右   
- column：是竖直方向 从上向下
-  -reverse是对应反向的后缀 

### flex-wrap
flex-wrap：子元素会默认排列在一条轴线山，如果一条轴线上排不下，**如何换行**
被设定的flex的是一个弹性容器，会讲子元素全部在父元素内进行展示，如果父元素的高度/宽度不足以让子元素展示，会将子元素进行挤压，在页面中进行展示
flex-wrap：nowrap | wrap | wrap-reverse;
- nowrap：不换行
- wrap：换行
- wrap—reverse：反向换行（本来在第一行的换行后在第二行了）

### flex-flow
**flex-flow**是flex-direction和flex-wrap的简写形式，默认是row nowrap
- flex-flow: < flex-direction > || < flex-wrap >; （可选）


### justify-content

定义子元素在主轴方向上的如何排列  
justify-content：flex-start|flex-end|center｜space-between|space-around

- flex-start（默认值）：左对齐  
- flex-end：右对齐  
- center： 居中  
- space-between：两端对齐，项目之间的间隔都相等。  
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。  

### align-items

定义子元素在交叉轴轴方向上的如何排列  
align-items: flex-start | flex-end | center | baseline | stretch;
- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。


### align-content
**align-content**属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。  
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
- flex-start：**与交叉轴**的起点对齐。
- flex-end：**与交叉轴**的终点对齐。
- center：**与交叉轴**的中点对齐。
- space-between：**与交叉轴**两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：多行轴线被拉伸占满整个交叉轴。

## 设置在容器里子元素的属性（子元素）
### order
- order属性定义子元素的排列顺序。数值越小，排列越靠前，默认为0。

### flex-grow
- flex-grow属性定义子元素的放大比例，默认为0，即如果存在剩余空间，也不放大  
- 如果所有子元素的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个子元素的flex-grow属性为2，其他子元素都为1，则前者占据的剩余空间将比其他项多一倍。

### flex-shrink
- flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
- **负值对该属性无效**
- 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。


### flex-basis
- 定义了在分配多余空间**之前**，子元素占据的主轴空间
（子元素大小）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
- 如果没有多余空间，设置的flex-basis值大于当前的大小，子元素不会占据设置的这么大
- 它可以设为跟width或height属性一样的值（比如350px），则子元素将占据固定空间。

### flex
- flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

### align-self
- align-self属性允许单个元素有与其他元素不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch
```
align-self: auto | flex-start | flex-end | center | baseline | stretch;
该属性可能取6个值，除了auto，其他都与align-items属性完全一致
```


参照阮一峰的flex布局