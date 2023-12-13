"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7152],{8567:(_,p,n)=>{n.d(p,{J:()=>c});var e=n(5373),d=n(8291);const t=["table"];let c=(()=>{class h{constructor(s){this.router=s,this.columns=[]}ngAfterViewInit(){this.columns.push({id:"name",name:"Name",field:"path",sortable:!0,formatter:this.table?.nativeElement?.formatters?.hyperlink,href:`${this.router.url}/{{value}}`}),this.columns.push({id:"type",name:"Type",field:"data?.type",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.columns.push({id:"description",name:"Description",field:"data?.description",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.table.nativeElement.columns=this.columns,this.table.nativeElement.data=this.routes}handleClick(s){if(s.preventDefault(),s.target.shadowRoot){const u=s.composedPath().filter(g=>"IDS-HYPERLINK"===g.tagName)[0]?.href;u&&this.router.navigateByUrl(`/${u}`)}}static#t=this.\u0275fac=function(a){return new(a||h)(e.Y36(d.F0))};static#e=this.\u0275cmp=e.Xpm({type:h,selectors:[["app-demo-listing"]],viewQuery:function(a,l){if(1&a&&e.Gf(t,5,e.SBq),2&a){let u;e.iGM(u=e.CRH())&&(l.table=u.first)}},hostBindings:function(a,l){1&a&&e.NdJ("click",function(g){return l.handleClick(g)},!1,e.evT)},inputs:{routes:"routes",title:"title"},decls:8,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["cols","2","gap","md"],["font-size","20"],["list-style","true"],["table",""]],template:function(a,l){1&a&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),e._uU(5),e.qZA()()(),e._UZ(6,"ids-data-grid",4,5),e.qZA()),2&a&&(e.xp6(5),e.Oqu(l.title))}})}return h})()},9874:(_,p,n)=>{n.d(p,{H:()=>t});var e=n(6733),d=n(5373);let t=(()=>{class c{static#t=this.\u0275fac=function(s){return new(s||c)};static#e=this.\u0275mod=d.oAB({type:c});static#o=this.\u0275inj=d.cJS({imports:[e.ez]})}return c})()},7152:(_,p,n)=>{n.r(p),n.d(p,{IdsAboutModule:()=>b});var e=n(6733),d=n(8291),t=n(5373),c=n(8567);const h=["table"],s=["aboutModal"],l=[{path:"",component:(()=>{class o{constructor(){this.routes=l.filter(r=>""!==r.path)}ngAfterViewInit(){console.log("Ids About init")}static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-ids-about"]],viewQuery:function(i,m){if(1&i&&t.Gf(h,5,t.SBq),2&i){let f;t.iGM(f=t.CRH())&&(m.table=f.first)}},decls:1,vars:2,consts:[[3,"title","routes"]],template:function(i,m){1&i&&t._UZ(0,"app-demo-listing",0),2&i&&t.Q6J("title","Ids About Examples")("routes",m.routes)},dependencies:[c.J]})}return o})()},{path:"example",component:(()=>{class o{constructor(){}ngAfterViewInit(){console.log("example AfterViewInit")}handleShow(){this.aboutModal.nativeElement.show()}static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-example"]],viewQuery:function(i,m){if(1&i&&t.Gf(s,5,t.SBq),2&i){let f;t.iGM(f=t.CRH())&&(m.aboutModal=f.first)}},decls:17,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["id","about-example","product-name","Controls Example Application","product-version","Version No. XX"],["aboutModal",""],["slot","icon","icon","logo","viewbox","0 0 35 34","size","xxl"],["id","about-example-name","slot","appName","type","h1","font-size","24","font-weight","bold"],["id","about-example-content","slot","content","type","p"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["appearance","secondary","id","about-example-trigger",3,"click"]],template:function(i,m){1&i&&(t.TgZ(0,"ids-container",0),t._UZ(1,"ids-theme-switcher",1),t.TgZ(2,"ids-about",2,3),t._UZ(4,"ids-icon",4),t.TgZ(5,"ids-text",5),t._uU(6,"IDS Enterprise"),t.qZA(),t.TgZ(7,"ids-text",6),t._uU(8,"Fashionable components for fashionable applications."),t.qZA()(),t.TgZ(9,"ids-layout-grid",7)(10,"ids-layout-grid-cell")(11,"ids-text",8),t._uU(12,"About"),t.qZA()()(),t.TgZ(13,"ids-layout-grid",7)(14,"ids-layout-grid-cell")(15,"ids-button",9),t.NdJ("click",function(){return m.handleShow()}),t._uU(16," Show About Screen "),t.qZA()()()())}})}return o})(),data:{name:"Example",type:"Main Example",description:"Shows main example"}}];let u=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(l),d.Bz]})}return o})();var g=n(9874);let b=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[e.ez,u,g.H]})}return o})()}}]);