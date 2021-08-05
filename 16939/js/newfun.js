//禁用F12
// document.onkeydown = function () {
//     if (window.event && window.event.keyCode == 123) {
//         event.keyCode = 0;
//         event.returnValue = false;
//     }
// }

document.onkeydown = function (e) {
    var currKey = 0, evt = e || window.event;
    currKey = evt.keyCode || evt.which || evt.charCode;
    if (currKey == 123) {
        window.event.cancelBubble = true;
        window.event.returnValue = false;
    }
}

document.oncontextmenu = function () {
    event.returnValue = false;
}
document.onselectstart = function () {
    event.returnValue = false;
}
//判断开开站点的途径
// function browserRedirect() {
//       var sUserAgent = navigator.userAgent.toLowerCase();
//       var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
//       var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
//       var bIsMidp = sUserAgent.match(/midp/i) == "midp";
//       var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
//       var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
//       var bIsAndroid = sUserAgent.match(/android/i) == "android";
//       var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
//       var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
//       if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
//         // alert("phone");
//         // window.location.href="https://www.kedianping.com/mobile/index.html"
//       } else {
//         // alert("pc");
//       }
//     }

// browserRedirect();
var coordinatesS = [];
//结束坐标
var coordinatesE = [];
//临时存储所有开始坐标的集合
var pointsS = [];
//临时存储所有结束坐标的集合
var pointsE = [];

var positions = [
    [{
        "x": 70,
        "y": 138,
        "color": "#ff8b03"
    }, {
        "x": 109,
        "y": 205,
        "color": "#ff8b03"
    }, {
        "x": 110,
        "y": 401,
        "color": "#ff8b03"
    }, {
        "x": 110,
        "y": 334,
        "color": "#ff8b03"
    }],
    [{
        "x": 70,
        "y": 94,
        "color": "#ff8b03"
    }, {
        "x": 52,
        "y": 310,
        "color": "#ff8b03"
    }, {
        "x": 110,
        "y": 401,
        "color": "#ff8b03"
    }, {
        "x": 110,
        "y": 334,
        "color": "#ff8b03"
    }],
    [{
        "x": 70,
        "y": 60,
        "color": "#ff8b03"
    }, {
        "x": 109,
        "y": 205,
        "color": "#ff8b03"
    }, {
        "x": 110,
        "y": 401,
        "color": "#ff8b03"
    }, {
        "x": 110,
        "y": 334,
        "color": "#ff8b03"
    }],
    [{
        "x": 70,
        "y": 144,
        "color": "#ff8b03"
    }, {
        "x": 200,
        "y": 220,
        "color": "#ff8b03"
    }, {
        "x": 80,
        "y": 200,
        "color": "#ff8b03"
    }, {
        "x": 80,
        "y": 292,
        "color": "#ff8b03"
    }, {
        "x": 188,
        "y": 401,
        "color": "#ff8b03"
    }]
];

var xiadan = [
    [{
        "x": 70,
        "y": 128,
        "color": "#ff8b03"
    }, {
        "x": 70,
        "y": 198,
        "color": "#ff8b03"
    }, {
        "x": 70,
        "y": 298,
        "color": "#ff8b03"
    }, {
        "x": 200,
        "y": 408,
        "color": "#ff8b03"
    }],
    [{
        "x": 70,
        "y": 94,
        "color": "#ff8b03"
    }, {
        "x": 70,
        "y": 94,
        "color": "#ff8b03"
    }, {
        "x": 70,
        "y": 94,
        "color": "#ff8b03"
    }, {
        "x": 70,
        "y": 94,
        "color": "#ff8b03"
    }],
    [{
        "x": 70,
        "y": 60,
        "color": "#ff8b03"
    }, {
        "x": 70,
        "y": 60,
        "color": "#ff8b03"
    }, {
        "x": 70,
        "y": 60,
        "color": "#ff8b03"
    }, {
        "x": 70,
        "y": 60,
        "color": "#ff8b03"
    }],
    [{
        "x": 70,
        "y": 144,
        "color": "#ff8b03"
    }, {
        "x": 70,
        "y": 144,
        "color": "#ff8b03"
    }, {
        "x": 70,
        "y": 144,
        "color": "#ff8b03"
    }, {
        "x": 70,
        "y": 144,
        "color": "#ff8b03"
    }]
];

var genzong = [
    [{
        "x": 150,
        "y": 277,
        "color": "#ff8b03"
    }, {
        "x": 170,
        "y": 310,
        "color": "#ff8b03"
    }, {
        "x": 100,
        "y": 401,
        "color": "#ff8b03"
    }, {
        "x": 110,
        "y": 334,
        "color": "#ff8b03"
    }],
    [{
        "x": 150,
        "y": 277,
        "color": "#ff8b03"
    }, {
        "x": 170,
        "y": 310,
        "color": "#ff8b03"
    }, {
        "x": 100,
        "y": 401,
        "color": "#ff8b03"
    }, {
        "x": 110,
        "y": 334,
        "color": "#ff8b03"
    }],
    [{
        "x": 150,
        "y": 277,
        "color": "#ff8b03"
    }, {
        "x": 170,
        "y": 310,
        "color": "#ff8b03"
    }, {
        "x": 100,
        "y": 401,
        "color": "#ff8b03"
    }, {
        "x": 110,
        "y": 334,
        "color": "#ff8b03"
    }],
    [{
        "x": 80,
        "y": 292,
        "color": "#ff8b03"
    }, {
        "x": 188,
        "y": 401,
        "color": "#ff8b03"
    }, {
        "x": 80,
        "y": 292,
        "color": "#ff8b03"
    }, {
        "x": 188,
        "y": 401,
        "color": "#ff8b03"
    }]
];

