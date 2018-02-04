!(function(a, b) {
	"function" == typeof define && (define.amd || define.cmd)
		? define(function() {
				return b(a);
			})
		: b(a, !0);

// for webpack purpose, change this to window
// })(this, function(a, b) {
})(window, function(a, b) {
	function c(b, c, d) {
		a.WeixinJSBridge
			? WeixinJSBridge.invoke(b, e(c), function(a) {
					h(b, a, d);
				})
			: k(b, d);
	}
	function d(b, c, d) {
		a.WeixinJSBridge
			? WeixinJSBridge.on(b, function(a) {
					d && d.trigger && d.trigger(a), h(b, a, c);
				})
			: d ? k(b, d) : k(b, c);
	}
	function e(a) {
		return (
			(a = a || {}),
			(a.appId = E.appId),
			(a.verifyAppId = E.appId),
			(a.verifySignType = "sha1"),
			(a.verifyTimestamp = E.timestamp + ""),
			(a.verifyNonceStr = E.nonceStr),
			(a.verifySignature = E.signature),
			a
		);
	}
	function f(a) {
		return {
			timeStamp: a.timestamp + "",
			nonceStr: a.nonceStr,
			package: a["package"],
			paySign: a.paySign,
			signType: a.signType || "SHA1"
		};
	}
	function g(a) {
		return (
			(a.postalCode = a.addressPostalCode),
			delete a.addressPostalCode,
			(a.provinceName = a.proviceFirstStageName),
			delete a.proviceFirstStageName,
			(a.cityName = a.addressCitySecondStageName),
			delete a.addressCitySecondStageName,
			(a.countryName = a.addressCountiesThirdStageName),
			delete a.addressCountiesThirdStageName,
			(a.detailInfo = a.addressDetailInfo),
			delete a.addressDetailInfo,
			a
		);
	}
	function h(a, b, c) {
		"openEnterpriseChat" == a && (b.errCode = b.err_code),
			delete b.err_code,
			delete b.err_desc,
			delete b.err_detail;
		var d = b.errMsg;
		d || ((d = b.err_msg), delete b.err_msg, (d = i(a, d)), (b.errMsg = d)),
			(c = c || {}),
			c._complete && (c._complete(b), delete c._complete),
			(d = b.errMsg || ""),
			E.debug && !c.isInnerInvoke && alert(JSON.stringify(b));
		var e = d.indexOf(":"),
			f = d.substring(e + 1);
		switch (f) {
			case "ok":
				c.success && c.success(b);
				break;
			case "cancel":
				c.cancel && c.cancel(b);
				break;
			default:
				c.fail && c.fail(b);
		}
		c.complete && c.complete(b);
	}
	function i(a, b) {
		var c = a,
			d = r[c];
		d && (c = d);
		var e = "ok";
		if (b) {
			var f = b.indexOf(":");
			(e = b.substring(f + 1)),
				"confirm" == e && (e = "ok"),
				"failed" == e && (e = "fail"),
				-1 != e.indexOf("failed_") && (e = e.substring(7)),
				-1 != e.indexOf("fail_") && (e = e.substring(5)),
				(e = e.replace(/_/g, " ")),
				(e = e.toLowerCase()),
				("access denied" == e || "no permission to execute" == e) &&
					(e = "permission denied"),
				"config" == c && "function not exist" == e && (e = "ok"),
				"" == e && (e = "fail");
		}
		return (b = c + ":" + e);
	}
	function j(a) {
		if (a) {
			for (var b = 0, c = a.length; c > b; ++b) {
				var d = a[b],
					e = q[d];
				e && (a[b] = e);
			}
			return a;
		}
	}
	function k(a, b) {
		if (!(!E.debug || (b && b.isInnerInvoke))) {
			var c = r[a];
			c && (a = c),
				b && b._complete && delete b._complete,
				console.log('"' + a + '",', b || "");
		}
	}
	function l(a) {
		if (!(w || x || E.debug || "6.0.2" > B || D.systemType < 0)) {
			var b = new Image();
			(D.appId = E.appId),
				(D.initTime = C.initEndTime - C.initStartTime),
				(D.preVerifyTime = C.preVerifyEndTime - C.preVerifyStartTime),
				J.getNetworkType({
					isInnerInvoke: !0,
					success: function(a) {
						D.networkType = a.networkType;
						var c =
							"https://open.weixin.qq.com/sdk/report?v=" +
							D.version +
							"&o=" +
							D.isPreVerifyOk +
							"&s=" +
							D.systemType +
							"&c=" +
							D.clientVersion +
							"&a=" +
							D.appId +
							"&n=" +
							D.networkType +
							"&i=" +
							D.initTime +
							"&p=" +
							D.preVerifyTime +
							"&u=" +
							D.url;
						b.src = c;
					}
				});
		}
	}
	function m() {
		return new Date().getTime();
	}
	function n(b) {
		y &&
			(a.WeixinJSBridge
				? "preInject" === s.__wxjsjs__isPreInject
					? s.addEventListener &&
						s.addEventListener("WeixinJSBridgeReady", b, !1)
					: b()
				: s.addEventListener &&
					s.addEventListener("WeixinJSBridgeReady", b, !1));
	}
	function o() {
		J.invoke ||
			((J.invoke = function(b, c, d) {
				a.WeixinJSBridge && WeixinJSBridge.invoke(b, e(c), d);
			}),
			(J.on = function(b, c) {
				a.WeixinJSBridge && WeixinJSBridge.on(b, c);
			}));
	}
	function p(a) {
		if ("string" == typeof a && a.length > 0) {
			var b = a.split("?")[0],
				c = a.split("?")[1];
			return (b += ".html"), "undefined" != typeof c ? b + "?" + c : b;
		}
		return void 0;
	}
	if (!a.jWeixin) {
		var q = {
				config: "preVerifyJSAPI",
				onMenuShareTimeline: "menu:share:timeline",
				onMenuShareAppMessage: "menu:share:appmessage",
				onMenuShareQQ: "menu:share:qq",
				onMenuShareWeibo: "menu:share:weiboApp",
				onMenuShareQZone: "menu:share:QZone",
				previewImage: "imagePreview",
				getLocation: "geoLocation",
				openProductSpecificView: "openProductViewWithPid",
				addCard: "batchAddCard",
				openCard: "batchViewCard",
				chooseWXPay: "getBrandWCPayRequest",
				openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
				startSearchBeacons: "startMonitoringBeacons",
				stopSearchBeacons: "stopMonitoringBeacons",
				onSearchBeacons: "onBeaconsInRange",
				consumeAndShareCard: "consumedShareCard",
				openAddress: "editAddress"
			},
			r = (function() {
				var a = {};
				for (var b in q) a[q[b]] = b;
				return a;
			})(),
			s = a.document,
			t = s.title,
			u = navigator.userAgent.toLowerCase(),
			v = navigator.platform.toLowerCase(),
			w = !(!v.match("mac") && !v.match("win")),
			x = -1 != u.indexOf("wxdebugger"),
			y = -1 != u.indexOf("micromessenger"),
			z = -1 != u.indexOf("android"),
			A = -1 != u.indexOf("iphone") || -1 != u.indexOf("ipad"),
			B = (function() {
				var a =
					u.match(/micromessenger\/(\d+\.\d+\.\d+)/) ||
					u.match(/micromessenger\/(\d+\.\d+)/);
				return a ? a[1] : "";
			})(),
			C = {
				initStartTime: m(),
				initEndTime: 0,
				preVerifyStartTime: 0,
				preVerifyEndTime: 0
			},
			D = {
				version: 1,
				appId: "",
				initTime: 0,
				preVerifyTime: 0,
				networkType: "",
				isPreVerifyOk: 1,
				systemType: A ? 1 : z ? 2 : -1,
				clientVersion: B,
				url: encodeURIComponent(location.href)
			},
			E = {},
			F = { _completes: [] },
			G = { state: 0, data: {} };
		n(function() {
			C.initEndTime = m();
		});
		var H = !1,
			I = [],
			J = {
				config: function(a) {
					(E = a), k("config", a);
					var b = E.check === !1 ? !1 : !0;
					n(function() {
						if (b)
							c(
								q.config,
								{ verifyJsApiList: j(E.jsApiList) },
								(function() {
									(F._complete = function(a) {
										(C.preVerifyEndTime = m()), (G.state = 1), (G.data = a);
									}),
										(F.success = function(a) {
											D.isPreVerifyOk = 0;
										}),
										(F.fail = function(a) {
											F._fail ? F._fail(a) : (G.state = -1);
										});
									var a = F._completes;
									return (
										a.push(function() {
											l();
										}),
										(F.complete = function(b) {
											for (var c = 0, d = a.length; d > c; ++c) a[c]();
											F._completes = [];
										}),
										F
									);
								})()
							),
								(C.preVerifyStartTime = m());
						else {
							G.state = 1;
							for (var a = F._completes, d = 0, e = a.length; e > d; ++d)
								a[d]();
							F._completes = [];
						}
					}),
						E.beta && o();
				},
				ready: function(a) {
					0 != G.state ? a() : (F._completes.push(a), !y && E.debug && a());
				},
				error: function(a) {
					"6.0.2" > B || (-1 == G.state ? a(G.data) : (F._fail = a));
				},
				checkJsApi: function(a) {
					var b = function(a) {
						var b = a.checkResult;
						for (var c in b) {
							var d = r[c];
							d && ((b[d] = b[c]), delete b[c]);
						}
						return a;
					};
					c(
						"checkJsApi",
						{ jsApiList: j(a.jsApiList) },
						(function() {
							return (
								(a._complete = function(a) {
									if (z) {
										var c = a.checkResult;
										c && (a.checkResult = JSON.parse(c));
									}
									a = b(a);
								}),
								a
							);
						})()
					);
				},
				onMenuShareTimeline: function(a) {
					d(
						q.onMenuShareTimeline,
						{
							complete: function() {
								c(
									"shareTimeline",
									{
										title: a.title || t,
										desc: a.title || t,
										img_url: a.imgUrl || "",
										link: a.link || location.href,
										type: a.type || "link",
										data_url: a.dataUrl || ""
									},
									a
								);
							}
						},
						a
					);
				},
				onMenuShareAppMessage: function(a) {
					d(
						q.onMenuShareAppMessage,
						{
							complete: function() {
								c(
									"sendAppMessage",
									{
										title: a.title || t,
										desc: a.desc || "",
										link: a.link || location.href,
										img_url: a.imgUrl || "",
										type: a.type || "link",
										data_url: a.dataUrl || ""
									},
									a
								);
							}
						},
						a
					);
				},
				onMenuShareQQ: function(a) {
					d(
						q.onMenuShareQQ,
						{
							complete: function() {
								c(
									"shareQQ",
									{
										title: a.title || t,
										desc: a.desc || "",
										img_url: a.imgUrl || "",
										link: a.link || location.href
									},
									a
								);
							}
						},
						a
					);
				},
				onMenuShareWeibo: function(a) {
					d(
						q.onMenuShareWeibo,
						{
							complete: function() {
								c(
									"shareWeiboApp",
									{
										title: a.title || t,
										desc: a.desc || "",
										img_url: a.imgUrl || "",
										link: a.link || location.href
									},
									a
								);
							}
						},
						a
					);
				},
				onMenuShareQZone: function(a) {
					d(
						q.onMenuShareQZone,
						{
							complete: function() {
								c(
									"shareQZone",
									{
										title: a.title || t,
										desc: a.desc || "",
										img_url: a.imgUrl || "",
										link: a.link || location.href
									},
									a
								);
							}
						},
						a
					);
				},
				startRecord: function(a) {
					c("startRecord", {}, a);
				},
				stopRecord: function(a) {
					c("stopRecord", {}, a);
				},
				onVoiceRecordEnd: function(a) {
					d("onVoiceRecordEnd", a);
				},
				playVoice: function(a) {
					c("playVoice", { localId: a.localId }, a);
				},
				pauseVoice: function(a) {
					c("pauseVoice", { localId: a.localId }, a);
				},
				stopVoice: function(a) {
					c("stopVoice", { localId: a.localId }, a);
				},
				onVoicePlayEnd: function(a) {
					d("onVoicePlayEnd", a);
				},
				uploadVoice: function(a) {
					c(
						"uploadVoice",
						{
							localId: a.localId,
							isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
						},
						a
					);
				},
				downloadVoice: function(a) {
					c(
						"downloadVoice",
						{
							serverId: a.serverId,
							isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
						},
						a
					);
				},
				translateVoice: function(a) {
					c(
						"translateVoice",
						{
							localId: a.localId,
							isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
						},
						a
					);
				},
				chooseImage: function(a) {
					c(
						"chooseImage",
						{
							scene: "1|2",
							count: a.count || 9,
							sizeType: a.sizeType || ["original", "compressed"],
							sourceType: a.sourceType || ["album", "camera"]
						},
						(function() {
							return (
								(a._complete = function(a) {
									if (z) {
										var b = a.localIds;
										b && (a.localIds = JSON.parse(b));
									}
								}),
								a
							);
						})()
					);
				},
				getLocation: function(a) {},
				previewImage: function(a) {
					c(q.previewImage, { current: a.current, urls: a.urls }, a);
				},
				uploadImage: function(a) {
					c(
						"uploadImage",
						{
							localId: a.localId,
							isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
						},
						a
					);
				},
				downloadImage: function(a) {
					c(
						"downloadImage",
						{
							serverId: a.serverId,
							isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
						},
						a
					);
				},
				getLocalImgData: function(a) {
					H === !1
						? ((H = !0),
							c(
								"getLocalImgData",
								{ localId: a.localId },
								(function() {
									return (
										(a._complete = function(a) {
											if (((H = !1), I.length > 0)) {
												var b = I.shift();
												wx.getLocalImgData(b);
											}
										}),
										a
									);
								})()
							))
						: I.push(a);
				},
				getNetworkType: function(a) {
					var b = function(a) {
						var b = a.errMsg;
						a.errMsg = "getNetworkType:ok";
						var c = a.subtype;
						if ((delete a.subtype, c)) a.networkType = c;
						else {
							var d = b.indexOf(":"),
								e = b.substring(d + 1);
							switch (e) {
								case "wifi":
								case "edge":
								case "wwan":
									a.networkType = e;
									break;
								default:
									a.errMsg = "getNetworkType:fail";
							}
						}
						return a;
					};
					c(
						"getNetworkType",
						{},
						(function() {
							return (
								(a._complete = function(a) {
									a = b(a);
								}),
								a
							);
						})()
					);
				},
				openLocation: function(a) {
					c(
						"openLocation",
						{
							latitude: a.latitude,
							longitude: a.longitude,
							name: a.name || "",
							address: a.address || "",
							scale: a.scale || 28,
							infoUrl: a.infoUrl || ""
						},
						a
					);
				},
				getLocation: function(a) {
					(a = a || {}),
						c(
							q.getLocation,
							{ type: a.type || "wgs84" },
							(function() {
								return (
									(a._complete = function(a) {
										delete a.type;
									}),
									a
								);
							})()
						);
				},
				hideOptionMenu: function(a) {
					c("hideOptionMenu", {}, a);
				},
				showOptionMenu: function(a) {
					c("showOptionMenu", {}, a);
				},
				closeWindow: function(a) {
					(a = a || {}), c("closeWindow", {}, a);
				},
				hideMenuItems: function(a) {
					c("hideMenuItems", { menuList: a.menuList }, a);
				},
				showMenuItems: function(a) {
					c("showMenuItems", { menuList: a.menuList }, a);
				},
				hideAllNonBaseMenuItem: function(a) {
					c("hideAllNonBaseMenuItem", {}, a);
				},
				showAllNonBaseMenuItem: function(a) {
					c("showAllNonBaseMenuItem", {}, a);
				},
				scanQRCode: function(a) {
					(a = a || {}),
						c(
							"scanQRCode",
							{
								needResult: a.needResult || 0,
								scanType: a.scanType || ["qrCode", "barCode"]
							},
							(function() {
								return (
									(a._complete = function(a) {
										if (A) {
											var b = a.resultStr;
											if (b) {
												var c = JSON.parse(b);
												a.resultStr =
													c && c.scan_code && c.scan_code.scan_result;
											}
										}
									}),
									a
								);
							})()
						);
				},
				openAddress: function(a) {
					c(
						q.openAddress,
						{},
						(function() {
							return (
								(a._complete = function(a) {
									a = g(a);
								}),
								a
							);
						})()
					);
				},
				openProductSpecificView: function(a) {
					c(
						q.openProductSpecificView,
						{
							pid: a.productId,
							view_type: a.viewType || 0,
							ext_info: a.extInfo
						},
						a
					);
				},
				addCard: function(a) {
					for (var b = a.cardList, d = [], e = 0, f = b.length; f > e; ++e) {
						var g = b[e],
							h = { card_id: g.cardId, card_ext: g.cardExt };
						d.push(h);
					}
					c(
						q.addCard,
						{ card_list: d },
						(function() {
							return (
								(a._complete = function(a) {
									var b = a.card_list;
									if (b) {
										b = JSON.parse(b);
										for (var c = 0, d = b.length; d > c; ++c) {
											var e = b[c];
											(e.cardId = e.card_id),
												(e.cardExt = e.card_ext),
												(e.isSuccess = e.is_succ ? !0 : !1),
												delete e.card_id,
												delete e.card_ext,
												delete e.is_succ;
										}
										(a.cardList = b), delete a.card_list;
									}
								}),
								a
							);
						})()
					);
				},
				chooseCard: function(a) {
					c(
						"chooseCard",
						{
							app_id: E.appId,
							location_id: a.shopId || "",
							sign_type: a.signType || "SHA1",
							card_id: a.cardId || "",
							card_type: a.cardType || "",
							card_sign: a.cardSign,
							time_stamp: a.timestamp + "",
							nonce_str: a.nonceStr
						},
						(function() {
							return (
								(a._complete = function(a) {
									(a.cardList = a.choose_card_info), delete a.choose_card_info;
								}),
								a
							);
						})()
					);
				},
				openCard: function(a) {
					for (var b = a.cardList, d = [], e = 0, f = b.length; f > e; ++e) {
						var g = b[e],
							h = { card_id: g.cardId, code: g.code };
						d.push(h);
					}
					c(q.openCard, { card_list: d }, a);
				},
				consumeAndShareCard: function(a) {
					c(
						q.consumeAndShareCard,
						{ consumedCardId: a.cardId, consumedCode: a.code },
						a
					);
				},
				chooseWXPay: function(a) {
					c(q.chooseWXPay, f(a), a);
				},
				openEnterpriseRedPacket: function(a) {
					c(q.openEnterpriseRedPacket, f(a), a);
				},
				startSearchBeacons: function(a) {
					c(q.startSearchBeacons, { ticket: a.ticket }, a);
				},
				stopSearchBeacons: function(a) {
					c(q.stopSearchBeacons, {}, a);
				},
				onSearchBeacons: function(a) {
					d(q.onSearchBeacons, a);
				},
				openEnterpriseChat: function(a) {
					c(
						"openEnterpriseChat",
						{ useridlist: a.userIds, chatname: a.groupName },
						a
					);
				},
				launchMiniProgram: function(a) {
					c(
						"launchMiniProgram",
						{
							targetAppId: a.targetAppId,
							path: p(a.path),
							envVersion: a.envVersion
						},
						a
					);
				}
			},
			K = 1,
			L = {};
		return (
			s.addEventListener(
				"error",
				function(a) {
					if (!z) {
						var b = a.target,
							c = b.tagName,
							d = b.src;
						if ("IMG" == c || "VIDEO" == c || "AUDIO" == c || "SOURCE" == c) {
							var e = -1 != d.indexOf("wxlocalresource://");
							if (e) {
								a.preventDefault(), a.stopPropagation();
								var f = b["wx-id"];
								if ((f || ((f = K++), (b["wx-id"] = f)), L[f])) return;
								(L[f] = !0),
									wx.ready(function() {
										wx.getLocalImgData({
											localId: d,
											success: function(a) {
												b.src = a.localData;
											}
										});
									});
							}
						}
					}
				},
				!0
			),
			s.addEventListener(
				"load",
				function(a) {
					if (!z) {
						var b = a.target,
							c = b.tagName;
						b.src;
						if ("IMG" == c || "VIDEO" == c || "AUDIO" == c || "SOURCE" == c) {
							var d = b["wx-id"];
							d && (L[d] = !1);
						}
					}
				},
				!0
			),
			b && (a.wx = a.jWeixin = J),
			J
		);
	}
});
