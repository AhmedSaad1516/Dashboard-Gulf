"use strict";(self.webpackChunkDashboard_valuecleainig=self.webpackChunkDashboard_valuecleainig||[]).push([[850],{1850:(U,g,i)=>{i.r(g),i.d(g,{ChancesModule:()=>l});var c=i(6895),p=i(9299),t=i(4650),m=i(529);class s{constructor(e){this.http=e}getData(e){let a=new m.LE;return e.search&&(a=a.append("search",e.search)),this.http.get("https://gulf.carpulla.com/public/api/v1/dashboard/chances",{params:a})}}s.\u0275fac=function(e){return new(e||s)(t.LFG(m.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"});var d=i(4333),Z=i(3081);function f(n,e){1&n&&(t.TgZ(0,"div",24),t._UZ(1,"img",25),t.qZA())}function v(n,e){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._UZ(14,"img",26),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.ALo(20,"date"),t.qZA(),t._UZ(21,"td"),t.qZA()),2&n){const a=e.$implicit,h=e.index;t.xp6(2),t.Oqu(h+1),t.xp6(2),t.Oqu(null==a?null:a.first_name),t.xp6(2),t.Oqu(null==a?null:a.last_name),t.xp6(2),t.Oqu(null==a?null:a.email),t.xp6(2),t.Oqu(null==a?null:a.phone),t.xp6(2),t.hij(" ",null==a?null:a.message," "),t.xp6(2),t.Q6J("src",a.images_path,t.LSH),t.xp6(2),t.Oqu(t.lcZ(17,9,a.created_at)),t.xp6(3),t.Oqu(t.lcZ(20,11,a.updated_at))}}const A=function(n,e){return{id:"item",itemsPerPage:10,currentPage:n,totalItems:e}};class r{constructor(e){this.serv=e,this.sildershow=[],this.img=!1,this.page=1,this.filter={page:this.page,limit:10}}ngOnInit(){this.getAllData()}getAllData(){this.img=!0,this.serv.getData(this.filter).subscribe(e=>{this.sildershow=e.contacts.data,this.total=e.contacts.total,console.log(this.total),this.img=!1})}search(e){this.filter.search=e.value,clearTimeout(this.timeOutId),this.timeOutId=setTimeout(()=>{this.getAllData()},1500)}nav(e){this.page=e,this.getAllData()}}r.\u0275fac=function(e){return new(e||r)(t.Y36(s))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-chances"]],decls:51,vars:11,consts:[[1,"wrapper"],["id","pre-loader",4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"content-wrapper"],[1,"page-title"],[1,"col-sm-6"],[1,"mb-0",2,"font-size","1.571rem","font-weight","800"],[1,"col-xl-12","mb-30"],[1,"card","card-statistics","h-100"],[1,"card-body"],[1,"d-block","d-md-flex","justify-content-between"],[1,"d-block"],[1,"card-title","pb-0","border-0"],[1,"d-block","d-md-flex","clearfix","sm-mt-20"],[1,"widget-search","ml-0","clearfix"],[1,"fa","fa-search"],["type","search",1,"form-control",3,"placeholder","keyup"],[1,"table-responsive","mt-15"],[1,"table","center-aligned-table","mb-0"],[2,"border-top","1px solid #dee2e6"],[4,"ngFor","ngForOf"],[1,"container"],["id","item",3,"pageChange"],["id","pre-loader"],["src","../../../assets/loader-01.svg","alt",""],["alt","",2,"width","90px","height","64px","border-radius","14px",3,"src"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.YNc(1,f,2,0,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",3)(7,"div",6)(8,"h2",7),t._uU(9," Chances"),t.qZA()(),t._UZ(10,"div",6),t.qZA()(),t.TgZ(11,"div",3)(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12)(17,"h5",13),t._uU(18,"Data Chances"),t.qZA()(),t.TgZ(19,"div",14)(20,"div",15),t._UZ(21,"i",16),t.TgZ(22,"input",17),t.NdJ("keyup",function(u){return a.search(u.target)}),t.ALo(23,"translate"),t.qZA()()()(),t.TgZ(24,"div",18)(25,"table",19)(26,"thead")(27,"tr",20)(28,"th"),t._uU(29,"ID"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"First Name"),t.qZA(),t.TgZ(32,"th"),t._uU(33,"Last Name"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Email"),t.qZA(),t.TgZ(36,"th"),t._uU(37,"Phone"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"Message"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"Images"),t.qZA(),t.TgZ(42,"th"),t._uU(43,"Created At"),t.qZA(),t.TgZ(44,"th"),t._uU(45,"Updated At"),t.qZA()()(),t.TgZ(46,"tbody"),t.YNc(47,v,22,13,"tr",21),t.ALo(48,"paginate"),t.qZA()(),t.TgZ(49,"div",22)(50,"pagination-controls",23),t.NdJ("pageChange",function(u){return a.nav(u)}),t.qZA()()()()()()()()()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",a.img),t.xp6(21),t.MGl("placeholder","",t.lcZ(23,3,"AllWorkers.Search"),"...."),t.xp6(25),t.Q6J("ngForOf",t.xi3(48,5,a.sildershow,t.WLB(8,A,a.page,a.total))))},dependencies:[c.sg,c.O5,d.LS,c.uU,Z.X$,d._s]});const T=[{path:"",component:r}];class o{}o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(T),p.Bz]});var C=i(7775);class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[c.ez,o,C.m,d.JX]})}}]);