var liucheng = [
    [{
        "x": 188,
        "y": 208,
        "color": "#ff8b03"
    }, {
        "x": 188,
        "y": 270,
        "color": "#ff8b03"
    }, {
        "x": 188,
        "y": 304,
        "color": "#ff8b03"
    }, {
        "x": 188,
        "y": 268,
        "color": "#ff8b03"
    }],
    [{
        "x": 188,
        "y": 208,
        "color": "#ff8b03"
    }, {
        "x": 188,
        "y": 270,
        "color": "#ff8b03"
    }, {
        "x": 188,
        "y": 324,
        "color": "#ff8b03"
    }, {
        "x": 188,
        "y": 268,
        "color": "#ff8b03"
    }],
    [{
        "x": 188,
        "y": 208,
        "color": "#ff8b03"
    }, {
        "x": 188,
        "y": 270,
        "color": "#ff8b03"
    }, {
        "x": 188,
        "y": 304,
        "color": "#ff8b03"
    }, {
        "x": 188,
        "y": 268,
        "color": "#ff8b03"
    }],
    [{
        "x": 108,
        "y": 404,
        "color": "#ff8b03"
    }, {
        "x": 108,
        "y": 206,
        "color": "#ff8b03"
    }, {
        "x": 18,
        "y": 206,
        "color": "#ff8b03"
    }, {
        "x": 108,
        "y": 406,
        "color": "#ff8b03"
    }]
];
///省份数据
var proData = [/*{
    name: '河南',
    value: '17',
    selected: false,
    itemStyle: {
        normal: {
            areaColor: '#ffd5a4',
            label: {
                show: false
            }
        },
        emphasis: {
            areaColor: '#ff8b03',
            label: {
                show: true
            }
        }

    }
},*/ /*{
    name: '广东',
    value: '20',
    color: '#fff',
    //selected:true,
    itemStyle: {
        normal: {
            areaColor: "#ffd5a4",
            label: {
                show: false,
                textStyle: {
                    color: '#734918'
                }
            }
        },
        emphasis: {
            areaColor: '#ff8b03',
            label: {
                show: true
            }
        }
    }
},*/ /*{
    name: '辽宁',
    value: '8',
    //selected:true,
    itemStyle: {
        normal: {
            areaColor: '#ffd5a4',
            label: {
                show: false,
                textStyle: {
                    color: '#734918'
                }
            }
        },
        emphasis: {
            areaColor: '#ff8b03',
            label: {
                show: true
            }
        }
    }
},*/ /*{
    name: '福建',
    value: '14',
    //selected:true,
    itemStyle: {
        normal: {
            areaColor: '#ffd5a4',
            label: {
                show: false,
                textStyle: {
                    color: '#734918'
                }
            }
        },
        emphasis: {
            areaColor: '#ff8b03',
            label: {
                show: true
            }
        }
    }
},*/ /*{
    name: '山东',
    value: '16',
    //selected:true,
    itemStyle: {
        normal: {
            areaColor: '#ffd5a4',
            label: {
                show: false,
                textStyle: {
                    color: '#734918'
                }
            }
        },
        emphasis: {
            areaColor: '#ff8b03',
            label: {
                show: true
            }
        }
    }
},*/ /*{
    name: '北京',
    value: '1',
    //selected:true,
    itemStyle: {
        normal: {
            areaColor: '#ffd5a4',
            label: {
                show: false,
                textStyle: {
                    color: '#734918'
                }
            }
        },
        emphasis: {
            areaColor: '#ff8b03',
            label: {
                show: true
            }
        }
    }
},*/ /*{
    name: '陕西',
    value: '28',
    //selected:true,
    itemStyle: {
        normal: {
            areaColor: '#ffd5a4',
            label: {
                show: false,
                textStyle: {
                    color: '#734918'
                }
            }
        },
        emphasis: {
            areaColor: '#ff8b03',
            label: {
                show: true
            }
        }
    }
},*/ /*{
    name: '湖南',
    value: '19',
    //selected:true,
    itemStyle: {
        normal: {
            areaColor: '#ffd5a4',
            label: {
                show: false,
                textStyle: {
                    color: '#734918'
                }
            }
        },
        emphasis: {
            areaColor: '#ff8b03',
            label: {
                show: true
            }
        }
    }
},*/ /*{
    name: '四川',
    value: '22',
    //selected:true,
    itemStyle: {
        normal: {
            areaColor: '#ffd5a4',
            label: {
                show: false,
                textStyle: {
                    color: '#734918'
                }
            }
        },
        emphasis: {
            areaColor: '#ff8b03',
            label: {
                show: true
            }
        }
    }
},*/ /*{
    name: '浙江',
    value: '12',
    //selected:true,
    itemStyle: {
        normal: {
            areaColor: '#ffd5a4',
            label: {
                show: false,
                textStyle: {
                    color: '#734918'
                }
            }
        },
        emphasis: {
            areaColor: '#ff8b03',
            label: {
                show: true
            }
        }
    }

},*/ /*{
    name: '江苏',
    value: '11',
    //selected:true,
    itemStyle: {
        normal: {
            areaColor: '#ffd5a4',
            label: {
                show: false,
                textStyle: {
                    color: '#734918'
                }
            }
        },
        emphasis: {
            areaColor: '#ff8b03',
            label: {
                show: true
            }
        }
    }
}, *//*{
    name: '贵州',
    value: '24',
    //selected:true,
    itemStyle: {
        normal: {
            areaColor: '#ffd5a4',
            label: {
                show: false,
                textStyle: {
                    color: '#734918'
                }
            }
        },
        emphasis: {
            areaColor: '#ff8b03',
            label: {
                show: true
            }
        }
    }
},*/ /*{
    name: '山西',
    value: '6',
    //selected:true,
    itemStyle: {
        normal: {
            areaColor: '#ffd5a4',
            label: {
                show: false,
                textStyle: {
                    color: '#734918'
                }
            }
        },
        emphasis: {
            areaColor: '#ff8b03',
            label: {
                show: true
            }
        }
    }
},*/
    /*{
    name: '湖北',
    value: '18',
    //selected:true,
    itemStyle: {
        normal: {
            areaColor: '#ffd5a4',
            label: {
                show: false,
                textStyle: {
                    color: '#734918'
                }
            }
        },
        emphasis: {
            areaColor: '#ff8b03',
            label: {
                show: true
            }
        }
    }
},*/
    /*{
        name: '宁夏',
        value: '31',
        //selected:true,
        itemStyle: {
            normal: {
                areaColor: '#ffd5a4',
                label: {
                    show: false,
                    textStyle: {
                        color: '#734918'
                    }
                }
            },
            emphasis: {
                areaColor: '#ff8b03',
                label: {
                    show: true
                }
            }
        }
    },*/
    /*{
        name: '内蒙古',
        value: '33',
        //selected:true,
        itemStyle: {
            normal: {
                areaColor: '#ffd5a4',
                label: {
                    show: false,
                    textStyle: {
                        color: '#734918'
                    }
                }
            },
            emphasis: {
                areaColor: '#ff8b03',
                label: {
                    show: true
                }
            }
        }
    },*/
    /*{
        name: '河北',
        value: '5',
        //selected:true,
        itemStyle: {
            normal: {
                areaColor: '#ffd5a4',
                label: {
                    show: false,
                    textStyle: {
                        color: '#734918'
                    }
                }
            },
            emphasis: {
                areaColor: '#ff8b03',
                label: {
                    show: true
                }
            }
        }
    },*/ /*{
        name: '安徽',
        value: '13',
        //selected:true,
        itemStyle: {
            normal: {
                areaColor: '#ffd5a4',
                label: {
                    show: false,
                    textStyle: {
                        color: '#734918'
                    }
                }
            },
            emphasis: {
                areaColor: '#ff8b03',
                label: {
                    show: true
                }
            }
        }
    },*/
    //{
    //	name: '宁夏',
    //	value: '6',
    //	//selected:true,
    //	itemStyle: {
    //		normal: {
    //			areaColor: '#ffd5a4',
    //			label: {
    //				show: true,
    //				textStyle: {
    //					color: '#734918'
    //				}
    //			}
    //		},
    //		emphasis: {
    //			areaColor: '#ff8b03'
    //		}
    //	}
    //},
    /*{
        name: '江西',
        value: '15',
        //selected:true,
        itemStyle: {
            normal: {
                areaColor: '#ffd5a4',
                label: {
                    show: false,
                    textStyle: {
                        color: '#734918'
                    }
                }
            },
            emphasis: {
                areaColor: '#ff8b03',
                label: {
                    show: true
                }
            }
        }
    },*/
    /*{
        name: '广西',
        value: '29',
        //selected:true,
        itemStyle: {
            normal: {
                areaColor: '#ffd5a4',
                label: {
                    show: false,
                    textStyle: {
                        color: '#734918'
                    }
                }
            },
            emphasis: {
                areaColor: '#ff8b03',
                label: {
                    show: true
                }
            }
        }
    },*/
    /*{
	    name: '新疆',
	    value: '32',
	    //selected:true,
	    itemStyle: {
	        normal: {
	            areaColor: '#ffd5a4',
	            label: {
	                show: false,
	                textStyle: {
	                    color: '#734918'
	                }
	            }
	        },
	        emphasis: {
                areaColor: '#ff8b03',
                label: {
                    show: true
                }
	        }
	    }
	},  */
    /*{
	    name: '甘肃',
	    value: '21',
	    //selected:true,
	    itemStyle: {
	        normal: {
	            areaColor: '#ffd5a4',
	            label: {
	                show: false,
	                textStyle: {
	                    color: '#734918'
	                }
	            }
	        },
	        emphasis: {
                areaColor: '#ff8b03',
                label: {
                    show: true
                }
	        }
	    }
	},*/
    /*{
        name: '云南',
        value: '43',
        //selected:true,
        itemStyle: {
            normal: {
                areaColor: '#ffd5a4',
                label: {
                    show: false,
                    textStyle: {
                        color: '#734918'
                    }
                }
            },
            emphasis: {
                areaColor: '#ff8b03',
                label: {
                    show: true
                }
            }
        }
    },*/
    /*{
        name: '黑龙江',
        value: '46',
        //selected:true,
        itemStyle: {
            normal: {
                areaColor: '#ffd5a4',
                label: {
                    show: false,
                    textStyle: {
                        color: '#734918'
                    }
                }
            },
            emphasis: {
                areaColor: '#ff8b03',
                label: {
                    show: true
                }
            }
        }
    },*/
    /*{
	    name: '青海',
	    value: '48',
	    //selected:true,
	    itemStyle: {
	        normal: {
	            areaColor: '#ffd5a4',
	            label: {
	                show: false,
	                textStyle: {
	                    color: '#734918'
	                }
	            }
	        },
	        emphasis: {
                areaColor: '#ff8b03',
                label: {
                    show: true
                }
	        }
	    }
	},*/
    /*{
        name: '南海诸岛',
        value: 0,
        itemStyle: {
            normal: {
                opacity: 0
            }
        }
    },*/
];

function drawMap(id) {
    var chart = echarts.init(document.getElementById(id));
    chart.setOption({
        legend: {
            show: false
        },
        series: [{
            type: 'map',
            map: 'china',
            itemStyle: {
                normal: {
                    areaColor: '#fff',
                    borderColor: '#d7d7d7',
                    borderType: 'solid',
                    label: {show: false}
                },
                emphasis: {
                    label: {
                        show: true
                    },
                    areaColor: '#ffd5a4'
                    // color: '#fff'
                }
            },
            showLegendSymbol: false,
            data: proData
        }],
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: '{b}'
        },
    })
}

