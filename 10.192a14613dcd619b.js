"use strict";(self.webpackChunkDashboard_valuecleainig=self.webpackChunkDashboard_valuecleainig||[]).push([[10],{7010:(C,g,i)=>{i.r(g),i.d(g,{ContactsModule:()=>l});var c=i(6895),h=i(9299),t=i(4650),m=i(529);class o{constructor(e){this.http=e,this.apiUrl="https://gulf.carpulla.com/public/api/v1/dashboard/contacts"}getData(e){let a=new m.LE;return e.page&&(a=a.append("page",e.page.toString())),e.limit&&(a=a.append("limit",e.limit.toString())),e.search&&(a=a.append("search",e.search)),this.http.get(this.apiUrl,{params:a})}}o.\u0275fac=function(e){return new(e||o)(t.LFG(m.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"});var d=i(4333);function Z(n,e){1&n&&(t.TgZ(0,"div",24),t._UZ(1,"img",25),t.qZA())}function f(n,e){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"date"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"date"),t.qZA(),t._UZ(19,"td"),t.qZA()),2&n){const a=e.$implicit,p=e.index;t.xp6(2),t.Oqu(p+1),t.xp6(2),t.Oqu(null==a?null:a.first_name),t.xp6(2),t.Oqu(null==a?null:a.last_name),t.xp6(2),t.Oqu(null==a?null:a.email),t.xp6(2),t.Oqu(null==a?null:a.phone),t.xp6(2),t.hij(" ",null==a?null:a.message," "),t.xp6(2),t.Oqu(t.lcZ(15,8,a.created_at)),t.xp6(3),t.Oqu(t.lcZ(18,10,a.updated_at))}}const v=function(n,e){return{id:"item",itemsPerPage:10,currentPage:n,totalItems:e}};class r{constructor(e){this.serv=e,this.sildershow=[],this.img=!1,this.page=1,this.filter={page:this.page,limit:10},this.total=0}ngOnInit(){this.getAllData()}getAllData(){this.img=!0,this.serv.getData(this.filter).subscribe(e=>{this.sildershow=e.contacts.data,this.total=e.contacts.total,this.img=!1})}search(e){this.filter.search=e.value,clearTimeout(this.timeOutId),this.timeOutId=setTimeout(()=>{this.getAllData()},1500)}nav(e){this.page=e,this.filter.page=this.page,this.getAllData()}}r.\u0275fac=function(e){return new(e||r)(t.Y36(o))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-contacts"]],decls:48,vars:8,consts:[[1,"wrapper"],["id","pre-loader",4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"content-wrapper"],[1,"page-title"],[1,"col-sm-6"],[1,"mb-0",2,"font-size","1.571rem","font-weight","800"],[1,"col-xl-12","mb-30"],[1,"card","card-statistics","h-100"],[1,"card-body"],[1,"d-block","d-md-flex","justify-content-between"],[1,"d-block"],[1,"card-title","pb-0","border-0"],[1,"d-block","d-md-flex","clearfix","sm-mt-20"],[1,"widget-search","ml-0","clearfix"],[1,"fa","fa-search"],["type","search","placeholder","Search....",1,"form-control",3,"keyup"],[1,"table-responsive","mt-15"],[1,"table","center-aligned-table","mb-0"],[2,"border-top","1px solid #dee2e6"],[4,"ngFor","ngForOf"],[1,"container"],["id","item",3,"pageChange"],["id","pre-loader"],["src","assets/loader-01.svg","alt",""]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.YNc(1,Z,2,0,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",3)(7,"div",6)(8,"h2",7),t._uU(9," Contacts"),t.qZA()(),t._UZ(10,"div",6),t.qZA()(),t.TgZ(11,"div",3)(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12)(17,"h5",13),t._uU(18,"Data Contacts"),t.qZA()(),t.TgZ(19,"div",14)(20,"div",15),t._UZ(21,"i",16),t.TgZ(22,"input",17),t.NdJ("keyup",function(u){return a.search(u.target)}),t.qZA()()()(),t.TgZ(23,"div",18)(24,"table",19)(25,"thead")(26,"tr",20)(27,"th"),t._uU(28,"ID"),t.qZA(),t.TgZ(29,"th"),t._uU(30,"First Name"),t.qZA(),t.TgZ(31,"th"),t._uU(32,"Last Name"),t.qZA(),t.TgZ(33,"th"),t._uU(34,"Email"),t.qZA(),t.TgZ(35,"th"),t._uU(36,"Phone"),t.qZA(),t.TgZ(37,"th"),t._uU(38,"Message"),t.qZA(),t.TgZ(39,"th"),t._uU(40,"Created At"),t.qZA(),t.TgZ(41,"th"),t._uU(42,"Updated At"),t.qZA()()(),t.TgZ(43,"tbody"),t.YNc(44,f,20,12,"tr",21),t.ALo(45,"paginate"),t.qZA()(),t.TgZ(46,"div",22)(47,"pagination-controls",23),t.NdJ("pageChange",function(u){return a.nav(u)}),t.qZA()()()()()()()()()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",a.img),t.xp6(43),t.Q6J("ngForOf",t.xi3(45,2,a.sildershow,t.WLB(5,v,a.page,a.total))))},dependencies:[c.sg,c.O5,d.LS,c.uU,d._s]});const A=[{path:"",component:r}];class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[h.Bz.forChild(A),h.Bz]});var T=i(7775);class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[c.ez,s,T.m,d.JX]})}}]);