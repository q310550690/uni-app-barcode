<template>
	<view class="content">
		<text>code128:↓</text>
		<tkiBarcode cid="code128" :loadMake="false" :opations="opations" :onval="true" format="code128" :val="val" ref="code128" @result="code128" />
		<text>code39:↓</text>
		<tkiBarcode cid="code39" :loadMake="false" format="code39" val="code39" ref="code39" @result="code39" />
		<text>ean13:↓</text>
		<tkiBarcode cid="ean13" :loadMake="false" format="ean13" val="1234567890128" ref="ean13" @result="ean13" />
		<text>ean8:↓</text>
		<tkiBarcode cid="ean8" :loadMake="false" format="ean8" val="12345670" ref="ean8" @result="ean8" />
		<text>upc:↓</text>
		<tkiBarcode cid="upc" :loadMake="false" format="upc" val="123456789012" ref="upc" @result="upc" />
		<text>itf14:↓</text>
		<tkiBarcode cid="itf14" :loadMake="false" format="itf14" val="1234567890123" ref="itf14" @result="itf14" />
	</view>
</template>

<script>
import tkiBarcode from "@/components/tki-barcode/tki-barcode.vue"
export default {
	data() {
		return {
			bar: ['code128', 'code39', 'ean13', 'ean8', 'upc', 'itf14'],
			val: "FB19A1650-100S",
			opations: {
				// format: "CODE128",//选择要使用的条形码类型 微信支持的条码类型有 code128\code39\ena13\ean8\upc\itf14\
				width: 4,//设置条之间的宽度
				height: 120,//高度
				displayValue: true,//是否在条形码下方显示文字
				// text: "FB19A1650-100S",//覆盖显示的文本
				textAlign: "left",//设置文本的水平对齐方式
				textPosition: "bottom",//设置文本的垂直位置
				textMargin: 0,//设置条形码和文本之间的间距
				// fontSize: 24,//设置文本的大小
				// fontColor: "#0000ef",//设置文本的颜色
				// lineColor: "#0000ef",//设置条形码的颜色
				background: "#FFFFFF",//设置条形码的背景色
				margin: 0,//设置条形码周围的空白边距
				// marginTop: 10,//设置条形码周围的上边距
				// marginBottom: 20,//设置条形码周围的下边距
				// marginLeft: 30,//设置条形码周围的左边距
				// marginRight: 40,//设置条形码周围的右边距
			}
		}
	},
	components: {
		tkiBarcode,
		tkiBarcode2: tkiBarcode
	},
	onLoad() {
		// setTimeout(() => {
		// 	// this.opations.text = '1234567890'
		// 	// this.val = "1234567890"
		// }, 1000)
		setTimeout(() => {
			for (let index = 0; index < this.bar.length; index++) {
				setTimeout(() => {
					console.log(index)
					this.$refs[this.bar[index]]._makeCode()
				}, 1000 * index);
			}
		}, 1000);
	},
	methods: {
		code128(v) {
			// console.log('code128:', v)
		},
		code39(v) {
			// console.log('code39:', v)
		},
		ean13(v) {
			// console.log('ean13:', v)
		},
		ean8(v) {
			// console.log('ean8:', v)
		},
		upc(v) {
			// console.log('upc:', v)
		},
		itf14(v) {
			// console.log('itf14:', v)
		},
	}
}
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
}

.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 200upx;
}

.title {
	font-size: 36upx;
	color: #8f8f94;
}
</style>
