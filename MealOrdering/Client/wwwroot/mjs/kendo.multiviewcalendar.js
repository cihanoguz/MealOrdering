/**
 * Kendo UI v2023.1.314 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.selectable.js";import"./kendo.calendar.js";import"./kendo.icons.js";var __meta__={id:"multiviewcalendar",name:"MultiViewCalendar",category:"web",description:"Multi-view calendar.",depends:["core","selectable","calendar"]};!function(e,t){var a=window.kendo,n=a.calendar,l=a.support,r=n.isInRange,i=n.toDateObject,s=n.createDate,o=n.isEqualDate,c=n.getToday,u=a.keys,d=a.ui,_=d.Widget,f=d.Selectable,v=a.template,g=l.mobileOS,h=".kendoMultiViewCalendar",b="click",p="id",m="month",w=".",k="century",D="change",C="navigate",A="value",S="k-focus",x="k-selected",y="k-range-mid",V="k-range-split-end",F="k-range-split-start",T="k-range-start",M="k-range-end",Y="k-hover",R="k-disabled",E="k-calendar-nav-today",B="k-out-of-range",N="k-calendar-view",W="td:has(.k-link):not(.k-out-of-range)",I="td:has(.k-link):not(.k-disabled):not(.k-out-of-range)",P="blur",$="focus",O=l.touch?"touchstart":"mouseenter",H=l.touch?"touchend"+h+" touchmove"+h:"mouseleave"+h,U="_prevArrow",j="_nextArrow",G="range",q="single",z="multiple",K="table",L="tbody",Q="thead",J="th",X="role",Z="none",ee="aria-selected",te="aria-disabled",ae="aria-label",ne="aria-activedescendant",le=Date,re={month:0,year:1,decade:2,century:3},ie=_.extend({init:function(e,t){var n=this;_.fn.init.call(n,e,t),n.calendar=t.calendar,n.userEvents=new a.UserEvents(n.element,{global:!0,allowSelection:!0,filter:n.options.filter,tap:n._tap.bind(n),touchAction:Z})},events:[D],options:{name:"RangeSelectable",filter:">*",inputSelectors:"input,a,textarea,.k-multiselect-wrap,select,button,.k-button>span,.k-button>img,span.k-icon.k-i-caret-alt-down,span.k-icon.k-i-caret-alt-up,span.k-svg-icon.k-svg-i-caret-alt-down,span.k-svg-icon.k-svg-i-caret-alt-up",multiple:!1,dragToSelect:!0,relatedTarget:e.noop},destroy:function(){var e=this;_.fn.destroy.call(e),e.userEvents.destroy(),e.calendar=null,e._lastActive=e.element=e.userEvents=e._start=e._end=null},_allowSelection:function(t){return!e(t).is(this.options.inputSelectors)||(this.userEvents.cancel(),!1)},start:function(e){if(e===t)return this._start;e.addClass(T+" "+x).attr(ee,!0),this._start=e},end:function(e){if(e===t)return this._start;e.addClass(M+" "+x).attr(ee,!0),this._end=e},mid:function(t){var a=this.element.find("table.k-month");t.addClass(y).attr(ee,!0),a.each((function(){var t=e(this),a=t.find(I).last(),n=t.find(I).first();a.hasClass(y)&&a.addClass(V),n.hasClass(y)&&n.addClass(F)}))},clear:function(e){this.element.find(W).removeClass(M+" "+x+" "+T+" "+y+" "+V+" "+F).removeAttr(ee),e&&(this._start=this._end=null)},selectFrom:function(t){var a,n,l=this;a=l.element.find(W),n=e.inArray(e(t)[0],a),l.clear(),l.start(t),a=a.filter((function(e){return e>n})),l.mid(a)},selectTo:function(t){var a,n,l=this;a=l.element.find(W),n=e.inArray(e(t)[0],a),l.clear(),a=a.filter((function(e){return e<n})),l.mid(a),l.end(e(t))},range:function(a,n){var l,r,i,s,o=this;if(a===t)return{start:o._start,end:o._end};l=o.element.find(W),r=e.inArray(e(a)[0],l),-1==(i=e.inArray(e(n)[0],l))&&(i=l.length),r>i&&(s=n,n=a,a=s,s=r,r=i,i=s),o.clear(),a.addClass(T+" "+x).attr(ee,!0),o._start=a,l=l.filter((function(e){return e>r&&e<i})),o.mid(l),n?o.end(e(n)):o._useEnd=!0},change:function(){this.trigger(D)},_clearFlags:function(){this._useStart=this._useEnd=!1},_tap:function(t){var a,n,l,r=e(t.target),s=this.calendar.selectRange()||{},o=s.start,c=s.end,u=this,d=i(e(r).find("a"));if(u._lastActive=r,!o||+o>+d)return u.clear(!0),u.start(r),u._clearFlags(),void u.trigger(D);if(o&&!c)return a=u.element.find(W),n=e.inArray(e(u._start)[0],a),l=e.inArray(e(r)[0],a),o&&(u._useStart=!0),a=a.filter((function(e){return e>n&&e<l})),u.mid(a),u.end(e(r)),u.trigger(D),void u._clearFlags();if(o&&c){if(r.hasClass(y))return u._toggling?u.range(u._start,r):u.range(r,u._end),u._toggling=!u._toggling,u.trigger(D),void u._clearFlags();u._toggling=!1,u._end=null,u.clear(),u.start(r),u.trigger(D),u._clearFlags()}}}),se=_.extend({init:function(t,l){var r,i,s=this;_.fn.init.call(s,t,l),t=s.wrapper=s.element,l=s.options,s.options.disableDates=n.disabled(s.options.disableDates),i=a.getCulture(l.culture),l.format=a._extractFormat(l.format||i.calendars.standard.patterns.d),s._templates(),s._header(),s._wrapper(),(r=t.addClass("k-widget k-calendar k-calendar-range"+(l.weekNumber?" k-week-number":"")).on("keydown"+h,w+N,s._move.bind(s)).on($+h,w+N,s._focus.bind(s)).on(P+h,w+N,s._blur.bind(s)).on(b+h,I,(function(t){var a=t.currentTarget.firstChild;-1!=a.href.indexOf("#")&&t.preventDefault(),s._click(e(a))})).on(O+h,I,s._mouseEnter.bind(s)).on(H,I,(function(){e(this).removeClass(Y)})).attr(p))||(r=a.guid()),s._cellID=r+"_cell_selected",s._calendarWidth=s.element.width(),s._range=l.range,s._initViews({viewName:l.start,value:l.value}),s._selectable(),s._footer(s.footer),s._selectDates=[],s.value(l.value),s._addSelectedCellsToArray(),l.selectable==z&&(s._selectDates=l.selectDates.length?l.selectDates:s._selectDates,s._restoreSelection()),l.selectable==G&&s.selectRange(s._range),a.notify(s)},options:{name:"MultiViewCalendar",value:null,min:new le(1900,0,1),max:new le(2099,11,31),dates:[],disableDates:null,culture:"",footer:"",format:"",month:{},range:{start:null,end:null},weekNumber:!1,views:2,showViewHeader:!1,selectable:q,selectDates:[],start:m,depth:m,messages:{weekColumnHeader:""}},events:[D,C],setOptions:function(e){var t=this;n.normalize(e),e.disableDates=n.disabled(e.disableDates),_.fn.setOptions.call(t,e),t._selectable(),t._templates(),t._footer(t.footer);for(var a=0;a<t._views.length;a++)t._views[a].off(h).remove();t._initViews({viewName:e.start,value:e.value}),t._range=e.range||{start:null,end:null},t._restoreSelection()},destroy:function(){var e=this;if(e._cell=null,e._currentView=null,e._current=null,e._views)for(var t=0;t<e._views.length;t++)e._views[t].off(h).remove();e.element.off(h),e.header&&(e.header.off(h),e._title=null,e.header=null),e.selectable&&(e.selectable.destroy(),e.selectable=null),e.rangeSelectable&&(e.rangeSelectable.destroy(),e.rangeSelectable=null),e._today&&a.destroy(e._today.off(h)),e._views=null,_.fn.destroy.call(e)},current:function(){return this._current},focus:function(){this.tablesWrapper.trigger("focus")},min:function(e){return this._option("min",e)},max:function(e){return this._option("max",e)},view:function(){return this._currentView},navigateToPast:function(){this._navigate(U,-1)},navigateToFuture:function(){this._navigate(j,1)},navigateUp:function(){var e=this,t=e._index;e._title.hasClass(R)||e.navigate(e._current,++t)},navigateDown:function(e){var t=this,a=t._index,n=t.options.depth;e&&(a!==re[n]?t.navigate(e,--a):o(t._value,t._current)&&o(t._value,e)||(t.value(e),t.trigger(D)))},navigate:function(e,a){a=isNaN(a)?n.views[n.viewsEnum[a]]:n.views[a];var l=this,r=l.options,i=r.min,s=r.max;l._current=e||(e=new le(+n.restrictValue(e,i,s))),a===t&&(a=l._currentView),l._currentView=a;for(var o=0;o<l._views.length;o++)l._views[o].off(h).remove();l._initViews({viewName:a.name,value:e}),l._restoreSelection()},_aria:function(){var e=this.tablesWrapper.find(K),t=e.first().find(Q).add(e.find(L)),a=this._currentView.name;e.removeAttr("tabindex"),e.attr({role:Z}),t.attr({role:"rowgroup"}),a===m&&this._ariaMonth()},_ariaMonth:function(){var t=this.tablesWrapper.find(K),a=t.first().find(Q).add(t.find(L)).find("tr"),n=t.not(":eq(0)").find("thead tr"),l=n.find(J),r=t.first().find("thead th"),i=t.find("tbody th"),s=t.find(w+B);r.attr({role:"columnheader"}),i.attr({role:"rowheader"}),s.removeAttr(X),n.removeAttr(X),l.removeAttr(ae).removeAttr(X),a.each((function(t,n){var l,r=e(n),i=r.find(w+B).length,s=[];1===t?r.children().filter(w+B).attr({"aria-hidden":"false",role:"gridcell"}):7===i?(r.removeAttr(X),r.find(J).removeAttr(X)):i>0&&i<7&&r.children().not(J).first().hasClass(B)&&(r.find(J).removeAttr(X),(l=a.eq(t-1)).attr(X)&&l.attr(X)!==Z||(l=a.eq(t-2)),r.children().not(J).each((function(a,n){var l,r=e(n);r.hasClass(B)||(l="owned_"+t+"_"+a,r.attr(p,l),s.push(l))})),r.removeAttr(X),l.attr("aria-owns",s.join(" ")))}))},_updateHeader:function(){var t,n,l,i,s=this,o=s._currentView,c=s._title,u=s._firstViewValue,d=s.options,_=s._visibleRange(),f=d.culture,v=d.min,g=d.max;"decade"===o.name||o.name===k?(t=ce(u,o.name,d.views-1),r(t,v,g)||(t=g),c.html('<span class="k-button-text">'+o.first(u).getFullYear()+" - "+o.last(t).getFullYear()+"</span>")):c.html('<span class="k-button-text">'+o.title(u,v,g,f)+" - "+o.title(ce(u,o.name,d.views-1),v,g,f)+"</span>"),n=o.name===k,c.toggleClass(R,n).attr(te,n),l=o.compare(_.start,s.options.min)<1,i=o.compare(_.end,s.options.max)>-1,l&&i?s._navContainer&&(s._navContainer.remove(),s._navContainer=null):(s._navContainer||(s._navContainer=e(`<span class="k-calendar-nav k-hstack"><a tabindex="-1" href="#" role="button" class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button k-calendar-prev-view" aria-label="Previous">${a.ui.icon({icon:"chevron-left",iconClass:"k-button-icon"})}</a><a tabindex="-1" href="#" role="button" class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button k-calendar-next-view" aria-label="Next">${a.ui.icon({icon:"chevron-right",iconClass:"k-button-icon"})}</a></span>`).appendTo(s.header),s._prevArrow=s._navContainer.find(".k-calendar-prev-view"),s._nextArrow=s._navContainer.find(".k-calendar-next-view")),s._prevArrow.toggleClass(R,l).attr(te,l),s._prevArrow.hasClass(R)&&s._prevArrow.removeClass(Y),s._nextArrow.toggleClass(R,i).attr(te,i),s._nextArrow.hasClass(R)&&s._nextArrow.removeClass(Y))},_mouseEnter:function(t){var a,n,l=this,r=e(t.currentTarget);if(r.addClass(Y),l.rangeSelectable&&l._currentView.name===m&&(a=l.selectRange()).start&&!a.end){if(l._dateInViews(l.selectRange().start)){if(n=l.element.find(l.rangeSelectable.options.filter),e.inArray(e(l.rangeSelectable._start)[0],n)>e.inArray(e(r)[0],n))return;l.rangeSelectable.range(l.rangeSelectable._start,r)}else+i(l.element.find(W).first().find("a"))>+a.start&&l.rangeSelectable.selectTo(r);l.rangeSelectable._end=null}},_move:function(n){var l,o,c,d,_,f,v=this,g=v.options,h=n.keyCode,b=v._index,p=g.min,k=g.max,A=v.element.find(".k-focus"),y=A.closest(K),V=new le(+(v._current||i(A.find("a")))),F=a.support.isRtl(v.wrapper),T=!1;if(h==u.RIGHT&&!F||h==u.LEFT&&F?(l=1,o=!0):h==u.LEFT&&!F||h==u.RIGHT&&F?(l=-1,o=!0):h==u.UP?(l=0===b?-7:-4,o=!0):h==u.DOWN?(l=0===b?7:4,o=!0):h==u.SPACEBAR?(l=0,o=!0):h==u.HOME?(o=!0,(c=y.find(I).eq(0)).hasClass(S)?(y=y.prev()).length?v._focusCell(y.find(I).eq(0)):(T=v._prevArrow&&!v._prevArrow.hasClass(R),v._navigate(U,-1),v._focusCell(v.element.find(K).first().find(I).first())):v._focusCell(c)):h==u.END?(o=!0,(c=y.find(I).last()).hasClass(S)?(y=y.next()).length?v._focusCell(y.find(I).last()):(T=v._nextArrow&&!v._nextArrow.hasClass(R),v._navigate(j,1),v._focusCell(v.element.find(K).last().find(I).last())):v._focusCell(c)):84===h&&(v._todayClick(n),o=!0),n.ctrlKey||n.metaKey)h==u.RIGHT&&!F||h==u.LEFT&&F?(T=v._nextArrow&&!v._nextArrow.hasClass(R),v._navigate(j,1),o=!0):h==u.LEFT&&!F||h==u.RIGHT&&F?(T=v._prevArrow&&!v._prevArrow.hasClass(R),v._navigate(U,-1),o=!0):h==u.UP?(T=!v._title.hasClass(R),v.navigateUp(),v._focusCell(v._cellByDate(v._current)),o=!0):h==u.DOWN?(v._currentView.name===m?v.value(V):(v.navigateDown(V),v._focusCell(v._cellByDate(v._current)),T=!0),o=!0):h!=u.ENTER&&h!=u.SPACEBAR||g.selectable===z&&v._toggleSelection(n);else if(n.shiftKey&&g.selectable!==q){if(l!==t){if(v._currentView.setDate(V,l),v._currentView.name!==m)return;g.disableDates(V)&&(V=v._nextNavigatable(V,l)),p=s(p.getFullYear(),p.getMonth(),p.getDate()),r(V,p,k)&&(v._dateInViews(V)||(l>0?(T=v._nextArrow&&!v._nextArrow.hasClass(R),v._navigate(j,1)):(T=v._prevArrow&&!v._prevArrow.hasClass(R),v._navigate(U,-1))),c=v._cellByDate(V),v._current=V,v.selectable&&(v._selectRange(i((v.selectable._lastActive||A).find("a")),V),v.selectable._lastActive||(v.selectable._lastActive=A),v.trigger(D),v._focusCell(c)),v.rangeSelectable&&(d=i((v.rangeSelectable._lastActive||A).find("a")),v._dateInViews(d)?(v.rangeSelectable._end&&v.rangeSelectable._end.is(".k-focus")?v.rangeSelectable._lastActive=v.rangeSelectable._start:v.rangeSelectable._lastActive=v._cellByDate(d),v.rangeSelectable.range(v.rangeSelectable._lastActive,c)):+d>+V?(v.rangeSelectable._end=v.rangeSelectable._lastActive,v.rangeSelectable.selectFrom(c)):v.rangeSelectable.selectTo(c),v.rangeSelectable.change(),v._focusCell(c)))}}else h==u.ENTER||h==u.SPACEBAR?(v._currentView.name===m?(f=!A.hasClass(x)||v.element.find(w+x).length>1,v.value(V),v.selectable&&(v.selectable._lastActive=v._cellByDate(V),f&&v.selectable.trigger(D,{event:n})),v.rangeSelectable&&v.rangeSelectable.change()):v._click(e(v._cell[0].firstChild)),o=!0):h!=u.PAGEUP&&h!=u.PAGEDOWN||(o=!0,_=y.find(I).index(A),(y=h==u.PAGEUP?y.prev():y.next()).length||(h==u.PAGEUP?(T=v._prevArrow&&!v._prevArrow.hasClass(R),v.navigateToPast(),y=v.element.find(K).first()):(T=v._nextArrow&&!v._nextArrow.hasClass(R),v.navigateToFuture(),y=v.element.find(K).last())),(c=y.find(I).eq(_)).length?v._focusCell(c):v._focusCell(y.find(I).last())),l&&(v._currentView.setDate(V,l),p=s(p.getFullYear(),p.getMonth(),p.getDate()),r(V,p,k)&&(v.selectable&&g.disableDates(V)&&(V=v._nextNavigatable(V,l)),v._dateInViews(V)||(l>0?(T=v._nextArrow&&!v._nextArrow.hasClass(R),v._navigate(j,1)):(T=v._prevArrow&&!v._prevArrow.hasClass(R),v._navigate(j,-1))),c=v._cellByDate(V),v._current=V,v._focusCell(c)));return T&&v.trigger(C),o&&n.preventDefault(),v._current},_visualizeSelectedDatesInView:function(){var t,n=this,l={};e.each(n._selectDates,(function(e,t){l[a.calendar.views[0].toDateString(t)]=t})),n.selectable.clear(),(t=n.element.find(K).find(W).filter((function(t,n){return l[e(n.firstChild).attr(a.attr(A))]}))).length>0&&n.selectable._selectElement(t,!0)},_nextNavigatable:function(e,t){var a=this,n=!0,l=a._currentView,i=a.options.min,s=a.options.max,o=a.options.disableDates,c=new Date(e.getTime());for(l.setDate(c,-t);n;){if(l.setDate(e,t),!r(e,i,s)){e=c;break}n=o(e)}return e},_toggleSelection:function(t){var a=this;a.selectable._lastActive=e(a._cell[0]),e(a._cell[0]).hasClass(x)?a.selectable._unselect(e(a._cell[0])):a.selectable.value(e(a._cell[0])),a.selectable.trigger(D,{event:t})},_option:function(e,n){var l=this,r=l.options,i=l._value||l._current;if(n===t)return r[e];(n=a.parseDate(n,r.format,r.culture))&&(r[e]=new le(+n),("min"===e?n>i:i>n)&&(l._value=null),l.navigate(l._value),l._toggle())},_cellByDate:function(t){return t instanceof Date&&(t=this._currentView.toDateString(t)),this.element.find(K).find("td:not(.k-other-month)").filter((function(){return e(this.firstChild).attr(a.attr(A))===t}))},_selectable:function(){var e=this,t=e.options.selectable;e.selectable&&(e.selectable.destroy(),e.selectable=null),e.rangeSelectable&&(e.rangeSelectable.destroy(),e.rangeSelectable=null),t.toLowerCase()===G?e.rangeSelectable=new ie(e.wrapper,{calendar:e,filter:"table.k-month "+I,change:e._rangeSelection.bind(e)}):e.selectable=new f(e.wrapper,{aria:!0,dragToSelect:!1,inputSelectors:"input,textarea,.k-multiselect-wrap,select,button,.k-button>span,.k-button>img,span.k-icon.k-i-caret-alt-down,span.k-icon.k-i-caret-alt-up,span.k-svg-icon.k-svg-i-caret-alt-down,span.k-svg-icon.k-svg-i-caret-alt-up",multiple:f.parseOptions(t).multiple,filter:"table.k-content "+I,change:e._selection.bind(e),relatedTarget:e._onRelatedTarget.bind(e),unselect:e._unselecting.bind(e)})},_onRelatedTarget:function(e){this.selectable.options.multiple&&e.is(I)&&e.length>1&&this._focusCell(e.first(),!0)},_getFirstViewDate:function(e){var t,a,n,l=this,r=l.options,i=[],s=new Date(+l._current);for(n=0;n<r.views;n++){if(t=e.first(s),+(a=e.last(s))>+r.max){+t<=+r.max&&i.push({start:t,end:new Date(+r.max)});break}i.push({start:t,end:a}),s=new Date(+ce(a,e.name,1))}for(s=new Date(+l._current),n=0;n<r.views;n++){if(t=e.first(s),a=e.last(s),+t<+r.min){+a>=+r.min&&i.push({start:new Date(+r.min),end:a});break}i.push({start:t,end:a}),s=new Date(+ce(t,e.name,-1))}for(t=i[0].start,n=0;n<r.views+1&&i[n];n++)+t>+i[n].start&&(t=i[n].start);return new Date(+t)},_canRenderNextView:function(e){var t=e.getFullYear(),a=e.getMonth(),n=e.getDate(),l=this.options.max,r=l.getFullYear(),i=l.getMonth();return t<r||(t===r&&a<i||(t===r&&a===i&&n<l.getDate()||t===r&&a===i&&n===l.getDate()))},_initViews:function(t){var a,l=this,r=l.options,i=n.viewsEnum[t.viewName],s=n.views[i];l._current=new le(+n.restrictValue(t.value,r.min,r.max)),l._views=[],l._index=i,(a=l._getFirstViewDate(s)).setDate(1),l._firstViewValue=new Date(+a);for(var o=0;o<r.views&&((a=o?ce(a,s.name,1):a).setDate(1),l._canRenderNextView(a));o++)l._table=e(s.content(e.extend({min:r.min,max:r.max,date:a,url:r.url,dates:r.dates,format:r.format,culture:r.culture,disableDates:r.disableDates,showHeader:r.showViewHeader,isWeekColumnVisible:r.weekNumber,otherMonth:r.otherMonth,messages:r.messages,contentClasses:"k-calendar-table k-content"},l[s.name]))),l._table.appendTo(l.tablesWrapper).addClass("k-"+s.name),l._views.push(l._table);l._currentView=s,l.tablesWrapper.attr("class","k-calendar-view k-calendar-"+s.name+"view k-hstack k-align-items-start k-justify-content-center"),l._updateHeader(),l._aria()},_rangeSelection:function(e){var t,a,n=this,l=e.sender.range(),r=e.sender._useEnd,s=e.sender._useStart,o=n.selectRange()||{};l.start&&(t=i(l.start.find("a"))),l.end&&(a=i(l.end.find("a"))),n._range={start:s?o.start:t,end:r?o.end:a},n._preventChange||n.trigger(D)},_selection:function(t){var a,n=this,l=t.sender.value(),r=t.event,s=e(r&&r.currentTarget),o=s.is("td");n.options.selectable===q&&n._validateValue(l[0]?i(l.first().find("a")):t.sender._lastActive?i(t.sender._lastActive.find("a")):n.value()),n.options.selectable==z&&(o&&(a=i(s.find("a"))),r&&r.ctrlKey?o?s.hasClass(x)?n._selectDates.push(a):n._deselect(a):(n.element.find("table "+I).each((function(t,a){var l=i(e(a).find("a"));n._deselect(l)})),n._addSelectedCellsToArray()):r&&r.shiftKey?n._selectRange(i(t.sender._lastActive?t.sender._lastActive.find("a"):l.first().find("a")),a):o?(n._selectDates=[],n._selectDates.push(a)):(n._selectDates=[],n._addSelectedCellsToArray())),n._preventChange||n.trigger(D)},_addSelectedCellsToArray:function(){var t=this;t.selectable&&t.selectable.value().each((function(a,n){var l=i(e(n.firstChild));t.options.disableDates(l)||t._selectDates.push(l)}))},_deselect:function(e){var t=this._selectDates.map(Number).indexOf(+e);-1!=t&&this._selectDates.splice(t,1)},_unselecting:function(e){var t=e.element;this.options.selectable===q&&!g&&t.hasClass(S)&&e.preventDefault()},_visibleRange:function(){var e=this.element.find(".k-calendar-view table");return{start:i(e.first().find(W).first().find("a")),end:i(e.last().find(W).last().find("a"))}},_dateInViews:function(e){var t=this.element.find(".k-calendar-view table"),a=i(t.first().find(W).first().find("a")),n=i(t.last().find(W).last().find("a"));return+(e=new Date(e.toDateString()))<=+n&&+e>=+a},_fillRange:function(e,t){var l,r=this;r._selectDates=[],l=function(e,t){if(+t<+e){var l=+e;n.views[0].setDate(e,t),n.views[0].setDate(t,new Date(l))}var r=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),i=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return Math.ceil((+i-+r)/a.date.MS_PER_DAY)}(e,t),function(e,t,a,n){for(var l=0;l<=t;l++){var r=new Date(a.getTime());n(r=new Date(r.setDate(r.getDate()+l)))||e.push(r)}}(r._selectDates,l,e,r.options.disableDates)},_selectRange:function(e,t){var a;+t<+e&&(a=t,t=e,e=a),this._fillRange(e,t),this._visualizeSelectedDatesInView()},_header:function(){var t,n=this,l=n.element,r=l.find(".k-calendar-header");r.length||(r=e(`<div class="k-calendar-header k-hstack"><a id="calendar-title" tabindex="-1" href="#" role="button" class="k-calendar-title k-title k-button k-button-md k-rounded-md k-button-flat k-button-flat-base" aria-live="polite"></a><span class="k-spacer"></span><span class="k-calendar-nav k-hstack"><a tabindex="-1" href="#" role="button" class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button k-calendar-prev-view" aria-label="Previous">${a.ui.icon({icon:"chevron-left",iconClass:"k-button-icon"})}</a><a tabindex="-1" href="#" role="button" class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button k-calendar-next-view" aria-label="Next">${a.ui.icon({icon:"chevron-right",iconClass:"k-button-icon"})}</a></span></div>`).prependTo(l)),n.header=r,r.on(O+h+" "+H+" "+$+h+" "+P+h,".k-button",oe).on(b,(function(){return!1})).on(b+h,".k-button.k-calendar-title",n._calendarTitleClick.bind(n)).on(b+h,".k-button.k-calendar-prev-view",n._prevViewClick.bind(n)).on(b+h,".k-button.k-calendar-next-view",n._nextViewClick.bind(n)),t=r.find(".k-button"),n._title=t.filter(".k-calendar-title"),n._navContainer=r.find(".k-calendar-nav"),n._prevArrow=t.filter(".k-calendar-prev-view"),n._nextArrow=t.filter(".k-calendar-next-view")},_calendarTitleClick:function(){this.navigateUp(),this.focus(),this.trigger(C)},_prevViewClick:function(e){e.preventDefault(),this.navigateToPast(),this.focus(),this.trigger(C)},_nextViewClick:function(e){e.preventDefault(),this.navigateToFuture(),this.focus(),this.trigger(C)},_wrapper:function(){this.tablesWrapper=e('<div tabindex="0" role="grid" class="k-calendar-view" aria-labelledby="calendar-title" />').insertAfter(this.element[0].firstChild)},_templates:function(){var e=this.options.month,t=e.content,n=e.weekNumber,l=e.empty;this.month={content:v((e=>`<td class="${e.cssClass}" role="gridcell"><a tabindex="-1" class="k-link${e.linkClass}" href="${e.url}" ${a.attr(A)}="${e.dateString}" title="${e.title}">${t?a.template(t,{useWithBlock:!!t})(e):e.value}</a></td>`),{useWithBlock:!!t}),empty:v((e=>`<td role="gridcell"${l?">":' class="k-calendar-td k-out-of-range">'}${l?a.template(l,{useWithBlock:!!l})(e):"<a class='k-link'></a>"}</td>`),{useWithBlock:!!l}),weekNumber:v((e=>`<th class="k-calenar-td k-alt">${n?a.template(n,{useWithBlock:!!n})(e):e.weekNumber}</th>`),{useWithBlock:!!n})}},_footer:function(){var t=this,n=t.options,l=!1!==n.footer?a.template(t.options.footer||(e=>a.toString(e,"D",n.culture)),{useWithBlock:!1}):null,r=c(),i=t.element,s=i.find(".k-footer");if(!l)return t._toggle(!1),void s.hide();s[0]||(s=e('<div class="k-footer">\n                    <button tabindex="-1" class="k-calendar-nav-today k-flex k-button k-button-md k-button-flat k-button-flat-primary k-rounded-md">\n                        <span class="k-button-text"></span>\n                    </button>\n                </div>').appendTo(i)),t._today=s.show().find(".k-button-flat-primary").attr("title",a.toString(r,"D",t.options.culture)),s.find(".k-button-text").html(l(r)),t._toggle()},_navigate:function(e,t){var a,l=this,r=l._index+1,i=new le(+l._current),s=new le(+l._current);e=l[e],a=l._cellByDate(i).closest(K).index(),t>0?a=1-a:a+=1,e&&e.hasClass(R)||(r>3?i.setFullYear(i.getFullYear()+t*a*100):n.views[r].setDate(i,t*a),l.navigate(i),l._dateInViews(s)?(l._focusCell(l._cellByDate(s)),l._current=s):(r>3?s.setFullYear(s.getFullYear()+100*t):n.views[r].setDate(s,t),l._focusCell(l._cellByDate(s)),l._current=s))},_toggle:function(e){var a=this,n=a.options,l=n.selectable!==G&&a.options.disableDates(c()),i=a._today;e===t&&(e=r(c(),n.min,n.max)),i&&(i.off(b+h),e&&!l?i.addClass(E).removeClass(R).on(b+h,(function(e){a._todayClick(e),a.focus()})):i.removeClass(E).addClass(R).on(b+h,(function(e){e.preventDefault()})))},_click:function(e){var t=this,l=t.options,r=new Date(+t._current),s=i(e);a.date.adjustDST(s,0),t._currentView.setDate(r,s),t._current=s,t._currentView.name!==l.depth?(t.navigateDown(n.restrictValue(r,l.min,l.max)),t._focusCell(t._cellByDate(t._current)),t.trigger(C)):t._focusCell(e.closest("td")),t.focus()},_blur:function(){this._cell&&this._cell.removeClass(S)},_focus:function(){var t=this._cell;t&&e.contains(this.tablesWrapper[0],t[0])||(t=this._current&&this._dateInViews(this._current)?this._cellByDate(this._current):this.tablesWrapper.find(I).first()),this._focusCell(t)},_focusCell:function(e){var t=this,a=t._cellID;t._cell&&t._cell.length&&(t._cell[0].removeAttribute(ae),t._cell.removeClass(S),t.tablesWrapper.removeAttr(ne),t._cell.attr(p)===a&&t._cell[0].removeAttribute(p)),t._cell=e,e.attr(p)?t.tablesWrapper.attr(ne,e.attr(p)):a&&(e.attr(p,a),t.tablesWrapper.attr(ne,a)),e.addClass(S),e.length&&t._currentView.name==m&&(t._current=i(e.find("a")))},_todayClick:function(e){var t=this,a=t.options.disableDates,n=c(),l=!1;e.preventDefault(),a(n)||(t._value=n,t.options.selectable===z&&(t._selectDates=[n]),t.options.selectable===G&&(t.rangeSelectable.clear(!0),t._range={start:n,end:null}),t._currentView.name==m&&t._dateInViews(n)||(l=!0),t.navigate(n,t.options.depth),t.options.selectable===q&&(t.selectable._lastActive=null),l&&t.trigger(C),t.trigger(D))},_validateValue:function(e){var n=this,l=n.options,i=l.min,s=l.max;return null!==(e=a.parseDate(e,l.format,l.culture))&&(e=new le(+e),r(e,i,s)||(e=null)),null!==e&&n.options.disableDates(new Date(+e))?n._value===t&&(n._value=null):n._value=e,n._value},_updateAria:function(e,t){var n,l=this,r=l._cellByDate(t||l.current()),i=l.view().valueType(),s=t||l.current();return l._focusCell(r),n=i===m?a.toString(s,"MMMM"):"date"===i?a.toString(s,"D"):r.text(),r.attr(ae,e({current:s,valueType:i,text:n})),r.attr(p)},clearSelection:function(){var e=this;e.selectable&&e.element.find(w+x).removeClass(x).removeAttr(ee),e.rangeSelectable&&e.rangeSelectable.clear(!0)},_restoreSelection:function(){var e,t=this,a=t.options.selectable;if(t._currentView.name===t.options.depth){if(t._preventChange=!0,a===G){if(!(e=t.selectRange())||!e.start)return void(t._preventChange=!1);t.selectRange(e)}a===q&&t.value()&&t.selectable.value(t._cellByDate(t.value())),a===z&&t._visualizeSelectedDatesInView(),t._preventChange=!1}},value:function(e){var a,n=this;if(e===t)return n._value;e=n._validateValue(e),n.clearSelection(),e&&!n._dateInViews(e)&&n.navigate(e),null!==e&&n._currentView.name===m&&(a=n._cellByDate(e),n.selectable&&n.selectable.value(a),n.rangeSelectable&&(n.rangeSelectable.start(a),n.rangeSelectable._lastActive=a))},selectDates:function(a){var n,l,r=this;if(a===t)return r._selectDates;l=a.map((function(e){return e.getTime()})).filter((function(e,t,a){return a.indexOf(e)===t})).map((function(e){return new Date(e)})),n=e.grep(l,(function(e){if(e)return+r._validateValue(new Date(e.setHours(0,0,0,0)))==+e})),r._selectDates=n.length>0?n:0===l.length?l:r._selectDates,r._visualizeSelectedDatesInView()},selectRange:function(e){var a,n,l,r=this;if(e===t)return r._range;r._range=e,e.start&&(l=r._visibleRange(),a=r._dateInViews(e.start),n=e.end&&r._dateInViews(e.end),!a&&n&&r.rangeSelectable.selectTo(r._cellByDate(e.end)),a&&n&&r.rangeSelectable.range(r._cellByDate(e.start),r._cellByDate(e.end)),e.end&&a&&!n&&r.rangeSelectable.selectFrom(r._cellByDate(e.start)),!e.end&&a&&r.rangeSelectable.start(r._cellByDate(e.start)),+l.start>+e.start&&+l.end<+e.end&&r.rangeSelectable.mid(r.element.find(I)))}});function oe(t){e(this).hasClass("k-disabled")||e(this).toggleClass(Y,O.indexOf(t.type)>-1||t.type==$)}function ce(e,t,a){var l;return t===m?((l=new le(e.getFullYear(),e.getMonth()+a,e.getDate())).setFullYear(e.getFullYear()),(Math.abs(l.getMonth()-e.getMonth())>a||a>10)&&(l.setMonth(e.getMonth()+a),l=n.views[0].last(l)),l):"year"===t?((l=new le(1,e.getMonth(),e.getDate())).setFullYear(e.getFullYear()+a),Math.abs(l.getFullYear()-e.getFullYear())>a&&((l=new le(1,e.getMonth(),1)).setFullYear(e.getFullYear()+a),l=n.views[1].last(l)),l):"decade"===t?((l=new le(1,e.getMonth(),e.getDate())).setFullYear(e.getFullYear()+10*a),Math.abs(l.getFullYear()-e.getFullYear())>10*a&&((l=new le(1,e.getMonth(),1)).setFullYear(e.getFullYear()+10*a),l=n.views[2].last(l)),l):"century"===t?((l=new le(1,e.getMonth(),e.getDate())).setFullYear(e.getFullYear()+100*a),Math.abs(l.getFullYear()-e.getFullYear())>100*a&&((l=new le(1,e.getMonth(),1)).setFullYear(e.getFullYear()+100*a),l=n.views[3].last(l)),l):void 0}a.ui.plugin(se)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.multiviewcalendar.js.map
