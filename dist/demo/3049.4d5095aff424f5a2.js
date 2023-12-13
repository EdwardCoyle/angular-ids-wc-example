"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3049],{8567:(f,p,a)=>{a.d(p,{J:()=>n});var l=a(5373),c=a(8291);const t=["table"];let n=(()=>{class m{constructor(s){this.router=s,this.columns=[]}ngAfterViewInit(){this.columns.push({id:"name",name:"Name",field:"path",sortable:!0,formatter:this.table?.nativeElement?.formatters?.hyperlink,href:`${this.router.url}/{{value}}`}),this.columns.push({id:"type",name:"Type",field:"data?.type",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.columns.push({id:"description",name:"Description",field:"data?.description",sortable:!0,formatter:this.table?.nativeElement?.formatters?.text}),this.table.nativeElement.columns=this.columns,this.table.nativeElement.data=this.routes}handleClick(s){if(s.preventDefault(),s.target.shadowRoot){const r=s.composedPath().filter(g=>"IDS-HYPERLINK"===g.tagName)[0]?.href;r&&this.router.navigateByUrl(`/${r}`)}}static#t=this.\u0275fac=function(d){return new(d||m)(l.Y36(c.F0))};static#e=this.\u0275cmp=l.Xpm({type:m,selectors:[["app-demo-listing"]],viewQuery:function(d,u){if(1&d&&l.Gf(t,5,l.SBq),2&d){let r;l.iGM(r=l.CRH())&&(u.table=r.first)}},hostBindings:function(d,u){1&d&&l.NdJ("click",function(g){return u.handleClick(g)},!1,l.evT)},inputs:{routes:"routes",title:"title"},decls:8,vars:1,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["cols","2","gap","md"],["font-size","20"],["list-style","true"],["table",""]],template:function(d,u){1&d&&(l.TgZ(0,"ids-container",0),l._UZ(1,"ids-theme-switcher",1),l.TgZ(2,"ids-layout-grid",2)(3,"ids-layout-grid-cell")(4,"ids-text",3),l._uU(5),l.qZA()()(),l._UZ(6,"ids-data-grid",4,5),l.qZA()),2&d&&(l.xp6(5),l.Oqu(u.title))}})}return m})()},9874:(f,p,a)=>{a.d(p,{H:()=>t});var l=a(6733),c=a(5373);let t=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=c.oAB({type:n});static#l=this.\u0275inj=c.cJS({imports:[l.ez]})}return n})()},3049:(f,p,a)=>{a.r(p),a.d(p,{IdsUploadModule:()=>g});var l=a(6733),c=a(8291),t=a(5373),n=a(8567);const d=[{path:"",component:(()=>{class e{constructor(){this.routes=d.filter(o=>""!==o.path)}ngAfterViewInit(){console.log("Ids Upload init")}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-ids-upload"]],decls:1,vars:2,consts:[[3,"title","routes"]],template:function(i,h){1&i&&t._UZ(0,"app-demo-listing",0),2&i&&t.Q6J("title","Ids Upload Examples")("routes",h.routes)},dependencies:[n.J]})}return e})()},{path:"example",component:(()=>{class e{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-example"]],decls:14,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["auto-fit","true","gap","md","padding-x","md"],["id","ids-upload-single","label","Single File"],["id","ids-upload-multiple","label","Multiple Files","multiple","true"],["id","ids-upload-multiple-limits","label","Multiple Files Accept (.cvs,.xls,.xlsx)","multiple","true","accept",".cvs,.xls,.xlsx"],["id","ids-upload-readonly","label","Readonly","readonly","true"],["id","ids-upload-disabled","label","Disabled","disabled","true","value","Readme.txt"],["id","ids-upload-dirty","label","Dirty Tracker","dirty-tracker","true"],["id","ids-upload-required","label","Required","validate","required"]],template:function(i,h){1&i&&(t.TgZ(0,"ids-container",0),t._UZ(1,"ids-theme-switcher",1),t.TgZ(2,"ids-layout-grid",2)(3,"ids-text",3),t._uU(4,"Ids Upload"),t.qZA()(),t.TgZ(5,"ids-layout-grid",4)(6,"ids-layout-grid-cell"),t._UZ(7,"ids-upload",5)(8,"ids-upload",6)(9,"ids-upload",7)(10,"ids-upload",8)(11,"ids-upload",9)(12,"ids-upload",10)(13,"ids-upload",11),t.qZA()()())}})}return e})()},{path:"sandbox",component:(()=>{class e{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-sandbox"]],decls:53,vars:0,consts:[["language","en","locale","en-US","padding","8","hidden",""],["mode","light"],["auto-fit","true","padding","md"],["font-size","12","type","h1"],["cols","3","gap","md"],["label","Single File"],["label","Multiple Files","multiple","true"],["label","Multiple Files Accept (.cvs,.xls,.xlsx)","multiple","true","accept",".cvs,.xls,.xlsx"],["label","Readonly","readonly","true"],["label","Disabled","disabled","true","value","Readme.txt"],["label","Dirty Tracker","dirty-tracker","true"],["label","Required","validate","required"],["label","Tabbable","tabbable",""],["label","Label State (hidden)","label-state","hidden"],["font-size","12","type","h2"],["label","Compact","compact","true"],["field-height","xs","label","Extra Small (compact)"],["field-height","sm","label","Small"],["field-height","md","label","Medium (default)"],["field-height","lg","label","Large"],["size","xs","label","Extra Small"],["size","sm","label","Small"],["size","mm","label","Small - Medium"],["size","md","label","Medium (default)"],["size","lg","label","Large"],["size","full","label","Full"]],template:function(i,h){1&i&&(t.TgZ(0,"ids-container",0),t._UZ(1,"ids-theme-switcher",1),t.TgZ(2,"ids-layout-grid",2)(3,"ids-text",3),t._uU(4,"Ids Upload - Sandbox"),t.qZA()(),t.TgZ(5,"ids-layout-grid",4)(6,"ids-layout-grid-cell"),t._UZ(7,"ids-upload",5),t.qZA(),t.TgZ(8,"ids-layout-grid-cell"),t._UZ(9,"ids-upload",6),t.qZA(),t.TgZ(10,"ids-layout-grid-cell"),t._UZ(11,"ids-upload",7),t.qZA(),t.TgZ(12,"ids-layout-grid-cell"),t._UZ(13,"ids-upload",8),t.qZA(),t.TgZ(14,"ids-layout-grid-cell"),t._UZ(15,"ids-upload",9),t.qZA(),t.TgZ(16,"ids-layout-grid-cell"),t._UZ(17,"ids-upload",10),t.qZA(),t.TgZ(18,"ids-layout-grid-cell"),t._UZ(19,"ids-upload",11),t.qZA(),t.TgZ(20,"ids-layout-grid-cell"),t._UZ(21,"ids-upload",12),t.qZA(),t.TgZ(22,"ids-layout-grid-cell"),t._UZ(23,"ids-upload",13),t.qZA()(),t.TgZ(24,"ids-layout-grid",2)(25,"ids-layout-grid-cell")(26,"ids-text",14),t._uU(27,"Ids Upload - Compact"),t.qZA()()(),t.TgZ(28,"ids-layout-grid",2)(29,"ids-layout-grid-cell"),t._UZ(30,"ids-upload",15),t.qZA()(),t.TgZ(31,"ids-layout-grid",2)(32,"ids-layout-grid-cell")(33,"ids-text",14),t._uU(34,"Ids Upload - Field Heights (Height)"),t.qZA()()(),t.TgZ(35,"ids-layout-grid",2)(36,"ids-layout-grid-cell"),t._UZ(37,"ids-upload",16)(38,"ids-upload",17)(39,"ids-upload",18)(40,"ids-upload",19),t.qZA()(),t.TgZ(41,"ids-layout-grid",2)(42,"ids-layout-grid-cell")(43,"ids-text",14),t._uU(44,"Ids Upload - Sizes (Width)"),t.qZA()()(),t.TgZ(45,"ids-layout-grid",2)(46,"ids-layout-grid-cell"),t._UZ(47,"ids-upload",20)(48,"ids-upload",21)(49,"ids-upload",22)(50,"ids-upload",23)(51,"ids-upload",24)(52,"ids-upload",25),t.qZA()()())}})}return e})()}];let u=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#l=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(d),c.Bz]})}return e})();var r=a(9874);let g=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#l=this.\u0275inj=t.cJS({imports:[l.ez,u,r.H]})}return e})()}}]);