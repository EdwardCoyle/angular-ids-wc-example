"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1186],{8567:(_,m,o)=>{o.d(m,{J:()=>l});var e=o(5373),u=o(8291);const t=["table"];let l=(()=>{class p{constructor(r){this.router=r,this.columns=[]}ngAfterViewInit(){this.columns.push({id:"name",name:"Name",field:"path",sortable:!0,formatter:this.table?.nativeElement?.formatters?.hyperlink,href:`${this.router.url}/{{value}}`}),this.columns.push({id:"type",name:"Type",field:"data?.type",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.columns.push({id:"description",name:"Description",field:"data?.description",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.table.nativeElement.columns=this.columns,this.table.nativeElement.data=this.routes}handleClick(r){if(r.preventDefault(),r.target.shadowRoot){const d=r.composedPath().filter(h=>"IDS-HYPERLINK"===h.tagName)[0]?.href;d&&this.router.navigateByUrl(`/${d}`)}}static#t=this.\u0275fac=function(s){return new(s||p)(e.Y36(u.F0))};static#e=this.\u0275cmp=e.Xpm({type:p,selectors:[["app-demo-listing"]],viewQuery:function(s,c){if(1&s&&e.Gf(t,5,e.SBq),2&s){let d;e.iGM(d=e.CRH())&&(c.table=d.first)}},hostBindings:function(s,c){1&s&&e.NdJ("click",function(h){return c.handleClick(h)},!1,e.evT)},inputs:{routes:"routes",title:"title"},decls:8,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["cols","2","gap","md"],["font-size","20"],["list-style","true"],["table",""]],template:function(s,c){1&s&&(e.TgZ(0,"ids-container",0),e._UZ(1,"ids-theme-switcher",1),e.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),e._uU(5),e.qZA()()(),e._UZ(6,"ids-data-grid",4,5),e.qZA()),2&s&&(e.xp6(5),e.Oqu(c.title))}})}return p})()},9874:(_,m,o)=>{o.d(m,{H:()=>t});var e=o(6733),u=o(5373);let t=(()=>{class l{static#t=this.\u0275fac=function(r){return new(r||l)};static#e=this.\u0275mod=u.oAB({type:l});static#n=this.\u0275inj=u.cJS({imports:[e.ez]})}return l})()},1186:(_,m,o)=>{o.r(m),o.d(m,{IdsErrorPageModule:()=>h});var e=o(6733),u=o(8291),t=o(5373),l=o(8567);const E=["errorPage"],s=[{path:"",component:(()=>{class n{constructor(){this.routes=s.filter(a=>""!==a.path)}ngAfterViewInit(){console.log("Ids Error Page init")}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-ids-error-page"]],decls:1,vars:2,consts:[[3,"title","routes"]],template:function(i,g){1&i&&t._UZ(0,"app-demo-listing",0),2&i&&t.Q6J("title","Ids Error Page Examples")("routes",g.routes)},dependencies:[l.J]})}return n})()},{path:"example",component:(()=>{class n{constructor(){}ngOnInit(){console.log("IdsErrorPage example OnInit")}ngAfterViewInit(){this.errorPage.nativeElement.popup.animated=!1}handleActionButton(){this.errorPage.nativeElement.popup.animated=!0,this.errorPage.nativeElement.visible=!1}handleBeforeHide(a){a.detail.response(!1)}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-example"]],viewQuery:function(i,g){if(1&i&&t.Gf(E,5,t.SBq),2&i){let f;t.iGM(f=t.CRH())&&(g.errorPage=f.first)}},decls:10,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["id","error-page-1","fullsize","","icon","empty-error-loading","label","Access Denied","description","Configuration Manager access has been denied.","button-text","Return",3,"action-button","handleBeforeHide"],["errorPage",""]],template:function(i,g){1&i&&(t.TgZ(0,"ids-container",0),t._UZ(1,"ids-theme-switcher",1),t.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),t._uU(5,"IDS Error Page"),t.qZA()()(),t.TgZ(6,"ids-layout-grid",2)(7,"ids-layout-grid-cell")(8,"ids-error-page",4,5),t.NdJ("action-button",function(){return g.handleActionButton()})("handleBeforeHide",function(y){return g.handleBeforeHide(y)}),t.qZA()()()()),2&i&&(t.xp6(8),t.uIk("visible",!0))}})}return n})()}];let c=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(s),u.Bz]})}return n})();var d=o(9874);let h=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[e.ez,c,d.H]})}return n})()}}]);