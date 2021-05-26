(this.webpackJSONPwpmdb=this.webpackJSONPwpmdb||[]).push([[10],{728:function(e,t,a){"use strict";a.r(t),a.d(t,"MSTMessages",function(){return x}),a.d(t,"MSBlurb",function(){return M}),a.d(t,"MSContent",function(){return P});var n=a(12),s=a(36),i=a(0),r=a.n(i),l=a(18),c=a.n(l),u=a(113),m=a.n(u),o=a(6),b=a(13),d=a.n(b),p=a(1),f=a(40),g=a(73),_=a(77),O=a(200),v=function(e){var t=Object(o.d)(),a=Object(o.e)(function(e){return e.migrations}),n=Object(o.e)(function(e){return e.multisite_tools}),s=a.local_site,i=a.remote_site,l=a.current_migration.intent,c=s.subsites,u=["push","pull"].includes(l)?i.site_details.subsites:{},m=c;"false"===s.site_details.is_multisite&&(m=u);return r.a.createElement("select",{onChange:function(e){if("0"!==e.target.value){t({type:g.f,payload:e.target.value});var a=Object(O.a)(e.target.value,s,i,l);if(!a.subsiteName)return!1;t(Object(_.d)({selectedSubsite:a.subsiteName,selectedSubsiteID:e.target.value}))}},value:n.selected_subsite,className:"consolas",id:"wpmdb-multisite-selector"},r.a.createElement("option",{value:"0"},"-- ",Object(p.a)("Select a subsite","wp-migrate-db")," --"),Object.keys(m).map(function(e,t){return r.a.createElement("option",{value:e,key:t},Object.values(m)[t])}))},h=(a(536),a(25)),j=function(e){var t=Object(o.e)(function(e){return e.migrations}),a=t.local_site.this_prefix,n=t.remote_site.site_details.prefix,s=t.remote_site.site_details.home_url,i=Object(p.a)("Warning: Different Table Prefixes","wp-migrate-db"),l=Object(p.a)('We have detected you have table prefix "'.concat(n,'" at ').concat(s,' but have "\n      ').concat(a,'" here. Multisite Tools currently only supports migrating\n      subsites between sites with the same base table prefix.'),"wp-migrate-db");return r.a.createElement(h.b,null,r.a.createElement("strong",null,i)," \u2014 ",l)},E=function(e){var t=Object(o.e)(function(e){return e.migrations}).current_migration.intent,a=e.newPrefix;return"savefile"===t&&(a=r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",className:"new-prefix-input",value:a,onChange:e.handler}))),r.a.createElement("div",{className:"new-prefix".concat("savefile"===t?" has-form":"")},r.a.createElement("span",null,Object(p.a)("New table name prefix: ")),a)},w=a(8),N=a(198),x=function(e){return{pull:e?Object(p.a)("Pull into a specific subsite","wp-migrate-db"):Object(p.a)("Pull from a specific subsite","wp-migrate-db"),push:e?Object(p.a)("Push a specific subsite","wp-migrate-db"):Object(p.a)("Push to a specific subsite","wp-migrate-db"),savefile:Object(p.a)("Export a subsite as a single site install","wp-migrate-db"),find_replace:Object(p.a)("Run a find/replace on a specific subsite","wp-migrate-db")}},M=function(e){e.localURL;var t=e.remoteURL,a=e.localIsMultisite,n=Object(s.a)(e,["localURL","remoteURL","localIsMultisite"]),i=a?Object(p.a)("The local site is a multisite install of WordPress but remote site <b>%s</b> a single-site install.","wp-migrate-db"):Object(p.a)("The remote site <b>%s</b> is a multisite install of WordPress but this is a single-site install.","wp-migrate-db"),l=Object(p.c)(i,Object(w.o)(t));return r.a.createElement("p",{className:n.className},d()(l))},P=function(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),a=t[0],s=t[1],l=Object(o.d)(),c=Object(o.e)(function(e){return e.migrations}),u=Object(o.e)(function(e){return e.multisite_tools}),b=c.connection_info,d=c.current_migration,f=c.local_site,O=c.remote_site,h=d.status;if(u.versionMismatch)return null;var w=function(e){var t=[],n=m()(e,{name:"MST_NO_SUBSITE"});return(m()(e,{name:"MST_EMPTY_PREFIX"})||a)&&t.push(r.a.createElement("p",{className:"red"},r.a.createElement("strong",null,Object(p.a)("Error: ","wp-migrate-db")),Object(p.a)("Please enter a valid prefix. Letters, numbers and underscores (_) are allowed.","wp-migrate-db"))),n&&t.push(r.a.createElement("p",{className:"red"},r.a.createElement("strong",null,Object(p.a)("Error: ","wp-migrate-db")),Object(p.a)("Please select a subsite.","wp-migrate-db"))),t}(h),N=b.status.prefix_mismatch,P=d.intent;return r.a.createElement(r.a.Fragment,null,["push","pull"].includes(P)&&r.a.createElement(M,{localURL:f.this_url,remoteURL:O.site_details.home_url,localIsMultisite:"true"===f.is_multisite,className:"mst-blurb"}),r.a.createElement("div",{className:"select-subsite-wrap"},r.a.createElement("span",{className:"checkbox-wrap"},r.a.createElement("input",{type:"checkbox",name:"enable-mst",id:"enable-mst",checked:u.enabled,onChange:function(e){l(Object(_.j)())},disabled:N})),r.a.createElement("div",{className:"subsite-selector".concat(N?" disabled":"")},r.a.createElement("label",{htmlFor:"enable-mst"},x("true"===f.is_multisite)[P]),N?r.a.createElement(j,null):u.enabled&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(E,{handler:function(e){s(!1);var t=e.target.value;!function(e){return null===new RegExp("[^a-z0-9_]","i").exec(e)}(t)?s(!0):l({type:g.b,payload:t})},newPrefix:u.new_prefix})),w.length>0&&r.a.createElement("div",{className:"mst-errors"},w.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e)})))))},S=function(e){e.disabled;var t=Object(o.e)(function(e){return e}).multisite_tools,a=Object(o.e)(function(e){return e.panels.panelsOpen}),n=Object(o.e)(function(e){return e.migrations}),s=n.local_site,i=n.remote_site,l=n.current_migration,u=s.mst_version,m=l.intent;if(t.versionMismatch)return r.a.createElement(N.a,{message:t.message,pluginSlug:"wp-migrate-db-pro-multisite-tools",remoteUpgradable:t.remoteUpgradable,version:u,shortName:_.c});if(c()(a,"multisite_tools")||!t.enabled)return null;var b=Object(O.a)(t.selected_subsite,s,i,m);return b?r.a.createElement("div",null,b.subsiteName):null};t.default=function(){var e=!1,t=Object(o.e)(function(e){return e.panels.panelsOpen}),a=Object(o.e)(function(e){return e}).multisite_tools,n=!1,s="mst";return!t.includes("multisite_tools")&&a.enabled&&0!==a.selected_subsite&&(n=!0),a.enabled&&0!==a.selected_subsite&&!a.versionMismatch||(s+=" no-summary"),a.versionMismatch&&(e=!0,n=!1),r.a.createElement(f.a,{title:Object(p.a)("Multisite","wp-migrate-db"),className:s,forceDivider:n,panelName:"multisite_tools",disabled:e,panelSummary:r.a.createElement(S,{disabled:e}),hideArrow:a.versionMismatch},r.a.createElement(P,null))}}}]);