$(function () {
    getLocation();
    $('#goodsWeight').find('ul li').eq(0).hide();
    $("#goodHeavy").children('option[value="2222"]').wrap('<span>').hide();


    layer.config({
        extend: ['skin/myskin/style.css'], //加载扩展样式
        skin: 'layer-ext-myskin'
    });
    var userAgent = window.navigator.userAgent.toLowerCase();
    $.browser.msie8 = $.browser.msie && /msie 8\.0/i.test(userAgent);
    $.browser.msie7 = $.browser.msie && /msie 7\.0/i.test(userAgent);
    //console.log($.browser.msie8);
    if ($.browser.msie8 || $.browser.msie7) {
        jQuery('[placeholder]').focus(function () {
            var input = jQuery(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function () {
            var input = jQuery(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur().parents('form').submit(function () {
            jQuery(this).find('[placeholder]').each(function () {
                var input = jQuery(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });
    }
    //历史收藏切换
    $('.history .tabs-nav a').hover(function () {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.history').find('.tabs-content').find('ul').eq(index).addClass('show').siblings().removeClass('show');
    });
    //点击展开
    var down = true;
    $('.clickMore').click(function () {
        $('.more-content .ucard').slideToggle('slow');
        if (down) {
            $(this).html('<i class="more-up"></i>点击收起更多');
            down = false;
        } else {
            $(this).html('<i class="more-down"></i>点击展开更多');
            down = true;
        }
        console.log(down);
    });
    //续费
    $('#xufei').click(function () {
        xuFei();
    });
    //城市列表右侧锚点
    $('.left_zm').append('<a class="tp"><span>#</span></a>');
    $('.left_zm .tp').on('click', function () {
        $('.citywrap').scrollTop(0);
    });
    $('.left_zm a').on('click', function () {
        $(this).find('span').addClass('span_bg');
        $(this).parents('.left_zm').find('a').not($(this)).find('span').removeClass('span_bg');
    });
    Copy();
    if (window.PIE) {
        $('.rounded').each(function () {
            PIE.attach(this);
        });
    }

    //获取当前位置
    function getLocation() {
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(113.7369123305, 34.7840471799);
        map.centerAndZoom(point, 12);
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                if (Page.ReadCookie("cityname")) {
                    $('.cityname').text(Page.ReadCookie("cityname"));
                } else {
                    $('.cityname').text(r.address.city);
                }
            }
            else {
                $('.cityname').text('定位失败');
            }
        }, {enableHighAccuracy: true})
        //关于状态码
        //BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
        //BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
        //BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
        //BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
        //BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
        //BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
        //BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
        //BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
        //BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)
    }

    // var cn = Page.ReadCookie("cityname") || '郑州市';
    // $('.cityname').text(cn);
    //选择城市
    $('.check_city ul li').click(function () {
        cityName = $(this).data('name');
        cityId = $(this).data("id");
        OrderDistanceRule = $(this).data("rule");
        Page.CreateCookie("OrderDistanceRule", OrderDistanceRule);
        order.info.cityId = cityId;
        order.info.cityName = cityName;
        Page.CreateCookie("cityid", cityId);
        Page.CreateCookie("cityname", cityName);
        switch (action) {
            case "buy":
            case "send":
            case "take":
            case "takeorder":
                window.location.reload();
                return;
        }
        $('.cityname').text(cityName);
        layer.closeAll();
        //drawMyMapPath();
        //dic.timeLimit(cityId);
    });

    //选择地址
    $('.select-city').bind("click", function () {
        //页面下层禁止滑动
        //$('body').css('overflow','hidden');
        //当前城市高亮
        $('.check_city ul li').each(function () {
            var txt = $(this).data('name');
            if (txt == cityName) {
                $(this).addClass('selected');
                $(this).parent('ul').parent('div').siblings('.letter').addClass('selectTitle');
            } else {
                $(this).removeClass('selected');
                $(this).parent('ul').parent('div').siblings('.letter').removeClass('selectTitle');
            }
        });
        $('.cityname').text(cityName);
        layer.open({
            type: 1,
            skin: 'layui-layer', //默认皮肤
            scrollbar: true,
            //title: '当前城市: &nbsp;<i class="iconCurCity"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + cityName,
            title: '当前城市',
            area: ['1011px', '602px'],
            content: $('#cityLists')
        });
        cityList();
        $('.high').each(function () {
            $(this).find('.letter').css({
                'height': $(this).find('.city_list ul').css('height'),
                'line-height': $(this).find('.city_list').css('height')
            });
        })
    });

    //帮我买是否知道商品价格
    $('.isprice li').on("click", function () {
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        $(this).parents('.tag').find('.tips').find('.con').eq(index).show().siblings('.con').hide();
        if (index == 0) {
            $('#money').attr('req', 'true');
            $('#yueDate').attr('req', 'false');
        } else {
            $('#money').attr('req', 'false');
            $('#yueDate').attr('req', 'true');
        }

    });

    //特殊要求
    $('.ucard .tag.special a').on("click", function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //调用地图
    $('.tag .locate').live("click", function () {
        layer.open({
            type: 1,
            title: false,
            zIndex: 9,
            area: ['1154px', '684px'],
            content: $('#addressLists'),
            scrollbar: false
        });
        var thisInput = $(this).parents('.tag').find('input');
        $('#search-txt').text(thisInput.attr('title'));

        //清除内容
        $('#search-list').empty();
        $('#search-input').val("").attr('placeholder', '请输入' + thisInput.attr('title'));

        //调用地图
        myMap(thisInput);
    });
});

$(function () {
    $('body').on('click', '.layui-layer-close1', function () {
        // $('body').find('.layui-layer-shade').hide();
        // $('body').css('overflow-y','auto');
        layer.close();
    });

    $("#Captcha").click();
    //首页
    var topfeaturest = $('.service .col-right').children('.business').children('.business-list').children('.item');
    var topuuimgs = $('.service .col-left').children('.app').children('.fun').children('.uuimg');
    //产品功能    我要下单
    var myxiadantxt = $('.item1.a .col-right').children('.business').children('.business-list').children('.item');
    var myxiadanimgs = $('.item1.a .col-left').children('.app').children('.fun').children('.uuimg');
    //产品功能  订单跟踪
    var mygenzongtxt = $('.item1.b .col-right').children('.business').children('.business-list').children('.item');
    var mygenzongimgs = $('.item1.b .col-left').children('.app').children('.fun').children('.uuimg');
    //产品功能 服务流程
    var myliutxt = $('.item1.c .col-right').children('.business').children('.business-list').children('.item');
    var myliuimgs = $('.item1.c .col-left').children('.app').children('.fun').children('.uuimg');
    var aplay = {
        timer: true,
        init: function init(contorl, obj, index, location) {
            var _this = this;
            var imgs = obj.eq(index).children('img'); //获取对象下的所有图片
            _this.addActive(contorl, obj, index, location);
            if (imgs.length > 1) {
                // _this.doPlay(imgs,obj,index, location); //播放图片
                _this.doPlay(imgs, obj, index, location);
            }
            $(imgs).eq(0).show().siblings("img").hide(); //让首个img显示
        },
        addActive: function addActive(contorl, obj, index, location) {
            topfeaturest.removeClass('active');
            topuuimgs.removeClass('active');
            var childdec = $('.service .col-right').find('.introduce').find('.panel');
            childdec.eq(index).show().siblings().hide();

            contorl.removeClass('active').eq(index).addClass('active'); //右边的添加选中样式
            obj.removeClass('active').eq(index).addClass('active'); //左边的播放那一块
        },
        doPlay: function doPlay(imgs, obj, index, location) {
            var _this = this;
            var nowImg = 0;
            var dd = 2000;
            clearInterval(_this.timer);
            _this.timer = setInterval(function () {
                //循环播放演示      
                nowImg++;
                if (nowImg == imgs.length) {
                    nowImg = 0;
                }
                if (nowImg == 0) {
                    dd = 1000;
                }
                _this.doshow(imgs, obj, index, nowImg, location);
            }, dd);
        },
        doPlay2: function doPlay2(imgs, obj, index, location) {
            var _this = this;
            var nowImg = 0;
            var dd = 2500;
            clearInterval(_this.timer);
            _this.timer = setInterval(function () {
                //循环播放演示
                nowImg++;
                if (nowImg == imgs.length) {
                    nowImg = 0;
                }
                if (nowImg == 0) {
                    dd = 1000;
                }
                _this.doshow(imgs, obj, index, nowImg, location);
            }, 2500);
        },
        doshow: function doshow(imgs, obj, index, nowImg, location) {
            var _this = this;
            imgs.eq(nowImg).fadeIn(500).siblings("img").fadeOut(500);
            _this.domouse(imgs, obj, index, nowImg, location);
        },
        domouse: function domouse(imgs, obj, index, nowImg, location) {
            var nv = positions[index][nowImg].x;
            var ny = positions[index][nowImg].y;
            var ncolor = positions[index][nowImg].color;

            //console.log(location);
            //var nopacity = positions[index][nowImg].opacity;
            var nopacity = 1;
            $(obj).eq(index).children('.touchbtn').css('background', ncolor);
            $(obj).eq(index).children('.touchbtn').css('display', 'none');

            $(obj).eq(index).children('.touchbtn').animate({
                left: nv,
                top: ny
            }, 600, function () {
                if (nopacity == 1) {
                    $(obj).eq(index).children('.touchbtn').css('display', 'block');
                }
            });
        }
    };

    //首页
    topfeaturest.on('mouseenter', function () {
        aplay.init(topfeaturest, topuuimgs, $(this).index(), 1); //开始播放 

    }).on('mouseleave', function () {
        $(topuuimgs).eq($(this).index()).children('.touchbtn').css('display', 'none');
    });
    aplay.init(topfeaturest, topuuimgs, 0, 1); //开始播放

    function interval(func, wait, times) {
        var interv = (function (w, t) {
            return function () {
                if (typeof t === "undefined" || t-- > 0) {
                    setTimeout(interv, w);
                    try {
                        func.call(null);
                    } catch (e) {
                        t = 0;
                        throw e.toString();
                    }
                }
            };
        })(wait, times);
        setTimeout(interv, wait);
    };
    var aplay2 = {
        timer: true,
        init: function init(contorl, obj, index, location) {
            var _this = this;
            var imgs = obj.eq(index).children('img'); //获取对象下的所有图片
            _this.addActive(contorl, obj, index, location);
            if (imgs.length > 1) {
                // _this.doPlay(imgs,obj,index, location); //播放图片
                _this.doPlay(imgs, obj, index, location);
            }
            $(imgs).eq(0).show().siblings("img").hide(); //让首个img显示
        },
        addActive: function addActive(contorl, obj, index, location) {

            myxiadantxt.removeClass('active');
            myxiadanimgs.removeClass('active');
            var childdeca = $('.item1.a .col-right').find('.introduce').find('ul');
            childdeca.eq(index).show().siblings().hide();

            contorl.removeClass('active').eq(index).addClass('active'); //右边的添加选中样式
            obj.removeClass('active').eq(index).addClass('active'); //左边的播放那一块
        },
        doPlay: function doPlay(imgs, obj, index, location) {
            var _this = this;
            var nowImg = 0;
            var dd = 2000;
            clearInterval(_this.timer);
            _this.timer = setInterval(function () {
                //循环播放演示      
                nowImg++;
                if (nowImg == imgs.length) {
                    nowImg = 0;
                }
                if (nowImg == 0) {
                    dd = 1000;
                }
                _this.doshow(imgs, obj, index, nowImg, location);
            }, dd);
        },
        doPlay2: function doPlay2(imgs, obj, index, location) {
            var _this = this;
            var nowImg = 0;
            var dd = 2500;
            clearInterval(_this.timer);
            _this.timer = setInterval(function () {
                //循环播放演示
                nowImg++;
                if (nowImg == imgs.length) {
                    nowImg = 0;
                }
                if (nowImg == 0) {
                    dd = 1000;
                }
                _this.doshow(imgs, obj, index, nowImg, location);
            }, 2500);
        },
        doshow: function doshow(imgs, obj, index, nowImg, location) {
            var _this = this;
            imgs.eq(nowImg).fadeIn(500).siblings("img").fadeOut(500);
            _this.domouse(imgs, obj, index, nowImg, location);
        },
        domouse: function domouse(imgs, obj, index, nowImg, location) {

            var nv = xiadan[index][nowImg].x;
            var ny = xiadan[index][nowImg].y;
            var ncolor = xiadan[index][nowImg].color;

            //console.log(location);
            //var nopacity = positions[index][nowImg].opacity;
            var nopacity = 1;
            $(obj).eq(index).children('.touchbtn').css('background', ncolor);
            $(obj).eq(index).children('.touchbtn').css('display', 'none');

            $(obj).eq(index).children('.touchbtn').animate({
                left: nv,
                top: ny
            }, 600, function () {
                if (nopacity == 1) {
                    $(obj).eq(index).children('.touchbtn').css('display', 'block');
                }
            });
        }
    };

    //我要下单
    myxiadantxt.on('mouseenter', function () {
        aplay2.init(myxiadantxt, myxiadanimgs, $(this).index(), 2); //开始播放 
    }).on('mouseleave', function () {
        $(myxiadanimgs).eq($(this).index()).children('.touchbtn').css('display', 'none');
    });
    aplay2.init(myxiadantxt, myxiadanimgs, 0, 2); //开始播放

    var aplay3 = {
        timer: true,
        init: function init(contorl, obj, index, location) {
            var _this = this;
            var imgs = obj.eq(index).children('img'); //获取对象下的所有图片
            _this.addActive(contorl, obj, index, location);
            if (imgs.length > 1) {
                // _this.doPlay(imgs,obj,index, location); //播放图片
                _this.doPlay(imgs, obj, index, location);
            }
            $(imgs).eq(0).show().siblings("img").hide(); //让首个img显示
        },
        addActive: function addActive(contorl, obj, index, location) {
            mygenzongtxt.removeClass('active');
            mygenzongimgs.removeClass('active');
            var childdeca = $('.item1.b .col-right').find('.introduce').find('ul');
            childdeca.eq(index).show().siblings().hide();
            contorl.removeClass('active').eq(index).addClass('active'); //右边的添加选中样式
            obj.removeClass('active').eq(index).addClass('active'); //左边的播放那一块
        },
        doPlay: function doPlay(imgs, obj, index, location) {
            var _this = this;
            var nowImg = 0;
            var dd = 2000;
            clearInterval(_this.timer);
            _this.timer = setInterval(function () {
                //循环播放演示      
                nowImg++;
                if (nowImg == imgs.length) {
                    nowImg = 0;
                }
                if (nowImg == 0) {
                    dd = 1000;
                }
                _this.doshow(imgs, obj, index, nowImg, location);
            }, dd);
        },
        doPlay2: function doPlay2(imgs, obj, index, location) {
            var _this = this;
            var nowImg = 0;
            var dd = 2500;
            clearInterval(_this.timer);
            _this.timer = setInterval(function () {
                //循环播放演示
                nowImg++;
                if (nowImg == imgs.length) {
                    nowImg = 0;
                }
                if (nowImg == 0) {
                    dd = 1000;
                }
                _this.doshow(imgs, obj, index, nowImg, location);
            }, 2500);
        },
        doshow: function doshow(imgs, obj, index, nowImg, location) {
            var _this = this;
            imgs.eq(nowImg).fadeIn(500).siblings("img").fadeOut(500);
            _this.domouse(imgs, obj, index, nowImg, location);
        },
        domouse: function domouse(imgs, obj, index, nowImg, location) {

            var nv = genzong[index][nowImg].x;
            var ny = genzong[index][nowImg].y;
            var ncolor = genzong[index][nowImg].color;

            //console.log(location);
            //var nopacity = positions[index][nowImg].opacity;
            var nopacity = 1;
            $(obj).eq(index).children('.touchbtn').css('background', ncolor);
            $(obj).eq(index).children('.touchbtn').css('display', 'none');

            $(obj).eq(index).children('.touchbtn').animate({
                left: nv,
                top: ny
            }, 600, function () {
                if (nopacity == 1) {
                    $(obj).eq(index).children('.touchbtn').css('display', 'block');
                }
            });
        }
    };

    //订单跟踪
    mygenzongtxt.on('mouseenter', function () {
        aplay3.init(mygenzongtxt, mygenzongimgs, $(this).index(), 2); //开始播放 
    }).on('mouseleave', function () {
        $(mygenzongimgs).eq($(this).index()).children('.touchbtn').css('display', 'none');
    });
    aplay3.init(mygenzongtxt, mygenzongimgs, 0, 2); //开始播放

    var aplay4 = {
        timer: true,
        init: function init(contorl, obj, index, location) {
            var _this = this;
            var imgs = obj.eq(index).children('img'); //获取对象下的所有图片
            _this.addActive(contorl, obj, index, location);
            if (imgs.length > 1) {
                // _this.doPlay(imgs,obj,index, location); //播放图片
                _this.doPlay(imgs, obj, index, location);
            }
            $(imgs).eq(0).show().siblings("img").hide(); //让首个img显示
        },
        addActive: function addActive(contorl, obj, index, location) {

            myliutxt.removeClass('active');
            myliuimgs.removeClass('active');
            var childdeca = $('.item1.c .col-right').find('.introduce').find('ul');
            childdeca.eq(index).show().siblings().hide();

            contorl.removeClass('active').eq(index).addClass('active'); //右边的添加选中样式
            obj.removeClass('active').eq(index).addClass('active'); //左边的播放那一块
        },
        doPlay: function doPlay(imgs, obj, index, location) {
            var _this = this;
            var nowImg = 0;
            var dd = 2000;
            clearInterval(_this.timer);
            _this.timer = setInterval(function () {
                //循环播放演示      
                nowImg++;
                if (nowImg == imgs.length) {
                    nowImg = 0;
                }
                if (nowImg == 0) {
                    dd = 1000;
                }
                _this.doshow(imgs, obj, index, nowImg, location);
            }, dd);
        },
        doPlay2: function doPlay2(imgs, obj, index, location) {
            var _this = this;
            var nowImg = 0;
            var dd = 2500;
            clearInterval(_this.timer);
            _this.timer = setInterval(function () {
                //循环播放演示
                nowImg++;
                if (nowImg == imgs.length) {
                    nowImg = 0;
                }
                if (nowImg == 0) {
                    dd = 1000;
                }
                _this.doshow(imgs, obj, index, nowImg, location);
            }, 2500);
        },
        doshow: function doshow(imgs, obj, index, nowImg, location) {
            var _this = this;
            imgs.eq(nowImg).fadeIn(500).siblings("img").fadeOut(500);
            _this.domouse(imgs, obj, index, nowImg, location);
        },
        domouse: function domouse(imgs, obj, index, nowImg, location) {

            var nv = liucheng[index][nowImg].x;
            var ny = liucheng[index][nowImg].y;
            var ncolor = liucheng[index][nowImg].color;

            //console.log(location);
            //var nopacity = positions[index][nowImg].opacity;
            var nopacity = 1;
            $(obj).eq(index).children('.touchbtn').css('background', ncolor);
            $(obj).eq(index).children('.touchbtn').css('display', 'none');

            $(obj).eq(index).children('.touchbtn').animate({
                left: nv,
                top: ny
            }, 600, function () {
                if (nopacity == 1) {
                    $(obj).eq(index).children('.touchbtn').css('display', 'block');
                }
            });
        }
    };

    //流程
    myliutxt.on('mouseenter', function () {
        aplay4.init(myliutxt, myliuimgs, $(this).index(), 4); //开始播放 
    }).on('mouseleave', function () {
        $(myliuimgs).eq($(this).index()).children('.touchbtn').css('display', 'none');
    });
    aplay4.init(myliutxt, myliuimgs, 0, 4); //开始播放
});

//鼠标滚动事件
function scroll(fn) {
    //开始滚动返回滚动之前的值和返回之后的值;
    fn = fn || function () {
    };
    var beforeScrollTop = $(document).scrollTop();
    if (window.addEventListener) {
        window.addEventListener("scroll", function () {
            var afterScrollTop = $(document).scrollTop();
            fn(beforeScrollTop, afterScrollTop);
            beforeScrollTop = afterScrollTop;
        }, false);
    } else {
        $(window.document).on("scroll", function () {
            var afterScrollTop = $(document).scrollTop();
            fn(beforeScrollTop, afterScrollTop);
            beforeScrollTop = afterScrollTop;
        }, false);
    }
}

//首页导航 滑动效果
function nav() {
    var _this = this;
    _this.upDown(function (direction) {
        if ($(".navigation").offset().top < 600) {
            $(".navigation").removeClass('animate slideInDown slideOutUp');
        } else {
            if (direction == "up") {
                $(".navigation").addClass('slideInDown').removeClass('slideOutUp');
            } else {
                $(".navigation").addClass('slideOutUp').removeClass('slideInDown');
            }
        }
    });
}

//向上滑动
function upDown(fn) {
    //判断向上还是向下;
    var _this = this;
    fn = fn || function () {
    };
    _this.scroll(function (beforeScrollTop, afterScrollTop) {
        var delta = afterScrollTop - beforeScrollTop;
        //console.log(delta);
        if (delta === 0) {
            return false;
        }
        var direction = 'down';
        if (delta > 0) {
            direction = "down";
        } else {
            direction = "up";
        }
        fn(direction);
    });
}

//单选按钮
function radioSelect() {
    // $('.payway input').iCheck({
    // 	radioClass: 'iradio_square-orange',
    // 	increaseArea: '20%' // 增大可以点击的区域
    // })
}

//收藏 和 历史
function shouCang() {
    $('.icon-close').click(function () {
        $('.mask').hide();
    })
    $('.btn_add').on('click', function () {
        var indexTxt = $(this).find('span').html();
        $('.mask').show();
        $('.addTitle span').text(indexTxt);
    })
}

//UU帮您送
function uuSend() {
    //发货地址
    focusBlur('#startaddress');
    //发货地址
    focusBlur('#startaddress');
    //发货人电话
    isTel('#starttel');
    //发货人姓名
    //focusBlur('#startname');
    //收货人姓名
    focusBlur('#endaddress');
    //收货人电话
    isTel('#endtel');
    //发货人姓名
    //focusBlur('#endname');
    //预约发货时间
    //focusBlur('#yueDate');
    $('#yueDate').blur(function () {
        var value = $(this).val().length;
        if (value <= 0) {
            $(this).addClass("on");
            $(this).next(".msg").addClass("focus");
            return false;
        } else {
            $(this).removeClass("on");
            $(this).next(".msg").removeClass("focus");
            $(".price").removeClass("focus");
            return true;
        }
    });
    $('#insteadMoney').blur(function () {
        var value = $(this).val().length;
        if (value <= 0) {
            // $(this).addClass("on");
            $(this).next(".msg").addClass("focus");
            return false;
        } else {
            // $(this).removeClass("on");
            $(this).next(".msg").removeClass("focus");
            $(".price").removeClass("focus");
            return true;
        }
    });
}

//UU帮您买
function uuBuy() {
    //详细信息
    focusBlur('#details');
    //商品金额
    var numReg = /^[0-9]+.?[0-9]*$/; //验证是否为小数可以带小数点

    $('#money').focus(function () {
        $(this).next(".msg").removeClass("focus");
        // $(this).addClass("on");
        $(".price").removeClass("focus");
    });
    $('#money').blur(function () {
        var value = $(this).val().length;
        if (value <= 0) {
            // $(this).addClass("on");
            $(this).next(".msg").addClass("focus");
            return false;
        } else if (!numReg.test($(this).val())) {
            // $(this).addClass("on");
            $(this).next(".msg").removeClass("focus");
            $(".price").addClass("focus");
            return false;
        } else {
            // $(this).removeClass("on");
            $(this).next(".msg").removeClass("focus");
            $(".price").removeClass("focus");
            return true;
        }
    });
    //发货地址
    focusBlur('#startaddress');
    //发货地址
    focusBlur('#endaddress');
    //验证电话 
    isTel('#tel');
}

//UU代排队
function uuLine() {
    //发货地址
    focusBlur('#lineaddress');
    //排队时间
    focusBlur('#yueDate');
    //验证电话 
    isTel('#tel');

}

function datePlugs(minus, add) {
    var times = [30, 60, 90, 120, 150, 180];
    var s = 0;
    var timesLen = times.length;

    //点击加号
    $(add).bind('click', function () {
        if (s < timesLen - 1) {
            s++;
            $(minus).addClass('active');
        } else {
            s = timesLen - 1;
        }
        if (s == timesLen - 1) {
            $(this).removeClass('active');
        }
        $(minus).prev('.cur-date').html(+times[s] + '分钟');
    });
    //点击减号
    $(minus).bind('click', function () {
        if (s > 0) {
            s--;
            $(add).addClass('active');
        } else {
            s = 0;
        }
        if (s == 0) {
            $(this).removeClass('active');
        }
        $(minus).prev('.cur-date').html(+times[s] + '分钟');
    });
}

//验证电话号码格式
function telReg(num) {
    var telReg = /^[1]\d{10}$/;
    return telReg.test(num);
}

//选择时间
function selectTime() {
    /*var today = new Date();
	
	var logicT = function(curDate){
		var time = $('#yueTime');
		if (time.val() != "") {
			order.price();
		}
		
		if(curDate.getDate() == today.getDate()){
			var eHour = curDate.getHours();
			var eMins = curDate.getMinutes();
			var mins = ''+eHour+':'+eMins+'';
			
			//开始时间
			$('#yueTime').datetimepicker({
				datepicker:false,
				format:'H:i',
				step: 5,
				minTime:mins,
				onSelectTime:function() {
					order.price();
				}
			});
			$('#yueTime').focus();
		}else{
			//开始时间
			$('#yueTime').datetimepicker({
				datepicker:false,
				format:'H:i',
				step: 5,
				onSelectTime:function() {
					order.price();
				}
			});
			$('#yueTime').focus();
		}
	}
	//开始日期
	$('#yueDate').datetimepicker({
		timepicker:false,
		lang:'ch',
		format:'Y-m-d',
		minDate:'-1970/01/1',
		maxDate: '+1970/01/3',
		onSelectDate: logicT
	});*/

    $('#yueDate').click(function () {
        WdatePicker({
            skin: 'myskin',
            dateFmt: 'yyyy-MM-dd HH:mm',
            isShowToday: false,
            minDate: '%y-%M-%d %H:{%m+' + timeLimitData.SubscribeTimeMin + '}',
            maxDate: '%y-%M-%d %H:{%m+' + timeLimitData.SubscribeTimeMax + '}',
            onpicked: order.price
        });
    });
}

//选择时间2
function selectDateTime() {
    /*var dtNow = new Date();
	var startDateVal = "";
  
	var startTime = function (curDate) {
		var sTime = $('#startTime');
		var i = 5;
		if (curDate.getMinutes() < 5) {
			i = 10;
		}

		var curDates = new Date(curDate.getTime() + i * 60 * 1000); ///从5分钟后开始
		var ett = curDates.getHours() + ':' + curDates.getMinutes();
		console.info(ett);
			sTime.datetimepicker({
				datepicker: false,
				format: 'H:i',
				step:5,
				minTime:ett,
				onChangeDateTime: function (curTime) {
				   
				},
				onSelectTime:endDate
					
			   
			});
			sTime.focus();
		
		
	};
	var endDate = function (time) {
		
		var startTime = new Date(time.getTime() + 30 * 60 * 1000);
		var endTime = new Date(time.getTime() + 10 * 60 * 60 * 1000);

		var sdate = startTime.getFullYear() + '-' + startTime.getMonth + '-' + startTime.getDate();
		var edate = endTime.getFullYear() + '-' + endTime.getMonth + '-' + endTime.getDate();
		$('#endDate').val("");
		//结束日期
		$('#endDate').datetimepicker({
			timepicker: false,
			lang: 'ch',
			format: 'Y/m/d',
			minDate: sdate,
			maxDate: edate,
			onSelectDate: endTime
		});
	}
	
	var endTime = function (curTime) {
		var eTimei = $('#endTime');
		eTimei.datetimepicker({
			datepicker: false,
			format: 'H:i',
			step: 5,
			minTime:eTimeMin,
			maxTime: eTimeMax,
			onSelectTime: order.price

		});
	
		eTimei.focus();
	}

	$('#yueDate').datetimepicker({
		timepicker: false,
		lang:'ch',
		format: 'Y-m-d',
		minDate: '-1970/01/1',
		maxDate: '+1970/01/3',
		onChangeDateTime: function (curDateTime) {
			
		},
		onSelectDate: startTime
	});*/

    $('#yueDate').click(function () {
        WdatePicker({
            skin: 'myskin',
            dateFmt: 'yyyy-MM-dd HH:mm',
            isShowToday: false,
            minDate: '%y-%M-%d %H:{%m+' + timeLimitData.QueueTimeUnitInterval + '}',
            maxDate: '%y-%M-%d {%H+24}:%m',
            onpicked: order.price
        });
    });

    //排队 立即前往 30分钟后
    $('#endDate3').click(function () {
        var startdateTime = $('#yueDate').val();
        var mindate = "";
        if (startdateTime == "") {
            mindate = '%y-%M-%d %H:{%m+' + (timeLimitData.QueueTimeUnitInterval + 30) + '}';
        } else {
            mindate = '#F{$dp.$D(\'yueDate\')}';
        }

        WdatePicker({
            skin: 'myskin',
            dateFmt: 'yyyy-MM-dd HH:mm',
            hmsMenuCfg: {
                H: [1, 6],
                m: [30, 2]
            },
            isShowToday: false,
            minDate: mindate,
            maxDate: '%y-%M-%d {%H+142}:%m',
            onpicked: order.price
            /*dchanged:function(i){
                var t = $('#endDate3').val("");
                console.log(t);
            }*/
        });
    });
}

//验证对象函数 获得和失去焦点
function focusBlur(focusId) {
    var focusBlurId = $(focusId);
    //获得焦点时
    focusBlurId.focus(function () {
        $(this).next(".msg").removeClass("focus");
    });
    //失去焦点时执行
    focusBlurId.blur(function () {
        var value = $(this).val().length;
        if (value <= 0) {
            $(this).addClass("on");
            $(this).next(".msg").addClass("focus");
            return false;
        } else {
            $(this).removeClass("on");
            $(this).next(".msg").removeClass("focus");
            $(this).next(".msg").next(".locate").addClass("on");
        }
    });
}

// 帮我买输入验证
function buyRequired() {
    //if ($("#sendTime").val() == "1") {
    //    if (isReuqired('#endaddress') && telRequired('#tel') && isReuqired('#startaddress') && isReuqired('#details') && isReuqired('#yueDate')) {
    //        return true;
    //    }
    //} else {
    //    if (isReuqired('#endaddress') && telRequired('#tel') && isReuqired('#startaddress') && isReuqired('#details')) {
    //        return true;
    //    }
    //}
    //return false;

    if (isReuqired('#endaddress') && telRequired('#tel') && isReuqired('#startaddress') && isReuqired('#details')) {
    } else {
        return false;
    }

    if ($("#sendTime").val() == "1") {
        if (!isReuqired('#yueDate')) {
            return false;
        }
    }
    return true;
}

// 帮我送输入验证
function sendRequired() {
    if ($("#sendTime").val() == "1") {

        if (
            isReuqired('#startaddress') &&
            telRequired('#starttel') &&
            isReuqired('#endaddress') &&
            telRequired('#endtel') &&
            isReuqired('#yueDate')
        ) {
            return true;
        }
        return false;
        // } else if($("#cod .active").index() == 1) {//代收货款
        // 	if(
        // 		isReuqired('#startaddress') &&
        // 		telRequired('#starttel') &&
        // 		isReuqired('#endaddress') &&
        // 		telRequired('#endtel') &&
        // 		isReuqired('#insteadMoney')
        // 	) {
        // 		return true;
        // 	}
    } else if ($("#valuate .active").index() == 1) {
        if (
            isReuqired('#startaddress') &&
            telRequired('#starttel') &&
            isReuqired('#endaddress') &&
            telRequired('#endtel')
        ) {
            return true;
        }
    } else {
        if (
            isReuqired('#startaddress') &&
            telRequired('#starttel') &&
            isReuqired('#endaddress') &&
            telRequired('#endtel')
        ) {
            return true;
        }
        return false;

    }

}

// 代排队输入验证
function lineRequired() {
    if ($("#lineTimeType .active").index() === 1) {
        console.info(11);
        if (
            isReuqired('#startaddress') &&
            isReuqired('#yueDate') &&
            telRequired('#starttel')
        ) {
            return true;
        }
        return false;

    } else {
        if (
            isReuqired('#startaddress') &&
            telRequired('#starttel')
        ) {
            return true;
        }
        return false;
    }

}

//验证是否为空
function isReuqired(inputId) {
    var inputValue = $(inputId),
        isverify = false;
    if (inputValue.val() == "") {
        inputValue.addClass('on');
        inputValue.next('.msg').addClass('focus');
        inputValue.focus();

    } else {
        inputValue.removeClass('on');
        inputValue.next('.msg').removeClass('focus');
        isverify = true;
        inputValue.attr('isverify', isverify);
    }
    return isverify;
}

function telRequired(telId) {
    var tel = $(telId);
    var value = tel.val();
    //alert(value);
    if (value == "") {

        tel.addClass("on");
        tel.next(".msg").addClass("focus");
        tel.focus();
        return false;
    } else if (!telReg(value)) {
        tel.parents(".tag").find(".tel").addClass("focus");
        tel.focus();
        return false;
    } else {
        tel.parents(".tag").find(".tel").removeClass("focus");
        tel.removeClass("on");
        return true;
    }
}

//验证电话 号码格式
function isTel(telId) {
    var tel = $(telId);
    tel.focus(function () {
        $(this).next(".msg").removeClass("focus");
        // $(this).next(".msg5").addClass("focus");
    });
    tel.blur(function () {
        var value = tel.val().length;
        if (value <= 0) {
            $(this).addClass("on");
            $(this).parents(".tag").find(".tel").removeClass("focus");
            $(this).next(".msg5").addClass("focus");
            return false;
        } else if (!telReg(tel.val())) {
            $(this).parents(".tag").find(".tel").addClass("focus");
            $(this).next(".msg5").removeClass("focus");
            return false;
        } else {
            $(this).parents(".tag").find(".tel").removeClass("focus");
            $(this).removeClass("on");
        }
    });
}

//百度地图接口（弹窗）
function myMap(inp) {
    var map = new BMap.Map("l-map"); //地图容器
    map.centerAndZoom(cityName, 13); // 初始化地图,设置城市和地图级别。
    map.enableScrollWheelZoom(); //启动鼠标滚轮缩放地图

    //建立一个自动完成的对象 start
    // var ac = new BMap.Autocomplete({
    // 		"input" : "search-input",
    // 	    "location" : map
    // });
    var myValue;
    // ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
    // 	console.log(e);
    // var str = "";
    // 	var _value = e.toitem.value;
    // 	var value = "";
    // 	myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
    // 	setPlace();
    // });	
    // function setPlace(){
    // 	map.clearOverlays();    //清除地图上所有覆盖物
    // 	function myFun(){
    // 		var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
    // 		map.centerAndZoom(pp, 18);
    // 		map.addOverlay(new BMap.Marker(pp));    //添加标注
    // 	}
    // 	var local = new BMap.LocalSearch(map, { //智能搜索
    // 	  onSearchComplete: myFun
    // 	});
    // 	local.search(myValue);
    // }
    // 建立一个自动完成的对象 end 

    //信息提示框
    window.openInfoWinFuns = null;
    var options = {
        //每页显示条数
        pageCapacity: 10,
        //判断状态是否正确
        onSearchComplete: function (results) {
            //地址存放数组
            var add = [];
            if (local.getStatus() == BMAP_STATUS_SUCCESS) {
                //信息存放数组
                openInfoWinFuns = [];
                //搜索总数
                var pageNum = results.getNumPages();
                //获取页码
                var curPage = results.getPageIndex();
                //获取当前页显示条数
                var curPageNum = results.getCurrentNumPois();
                //页数
                var page = Math.ceil(pageNum / curPageNum);
                //显示分页的页数
                var stepPage = 5;
                //分页容器
                var str = "";
                //开始页数
                var beginPage = 0;
                //结束页数
                var endPage = stepPage;
                var pageStr = '';
                //上一页
                var preNum = 0;
                var prePage = '';
                //下一页
                var nextNum = 0;
                var nextPage = '';
                var num1 = results.getCurrentNumPois() > 10 ? 10 : results.getCurrentNumPois();
                var tags = "";
                for (var i = 0; i < num1; i++) {
                    if (results.getPoi(i).city == undefined) {
                        console.info("city error");
                        return;
                    }
                    if (results.getPoi(i).city != $.trim(cityName)) {
                        return;
                    }
                    if ($.trim(cityName) == "信阳市") {
                        if (results.getPoi(i).address.indexOf("固始县") > -1) {
                            return;
                        }
                    }
                    if (results.getPoi(i).type == 1) {
                        console.log(results.getPoi(i).type);
                        continue;
                    }
                    if (results.getPoi(i).tags != undefined) {
                        tags = results.getPoi(i).tags.join(',');
                    }
                    if (tags.indexOf("道路") != -1 && tags.indexOf("行政地标") != -1) {
                        return;
                    }

                    //添加地图标注坐标
                    var marker = addMarker(results.getPoi(i).point, i);
                    //标注信息
                    var openInfoWinFun = addInfoWindow(marker, results.getPoi(i), i);
                    //把标注信息存入数组
                    openInfoWinFuns.push(openInfoWinFun);
                    //默认打开第一个标注信息窗口
                    var selected = "";
                    if (i == 0) {
                        selected = "background-color:#eee;";
                        openInfoWinFun();
                    }
                    var title = results.getPoi(i).title;
                    var desc = results.getPoi(i).address;
                    // add[i] = "<div class='item' id='item" + i + "' data-address-x='" + results.getPoi(i).point.lat + "' data-address-y='" + results.getPoi(i).point.lng + "' onclick='openInfoWinFuns[" + i + "]()'>";
                    add[i] = "<div class='item' id='item" + i + "' data-address-x='" + results.getPoi(i).point.lat + "' data-address-y='" + results.getPoi(i).point.lng + "' >";
                    add[i] += "<div class='infos'>"
                    add[i] += "<h5 class='title' note='" + results.getPoi(i).address + "' title=" + results.getPoi(i).title + ">" + title.substring(0, 14) + "</h5>";
                    add[i] += "<p class='desc'>" + desc.substring(0, 16) + "</p>";
                    add[i] += "</div>";
                    add[i] += "<p class='selected'>选中</p>";
                    add[i] += "</div>";
                }

                $('#search-list').html(add.join(''));
                // //如果当前页小于显示页数，则开始页从第一页开始
                // if ((curPage + 1) < stepPage) {
                //     beginPage = 0;
                //     endPage = stepPage + beginPage;
                // }
                //     //如果当前页大于等于总页面数，则循环的时候结束页要为总页面数
                // else if ((curPage + 3) >= pageNum) {
                //     beginPage = curPage - 1;
                //     endPage = pageNum;
                // } else { //正常的时候，正常循环
                //     beginPage = curPage - 1;
                //     endPage = stepPage + beginPage;
                // }

                // //如果当前页为0的时候，点击上一页就返回第0页
                // if (curPage - 1 < 0) {
                //     preNum = 0;
                // } else {
                //     preNum = curPage - 1;
                // }
                // //如果当前页等于总页面数的时候，点击下一页返回最后一页
                // if (curPage + 1 == pageNum) {
                //     nextNum = pageNum - 1;
                // } else {
                //     nextNum = curPage + 1;
                // }
                // if (pageNum > 1) {
                //     for (var i = beginPage; i < endPage; i++) {
                //         var j = i + 1;
                //         if (i != curPage) {
                //             pageStr += "<a href='javascript:;' data-val='" + i + "'>" + j + "</a>";
                //         } else {
                //             pageStr += "<a href='javascript:;' class='cur'>" + j + "</a>";
                //         }
                //     }
                // }
                // if (curPage + 1 != pageNum) {
                //     nextPage = "<a href='javascript:;' data-val4='" + stepPage + "' data-val3='" + endPage + "'  data-val2='" + pageNum + "' data-val='" + nextNum + "' class='next'>下一页</a>";
                // }
                // if (curPage != 0) {
                //     prePage = "<a href='javascript:;' data-val='" + preNum + "' class='prev'>上一页</a>";
                // }

                // //如果当前页小于显示页数，则开始页从第一页开始
                // if ((curPage + 1) < stepPage) {
                //     if (curPage == 0) {
                //         str = "<div class='pagers'>" + pageStr + nextPage + "</div>";
                //     } else {
                //         str = "<div class='pagers'>" + prePage + pageStr + nextPage + "</div>";
                //     }
                // } else if ((curPage + 1) >= pageNum) {
                //     str = "<div class='pagers'>" + prePage + pageStr + nextPage + "</div>";
                // } else {
                //     str = "<div class='pagers'>" + prePage + pageStr + nextPage + "</div>";
                // }
                $('#search-list').append(str);
                $('#search-list .item').unbind().bind("hover", function () {
                    var num = $(this).index();
                    openInfoWinFuns[num]()
                    map.centerAndZoom(new BMap.Point($(this).attr('data-address-y'), $(this).attr('data-address-x')), 15); // 初始化地图,设置城市和地图级别。
                });
            }
            if (add.length == 0) {
                add[0] = "<p class='noresults'>没有检索结果,请确认地址是否正确</p>";
                $('#search-list').html(add.join(''));
            }

        }
    }

    //添加标注、
    function addMarker(point, index) {
        var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {
            offset: new BMap.Size(10, 25),
            imageOffset: new BMap.Size(0, 0 - index * 25)
        });
        var marker = new BMap.Marker(point, {
            icon: myIcon
        });
        //移除原来的标点
        map.addOverlay(marker);
        return marker;
    }

    //添加信息窗口
    function addInfoWindow(marker, poi, index) {
        var maxLen = 9;
        var name = null;
        if (poi.type == BMAP_POI_TYPE_NORMAL) {
            name = "地址:";
        } else if (poi.type == BMAP_POI_TYPE_BUSSTOP) {
            name = "公交:";
        } else if (poi.type == BMAP_POI_TYPE_SUBSTOP) {
            name = "地铁:";
        } else {
            name = "地址:";
        }
        //弹窗信息的标题
        var infoWindowTitle = '<div style="font-weight:bold;color:#CE5521;font-size:14px">' + poi.title + '</div>';
        //弹窗的显示信息
        var infoWindowHtml = [];
        infoWindowHtml.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px arial,simsun,sans-serif"><tbody>');
        infoWindowHtml.push('<tr>');
        infoWindowHtml.push('<td style="vertical-align:top;line-height:16px;width:38px;white-space:nowrap;word-break:keep-all">' + name + '</td>');
        infoWindowHtml.push('<td style="vertical-align:top;line-height:16px">' + poi.address + ' </td>');
        infoWindowHtml.push('</tr>');
        infoWindowHtml.push('</tbody></table>');
        //窗口大小
        var infoWindow = new BMap.InfoWindow(infoWindowHtml.join(""), {
            title: infoWindowTitle,
            width: 200,
        });
        var openInfoWinFun = function () {
            marker.openInfoWindow(infoWindow);
            for (var cnt = 0; cnt < maxLen; cnt++) {
                if (!document.getElementById("item" + cnt)) {
                    continue;
                }
                /*if(cnt == index){
					document.getElementById("item" + cnt).style.backgroundColor = "#eee";
				}else{
					document.getElementById("item" + cnt).style.backgroundColor = "#fff";
				}*/
            }
        }
        marker.addEventListener("click", openInfoWinFun);
        return openInfoWinFun;
    }

    //实例化地图
    var local = new BMap.LocalSearch(cityName, options);

    //搜索关键字
    // $('.search-sub').click(function () {
    //     var keywords = $('#search-input').val();
    //     local.search(keywords);
    // });

    $('#search-input').on('focus', function () {
        var obje = $('#search-input')[0];
        if ("placeholder" in obje) {
            return
        } else {
            $('#search-input')[0].value = '';
        }
    });

    $('#search-input').on('input', function () {
        map.clearOverlays();
        var keywords = $('#search-input')[0].value;
        local.search(keywords);
    });

    /*autoComplete($('#search-input'),function(data){
		console.log(data.title);
	});*/

    //按enter 出发click
    //$("body").keydown(function() {
    //    if (event.keyCode == "13") {//keyCode=13是回车键
    //        $('.search-sub').click();
    //    }
    //});
    //翻页
    $('.pagers a').live("click", function () {
        var index = $(this).data('val');
        local.gotoPage(index);
    });
    //选中地址
    $('.search-list .item .selected').die().live("click", function () {
        var parent = $(this).parents('.item');
        var txt = parent.find('.title').attr('title');
        var note = parent.find(".title").attr("note");
        var lat = parent.data('address-x'); //获取维度
        var lng = parent.data('address-y');
        //清除之前样式
        inp.next('.msg').removeClass('focus');
        inp.removeClass('on');

        var id = inp.attr("id");
        if (id == "startaddress") {
            order.info.startAddressTitle = txt;
            order.info.startAddressNote = note;
            order.info.startAddressLng = lng;
            order.info.startAddressLat = lat;
        } else {
            order.info.endAddressTitle = txt;
            order.info.endAddressNote = note;
            order.info.endAddressLng = lng;
            order.info.endAddressLat = lat;
        }
        drawMyMapPath(new BMap.Point(order.info.startAddressLng, order.info.startAddressLat), new BMap.Point(order.info.endAddressLng, order.info.endAddressLat));
        order.price();

        //获取精度
        inp.val(txt);
        inp.attr('data-address-x', lat);
        inp.attr('data-address-y', lng);
        layer.closeAll();
        inp.parents('.tag').find('.locate').removeClass('on').addClass('on');
        //起点的集合
        if (inp.attr('name') == 'startaddress') {
            coordinatesS.push([lng, lat]);
            for (var i = 0; i < coordinatesS.length; i++) {
                var point = new BMap.Point(coordinatesS[i][0], coordinatesS[i][1]);
                pointsS.push(point);
            }
        }
        //终点的集合
        if (inp.attr('name') == 'endaddress') {
            coordinatesE.push([lng, lat]);
            for (var i = 0; i < coordinatesE.length; i++) {
                var point = new BMap.Point(coordinatesE[i][0], coordinatesE[i][1]);
                pointsE.push(point);
            }
        }
        //如果起点和终点都存在就出发
        if (coordinatesS.length > 0 && coordinatesE.length > 0) {
            drawMyMapPath(pointsS[pointsS.length - 1], pointsE[pointsE.length - 1]);
        }
    });
}

//百度地图接口 （绘制路线）
function drawMyMapPath(start, end) {
    //起始点坐标
    var startIcon = new BMap.Icon("images/start1.png", new BMap.Size(46, 56), {
        // offset: new BMap.Size(10, 25) // 指定定位位置  
        // imageOffset: new BMap.Size(0, 0 - 10) // 设置图片偏移 
    });
    //结束点坐标
    var endIcon = new BMap.Icon("images/end1.png", new BMap.Size(46, 56), {
        // offset: new BMap.Size(10, 25) // 指定定位位置  
        // imageOffset: new BMap.Size(0, 0 - 10) // 设置图片偏移 
    });
    //var myIcons = [startIcon,endtIcon];

    var map = new BMap.Map("viewmap");
    //清楚地图覆盖物
    map.clearOverlays();
    //启动鼠标滚轮缩放地图
    map.enableScrollWheelZoom();
    map.centerAndZoom(cityName, 12);
    if (typeof (start) != 'undefined') {
        var markerS = new BMap.Marker(start, {
            icon: startIcon
        }); // 创建标注
        map.addOverlay(markerS);
        //  map.centerAndZoom(start,15);
    }
    if (typeof (end) != 'undefined') {
        var markerE = new BMap.Marker(end, {
            icon: endIcon
        }); // 创建标注
        map.addOverlay(markerE);
        // map.centerAndZoom(end,15);
    }
    if (typeof (start) != 'undefined' && typeof (end) != 'undefined') {
        var markerS = new BMap.Marker(start, {
            icon: startIcon
        }); // 创建标注
        var markerE = new BMap.Marker(end, {
            icon: endIcon
        }); // 创建标注

        map.addOverlay(markerS);              // 将标注添加到地图中
        map.addOverlay(markerE);              // 将标注添加到地图中
        // map.centerAndZoom(start,15);
    }
    switch (OrderDistanceRule) {
        case 2:
            //绘制驾车路线
            var driving = new BMap.DrivingRoute(map, {
                renderOptions: {
                    map: map,
                    autoViewport: true
                },
                policy: 1,
                onMarkersSet: function (routes) {
                    map.removeOverlay(routes[0].marker); //删除起点
                    map.removeOverlay(routes[1].marker);//删除终点
                }
            });
            driving.search(start, end);
            // map.centerAndZoom(start,15);
            break;
        default:
            var walking = new BMap.WalkingRoute(map, {
                renderOptions: {
                    map: map,
                    autoViewport: true
                },
                policy: 1,
                onMarkersSet: function (routes) {
                    map.removeOverlay(routes[0].marker); //删除起点
                    map.removeOverlay(routes[1].marker);//删除终点
                }

            });
            walking.search(start, end);
            // map.centerAndZoom(start,15);
            break;
    }
}

//绘制echarts全国开通城市地图
function Cooperation(city, id) {
    //城市json数据

    var cityList = [];
    var str = new StringBuffer();
    $.each(city, function (i, v) {
        str.append('<a href="javascript:;" data-proid="' + v.ProId + '" class="' + (v.ProId == 17 ? "hover" : "") + '">' + v.Name + '</a>')
    });
    $('.part-area-opened dd').html(str.toString());
    //城市json测试数据
    $.get('json/china.json', function (chinaJson) {
        echarts.registerMap('china', eval(chinaJson));
        var chart = echarts.init(document.getElementById(id));
        chart.setOption({
            tooltip: {
                show: false,
                trigger: 'item',
                formatter: '{b}'
            },
            series: [{
                type: 'map',
                map: 'china',
                itemStyle: {
                    normal: {
                        areaColor: '#eeeeee',
                        borderColor: '#fff',
                        borderType: 'solid'
                        //label:{show:true}
                    },
                    emphasis: {
                        label: {
                            show: true
                        },
                        areaColor: '#ffd5a4',
                        color: '#fff'
                    }
                },
                data: proData
            }]
        });

        chart.on('mouseover', function (params) {
            var selected = params.value;
            var str = new StringBuffer();

            $.each(city, function (i, v) {
                if (v.ProId == selected) {
                    str.append('<a href="javascript:;" data-proid="' + v.ProId + '">' + v.Name + '</a>')
                }
            });
            if (!str.toString() == "") {
                $('.part-area').show().html("<p>已开通城市:</p>" + str.toString());
            }

            $('.part-area-opened dd a').removeClass("hover");
            var ss = $('.part-area-opened dd a[data-proid=' + selected + ']').addClass('hover');

        });
        chart.on('mouseout', function (params) {
            var selected = params.value;
            $(".part-area").hide();
            $('.part-area-opened dd a').removeClass("hover");
            $(".part-area-opened dd a[data-proid='17']").addClass("hover");
        });
        $(".part-area-opened dd a[data-proid='17']").addClass("hover");
    });
}

function Contact() {
    $.get('json/china.json', function (chinaJson) {
        echarts.registerMap('china', chinaJson);
        var chart = echarts.init(document.getElementById('map'));
        chart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            series: [{
                type: 'map',
                map: 'china',
                selectedMode: 'single',
                itemStyle: {
                    normal: {
                        areaColor: '#eee',
                        borderColor: '#ccc',
                        borderType: 'solid'
                    },
                    emphasis: {
                        areaColor: '#eee',
                        label: {
                            textStyle: {
                                color: '#eee'
                            }
                        }
                    }
                },
                data: proData
            }]
        });
        chart.on('click', function (params) {
            //console.info(chart);
            var selected = params.value;
            /*params.color = '#b36407';*/
            if (selected) {
                $(".item").hide();
                $(".item[data-proid='" + selected + "']").show();
                $(".address-title").text(params.name);
            }
        });
    });
    $(window).scroll(function () {
        var top = $(this).scrollTop();
        if (top > 880) {
            $('.address-title').removeClass('hide').addClass('show');
        } else {
            $('.address-title').removeClass('show').addClass('hide');
        }
    });
}

function Driver() {
    $(window.document).on("scroll", function () {
        var top = $(document).scrollTop();
        if (top > 0) {
            $('.column i').css('visibility', 'visible');
            $('.column.pri .col').animate({
                height: '75px'
            }, 2000);
            $('.column.mid .col').animate({
                height: '175px'
            }, 2000);
            $('.column.high .col').animate({
                height: '255px'
            }, 2000);
            setTimeout(function () {
                $('.column-line.line1').animate({
                    width: '418px'
                }, 2000);
            }, 2000);
            setTimeout(function () {
                $('.column-line.line2').animate({
                    width: '411px'
                }, 2000);
            }, 4000);
        }
    });
}

function Question() {
    //$('.question-list ul li').click(function() {
    //	$(this).siblings().find('.answer').slideUp();
    //	$(this).find('.answer').slideToggle();
    //});

    $('.feedback-sub').click(function () {
        var title = $('#feedback_title').val();
        var content = $('#feedback_content').val();
        var qq = $('#qq').val();

        if (title == "" || content == "" || qq == "") {
            return artDialog.alert("三项都不能为空", "error");
        }
        if (content.length > 250) {
            return artDialog.alert("内容不能大于250个字", "error");
        }
        var regTel = /^[1]\d{10}$/;
        if (!regTel.test(qq)) {
            return artDialog.alert("手机号码不正确", "error");
        }
        $('.feedback-sub').val('提交中...').attr('disabled', 'disabled').css('background', '#ddd');
        artDialog.ajax({
            url: "/Handler/Post.ashx?action=1001",
            data: {
                title: title,
                contact: qq,
                contents: content
            },
            success: function (result) {
                $('.feedback-sub').val('提交').removeAttr('disabled').css('background', '');
                $('#feedback_content').val('');
                $('#qq').val('');
                if (result.IsError) {
                    artDialog.alert(result.Msg, "error");
                } else {
                    artDialog.alert("反馈成功！");
                }
            }
        });
    });
}

function Product() {
    //第二个显示
    $(window.document).on("scroll", function () {
        var top = $(window).scrollTop();
        if (top > 300) {
            $('.product .item1.a .col-left').animate({
                top: 0
            }, 2000);
        }
        if (top > 800) {
            $('.product .item1.b .col-left').animate({
                top: 0
            }, 2000);
        }
        if (top > 2500) {
            $('.product .item1.c .col-left').animate({
                top: 0
            }, 2000);
        }
    });
    var categoryswiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 5,
        paginationClickable: true
    });

    var swiper2 = new Swiper('.cases-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 5,
        paginationClickable: true
    });
}

