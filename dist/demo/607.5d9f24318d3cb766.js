"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[607],{8567:(f,g,l)=>{l.d(g,{J:()=>r});var s=l(5373),m=l(8291);const e=["table"];let r=(()=>{class h{constructor(a){this.router=a,this.columns=[]}ngAfterViewInit(){this.columns.push({id:"name",name:"Name",field:"path",sortable:!0,formatter:this.table?.nativeElement?.formatters?.hyperlink,href:`${this.router.url}/{{value}}`}),this.columns.push({id:"type",name:"Type",field:"data?.type",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.columns.push({id:"description",name:"Description",field:"data?.description",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.table.nativeElement.columns=this.columns,this.table.nativeElement.data=this.routes}handleClick(a){if(a.preventDefault(),a.target.shadowRoot){const p=a.composedPath().filter(Z=>"IDS-HYPERLINK"===Z.tagName)[0]?.href;p&&this.router.navigateByUrl(`/${p}`)}}static#e=this.\u0275fac=function(d){return new(d||h)(s.Y36(m.F0))};static#t=this.\u0275cmp=s.Xpm({type:h,selectors:[["app-demo-listing"]],viewQuery:function(d,c){if(1&d&&s.Gf(e,5,s.SBq),2&d){let p;s.iGM(p=s.CRH())&&(c.table=p.first)}},hostBindings:function(d,c){1&d&&s.NdJ("click",function(Z){return c.handleClick(Z)},!1,s.evT)},inputs:{routes:"routes",title:"title"},decls:8,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["cols","2","gap","md"],["font-size","20"],["list-style","true"],["table",""]],template:function(d,c){1&d&&(s.TgZ(0,"ids-container",0),s._UZ(1,"ids-theme-switcher",1),s.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),s._uU(5),s.qZA()()(),s._UZ(6,"ids-data-grid",4,5),s.qZA()),2&d&&(s.xp6(5),s.Oqu(c.title))}})}return h})()},9874:(f,g,l)=>{l.d(g,{H:()=>e});var s=l(6733),m=l(5373);let e=(()=>{class r{static#e=this.\u0275fac=function(a){return new(a||r)};static#t=this.\u0275mod=m.oAB({type:r});static#n=this.\u0275inj=m.cJS({imports:[s.ez]})}return r})()},607:(f,g,l)=>{l.r(g),l.d(g,{IdsMenuButtonModule:()=>b});var s=l(6733),m=l(8291),e=l(5373),r=l(8567);const h=["table"],a=["menuButton1"],c=["menuBtnEl"],Z=["btnSpanEl"],y=[{path:"",component:(()=>{class i{constructor(n){this.router=n,this.routes=y.filter(t=>""!==t.path),this.columns=[]}ngAfterViewInit(){console.log("Ids Menu init")}static#e=this.\u0275fac=function(t){return new(t||i)(e.Y36(m.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-ids-menu-button"]],viewQuery:function(t,o){if(1&t&&e.Gf(h,5,e.SBq),2&t){let u;e.iGM(u=e.CRH())&&(o.table=u.first)}},decls:1,vars:2,consts:[[3,"title","routes"]],template:function(t,o){1&t&&e._UZ(0,"app-demo-listing",0),2&t&&e.Q6J("title","Ids Menu Button Examples")("routes",o.routes)},dependencies:[r.J]})}return i})()},{path:"example",component:(()=>{class i{constructor(){this.menuItemResponse=(n,t)=>{const o=n.detail.elem;if(o){const u=o.textContent.trim();console.info(`Menu Item "${u}" was ${t}`,n.detail.elem)}}}ngOnInit(){console.log("ids-menu-button OnInit")}ngAfterViewInit(){const n=this.menuButton1.nativeElement.menuEl;n.addEventListener("show",()=>{console.info("Menu Button items were displayed")}),n.addEventListener("hide",()=>{console.info("Menu Button items were hidden")}),n.addEventListener("selected",t=>{this.menuItemResponse(t,"selected")}),n.addEventListener("deselected",t=>{this.menuItemResponse(t,"deselected")})}static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-example"]],viewQuery:function(t,o){if(1&t&&e.Gf(a,5,e.SBq),2&t){let u;e.iGM(u=e.CRH())&&(o.menuButton1=u.first)}},decls:48,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["cols","4","gap","md"],["id","menu-button","icon","settings","dropdown-icon","","appearance","tertiary","menu","my-menu"],["menuButton1",""],["id","my-menu","trigger","click"],["select","single","id","sizes"],["disabled","true","value","extra-small"],["value","small"],["value","medium"],["value","large","selected","true"],["select","multiple","keep-open","true"],["selected","true"],["value","run-filter"],["value","clear-filter"],["icon","more","id","icon-button","menu","icon-menu"],[1,"audible"],["id","icon-menu","trigger","click"],["value","1"],["value","2"],["value","3"]],template:function(t,o){1&t&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-layout-grid",2)(3,"ids-text",3),e._uU(4,"Menu Buttons"),e.qZA()(),e.TgZ(5,"ids-layout-grid",4)(6,"ids-layout-grid-cell")(7,"ids-menu-button",5,6)(9,"span"),e._uU(10,"Settings"),e.qZA()(),e.TgZ(11,"ids-popup-menu",7)(12,"ids-menu-group")(13,"ids-menu-item"),e._uU(14,"Personalize Columns..."),e.qZA()(),e._UZ(15,"ids-separator"),e.TgZ(16,"ids-menu-group",8)(17,"ids-menu-header"),e._uU(18,"Row Height"),e.qZA(),e.TgZ(19,"ids-menu-item",9),e._uU(20,"Extra Small"),e.qZA(),e.TgZ(21,"ids-menu-item",10),e._uU(22,"Small"),e.qZA(),e.TgZ(23,"ids-menu-item",11),e._uU(24,"Medium"),e.qZA(),e.TgZ(25,"ids-menu-item",12),e._uU(26,"Large"),e.qZA()(),e._UZ(27,"ids-separator"),e.TgZ(28,"ids-menu-group",13)(29,"ids-menu-header"),e._uU(30,"Filtering Options"),e.qZA(),e.TgZ(31,"ids-menu-item",14),e._uU(32,"Show Filter Row"),e.qZA(),e.TgZ(33,"ids-menu-item",15),e._uU(34,"Run Filter"),e.qZA(),e.TgZ(35,"ids-menu-item",16),e._uU(36,"Clear Filter"),e.qZA()()(),e.TgZ(37,"ids-menu-button",17)(38,"span",18),e._uU(39,"Icon Only Button"),e.qZA()(),e.TgZ(40,"ids-popup-menu",19)(41,"ids-menu-group",13)(42,"ids-menu-item",20),e._uU(43,"Option One"),e.qZA(),e.TgZ(44,"ids-menu-item",21),e._uU(45,"Option Two"),e.qZA(),e.TgZ(46,"ids-menu-item",22),e._uU(47,"Option Three"),e.qZA()()()()()())}})}return i})()},{path:"disabled",component:(()=>{class i{constructor(){}ngOnInit(){console.log("ids-menu-button disabled OnInit")}ngAfterViewInit(){this.defaultOnOutsideClick=this.menuBtnEl.nativeElement.menuEl.onOutsideClick}handleDisabledCheck(n){this.disabled=n.target.checked}handleForceMenuCheck(n){const t=n.target.checked;this.menuBtnEl.nativeElement.menuEl.keepOpen=t,console.log(t),t?(this.menuBtnEl.nativeElement.menuEl.show(),this.menuBtnEl.nativeElement.menuEl.onOutsideClick=()=>{}):this.menuBtnEl.nativeElement.menuEl.onOutsideClick=this.defaultOnOutsideClick}static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-disabled"]],viewQuery:function(t,o){if(1&t&&e.Gf(c,5,e.SBq),2&t){let u;e.iGM(u=e.CRH())&&(o.menuBtnEl=u.first)}},decls:75,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["id","toggle-disabled-menubutton","label","Toggle menu button's disabled state",3,"change"],["id","force-menu-show","label","Force the Popup Menu to show",3,"change"],["cols","4","gap","md"],["id","menu-button","icon","settings","appearance","tertiary","dropdown-icon","","menu","my-menu"],["menuBtnEl",""],["id","my-menu","trigger","click"],["disabled",""],["icon","settings"],["select","single","id","sizes"],["value","single-item-one"],["value","single-item-two","selected","true"],["select","multiple","keep-open","true"],["selected","true","value","multi-item-one"],["value","multi-item-two"]],template:function(t,o){1&t&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-layout-grid",2)(3,"ids-text",3),e._uU(4,"Menu Buttons"),e.qZA()(),e.TgZ(5,"ids-layout-grid",2)(6,"ids-layout-grid-cell")(7,"ids-checkbox",4),e.NdJ("change",function(_){return o.handleDisabledCheck(_)}),e.qZA(),e.TgZ(8,"ids-checkbox",5),e.NdJ("change",function(_){return o.handleForceMenuCheck(_)}),e.qZA()()(),e.TgZ(9,"ids-layout-grid",6)(10,"ids-layout-grid-cell")(11,"ids-menu-button",7,8)(13,"span"),e._uU(14,"Settings"),e.qZA()(),e.TgZ(15,"ids-popup-menu",9)(16,"ids-menu-group")(17,"ids-menu-item"),e._uU(18,"Item One"),e.qZA(),e.TgZ(19,"ids-menu-item",10),e._uU(20,"Item Two"),e.qZA(),e.TgZ(21,"ids-menu-item"),e._uU(22,"Item Three"),e.qZA(),e._UZ(23,"ids-separator"),e.TgZ(24,"ids-menu-item"),e._uU(25,"Item Four"),e.qZA()(),e._UZ(26,"ids-separator"),e.TgZ(27,"ids-menu-group")(28,"ids-menu-header"),e._uU(29,"Icon Items"),e.qZA(),e.TgZ(30,"ids-menu-item",11),e._uU(31,"Settings"),e.qZA()(),e.TgZ(32,"ids-menu-group",12)(33,"ids-menu-header"),e._uU(34,"Single-selectable Items"),e.qZA(),e.TgZ(35,"ids-menu-item",13),e._uU(36,"Single Item One"),e.qZA(),e.TgZ(37,"ids-menu-item",14),e._uU(38,"Single item Two"),e.qZA()(),e._UZ(39,"ids-separator"),e.TgZ(40,"ids-menu-group",15)(41,"ids-menu-header"),e._uU(42,"Multi-selectable Items"),e.qZA(),e.TgZ(43,"ids-menu-item",16),e._uU(44,"Multi-item One"),e.qZA(),e.TgZ(45,"ids-menu-item",17),e._uU(46,"Multi-item Two"),e.qZA()(),e._UZ(47,"ids-separator"),e.TgZ(48,"ids-menu-group")(49,"ids-menu-header"),e._uU(50,"Item with a Submenu"),e.qZA(),e.TgZ(51,"ids-menu-item"),e._uU(52," Settings "),e.TgZ(53,"ids-popup-menu")(54,"ids-menu-group")(55,"ids-menu-item"),e._uU(56,"Sub-item One"),e.qZA(),e.TgZ(57,"ids-menu-item"),e._uU(58,"Sub-item Two"),e.qZA(),e.TgZ(59,"ids-menu-item"),e._uU(60,"Sub-item Three"),e.qZA()()()()(),e._UZ(61,"ids-separator"),e.TgZ(62,"ids-menu-group")(63,"ids-menu-header"),e._uU(64,"Item with Icon and a Submenu"),e.qZA(),e.TgZ(65,"ids-menu-item",11),e._uU(66," Settings "),e.TgZ(67,"ids-popup-menu")(68,"ids-menu-group")(69,"ids-menu-item"),e._uU(70,"Sub-item One"),e.qZA(),e.TgZ(71,"ids-menu-item"),e._uU(72,"Sub-item Two"),e.qZA(),e.TgZ(73,"ids-menu-item"),e._uU(74,"Sub-item Three"),e.qZA()()()()()()()()()),2&t&&(e.xp6(11),e.uIk("disabled",o.disabled))}})}return i})()},{path:"display-selected",component:(()=>{class i{constructor(){}ngOnInit(){console.log("ids-menu-button display selected OnInit")}ngAfterViewInit(){console.log("ids-menu-button display selected AfterViewInit")}handleSelected(n){const t=n.detail.elem;if(null!==t){const o=t.textContent.trim();this.btnSpanEl.nativeElement.innerHTML=o,console.info("Menu Item Selected",n.detail.elem)}}static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-display-selected"]],viewQuery:function(t,o){if(1&t&&e.Gf(Z,5,e.SBq),2&t){let u;e.iGM(u=e.CRH())&&(o.btnSpanEl=u.first)}},decls:23,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["cols","4","gap","md"],["id","menu-button","icon","settings","appearance","tertiary","dropdown-icon","","menu","my-menu"],["btnSpanEl",""],["id","my-menu","trigger","click",3,"selected"],["select","single","id","programs"],["value","career-space"],["value","employee-transition-programs"],["value","process-server"],["value","candidate-transition-programs","selected","true"]],template:function(t,o){1&t&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-layout-grid",2)(3,"ids-text",3),e._uU(4,"Menu Button (Change Content on Selection)"),e.qZA()(),e.TgZ(5,"ids-layout-grid",4)(6,"ids-layout-grid-cell")(7,"ids-menu-button",5)(8,"span",null,6),e._uU(10,"Choose a Program Type..."),e.qZA()(),e.TgZ(11,"ids-popup-menu",7),e.NdJ("selected",function(_){return o.handleSelected(_)}),e.TgZ(12,"ids-menu-group",8)(13,"ids-menu-header"),e._uU(14,"Program Types"),e.qZA(),e.TgZ(15,"ids-menu-item",9),e._uU(16,"Career Space"),e.qZA(),e.TgZ(17,"ids-menu-item",10),e._uU(18,"Employee Transition Programs"),e.qZA(),e.TgZ(19,"ids-menu-item",11),e._uU(20,"Process Server"),e.qZA(),e.TgZ(21,"ids-menu-item",12),e._uU(22,"Candidate Transition Programs"),e.qZA()()()()()())}})}return i})()}];let U=(()=>{class i{static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(y),m.Bz]})}return i})();var A=l(9874);let b=(()=>{class i{static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[s.ez,U,A.H]})}return i})()}}]);