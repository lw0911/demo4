$(function () {
    var elements = [];
    var check = function (event) {
        var count = elements.length,
            elem = null;
        for (var i = 0; i < count; i++) {
            elem = elements[i];
            //确定事件源和事件产生对象的关系
            if (!!elem && elem !== event.target && !(elem.contains ? elem.contains(event.target) : elem.compareDocumentPosition ? elem.compareDocumentPosition(event.target) & 16 : 1)) {
                $.event.trigger('outerClick', event, elem);
            }
        }
    };
    $.event.special['outerClick'] = {
        /**
         * 初始化事件处理器 - this指向元素
         * @param 附加的数据
         * @param 事件类型命名空间
         * @param 回调函数
         */
        setup: function (data, namespaces, eventHandle) {
            if (elements.length === 0) {
                $(document).on('mousedown', check);
            }
            if ($.inArray(this, elements) < 0) {
                elements.push(this);
            }
        },
        /**
         * 卸载事件处理器 - this指向元素
         * @param 事件类型命名空间
         */
        teardown: function (namespaces) {
            var index = $.inArray(this, elements);
            if (index >= 0) {
                elements.splice(index, 1);
                if (elements.length === 0) {
                    $(document).off('mousedown', check);
                }
            }
        }
    };
    $.fn.animationEnd = function (callback) {
        var events = ['webkitAnimationEnd', 'OAnimationEnd', 'MSAnimationEnd', 'animationend'],
            i, j, dom = $(this[0]);

        function fireCallBack(e) {
            callback.call(this, e);
            for (i = 0; i < events.length; i++) {
                dom.off(events[i], fireCallBack);
            }
        }

        if (callback) {
            for (i = 0; i < events.length; i++) {
                dom.on(events[i], fireCallBack);
            }
        }
        return this;
    };
});
$(function () {
    var supportCss3 = function (style) {
        var prefix = ['webkit', 'Moz', 'ms', 'o'],
            i,
            humpString = [],
            htmlStyle = document.documentElement.style,
            _toHumb = function (string) {
                return string.replace(/-(\w)/g, function ($0, $1) {
                    return $1.toUpperCase();
                });
            };

        for (i in prefix) {
            humpString.push(_toHumb(prefix[i] + '-' + style));
        }


        humpString.push(_toHumb(style));

        for (i in humpString) {
            if (humpString[i] in htmlStyle) {
                return true;
            }
        }

        return false;
    };
    var supportAnimation = supportCss3('animation');
    var dialogEffectList = {
        'fade': {
            'inClassName': 'fx-fadeIn',
            'outClassName': 'fx-fadeOut'
        },
        'down': {
            'inClassName': 'fx-fadeInDown',
            'outClassName': 'fx-fadeOutDown'
        },
        'up': {
            'inClassName': 'fx-fadeInUp',
            'outClassName': 'fx-fadeOutUp'
        },
        'bounce': {
            'inClassName': 'fx-bounceIn',
            'outClassName': 'fx-bounceOut'
        }
    };
    var resizeDialogQueue = [];
    var $body = $('body');

    var dialogIndex = 1000;
    //对话框
    window.dialog = function (options) {
        var drag = function (dialog, selector) {
            var elem = $(selector);
            elem.css('cursor', 'move');
            var dragData = {};
            var left, top;
            var move = function (e) {
                left = e.clientX - dragData.x;
                top = e.clientY - dragData.y;
                dialog.css({
                    'left': (left <= dragData.el ? dragData.el : (left >= dragData.er ? dragData.er : left)),
                    'top': (top <= dragData.et ? dragData.et : (top >= dragData.eb ? dragData.eb : top)),
                    'marginTop': 0,
                    'marginLeft': 0
                });
            };
            var up = function () {
                $doc.off('mousemove', move).off('mouseup', up);
            };
            elem.on('mousedown', function (e) {
                dragData = {
                    x: e.clientX - dialog.offset().left + $doc.scrollLeft(),
                    y: e.clientY - dialog.offset().top + $doc.scrollTop(),
                    el: 0,
                    et: 0,
                    er: $win.width() - dialog.outerWidth(),
                    eb: $win.height() - dialog.outerHeight()
                };
                $doc.on('mousemove', move).on('mouseup', up);
            });
        };

        function model(options) {
            /**
             * 参数列表
             * @type {{
             * elem: null 元素,
             * position: string 定位:center absolute fixed,
             * top: number || string 顶部距离: center 0到无穷,
             * left: number || string 左边距离: center 0到无穷,
             * bottom: number || string 底部距离: center 0到无穷,
             * right: number || string 右边距离: center 0到无穷,
             * width: number || string 宽度
             * height: number || string 高度
             * effect: string 展示动画 ,
             * lifespan: null 有效期,
             * hasOverlay: boolean 是否有遮罩层,
             * overlayTran: boolean 遮罩层是否透明,
             * overlayClass: boolean 遮罩层皮肤,
             * outerClick: boolean 是否点击外部区域关闭,
             * onLoad: function 初始化触发,
             * onBeforeUnload: function 关闭前触发,
             * onUnload: function 关闭后触发
             * }}
             */
            var params = {
                elem: null,
                position: 'center',
                top: 'center',
                left: 'center',
                bottom: null,
                right: null,
                width: null,
                height: null,
                effect: 'bounce',
                drag: null,
                lifespan: null,
                hasOverlay: true,
                winResize: false,
                overlayTran: false,
                overlayClass: false,
                outerClick: false,
                onLoad: false,
                onBeforeUnload: false,
                onUnload: false,
                onWinResize: false
            };

            var global = this;
            var opts = $.extend(params, options);

            global.opts = opts;
            global.effect = dialogEffectList[opts.effect];

            //构建遮罩层
            if (opts.hasOverlay) {
                global.overlay = $('<div class="u-dialog-overlay' + (opts.overlayTran ? ' s-transparent' : '') + (opts.overlayClass ? ' ' + opts.overlayClass : '') + '" style="z-index:' + (++dialogIndex) + '"></div>');
                $body.append(global.overlay);
            }

            //构建弹出框
            global.dialog = $('<div class="u-dialog f-ib f-usn"></div>');
            global.dialog.append(opts.elem);
            $body.append(global.dialog);

            //弹出框定位
            global.resize();

            //简化了动画部分,在现代浏览器用css3执行动画操作,而在IE789中无动画
            if (supportAnimation && global.effect) {
                global.dialog.addClass(global.effect.inClassName);
                if (global.overlay) {
                    global.overlay.addClass('fx-fadeIn');
                }
                //动画完毕移除class
                global.dialog.animationEnd(function () {
                    global.dialog.removeClass(global.effect.inClassName);
                    if (global.overlay) {
                        global.overlay.removeClass('fx-fadeIn');
                    }
                });
            }

            //是否开启了outerClick
            if (opts.outerClick) {
                //假如该对话框是在某元素的点击事件下产生的，可能会出现在该事件的冒泡阶段就引发了outerClick
                //所以给事件加上一个延迟异步绑定
                setTimeout(function () {
                    global.dialog.on('outerClick', function () {
                        global.close();
                    });
                }, 100);
            }

            if (opts.drag != null) {
                drag(global.dialog, opts.drag);
            }

            //设置计时器
            if (typeof (opts.lifespan) === "number") {
                global.timer = setTimeout(function () {
                    global.close();
                }, opts.lifespan);
            }

            //加载成功调用回调函数
            if (opts.onLoad) {
                opts.onLoad.call(global);
            }

            //如果开启窗口变化关闭功能
            if (opts.winResize || opts.onWinResize) {
                setTimeout(function () {
                    resizeDialogQueue.push(global);
                }, 100);
            }

            return global;
        }

        model.prototype = {
            close: function (animation) {
                var global = this;
                //防止多次触发关闭
                if (!global.ifRemove) {
                    global.ifRemove = true;
                    //停止计时器
                    if (global.timer) {
                        clearTimeout(global.timer);
                    }
                }

                //移除弹出层以及对话框
                var callback = function () {
                    global.dialog.remove();
                    if (global.overlay) {
                        global.overlay.remove();
                    }
                    if (global.opts.onUnload) {
                        global.opts.onUnload.call(global);
                    }
                };

                //关闭弹出层以及对话框
                var dialogRemove = function () {
                    if (supportAnimation && global.effect && animation != false) {
                        global.dialog.addClass(global.effect.outClassName);
                        if (global.overlay) {
                            global.overlay.addClass('fx-fadeOut');
                        }
                        global.dialog.animationEnd(callback);
                    } else {
                        callback();
                    }
                };

                //关闭前触发的事件
                if (global.opts.onBeforeUnload) {
                    //如果在该事件return false 就阻止关闭
                    if (global.opts.onBeforeUnload.call(global) !== false) {
                        dialogRemove();
                    } else {
                        global.ifRemove = false;
                    }
                } else {
                    dialogRemove();
                }
            },
            resize: function (options) {
                if (typeof (options) !== "undefined") {
                    this.opts = $.extend(this.opts, options);
                }
                var global = this,
                    opts = global.opts,
                    cssOpts = {};

                cssOpts['position'] = opts.position === 'absolute' ? 'absolute' : 'fixed';
                cssOpts[opts.bottom == null ? 'top' : 'bottom'] = opts.bottom == null ? (opts.top === 'center' ? '50%' : opts.top) : opts.bottom;
                cssOpts[opts.right == null ? 'left' : 'right'] = opts.right == null ? (opts.left === 'center' ? '50%' : opts.left) : opts.right;
                cssOpts['zIndex'] = ++dialogIndex;
                opts.width != null ? cssOpts['width'] = cssOpts['width'] : '';
                opts.height != null ? cssOpts['height'] = cssOpts['height'] : '';
                setTimeout(function () {
                    cssOpts['marginLeft'] = (opts.right != null || opts.left != 'center') ? 0 : parseInt(global.dialog.width() / -2);
                    cssOpts['marginTop'] = (opts.bottom != null || opts.top != 'center') ? 0 : parseInt(global.dialog.height() / -2);
                    global.dialog.css(cssOpts);
                }, 10);
            }
        };

        return new model(options);
    };
});
$(function () {
    $.get('data/job.json', function (data) {
        var support3D = function () {
            try {
                var element = document.createElement('div');
                var propertyValue = null;
                var body = document.body || document.createElement('body');
                var documentElement = document.documentElement;
                var documentOverflow = documentElement.style.overflow;
                if (!document.body) {
                    documentElement.style.overflow = 'hidden';
                    documentElement.appendChild(body);
                    body.style.overflow = 'hidden';
                    body.style.background = '';
                }
                body.appendChild(element);
                element.style['transform'] = 'translate3d(1px,1px,1px)';
                propertyValue = window.getComputedStyle(element).getPropertyValue('transform');
                documentElement.style.overflow = documentOverflow;
                body.removeChild(element);
                return propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== "none";
            } catch (e) {
                return false;
            }
        };

        var hasSupport3D = navigator.userAgent.toLocaleLowerCase().indexOf('safari') != -1 || support3D();

        var join = $('#js_join');
        var doc = $('#js_doc');
        var body = $('body');
        var isShow = false;
        join.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('#fp-nav').toggle();
            body.toggleClass('z-moveDown');
            isShow = true;
            window.noScroll = true;
            if (!hasSupport3D) {
                doc.animate({
                    'position': 'fixed',
                    'top': window.document.body.clientHeight - 100
                }, 400);
            }
        });

        doc.on('click', function (e) {
            if (isShow) {
                isShow = false;
                window.noScroll = false;

                $('#fp-nav').show();
                body.removeClass('z-moveDown');
                $(window).focus().trigger('resize');

                if (!hasSupport3D) {
                    doc.animate({
                        'position': 'relative',
                        'top': 0
                    }, 400);
                }
            }
        });

        $('a').on('click', function (e) {
            if (isShow) {
                e.preventDefault();
                var url = this.getAttribute('href');
                if (url != '#' && url.indexOf('javascript:') == -1) {
                    setTimeout(function () {
                        window.location.href = url;
                    }, 400);
                }
            }
        });

        /*****************************************************/
        var html = '';
        $.each(data, function () {
            html += '<li class="f-ib f-usn' + (this.name.indexOf('（') != -1 ? ' s-spe' : '') + '">' + this.name.replace('（', '<p>（').replace('）', '）</p>') + '</li>';
        });
        var box = $('#js_box');
        box.css('height', window.document.body.clientHeight - 156 - parseInt(window.document.body.clientHeight * 0.14)).perfectScrollbar();
        $('#js_job').append(html).children().on('click', function () {
            var index = $(this).index();
            var dialogHtml = '<div class="m-job-dialog">';
            dialogHtml += '<h2>' + data[index].name + '</h2>';
            dialogHtml += '<dl class="list f-wwb">';
            if (data[index]['list-one'].length > 0) {
                dialogHtml += '<dt>要做的事</dt>';
                $.each(data[index]['list-one'], function (i) {
                    dialogHtml += '<dd>' + (i + 1) + '、' + this + '</dd>';
                });
            }
            if (data[index]['list-two'].length > 0) {
                dialogHtml += '<dt>想要的人</dt>';
                $.each(data[index]['list-two'], function (i) {
                    dialogHtml += '<dd>' + (i + 1) + '、' + this + '</dd>';
                });
            }

            dialogHtml += '</dl><a class="close" href="javascript:;">返回</a></div>';

            dialog({
                elem: dialogHtml,
                effect: 'down',
                outerClick: true,
                overlayTran: true,
                width: 800,
                onLoad: function () {
                    var api = this;
                    api.dialog.find('.close').on('click', function () {
                        api.close();
                    });
                    var close = function (e) {
                        if (e.keyCode == 27) {
                            api.close();
                            $(document).off('keydown', close);
                        }
                    };
                    $(document).on('keydown', close);
                }
            });
        });
        /*****************************************************/
        $(window).on('resize', function () {
            box.css('height', window.document.body.clientHeight - 156 - parseInt(window.document.body.clientHeight * 0.14)).perfectScrollbar('update');
            if (isShow && !hasSupport3D) {
                doc.css('top', window.document.body.clientHeight - 100);
            }
        });
    });
});