var timer;
var xmlHTTP;

var flag = false;

var wendu;
var shidu;
var huichengnongdu;
var kongqizhiliang;
var keranqitinongdu;
var qiya;
var time1;

var chart;
(function() {
	var TBtn = document.getElementsByName( 'area' );
    var TBtn1 = document.getElementsByName( 'area1' );
	var FScreen = document.querySelector( 'div.overlay' );
	var CBtn = FScreen.querySelector( 'button.overlay-close' );
	TNames = {'WebkitTransition': 'webkitTransitionEnd','MozTransition': 'transitionend','OTransition': 'oTransitionEnd','msTransition': 'MSTransitionEnd','transition': 'transitionend'},
	EName = TNames[ Modernizr.prefixed( 'transition' ) ],
	support = { transitions : Modernizr.csstransitions };
	
	
	function toggleFScreen(time,area) {
		//if(time=="now")time标识了点击的按钮
		//现在的状态是不是开启的状态
		if( classie.has( FScreen, 'open' )) {
			
				//停止AJAX
				var clear = function(){
					flag = false;
				    clearInterval(timer);
				}();
				
			classie.remove( FScreen, 'open' );
			classie.add( FScreen, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) 
						return;
					this.removeEventListener( EName, onEndTransitionFn );
				}
				classie.remove( FScreen, 'close' );
			};
			if( support.transitions ) {
				FScreen.addEventListener( EName, onEndTransitionFn );
			}else {
				onEndTransitionFn();
			}
		}else if( !classie.has( FScreen, 'close' ) ) {//关闭状态
			
			classie.add( FScreen, 'open');
			flag = true;
			
			//如果是当前数据的话就启动AJAX
			if(time=="now"){
				//ajax(time,area);
				timer = setInterval( function(){ajax(time,area)} , 1000);
				/***********************画曲线***********************/
				var NowParameter = document.getElementById("all");
                $("#main").hide();
				NowParameter.innerHTML ="<div id = 'NowParameter'>" +
							"<ul class='pricing_table'>"+
							"<li class='price_block'>"+
								"<div class='price'>"+
									"<div class='price_figure'>"+
										"<span class=''>温度</span>"+
									"</div>"+
								"</div>"+
								"<ul class='features'>"+
									"<li id='wendu'></li>"+
								"</ul>"+
							"</li>"+
							"<li class='price_block'>"+
								"<div class='price'>"+
									"<div class='price_figure'>"+
										"<span class='price_number'>灰尘浓度</span>"+
									"</div>"+
								"</div>"+
								"<ul class='features'>"+
								"<li id='huichengnongdu'></li>"+
								"</ul>"+
							"</li>"+
							"<li class='price_block'>"+
								"<div class='price'>"+
									"<div class='price_figure'>"+
										"<span class='price_number'>空气质量</span>"+
									"</div>"+
								"</div>"+
								"<ul class='features'>"+
									"<li id='kongqizhiliang'></li>"+
								"</ul>"+
							"</li>"+
							"<li class='price_block'>"+
								"<div class='price'>"+
									"<div class='price_figure'>"+
										"<span class='price_number'>可燃气体浓度</span>"+
									"</div>"+
								"</div>"+
								"<ul class='features'>"+
									"<li id='keranqitinongdu'></li>"+
								"</ul>"+
							"</li>"+
							"<li class='price_block'>"+
								"<div class='price'>"+
									"<div class='price_figure'>"+
										"<span class='price_number'>气压</span>"+
									"</div>"+
								"</div>"+
								"<ul class='features'>"+
									"<li id='qiya'></li>"+
								"</ul>"+
							"</li>"+
							"<li class='price_block'>"+
								"<div class='price'>"+
									"<div class='price_figure'>"+
										"<span class='price_number'>湿度</span>"+
									"</div>"+
								"</div>"+
								"<ul class='features'>"+
									"<li id='shidu'></li>"+
								"</ul>"+
							"</li>"+
						"</ul></div>" +
						"<div id='container2' style='min-width: 310px; height: 400px; margin:  auto'></div>";
				
				$(function() { 
					  Highcharts.setOptions({ global: { useUTC: false } });  
					Highcharts.setOptions({ 
					    colors: ['#FFFF00', '#00FFCC', '#FF88C2', '#CCDDFF ', '#008888', '#DD0077 '] 
					}); 
				    chart = new Highcharts.Chart({ 
				    	plotOptions: {
				            series: {
				                marker: {
				                    enabled: false, /*数据点是否显示*/
				                },
				            }
				        },
				        chart: { 
				        	backgroundColor: "rgba(44,62,80,0.2)",
				            renderTo: 'container2', //图表放置的容器，DIV 
				            defaultSeriesType: 'spline', //图表类型为曲线图 
				            events: {
				            	 load: function() {  
				                     var series = this.series[0]; 
				                     var series1 = this.series[1]; 
				                     var series2 = this.series[2]; 
				                     var series3 = this.series[3]; 
				                     var series4 = this.series[4]; 
				                     var series5 = this.series[5]; 
				                     //每隔1秒钟，图表更新一次，y数据值在0-100之间的随机数 
				                     var timer1 = setInterval(function() {
				                    	 if(flag == true){
				                    		 var x;
				                    		 if(time1!=null){
				                    			 x = new Date().getTime(); // 当前时间 
				                    		 }
				                    		 else{
				                    			 x=new Date().getTime()-10;
				                    		 }
				                    		 //alert(x);
				                            // y = Math.random()*100; 
				                    		 //alert(wendu+""+shidu+huichengnongdu+kongqizhiliang+keranqitinongdu+qiya);
				                             series.addPoint([x, wendu==undefined?0:wendu], true, false);
				                             series1.addPoint([x, shidu==undefined?0:shidu], true, false);
				                             series2.addPoint([x, huichengnongdu==undefined?0:huichengnongdu], true, false);
				                             series3.addPoint([x, kongqizhiliang==undefined?0:kongqizhiliang], true, false);
				                             series4.addPoint([x, keranqitinongdu==undefined?0:keranqitinongdu], true, false);
				                             series5.addPoint([x, qiya==undefined?0:qiya], true, false);
				                    	 }else{
				                    		// alert("delte");
				                    		 clearInterval(timer1);
				                    	 }
				                     }, 1000); 
				                 } 
				            }
				        }, 
				        title: { 
				            text: '参数走势图',  //图表标题 .
				            connectorColor: '#FFFFFF',
				            style: {
								color: '#FFFFFF',	
								padding: '8px'
							},
				        }, 
				        xAxis: { //设置X轴 
				            type: 'datetime',  //X轴为日期时间类型 
				           // tickPixelInterval: 150,  //X轴标签间隔 
				            labels: {//设置横轴坐标的显示样式  
				            	 formatter: function() { 
				                     
				                     return  Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.value); 
				            	 },
				                //rotation: -45,//倾斜度  
				                align: 'right',  
				                style: {  
				                     font: 'normal 13px Verdana, sans-serif' ,
				                     color: 'white'  
				                }  
				            }  
				        }, 
				        yAxis: { //设置Y轴 
				            title: '', 
				            labels: {//设置横轴坐标的显示样式  
				              //rotation: -45,//倾斜度  
				              align: 'right',  
				              style: {  
				                   font: 'normal 13px Verdana, sans-serif' ,
				                   color: 'white'  
				              }  
				          }  
				        }, 
				        tooltip: {//当鼠标悬置数据点时的提示框 
				        	formatter: function () {
				                return '<b>' + this.series.name + '</b><br/>' +
				                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
				                    Highcharts.numberFormat(this.y, 2);
				            }
				        }, 
				        legend: { 
				        	itemStyle : {	'fontSize' : '18px'	},
				            align: 'right',
				            borderWidth: 0
				        }, 
				        exporting: { 
				            enabled: false  //设置导出按钮不可用 
				        }, 
				        credits: { 
				            text: '', //设置LOGO区文字 
				            url: '' //设置LOGO链接地址 
				        }, 
				        series: [{
				            name: '温度',
				            data: []
				        },{
				            name: '湿度',
				            data: []
				        },{
				            name: '灰尘浓度',
				            data: []
				        },{
				            name: '空气质量',
				            data: []
				        },{
				            name: '可燃气体浓度',
				            data: []
				        },{
				            name: '气压',
				            data: []
				        }]
				    }); 
				});  
				/*********************************************/
				
			}else{
				//历史数据
				/******************************************************/
                $("#main").show();
				document.getElementById("all").innerHTML=
					"<div id='container3' style='height: 100px'></div>";

                // document.getElementById("all").innerHTML=
                //    "<div id=\"main\">"+
                // 		"<div class=\"demo\">"+
                // 			"<p>请选择日期：<input type=\"text\" class=\"input\" id=\"pickdate\" /></p><br/>"+
                // 		"</div>"+
                // 	"</div>";
				//请求一次后台
				//ajax(time,area);
				/****************************************************/
				$(function () {
				    /**
				     * In order to synchronize tooltips and crosshairs, override the
				     * built-in events with handlers defined on the parent element.
				     */
				    $('#container3').bind('mousemove touchmove touchstart', function (e) {
				        var chart,
				            point,
				            i,
				            event;

				        for (i = 0; i < Highcharts.charts.length; i = i + 1) {
				            chart = Highcharts.charts[i];
				            event = chart.pointer.normalize(e.originalEvent); // Find coordinates within the chart
				            point = chart.series[0].searchPoint(event, true); // Get the hovered point

				            if (point) {
				                point.highlight(e);
				            }
				        }
				    });
				    /**
				     * Override the reset function, we don't need to hide the tooltips and crosshairs.
				     */
				    Highcharts.Pointer.prototype.reset = function () {
				        return undefined;
				    };

				    /**
				     * Highlight a point by showing tooltip, setting hover state and draw crosshair
				     */
				    Highcharts.Point.prototype.highlight = function (event) {
				        this.onMouseOver(); // Show the hover marker
				        this.series.chart.tooltip.refresh(this); // Show the tooltip
				        this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
				    };

				    /**
				     * Synchronize zooming through the setExtremes event handler.
				     */
				    function syncExtremes(e) {
				        var thisChart = this.chart;

				        if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
				            Highcharts.each(Highcharts.charts, function (chart) {
				                if (chart !== thisChart) {
				                    if (chart.xAxis[0].setExtremes) { // It is null while updating
				                        chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, { trigger: 'syncExtremes' });
				                    }
				                }
				            });
				        }
				    }

				    // Get the data. The contents of the data file can be viewed at
				    // https://github.com/highcharts/highcharts/blob/master/samples/data/activity.json

                    $.ajax({
                        type: "post",
                        url: "/data/history/"+area,
                        success: function(data){
                            var activity = jQuery.parseJSON(data);
                            $.each(activity.datasets, function (i, dataset) {
                                // Add X values
                                dataset.data = Highcharts.map(dataset.data, function (val, j) {
                                    return [activity.xData[j], val];
                                });
                                Highcharts.setOptions({
                                    colors: ['#CCDDFF', '#00FFCC', '#FF88C2']
                                });
                                $('<div class="chart">')
                                    .appendTo('#container3')
                                    .highcharts({
                                        chart: {
                                            backgroundColor: 'rgba(44, 62, 80, 0.2)',
                                            marginLeft: 40, // Keep all charts left aligned
                                            spacingTop: 20,
                                            spacingBottom: 20

                                        },
                                        title: {
                                            text: dataset.name,
                                            align: 'left',
                                            margin: 0,
                                            x: 30,
                                            style: {
                                                font: 'normal 20px Verdana, sans-serif' ,
                                                color: 'white'
                                            }
                                        },
                                        credits: {
                                            enabled: false
                                        },
                                        exporting: {
                                            enabled: false  //设置导出按钮不可用
                                        },
                                        legend: {
                                            enabled: false,

                                        },
                                        xAxis: {
                                            crosshair: true,
                                            events: {
                                                setExtremes: syncExtremes
                                            },
                                            labels: {
                                                format: ' ',
                                                style: {
                                                    color: 'white',//颜色
                                                    fontSize:'14px'  //字体
                                                }
                                            }

                                        },
                                        yAxis: {
                                            title: {
                                                text: null
                                            },
                                            labels: {
                                                //y: 20, //x轴刻度往下移动20px
                                                style: {
                                                    color: 'white',//颜色
                                                    fontSize:'14px'  //字体
                                                }
                                            }
                                        },
                                        tooltip: {
                                            positioner: function () {
                                                return {
                                                    x: this.chart.chartWidth - this.label.width, // right aligned
                                                    y: -1 // align to title
                                                };
                                            },
                                            borderWidth: 0,
                                            backgroundColor: 'none',
                                            pointFormat: '{point.y}',
                                            headerFormat: '',
                                            shadow: false,
                                            style: {
                                                fontSize: '18px',
                                                color:'white'

                                            },
                                            valueDecimals: dataset.valueDecimals
                                        },
                                        series: [{
                                            data: dataset.data,
                                            name: dataset.name,
                                            type: dataset.type,
                                            color: Highcharts.getOptions().colors[i],
                                            fillOpacity: 0.3,
                                            tooltip: {
                                                valueSuffix: ' ' + dataset.unit
                                            }
                                        }]
                                    });
                            });
                        }
                    });





				    //$.ajax("/data/history/"+area, function (activity) );
				});
				/*********************************************************/
			}

		}
	}
	for(var i=0;i<TBtn.length;i++){
		TBtn[i].addEventListener( 'click',function(){toggleFScreen("now",this.childNodes[0].getAttribute("name"))});
		TBtn1[i].addEventListener( 'click', function(){toggleFScreen("past",this.childNodes[0].getAttribute("name"))});
	}
	CBtn.addEventListener( 'click', toggleFScreen );
})();



