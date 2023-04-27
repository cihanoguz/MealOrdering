/**
 * Kendo UI v2023.1.314 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.listview.js";import"./kendo.dropdownlist.js";import"./kendo.upload.js";import"./kendo.breadcrumb.js";import"./kendo.icons.js";var __meta__={id:"filebrowser",name:"FileBrowser",category:"web",description:"",hidden:!0,depends:["selectable","listview","dropdownlist","upload","breadcrumb","icons"]};!function(e,t){var i=window.kendo,a=i.ui.Widget,n=e.isPlainObject,o=e.extend,r=i.support.placeholder,s=i.isFunction,l=/(^\/|\/$)/g,d="change",c="apply",u="error",p="click",f=".kendoFileBrowser",h=".kendoSearchBox",m="name",v="size",k="type",b={field:k,dir:"asc"},w=i.template((({text:e})=>`<div class="k-listview-item k-listview-item-empty"><span class="k-file-preview"><span class="k-file-icon k-icon k-i-none"></span></span><span class="k-file-name">${e}</span></div>`)),g=({showCreate:e,showUpload:t,showDelete:a,messages:n})=>'<div class="k-widget k-filebrowser-toolbar k-toolbar k-toolbar-md k-floatwrap">'+(e?'<button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button">'+i.ui.icon({icon:"folder-add",iconClass:"k-button-icon"})+"</button>":"")+`${t?(({messages:e})=>'<div class="k-upload k-upload-button-wrap"><div class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-upload-button">'+i.ui.icon({icon:"plus",iconClass:"k-button-icon"})+`<span class="k-button-text">${e.uploadFile}</span></div><input type="file" name="file" /></div>`)({messages:n}):""}`+(a?'<button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-disabled">'+i.ui.icon({icon:"x",iconClass:"k-button-icon"})+"</button>":"")+'<div class="k-tiles-arrange">'+`<label>${n.orderBy}: <select></select></label></div><span class="k-toolbar-spacer"></span><input data-role="searchbox" /></div>`;function _(e,i){return e!==t&&e.match(/\/$/)||(e=(e||"")+"/"),e+i}o(!0,i.data,{schemas:{filebrowser:{data:function(e){return e.items||e||[]},model:{id:"name",fields:{name:"name",size:"size",type:"type"}}}}}),o(!0,i.data,{transports:{filebrowser:i.data.RemoteTransport.extend({init:function(t){i.data.RemoteTransport.fn.init.call(this,e.extend(!0,{},this.options,t))},_call:function(t,a){a.data=e.extend({},a.data,{path:this.options.path()}),s(this.options[t])?this.options[t].call(this,a):i.data.RemoteTransport.fn[t].call(this,a)},read:function(e){this._call("read",e)},create:function(e){this._call("create",e)},destroy:function(e){this._call("destroy",e)},update:function(){},options:{read:{type:"POST"},update:{type:"POST"},create:{type:"POST"},destroy:{type:"POST"}}})}});var y=a.extend({init:function(e,t){var i=this;t=t||{},a.fn.init.call(i,e,t),i.element.addClass("k-filebrowser"),i.element.on(p+f,".k-filebrowser-toolbar button:not(.k-disabled):has(.k-i-x,.k-svg-i-x)",i._deleteClick.bind(i)).on(p+f,".k-filebrowser-toolbar button:not(.k-disabled):has(.k-i-folder-add,.k-svg-i-folder-add)",i._addClick.bind(i)).on("keydown"+f,".k-listview-item.k-selected input",i._directoryKeyDown.bind(i)).on("blur"+f,".k-listview-item.k-selected input",i._directoryBlur.bind(i)),i._dataSource(),i.refresh(),i.path(i.options.path)},options:{name:"FileBrowser",messages:{uploadFile:"Upload",orderBy:"Arrange by",orderByName:"Name",orderBySize:"Size",directoryNotFound:"A directory with this name was not found.",emptyFolder:"Empty Folder",deleteFile:'Are you sure you want to delete "{0}"?',invalidFileType:'The selected file "{0}" is not valid. Supported file types are {1}.',overwriteFile:'A file with name "{0}" already exists in the current directory. Do you want to overwrite it?',dropFilesHere:"drop file here to upload",search:"Search"},transport:{},path:"/",fileTypes:"*.*"},events:[u,d,c],destroy:function(){var e=this;a.fn.destroy.call(e),e.dataSource.unbind(u,e._errorHandler),e.element.add(e.list).add(e.toolbar).off(f),i.destroy(e.element)},value:function(){var e,t=this,a=t._selectedItem(),n=t.options.transport.fileUrl;if(a&&"f"===a.get(k))return e=_(t.path(),a.get(m)).replace(l,""),n&&(e=s(n)?n(e):i.format(n,encodeURIComponent(e))),e},_selectedItem:function(){var e=this.listView.select();if(e.length)return this.dataSource.getByUid(e.attr(i.attr("uid")))},_toolbar:function(){var t=this,a=i.template(g),n=t.options.messages,o=[{text:n.orderByName,value:"name"},{text:n.orderBySize,value:"size"}];t.toolbar=e(a({messages:n,showUpload:t.options.transport.uploadUrl,showCreate:t.options.transport.create,showDelete:t.options.transport.destroy})).appendTo(t.element).find(".k-upload input").kendoUpload({multiple:!1,localization:{dropFilesHere:n.dropFilesHere},async:{saveUrl:t.options.transport.uploadUrl,autoUpload:!0},upload:t._fileUpload.bind(t),error:function(e){t._error({xhr:e.XMLHttpRequest,status:"error"})}}).end(),t.upload=t.toolbar.find(".k-upload input").data("kendoUpload"),t.arrangeBy=t.toolbar.find(".k-tiles-arrange select").kendoDropDownList({dataSource:o,dataTextField:"text",dataValueField:"value",change:function(){t.orderBy(this.value())}}).data("kendoDropDownList"),t.searchBox=t.toolbar.find("input[data-role='searchbox']").kendoSearchBox({label:t.options.messages.search,change:function(){t.search(this.value())}}).data("kendoSearchBox"),t._attachDropzoneEvents()},_attachDropzoneEvents:function(){var t,i,a,n,o,r=this;r.options.transport.uploadUrl&&(t=e(document.documentElement),i=r._dropEnter.bind(r),a=r._dropLeave.bind(r),t.on("dragenter"+f,(function(){i(),o=new Date,n||(n=setInterval((function(){new Date-o>100&&(a(),clearInterval(n),n=null)}),100))})).on("dragover"+f,(function(){o=new Date})),r._scrollHandler=r._positionDropzone.bind(r))},_dropEnter:function(){this._positionDropzone(),e(document).on("scroll"+f,this._scrollHandler)},_dropLeave:function(){this._removeDropzone(),e(document).off("scroll"+f,this._scrollHandler)},_positionDropzone:function(){var e=this.element,t=e.offset();this.toolbar.find(".k-dropzone").addClass("k-filebrowser-dropzone").offset(t).css({width:e[0].clientWidth,height:e[0].clientHeight,lineHeight:e[0].clientHeight+"px"})},_removeDropzone:function(){this.toolbar.find(".k-dropzone").removeClass("k-filebrowser-dropzone").css({width:"",height:"",lineHeight:"",top:"",left:""})},_deleteClick:function(){var e=this,t=e.listView.select(),a=i.format(e.options.messages.deleteFile,t.find(".k-file-name").text());t.length&&e._showMessage(a,"confirm")&&e.listView.remove(t)},_addClick:function(){this.createDirectory()},_getFieldName:function(e){return function(e,t){var i=e[t];return n(i)?i.from||i.field||t:i}(this.dataSource.reader.model.fields,e)},_fileUpload:function(e){var t,a=this,n=a.options,o=n.fileTypes,r=new RegExp(("("+o.split(",").join(")|(")+")").replace(/\*\./g,".*."),"i"),s=e.files[0].name,l=e.files[0].size,d=m,c=v;r.test(s)?(e.data={path:a.path()},(t=a._createFile(s,l))?a.upload.one("success",(function(e){var n=a._insertFileToList(t);n._override&&(n.set(d,e.response[a._getFieldName(d)]),n.set(c,e.response[a._getFieldName(c)]),a.listView.dataSource.pushUpdate(n)),a._tiles=a.listView.items().filter("["+i.attr("type")+"=f]")})):e.preventDefault()):(e.preventDefault(),a._showMessage(i.format(n.messages.invalidFileType,s,o)))},_findFile:function(e){var t,i,a,n=this.dataSource.data();for(e=e.toLowerCase(),t=0,a=n.length;t<a;t++)if("f"===n[t].get("type")&&n[t].get("name").toLowerCase()===e){i=n[t];break}return i},_createFile:function(e,t){var a=this,n={},o=a._findFile(e);return o?a._showMessage(i.format(a.options.messages.overwriteFile,e),"confirm")?(o._override=!0,o):null:(n.type="f",n.name=e,n.size=t,n)},_insertFileToList:function(e){var t;if(e._override)return e;for(var i=this.dataSource,a=i.view(),n=0,o=a.length;n<o;n++)if("f"===a[n].get(k)){t=n;break}return i.insert(++t,e)},createDirectory:function(){var e,t,a=this,n=0,o=k,r=m,s=a.dataSource.data(),l=a._nameDirectory(),d=new a.dataSource.reader.model;for(e=0,t=s.length;e<t;e++)"d"===s[e].get(o)&&(n=e);d.set(o,"d"),d.set(r,l),a.listView.one("dataBound",(function(){var e=a.listView.items().filter("["+i.attr("uid")+"="+d.uid+"]");e.length&&this.edit(e),this.element.scrollTop(e.attr("offsetTop")-this.element[0].offsetHeight),setTimeout((function(){a.listView.element.find(".k-edit-item input").select()}))})).one("save",(function(e){var t=e.model.get(r);t?e.model.set(r,a._nameExists(t,d.uid)?a._nameDirectory():t):e.model.set(r,l)})),a.dataSource.insert(++n,d)},_directoryKeyDown:function(e){13==e.keyCode&&e.currentTarget.blur()},_directoryBlur:function(){this.listView.save()},_nameExists:function(e,t){var i,a,n=this.dataSource.data();for(i=0,a=n.length;i<a;i++)if("d"===n[i].get("type")&&n[i].get("name").toLowerCase()===e.toLowerCase()&&n[i].uid!==t)return!0;return!1},_nameDirectory:function(){var t,i,a,n="New folder",o=this.dataSource.data(),r=[],s=m;for(i=0,a=o.length;i<a;i++)"d"===o[i].get("type")&&o[i].get(s).toLowerCase().indexOf(n.toLowerCase())>-1&&r.push(o[i].get(s));if(e.inArray(n,r)>-1){i=2;do{t=n+" ("+i+")",i++}while(e.inArray(t,r)>-1);n=t}return n},orderBy:function(e){this.dataSource.sort([{field:k,dir:"asc"},{field:e,dir:"asc"}])},search:function(e){this.dataSource.filter({field:m,operator:"contains",value:e})},_content:function(){var t=this;t.list=e('<div class="k-filemanager-listview" />').appendTo(t.element).on("dblclick"+f,".k-listview-item",t._dblClick.bind(t)),t.listView=new i.ui.ListView(t.list,{layout:"flex",flex:{direction:"row",wrap:"wrap"},dataSource:t.dataSource,template:t._itemTmpl(),editTemplate:t._editTmpl(),selectable:!0,autoBind:!1,dataBinding:function(e){t.toolbar.find(".k-i-x,.k-svg-i-x").parent().addClass("k-disabled"),"remove"!==e.action&&"sync"!==e.action||(e.preventDefault(),i.ui.progress(t.listView.content,!1))},dataBound:function(){t.dataSource.view().length?t._tiles=this.items().filter("["+i.attr("type")+"=f]"):this.content.append(w({text:t.options.messages.emptyFolder}))},change:t._listViewChange.bind(t)})},_dblClick:function(t){var a=this,n=e(t.currentTarget);if(n.hasClass("k-edit-item")&&a._directoryBlur(),n.filter("["+i.attr("type")+"=d]").length){var o=a.dataSource.getByUid(n.attr(i.attr("uid")));o&&(a.path(_(a.path(),o.get(m))),a.breadcrumbs.value("/"+a.path()))}else n.filter("["+i.attr("type")+"=f]").length&&a.trigger(c)},_listViewChange:function(){var e=this._selectedItem();e&&(this.toolbar.find(".k-i-x,.k-svg-i-x").parent().removeClass("k-disabled"),this.trigger(d,{selected:e}))},_dataSource:function(){var e=this,t=e.options,a=t.transport,r=o({},b),s={field:m,dir:"asc"},l={type:a.type||"filebrowser",sort:[r,s]};n(a)&&(a.path=e.path.bind(e),l.transport=a),n(t.schema)?l.schema=t.schema:a.type&&n(i.data.schemas[a.type])&&i.data.schemas[a.type],e.dataSource&&e._errorHandler?e.dataSource.unbind(u,e._errorHandler):e._errorHandler=e._error.bind(e),e.dataSource=i.data.DataSource.create(l).bind(u,e._errorHandler)},_navigation:function(){var t=this,i=e('<div class="k-floatwrap"><nav></nav></div>').appendTo(this.element);t.breadcrumbs=i.find("nav").first().kendoBreadcrumb({editable:!0,gap:50,value:t.options.path||"/",change:function(){t.path(this.value())}}).data("kendoBreadcrumb")},_error:function(e){var t,i=this;if(!i.trigger(u,e)){t=e.xhr.status,"error"==e.status?"404"==t?i._showMessage(i.options.messages.directoryNotFound):"0"!=t&&i._showMessage("Error! The requested URL returned "+t+" - "+e.xhr.statusText):"timeout"==t&&i._showMessage("Error! Server timeout.");var a=i.dataSource;a.hasChanges()&&a.cancelChanges()}},_showMessage:function(e,t){return window[t||"alert"](e)},refresh:function(){var e=this;e._navigation(),e._toolbar(),e._content()},_editTmpl:function(){return i.template((e=>`<div class="k-listview-item k-selected" ${i.attr("uid")}="${e.uid}">`+("d"===e.type?'<div class="k-file-preview">'+i.ui.icon({icon:"folder",iconClass:"k-file-icon",size:"xxxlarge"})+"</div>":'<div class="k-file-preview"><span class="k-file-icon k-icon k-i-loading"></span></div>')+("d"===e.type?`<span class="k-file-name">\n                            <span class="k-textbox k-input k-input-md k-rounded-md k-input-solid">\n                                <input class="k-input-inner" ${i.attr("bind")}="value:name"/>\n                            </span>\n                        </span>`:"")+"</div>"))},_itemTmpl:function(){return i.template((e=>`<div class="k-listview-item" ${i.attr("uid")}="${e.uid}" ${i.attr("type")}="${e.type}">`+("d"===e.type?'<div class="k-file-preview">'+i.ui.icon({icon:"folder",iconClass:"k-file-icon",size:"xxxlarge"})+"</div>":'<div class="k-file-preview">'+i.ui.icon({icon:"file",iconClass:"k-file-icon",size:"xxxlarge"})+"</div>")+`<span class="k-file-name">${e.name}</span>`+("f"===e.type?`<span class="k-file-size">${function(e){if(!e)return"";var t=" bytes";return e>=1073741824?(t=" GB",e/=1073741824):e>=1048576?(t=" MB",e/=1048576):e>=1024&&(t=" KB",e/=1024),Math.round(100*e)/100+t}(e.size)}</span>`:"")+"</div>"))},path:function(e){var i=this,a=i._path||"";return e!==t?(i._path=e.replace(l,"")+"/",void i.dataSource.read({path:i._path})):(a&&(a=a.replace(l,"")),"/"===a||""===a?"":a+"/")}}),x=a.extend({init:function(e,t){var i=this;t=t||{},a.fn.init.call(i,e,t),r&&i.element.attr("placeholder",i.options.label),i._wrapper(),i.element.on("keydown"+h,i._keydown.bind(i)).on("change"+h,i._updateValue.bind(i)),i.wrapper.on(p+h,"a",i._click.bind(i)),r||i.element.on("focus"+h,i._focus.bind(i)).on("blur"+h,i._blur.bind(i))},options:{name:"SearchBox",label:"Search",value:""},events:[d],destroy:function(){var e=this;e.wrapper.add(e.element).add(e.label).off(h),a.fn.destroy.call(e)},_keydown:function(e){13===e.keyCode&&this._updateValue()},_click:function(e){e.preventDefault(),this._updateValue()},_updateValue:function(){var e=this,t=e.element.val();t!==e.value()&&(e.value(t),e.trigger(d))},_blur:function(){this._updateValue(),this._toggleLabel()},_toggleLabel:function(){r||this.label.toggle(!this.element.val())},_focus:function(){this.label.hide()},_wrapper:function(){var t=this.element,a=t.parents(".k-search-wrap");t[0].style.width="",t.addClass("k-input-inner"),a.length||(a=t.wrap(e('<div class="k-widget k-search-wrap"><span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"></span></div>')).parents(".k-search-wrap"),r||e('<label style="display:block">'+this.options.label+"</label>").insertBefore(t),e('<span class="k-input-suffix">'+i.ui.icon(e('<a href="#" />'),{icon:"search",iconClass:"k-search"})+"</span>").appendTo(a.find(".k-textbox"))),this.wrapper=a,this.label=a.find(">label")},value:function(e){var i=this;return e!==t?(i.options.value=e,i.element.val(e),void i._toggleLabel()):i.options.value}});i.ui.plugin(y),i.ui.plugin(x)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.filebrowser.js.map
