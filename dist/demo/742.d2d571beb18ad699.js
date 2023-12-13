"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[742],{8567:(f,p,n)=>{n.d(p,{J:()=>e});var i=n(5373),m=n(8291);const g=["table"];let e=(()=>{class h{constructor(o){this.router=o,this.columns=[]}ngAfterViewInit(){this.columns.push({id:"name",name:"Name",field:"path",sortable:!0,formatter:this.table?.nativeElement?.formatters?.hyperlink,href:`${this.router.url}/{{value}}`}),this.columns.push({id:"type",name:"Type",field:"data?.type",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.columns.push({id:"description",name:"Description",field:"data?.description",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.table.nativeElement.columns=this.columns,this.table.nativeElement.data=this.routes}handleClick(o){if(o.preventDefault(),o.target.shadowRoot){const u=o.composedPath().filter(t=>"IDS-HYPERLINK"===t.tagName)[0]?.href;u&&this.router.navigateByUrl(`/${u}`)}}static#e=this.\u0275fac=function(a){return new(a||h)(i.Y36(m.F0))};static#t=this.\u0275cmp=i.Xpm({type:h,selectors:[["app-demo-listing"]],viewQuery:function(a,c){if(1&a&&i.Gf(g,5,i.SBq),2&a){let u;i.iGM(u=i.CRH())&&(c.table=u.first)}},hostBindings:function(a,c){1&a&&i.NdJ("click",function(t){return c.handleClick(t)},!1,i.evT)},inputs:{routes:"routes",title:"title"},decls:8,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["cols","2","gap","md"],["font-size","20"],["list-style","true"],["table",""]],template:function(a,c){1&a&&(i.TgZ(0,"ids-container",0),i._UZ(1,"ids-theme-switcher",1),i.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),i._uU(5),i.qZA()()(),i._UZ(6,"ids-data-grid",4,5),i.qZA()),2&a&&(i.xp6(5),i.Oqu(c.title))}})}return h})()},9874:(f,p,n)=>{n.d(p,{H:()=>g});var i=n(6733),m=n(5373);let g=(()=>{class e{static#e=this.\u0275fac=function(o){return new(o||e)};static#t=this.\u0275mod=m.oAB({type:e});static#i=this.\u0275inj=m.cJS({imports:[i.ez]})}return e})()},742:(f,p,n)=>{n.r(p),n.d(p,{IdsExpandableAreaModule:()=>u});var i=n(6733),m=n(9874),g=n(8291),e=n(5373);let h=(()=>{class t{constructor(){}ngAfterViewInit(){console.log("IdsExpandableArea AfterViewInit")}handleHyperLinkClick(r){r.preventDefault()}handleToggleButton(r){r.target.toggle()}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-example"]],decls:78,vars:5,consts:[["role","main","padding","8","hidden",""],["mode","light"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["slot","header"],["slot","pane"],["slot","expander-default",3,"hitbox","click"],["slot","expander-expanded","hitbox","true",3,"click"],["slot","pane","cols","2","no-margins","true"],["font-weight","bold"],["slot","expander-default","hitbox","true",3,"click"],["type","partial"],["slot","visible-pane-content","cols","3","gap","md","no-margins","true"],["size","full","type","text","label","Customer Name","name","customer-name","placeholder","Normal text Field"],["size","full","type","text","label","Location","name","location","placeholder","Normal text Field"],["slot","pane","cols","3","gap","md","no-margins","true"],["size","full","type","text","label","More Customer Details","name","more-customer-details","placeholder","Normal text Field"],["type","toggle-btn"],["hitbox","true","slot","header","id","test-expandable-toggle-button","icon-align","end","no-padding","true",3,"click"],["icon","caret-up","size","small"]],template:function(s,d){1&s&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),e._uU(5,"Expandable Area"),e.qZA()()(),e.TgZ(6,"ids-layout-grid",2)(7,"ids-layout-grid-cell")(8,"ids-expandable-area")(9,"ids-text",4),e._uU(10,"Procurement"),e.qZA(),e.TgZ(11,"ids-text",5),e._uU(12,' Ubiquitous out-of-the-box, scalable; communities disintermediate beta-test, enable utilize markets dynamic infomediaries virtual data-driven synergistic aggregate infrastructures, "cross-platform, feeds bleeding-edge tagclouds." Platforms extend interactive B2C benchmark proactive, embrace e-markets, transition generate peer-to-peer. '),e.qZA(),e.TgZ(13,"ids-hyperlink",6),e.NdJ("click",function(l){return d.handleHyperLinkClick(l)}),e._uU(14,"Show More"),e.qZA(),e.TgZ(15,"ids-hyperlink",7),e.NdJ("click",function(l){return d.handleHyperLinkClick(l)}),e._uU(16,"Show Less"),e.qZA()(),e.TgZ(17,"ids-expandable-area")(18,"ids-text",4),e._uU(19,"Design & Definition"),e.qZA(),e.TgZ(20,"ids-layout-grid",8)(21,"ids-layout-grid-cell")(22,"ids-text"),e._uU(23,"Company Name"),e.qZA(),e.TgZ(24,"ids-text",9),e._uU(25,"Building Suppliers"),e.qZA(),e._UZ(26,"br"),e.TgZ(27,"ids-text"),e._uU(28,"Company Type"),e.qZA(),e.TgZ(29,"ids-text",9),e._uU(30,"Contractor"),e.qZA(),e._UZ(31,"br"),e.TgZ(32,"ids-text"),e._uU(33,"Company Address"),e.qZA(),e.TgZ(34,"ids-text",9),e._uU(35," 4209 Industrial Avenue"),e._UZ(36,"br"),e._uU(37," Los Angeles, California 90001 USA "),e.qZA()(),e.TgZ(38,"ids-layout-grid-cell")(39,"ids-text"),e._uU(40,"Phone Number"),e.qZA(),e.TgZ(41,"ids-text",9),e._uU(42,"(999) 810-2604"),e.qZA(),e._UZ(43,"br"),e.TgZ(44,"ids-text"),e._uU(45,"Website"),e.qZA(),e.TgZ(46,"ids-text",9),e._uU(47,"www.buildings.com"),e.qZA(),e._UZ(48,"br"),e.TgZ(49,"ids-text"),e._uU(50,"Estimated Delivery"),e.qZA(),e.TgZ(51,"ids-text",9),e._uU(52,"June 21, 2015 (4 days)"),e.qZA()()(),e.TgZ(53,"ids-hyperlink",10),e.NdJ("click",function(l){return d.handleHyperLinkClick(l)}),e._uU(54,"Show More"),e.qZA(),e.TgZ(55,"ids-hyperlink",7),e.NdJ("click",function(l){return d.handleHyperLinkClick(l)}),e._uU(56,"Show Less"),e.qZA()(),e.TgZ(57,"ids-expandable-area",11)(58,"ids-text",4),e._uU(59,"Customer Information"),e.qZA(),e.TgZ(60,"ids-layout-grid",12)(61,"ids-layout-grid-cell"),e._UZ(62,"ids-input",13),e.qZA(),e.TgZ(63,"ids-layout-grid-cell"),e._UZ(64,"ids-input",14),e.qZA()(),e.TgZ(65,"ids-layout-grid",15),e._UZ(66,"ids-input",16),e.qZA(),e.TgZ(67,"ids-hyperlink",10),e.NdJ("click",function(l){return d.handleHyperLinkClick(l)}),e._uU(68,"Show More"),e.qZA(),e.TgZ(69,"ids-hyperlink",7),e.NdJ("click",function(l){return d.handleHyperLinkClick(l)}),e._uU(70,"Show Less"),e.qZA()(),e.TgZ(71,"ids-expandable-area",17)(72,"ids-toggle-button",18),e.NdJ("click",function(l){return d.handleToggleButton(l)}),e._UZ(73,"ids-icon",19),e.TgZ(74,"span"),e._uU(75,"Employee"),e.qZA()(),e.TgZ(76,"ids-text",5),e._uU(77,' Ubiquitous out-of-the-box, scalable; communities disintermediate beta-test, enable utilize markets dynamic infomediaries virtual data-driven synergistic aggregate infrastructures, "cross-platform, feeds bleeding-edge tagclouds." Platforms extend interactive B2C benchmark proactive, embrace e-markets, transition generate peer-to-peer. '),e.qZA()()()()()),2&s&&(e.xp6(13),e.Q6J("hitbox",!0),e.xp6(59),e.uIk("icon-on","caret-up")("icon-off","caret-down")("text-off","Employee")("text-on","Employee"))}})}return t})();var Z=n(8567);const a=[{path:"",component:(()=>{class t{constructor(){this.routes=a.filter(r=>""!==r.path)}ngAfterViewInit(){console.log("IdsExpandableArea AfterViewInit")}static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-ids-expandable-area"]],decls:1,vars:2,consts:[[3,"title","routes"]],template:function(s,d){1&s&&e._UZ(0,"app-demo-listing",0),2&s&&e.Q6J("title","Ids Expandable Area Examples")("routes",d.routes)},dependencies:[Z.J]})}return t})()},{path:"example",component:h}];let c=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[g.Bz.forChild(a),g.Bz]})}return t})(),u=(()=>{class t{static#e=this.\u0275fac=function(s){return new(s||t)};static#t=this.\u0275mod=e.oAB({type:t});static#i=this.\u0275inj=e.cJS({imports:[i.ez,c,m.H]})}return t})()}}]);