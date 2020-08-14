---
sidebarDepth: 3
---
## CSS注释规范
### 单行注释
注释内容第一个字符和最后一个字符都是一个空格字符，单独占一行，行与行之间相隔一行
__推荐：__
```css
/* Comment Text */
.box{}

/* Comment Text */
.box{}
```
__不推荐：__
```css
/*Comment Text*/
.box{
	display: block;
}
.box{
	display: block;/*Comment Text*/
}
```
### 模块注释
注释内容第一个字符和最后一个字符都是一个空格字符，/* 与 模块信息描述占一行，多个横线分隔符-与*/占一行，行与行之间相隔两行
__推荐：__
```css
/* Module A
---------------------------------------------------------------- */
.mod_a {}


/* Module B
---------------------------------------------------------------- */
.mod_b {}
```

__不推荐：__
```css
/* Module A ---------------------------------------------------- */
.mod_a {}
/* Module B ---------------------------------------------------- */
.mod_b {}
```
### 文件信息注释
在样式文件编码声明 @charset 语句下面注明页面名称、作者、创建日期等信息
```css
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 20120-10-10
 */

```