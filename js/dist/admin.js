(()=>{var t={n:a=>{var e=a&&a.__esModule?()=>a.default:()=>a;return t.d(e,{a:e}),e},d:(a,e)=>{for(var m in e)t.o(e,m)&&!t.o(a,m)&&Object.defineProperty(a,m,{enumerable:!0,get:e[m]})},o:(t,a)=>Object.prototype.hasOwnProperty.call(t,a),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},a={};(()=>{"use strict";t.r(a);const e=flarum.core.compat.app;var r=t.n(e);function s(t,a){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,a){return t.__proto__=a,t},s(t,a)}const o=flarum.core.compat["components/ExtensionPage"];var i=t.n(o);const n=flarum.core.compat["components/Switch"];var b=t.n(n);const l=flarum.core.compat["components/Button"];var p=t.n(l);const c=flarum.core.compat["components/FieldSet"];var h=t.n(c);const d=flarum.core.compat["utils/saveSettings"];var u=t.n(d);const g=flarum.core.compat["utils/Stream"];var y=t.n(g),f=function(t){var a,e;function r(){return t.apply(this,arguments)||this}e=t,(a=r).prototype=Object.create(e.prototype),a.prototype.constructor=a,s(a,e);var o=r.prototype;return o.oninit=function(a){t.prototype.oninit.call(this,a),this.migrateAvatars=y()(!1),this.migrateSoftThreads=y()(!1),this.migrateSoftPosts=y()(!1),this.migrateAttachments=y()(!1),this.migrateThreadsPosts=y()(!0),this.migrateUsers=y()(!0),this.migrateCategories=y()(!0),this.migrateUserGroups=y()(!0),this.mybb={host:y()(void 0===app.data.settings.mybb_host?"127.0.0.1":app.data.settings.mybb_host),user:y()(void 0===app.data.settings.mybb_user?"":app.data.settings.mybb_user),db:y()(void 0===app.data.settings.mybb_db?"":app.data.settings.mybb_db),prefix:y()(void 0===app.data.settings.mybb_prefix?"mybb_":app.data.settings.mybb_prefix),password:y()(void 0===app.data.settings.mybb_password?"":app.data.settings.mybb_password),mybbPath:y()(void 0===app.data.settings.mybb_path?"":app.data.settings.mybb_path)}},o.content=function(){var t=this;return m("div",{className:"mybbtoflarumPage"},m("div",{className:"mybbtoflarumPage-header"},m("div",{className:"container"},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.description_text"))),m("div",{className:"mybbtoflarumPage-content"},m("div",{className:"container"},m("form",{onsubmit:this.onsubmit.bind(this)},m(h(),{label:app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.general.title")},[b().component({state:this.migrateUsers(),onchange:function(a){t.migrateUsers(a),a||(t.migrateAvatars(a),$("input[name=mybbPath]").attr("disabled","disabled"))}},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.general.migrate_users_label")),b().component({state:this.migrateThreadsPosts(),onchange:function(a){t.migrateThreadsPosts(a),a||(t.migrateAttachments(a),t.migrateSoftPosts(a),t.migrateSoftThreads(a),$("input[name=mybbPath]").attr("disabled","disabled"))}},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.general.migrate_threadsPosts_label")),b().component({state:this.migrateUserGroups(),onchange:this.migrateUserGroups},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.general.migrate_userGroups_label")),b().component({state:this.migrateCategories(),onchange:this.migrateCategories},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.general.migrate_categories_label"))]),m(h(),{label:app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.options.title")},[b().component({state:this.migrateAvatars(),onchange:function(a){t.migrateAvatars(a),a?(t.migrateUsers(a),$("input[name=mybbPath]").removeAttr("disabled")):$("input[name=mybbPath]").attr("disabled","disabled")}},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.options.migrate_avatars_label")),b().component({state:this.migrateAttachments(),onchange:function(a){t.migrateAttachments(a),a?(t.migrateThreadsPosts(a),$("input[name=mybbPath]").removeAttr("disabled")):$("input[name=mybbPath]").attr("disabled","disabled")}},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.options.migrate_attachments_label")),b().component({state:this.migrateSoftThreads(),onchange:this.migrateSoftThreads},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.options.migrate_soft_threads_label")),b().component({state:this.migrateSoftPosts(),onchange:this.migrateSoftPosts},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.options.migrate_soft_posts_label"))]),m(h(),{label:app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.mybb.title")},m("div",{className:"helpText"},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.mybb.host_label")),m("input",{className:"FormControl",type:"text",bidi:this.mybb.host,value:this.mybb.host()}),m("div",{className:"helpText"},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.mybb.user_label")),m("input",{className:"FormControl",type:"text",bidi:this.mybb.user}),m("div",{className:"helpText"},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.mybb.password_label")),m("input",{className:"FormControl",type:"password",bidi:this.mybb.password}),m("div",{className:"helpText"},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.mybb.db_label")),m("input",{className:"FormControl",type:"text",bidi:this.mybb.db}),m("div",{className:"helpText"},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.mybb.prefix_label")),m("input",{className:"FormControl",type:"text",bidi:this.mybb.prefix,value:this.mybb.prefix()}),m("div",{className:"helpText"},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.form.mybb.path_label")),m("input",{className:"FormControl",type:"text",bidi:this.mybb.mybbPath,name:"mybbPath",placeholder:"/path/to/mybb"})),p().component({className:"Button Button--danger",icon:"fas fa-exchange-alt",type:"submit",loading:this.loading},app.translator.trans("michaelbelgium-mybb-to-flarum.admin.content.convert_button"))))))},o.onsubmit=function(t){var a=this;t.preventDefault(),this.loading=!0;var e=!1;this.migrateAvatars()&&""===this.mybb.mybbPath()&&(alert("When migrating avatars, the mybb path can not be empty. You need an exisitng mybb installation."),e=!0),Object.keys(this.mybb).forEach((function(t){"mybbPath"!==t&&"password"!==t&&"prefix"!==t&&""===a.mybb[t]()&&(alert("Mybb: "+t+" can not be empty"),e=!0)})),e||u()({mybb_host:this.mybb.host(),mybb_user:this.mybb.user(),mybb_password:this.mybb.password(),mybb_db:this.mybb.db(),mybb_prefix:this.mybb.prefix(),mybb_path:this.mybb.mybbPath()}).then((function(){app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/mybb-to-flarum",body:{avatars:a.migrateAvatars(),softposts:a.migrateSoftPosts(),softthreads:a.migrateSoftThreads(),attachments:a.migrateAttachments(),doUsers:a.migrateUsers(),doThreadsPosts:a.migrateThreadsPosts(),doGroups:a.migrateUserGroups(),doCategories:a.migrateCategories()}}).then((function(t){return alert(t.message)}))})),this.loading=!1},r}(i());r().initializers.add("michaelbelgium-mybb-to-flarum",(function(){r().extensionData.for("michaelbelgium-mybb-to-flarum").registerPage(f)}))})(),module.exports=a})();
//# sourceMappingURL=admin.js.map