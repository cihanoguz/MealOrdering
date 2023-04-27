/**
 * Kendo UI v2023.1.314 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.userevents.js";var __meta__={id:"mobile.button",name:"Button",category:"mobile",description:"The Button widget navigates between mobile Application views when pressed.",depends:["userevents"]};!function(e,t){var n=window.kendo,i=n.mobile.ui,a=i.Widget,s=n.support.mobileOS,o=s.android&&s.flatVersion>=300,l="click",m="disabled";function r(t,n,i){e(n.target).closest(".km-button,.km-detail").toggleClass("km-state-active",i),o&&t.deactivateTimeoutID&&(clearTimeout(t.deactivateTimeoutID),t.deactivateTimeoutID=0)}function c(t){return e('<span class="km-badge">'+t+"</span>")}var d=a.extend({init:function(e,t){var i=this;a.fn.init.call(i,e,t);var s="up"===i.options.clickOn;i._wrap(),i._style(),s||i.element.attr("data-navigate-on-press",!0),i.options.enable=i.options.enable&&!i.element.attr(m),i.enable(i.options.enable),i._userEvents=new n.UserEvents(i.element,{allowSelection:!s,fastTap:!0,press:function(e){i._activate(e)},release:function(e){r(i,e,!1),s||e.event.stopPropagation()}}),i._userEvents.bind(s?"tap":"press",(function(e){i._release(e)})),o&&i.element.on("move",(function(e){i._timeoutDeactivate(e)}))},destroy:function(){a.fn.destroy.call(this),this._userEvents.destroy()},events:[l],options:{name:"Button",icon:"",style:"",badge:"",clickOn:"up",enable:!0},badge:function(e){var t=this.badgeElement=this.badgeElement||c(e).appendTo(this.element);return e||0===e?(t.html(e),this):!1===e?(t.empty().remove(),this.badgeElement=!1,this):t.html()},enable:function(e){var t=this.element;void 0===e&&(e=!0),this.options.enable=e,e?t.prop(m,!1):t.attr(m,m),t.toggleClass("km-state-disabled",!e)},_timeoutDeactivate:function(e){this.deactivateTimeoutID||(this.deactivateTimeoutID=setTimeout(r,500,this,e,!1))},_activate:function(e){var t=document.activeElement,n=t?t.nodeName:"";this.options.enable&&(r(this,e,!0),"INPUT"!=n&&"TEXTAREA"!=n||t.blur())},_release:function(t){var n=this;t.which>1||(n.options.enable?n.trigger(l,{target:e(t.target),button:n.element})&&t.preventDefault():t.preventDefault())},_style:function(){var t,n=this.options.style,i=this.element;n&&(t=n.split(" "),e.each(t,(function(){i.addClass("km-"+this)})))},_wrap:function(){var t=this,n=t.options.icon,i=t.options.badge,a='<span class="km-icon km-'+n,s=t.element.addClass("km-button"),o=s.children("span:not(.km-icon)").addClass("km-text"),l=s.find("img").addClass("km-image");!o[0]&&s.html()&&(o=s.wrapInner('<span class="km-text" />').children("span.km-text")),!l[0]&&n&&(o[0]||(a+=" km-notext"),t.iconElement=s.prepend(e(a+'" />'))),(i||0===i)&&(t.badgeElement=c(i).appendTo(s))}}),p=d.extend({options:{name:"BackButton",style:"back"},init:function(e,t){var n=this;d.fn.init.call(n,e,t),void 0===n.element.attr("href")&&n.element.attr("href","#:back")}}),u=d.extend({options:{name:"DetailButton",style:""},init:function(e,t){d.fn.init.call(this,e,t)},_style:function(){var t=this.options.style+" detail",n=this.element;if(t){var i=t.split(" ");e.each(i,(function(){n.addClass("km-"+this)}))}},_wrap:function(){var t=this.options.icon,n='<span class="km-icon km-'+t,i=this.element,a=i.children("span");!i.find("img").addClass("km-image")[0]&&t&&(a[0]||(n+=" km-notext"),i.prepend(e(n+'" />')))}});i.plugin(d),i.plugin(p),i.plugin(u)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.mobile.button.js.map