//ajax初始化函数
function ajax(time,area){
	if(window.XMLHttpRequest){//ie7以上，火狐，谷歌，苹果
		xmlHTTP = new XMLHttpRequest();//获取浏览器内置的这个对象，这个对象的作用就将http请求发送到服务器
	}else{
		xmlHTTP = ActiveXObject("Microsoft.XMLHTTP");
	}
	if(time=="now"){
		var url="data/current/"+area;
		xmlHTTP.onreadystatechange=callBackFun;//设置回调方法
	}else{
		var url="export.do?area="+area;
		xmlHTTP.onreadystatechange=callBackHistory;//设置回调方法
	}
	xmlHTTP.open("POST",url,true);
	xmlHTTP.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=UTF-8");//设置请求的头部信息，只有当状态码为1时，才可以在open
	xmlHTTP.send();
}

//回调函数，获取当前和预测值
function callBackFun(){
	if(xmlHTTP.readyState==4&&xmlHTTP.status==200){
	var s = xmlHTTP.responseText;
	if(s==null||s=="")
		return;
	object = eval("(" + s + ")");//将传送过来的json字符串包装成一个对象，注意要加上两边的圆括号
	
	
	wendu = Number(object.wendu);
	huichengnongdu = Number(object.huichengnongdu);
	kongqizhiliang = Math.round(Number(object.kongqizhiliang)/1000);
	keranqitinongdu = Number(object.keranqitinongdu);
	qiya = Math.round(Number(object.qiya)*10)/10000;
	shidu = Number(object.shidu);
	time1 = object.time1;
	
	document.getElementById("wendu").innerText="当 前 值:"+wendu+"℃";

	document.getElementById("huichengnongdu").innerText="当 前 值:"+huichengnongdu+"mg/m³";

	document.getElementById("kongqizhiliang").innerText="当 前 值:"+kongqizhiliang+"";

	document.getElementById("keranqitinongdu").innerText="当 前 值:"+keranqitinongdu+"ppm";

	document.getElementById("qiya").innerText="当 前 值:"+qiya+"KPa";

	document.getElementById("shidu").innerText="当 前 值:"+shidu+"g/m³";

	}



}



