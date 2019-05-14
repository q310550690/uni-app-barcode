const barcodes = require('./barcodes/index.js')['default'];
let barcode = {};
(function () {
    // 初始化
    let newOptions, encodings, globaContext, ctx, cbCanvasSize, cbResult;
    barcode = function (cont, options, ctxsize, result) {
        cbCanvasSize = ctxsize
        cbResult = result
        let ops = {
            format: "CODE128",//选择要使用的条形码类型
            width: 2,//设置条之间的宽度
            height: 100,//高度
            displayValue: true,//是否在条形码下方显示文字
            text: "1234567890",//覆盖显示的文本
            textAlign: "center",//设置文本的水平对齐方式
            textPosition: "bottom",//设置文本的垂直位置
            textMargin: 0,//设置条形码和文本之间的间距
            fontSize: 20,//设置文本的大小
            fontColor: "#000000",//设置文本的大小
            lineColor: "#000000",//设置条和文本的颜色。
            background: "#FFFFFF",//设置条形码的背景
            margin: 0,//设置条形码周围的空白边距
            marginTop: undefined,//设置条形码周围的上边距
            marginBottom: undefined,//设置条形码周围的下边距
            marginLeft: undefined,//设置条形码周围的左边距
            marginRight: undefined,//设置条形码周围的右边距
        };
        newOptions = Object.assign(ops, options);
        // 修成margin
        fixMargin(newOptions)
        // 处理options 数据
        if (newOptions.text == '' || cont == '') {
            return false
        }
        // 获取ctx
        globaContext = cont
        ctx = uni.createCanvasContext('tki-barcode-canvas', globaContext)
        // 获取编码数据
        encodings = new barcodes[newOptions.format.toUpperCase()](newOptions.text, newOptions).encode()
        let fixencodings = fixEncodings(encodings, newOptions)
        // 返回canvas实际大小
        cbCanvasSize({ width: fixencodings.width, height: fixencodings.height })
        // 绘制canvas
        drawCanvas.render(newOptions, fixencodings)
    };
    // 绘制canvas
    let drawCanvas = {
        render(options, encoding) {
            this.prepare(options, encoding)
            encoding.encodings.forEach((v, i) => {
                this.barcode(options, v)
                this.text(options, v)
                this.move(v)
            });
            this.draw(options, encoding)
        },
        barcode(options, encoding) {
            let binary = encoding.data;
            let yFrom;
            if (options.textPosition == "top") {
                yFrom = options.marginTop + options.fontSize + options.textMargin;
            } else {
                yFrom = options.marginTop;
            }
            // 绘制条码
            ctx.fillStyle = options.lineColor;
            for (let b = 0; b < binary.length; b++) {
                let x = b * options.width + encoding.barcodePadding;
                let height = options.height
                if (encoding.options) {
                    if (encoding.options.height != undefined) {
                        height = encoding.options.height
                    }
                }
                if (binary[b] === "1") {
                    ctx.fillRect(x, yFrom, options.width, height);
                } else if (binary[b]) {
                    ctx.fillRect(x, yFrom, options.width, height * binary[b]);
                }
            }
        },
        text(options, encoding) {
            if (options.displayValue) {
                let x, y, align, size;
                if (options.textPosition == "top") {
                    y = options.marginTop + options.fontSize;
                } else {
                    y = options.height + options.textMargin + options.marginTop + options.fontSize;
                }
                if (encoding.options) {
                    if (encoding.options.textAlign != undefined) {
                        align = encoding.options.textAlign
                    }
                    if (encoding.options.fontSize != undefined) {
                        size = encoding.options.fontSize
                    }
                }else{
                    align = options.textAlign
                    size = options.fontSize
                }
                ctx.setFontSize(size)
                if (align == "left" || encoding.barcodePadding > 0) {
                    x = 0;
                    ctx.setTextAlign('left')
                } else if (align == "right") {
                    x = encoding.width - 1;
                    ctx.setTextAlign('right')
                }
                else {
                    x = encoding.width / 2;
                    ctx.setTextAlign('center');
                }
                ctx.fillStyle = options.fontColor;
                if (encoding.text != undefined) {
                    ctx.fillText(encoding.text, x, y);
                }
            }
        },
        move(encoding) {
            ctx.translate(encoding.width, 0);
        },
        prepare(options, encoding) {
            // 绘制背景
            if (options.background) {
                ctx.fillStyle = options.background;
                ctx.fillRect(0, 0, encoding.width, encoding.height);
            }
            ctx.translate(options.marginLeft, 0);
        },
        draw(options, encoding) {
            ctx.draw(true, () => {
                this.toImgs(options, encoding)
            })
        },
        toImgs(options, encoding) {
            setTimeout(() => {
                uni.canvasToTempFilePath({
                    width: encoding.width,
                    height: encoding.height,
                    destWidth: encoding.width,
                    destHeight: encoding.height,
                    canvasId: 'tki-barcode-canvas',
                    fileType: 'png',
                    success: function (res) {
                        cbResult(res.tempFilePath)
                    },
                    fail: function (res) {
                        cbResult(res)
                    },
                    complete: function () {
                        uni.hideLoading();
                    },
                }, globaContext);
            }, options.text.length + 100);
        }
    }
    // 混入canvas数据
    function fixEncodings(encoding, options) {
        let encodingArr = [], width = options.marginLeft + options.marginRight, height;
        if (!Array.isArray(encoding)) {
            encodingArr[0] = JSON.parse(JSON.stringify(encoding))
        } else {
            encodingArr = [...encoding]
        }
        encodingArr.forEach((v, i) => {
            // 获取文本宽度
            let textWidth = ctx.measureText(encodingArr[i].text ? encodingArr[i].text : '').width;
            // 获取条形码宽度
            let barcodeWidth = encodingArr[i].data.length * options.width;
            // 获取内边距
            let barcodePadding = 0;
            if (options.displayValue && barcodeWidth < textWidth) {
                if (options.textAlign == "center") {
                    barcodePadding = Math.floor((textWidth - barcodeWidth) / 2);
                } else if (options.textAlign == "left") {
                    barcodePadding = 0;
                } else if (options.textAlign == "right") {
                    barcodePadding = Math.floor(textWidth - barcodeWidth);
                }
            }
            // 混入encodingArr[i]
            encodingArr[i].barcodePadding = barcodePadding
            encodingArr[i].width = Math.ceil(Math.max(textWidth, barcodeWidth))
            width += encodingArr[i].width
            if (encodingArr[i].options) {
                if (encodingArr[i].options.height != undefined) {
                    encodingArr[i].height = encodingArr[i].options.height + (options.displayValue && (encodingArr[i].text ? encodingArr[i].text : '').length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
                } else {
                    encodingArr[i].height = height =options.height + (options.displayValue && (encodingArr[i].text ? encodingArr[i].text : '').length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
                }
            } else {
                encodingArr[i].height = height = options.height + (options.displayValue && (encodingArr[i].text ? encodingArr[i].text : '').length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
            }
        });
        return { encodings: encodingArr, width, height };
    }
    // 修正Margin
    function fixMargin(options) {
        options.marginTop = options.marginTop == undefined ? options.margin : options.marginTop;
        options.marginBottom = options.marginBottom == undefined ? options.margin : options.marginBottom;
        options.marginRight = options.marginRight == undefined ? options.margin : options.marginRight;
        options.marginLeft = options.marginLeft == undefined ? options.margin : options.marginLeft;
    }
})()

export default barcode