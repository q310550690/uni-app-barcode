<template>
	<view class="content">
		<text>code128:↓</text>
		<tkiBarcode cid="code128" format="code128" val="code128" ref="code128" @result="code128" />
		<text>code39:↓</text>
		<tkiBarcode cid="code39" format="code39" val="code39" ref="code39" @result="code39" />
		<text>ean13:↓</text>
		<tkiBarcode cid="ean13" format="ean13" val="1234567890128" ref="ean13" @result="ean13" />
		<text>ean8:↓</text>
		<tkiBarcode cid="ean8" format="ean8" val="12345670" ref="ean8" @result="ean8" />
		<text>upc:↓</text>
		<tkiBarcode cid="upc" format="upc" val="123456789012" ref="upc" @result="upc" />
		<text>itf14:↓</text>
		<tkiBarcode cid="itf14" format="itf14" val="1234567890123" ref="itf14" @result="itf14" />
	</view>
</template>

<script>
import tkiBarcode from "@/components/tki-barcode/tki-barcode.vue"
export default {
	data() {
		return {
			title: 'Hello'
		}
	},
	components: {
		tkiBarcode,
		tkiBarcode2: tkiBarcode
	},
	onLoad() {

	},
	methods: {
		code128(v) {
			console.log('code128:', v)
		},
		code39(v) {
			console.log('code39:', v)
		},
		ean13(v) {
			console.log('ean13:', v)
		},
		ean8(v) {
			console.log('ean8:', v)
		},
		upc(v) {
			console.log('upc:', v)
		},
		itf14(v) {
			console.log('itf14:', v)
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