function Copy() {


}

/*城市列表*/
function cityList() {
    //给每个城市列表的开头字母加id
    var letterArr = $('.check_city .letter');
    var all = [];
    for (var i = 0; i < letterArr.length; i++) {
        var txt = $(letterArr[i]).text();
        $(letterArr[i]).attr('id', txt);
        all.push(txt);
    }
    //给右边导航栏字母加href连接
    var leftArr = $('.left_zm a');
    for (var i = 0; i < leftArr.length; i++) {
        for (var x = 0; x < all.length; x++) {
            if ($(leftArr[i]).text() == all[x]) {
                $(leftArr[i]).attr('href', '#' + all[x]);
            }
        }
    }

    var cityH;
    var cityMask = $('.city_mask');
    var stopScroll;
    var h = 0;
    var windowH = 10;
    var arrHigh = $('.high');
    var showArr = [];
    var showArr1 = [];
    //计算滚动的高度			
    for (var i = 0; i < arrHigh.length; i++) {
        h = h + $(arrHigh[i]).height();
        showArr.push(h);
    }
    for (var i = 0; i < arrHigh.length; i++) {
        showArr[i] = showArr[i] - windowH;
        showArr1.push(showArr[i]);
    }

    //当滚动事件事件时触发屏幕中间出现大字母
    $(".citywrap").on('scroll', function (e) {
        clearTimeout(stopScroll);
        cityH = $('.citywrap').scrollTop();

        cityMask.css({
            'display': 'block'
        });
        //$('.left_zm span').removeClass('span_bg');
        for (var i = 0; i < showArr1.length - 1; i++) {

            if (cityH > showArr1[i] && cityH <= showArr1[i + 1]) {

                var curc = $('.check_city .high').eq(i + 1).find('.letter').attr('id');
                //cityMask.text(allCity[i][0].FirstZM);
                cityMask.text(curc);
            } else if (cityH > 0 && cityH <= showArr1[0]) {
                cityMask.css('display', 'none');
                cityMask.text('');
            }
            //console.log(curc);
        }

        //给右边的字母加背景
        /*for(var i = 0; i < $('.left_zm span').length; i++) {
			var leftSpan = $('.left_zm span')[i];
			if($(leftSpan).text() == cityMask.text()) {
				$(leftSpan).addClass('span_bg');
			} else if(cityH == 0) {
				$('.left_zm span').removeClass('span_bg');
			}
		}*/

        stopScroll = setTimeout(dispearCity, 200);

    });

    function dispearCity() {
        cityMask.css('display', 'none');
    }
}

function xuFei() {
    layer.open({
        type: 1,
        title: '续费',
        area: ['700'],
        content: $('#renewal')
    })
}
