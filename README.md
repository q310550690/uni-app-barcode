# uni-app 条形码生成器
### 作者：诗小柒

1. 支持H5、微信小程序、APP，其它平台的没有测试
2. 使用canvas生成  
3. 不懂如何使用可以去[github](https://github.com/q310550690/uni-app-barcode)直接打包下载运行

## 说明
此条形码组件的条形码生成部分移植改造自[jsBarcode.js](https://github.com/lindell/JsBarcode)，精简了代码，移除无效属性，增加了点新属性，使其能够在uni-app中运行。    

支持生成的条形码类型↓
|CODE128|EAN|CODE39|ITF|MSI|Pharmacode|Codabar|
|:-|:-:|:--:|:--:|:--:|:--:|-:|
|CODE128 |EAN-13|CODE39 |ITF|MSI|Pharmacode|Codabar|
|CODE128 A/B/C |EAN-8| |ITF - 14|MSI10| | |
| |EAN-5| | |MSI11| | |
| |EAN-2| | |MSI1010| | |
| |UPC (A)| | |MSI1110| | |
| |UPC (E)| | | | | |

微信APP能够扫码识别的条形码类型：code128\code39\ena13\ean8\upc\itf14

**注意：使用时请遵循条码类型规范，否则无法生成或报错。条形码只支持英文、数字、和一些常规符号，其它的会报错，非要生成中文或其它符号请自行转换为unicode码**

## 开始使用
```
git clone https://github.com/q310550690/uni-app-barcode
```

### 更新说明

* 0.0.1 uni-app-barcode 发布

### 使用方法
在 `script` 中引入组件
``` javascript
import tkiBarcode from "@/components/tki-barcode/tki-barcode.vue"
export default {
    components: {tkiBarcode}
}
```
在 `template` 中使用
``` javascript
<view>
    <tki-barcode
    ref="barcode"
    :val="val"
    :size="size"
    :unit="unit"
    :background="background"
    :foreground="foreground"
    :pdground="pdground"
    :icon="icon"
    :iconSize="iconsize"
    :lv="lv" 
    :onval="onval"
    :loadMake="loadMake"
    @result="qrR" />
</view>
```
### 属性

|属性名|类型|默认值|可选值|说明|
|:-|:-:|:--:|:--:|-:|
|size|Number|200| |生成的二维码大小|
|unit|String|upx|px|大小单位尺寸|
|show|Boolean|true| |默认使用组件中的image标签显示二维码|
|val|String|二维码| |要生成的内容|
|background|String|#000000| |二维码背景色|
|foreground|String|#ffffff| |二维码前景色|
|pdground|String|#ffffff| |二维码角标色|
|icon|String| | |二维码图标URL（必须是本地图片，网络图需要先下载至本地）|
|iconSize|Number|40<br/>注意此大小不会跟随二维码size 动态变化，设置时需注意大小，不要太大，以免无法识别| |二维码图标大小|
|lv|Number|3（一般不用设置）| |容错级别|
|onval|Boolean|false| |监听val值变化自动重新生成二维码|
|loadMake|Boolean|false| |组件初始化完成后自动生成二维码，val需要有值|

### 方法
|方法名|参数|默认值|说明|
|:-|:-:|:--:|-:|
|_makeCode()| | |生成条形码|
|_clearCode()| | |清空条形码（清空条形码会触发result回调 返回值为空）|
|_saveCode()| | |保存条形码到图库|

### 事件
|事件名|返回值|说明|
|:-|:-:|-:|
|result|生成的图片base64或图片临时地址|返回二维码路径 注：_clearCode()后返回空|



### 问题
暂无问题

### 感谢

[uni-app](https://uniapp.dcloud.io/ "uni-app")
[jsBarcode](https://github.com/lindell/JsBarcode "jsBarcode")