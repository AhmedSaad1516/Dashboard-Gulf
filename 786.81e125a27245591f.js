"use strict";(self.webpackChunkDashboard_valuecleainig=self.webpackChunkDashboard_valuecleainig||[]).push([[786],{2786:(y,h,a)=>{a.r(h),a.d(h,{SilderModule:()=>d});var g=a(6895),p=a(9299),Z=a(2804),t=a(4650),f=a(1491),A=a(5938),v=a(4006),x=a(7185),m=a(4333),T=a(3081);function b(l,i){1&l&&(t.TgZ(0,"div",27),t._UZ(1,"img",28),t.qZA())}function _(l,i){if(1&l){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._UZ(12,"img",29),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"date"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"date"),t.qZA(),t.TgZ(19,"td")(20,"a",30),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.openFormEdit(r))}),t._UZ(21,"i",31),t.qZA()(),t.TgZ(22,"td")(23,"a",32),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.opendelet(r.id))}),t._UZ(24,"i",33),t.qZA(),t.TgZ(25,"div",34)(26,"div",35)(27,"div",36)(28,"div",37)(29,"h2",38),t._uU(30,"Warning"),t.qZA(),t.TgZ(31,"button",39)(32,"span",40),t._uU(33,"\xd7"),t.qZA()()(),t.TgZ(34,"div",41)(35,"div",42),t._uU(36," Are you sure you want to delete the item? "),t.qZA()(),t.TgZ(37,"div",43)(38,"button",44),t._uU(39,"Close"),t.qZA(),t.TgZ(40,"button",45),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.delete(r.id))}),t._uU(41,"Delete"),t.qZA()()()()()()()}if(2&l){const e=i.$implicit,o=i.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(null==e.translations[0]?null:e.translations[0].title),t.xp6(2),t.Oqu(null==e.translations[1]?null:e.translations[1].title),t.xp6(2),t.Oqu(null==e.translations[1]?null:e.translations[1].description),t.xp6(2),t.Oqu(null==e.translations[0]?null:e.translations[0].description),t.xp6(2),t.Q6J("src",e.image_path,t.LSH),t.xp6(2),t.Oqu(t.lcZ(15,8,e.created_at)),t.xp6(3),t.Oqu(t.lcZ(18,10,e.updated_at))}}const C=function(l,i){return{id:"item",itemsPerPage:10,currentPage:l,totalItems:i}};class c{constructor(i,e,o,n,r){this.serv=i,this.dialog=e,this.fb=o,this.toster=n,this.rotue=r,this.sildershow=[],this.img=!1,this.page=1,this.filter={page:this.page,limit:10}}ngOnInit(){this.getAllData()}getAllData(){this.img=!0,this.serv.getData(this.filter).subscribe(i=>{this.sildershow=i.sliders.data,this.total=i.sliders.total,console.log(this.total),this.img=!1})}openForm(){this.dialog.open(Z.F,{width:"750px",height:"600px",disableClose:!0}).afterClosed().subscribe(e=>{1==e&&this.getAllData()})}openFormEdit(i){this.dialog.open(Z.F,{width:"750px",height:"600px",disableClose:!0,data:i}).afterClosed().subscribe(o=>{1==o&&this.getAllData()})}opendelet(i){this.id=i}delete(i){this.img=!0,this.serv.delete(this.id).subscribe(e=>{this.toster.success(e.message,"",{disableTimeOut:!1,titleClass:"toastr_title",messageClass:"toastr_message",timeOut:3e3,onActivateTick:!1,toastClass:"ngx-toastr",progressBar:!0,easing:"ease-in",enableHtml:!0,newestOnTop:!0,tapToDismiss:!0,positionClass:"toast-top-right",closeButton:!0}),this.img=!1;let o=new Audio;o.src="../../../assets/notification-sound/login.wav",o.load(),o.play(),this.getAllData()},e=>{this.img=!1})}search(i){this.filter.search=i.value,clearTimeout(this.timeOutId),this.timeOutId=setTimeout(()=>{this.getAllData()},1500)}nav(i){this.page=i,this.getAllData()}}c.\u0275fac=function(i){return new(i||c)(t.Y36(f.s),t.Y36(A.uw),t.Y36(v.qu),t.Y36(x._W),t.Y36(p.F0))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-silder"]],decls:58,vars:17,consts:[[1,"wrapper"],["id","pre-loader",4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"content-wrapper"],[1,"page-title"],[1,"col-sm-6"],[1,"mb-0",2,"font-size","1.571rem","font-weight","800"],[1,"col-xl-12","mb-30"],[1,"card","card-statistics","h-100"],[1,"card-body"],[1,"d-block","d-md-flex","justify-content-between"],[1,"d-block"],[1,"card-title","pb-0","border-0"],[1,"d-block","d-md-flex","clearfix","sm-mt-20"],[1,"button","button-border","icon","small",2,"margin-right","13px","border-radius","38px",3,"click"],[1,"fa","fa-long-arrow-right"],[1,"widget-search","ml-0","clearfix"],[1,"fa","fa-search"],["type","search",1,"form-control",3,"placeholder","keyup"],[1,"table-responsive","mt-15"],[1,"table","center-aligned-table","mb-0"],[2,"border-top","1px solid #dee2e6"],[2,"text-align","center"],[4,"ngFor","ngForOf"],[1,"container"],["id","item",3,"pageChange"],["id","pre-loader"],["src","../../../assets/loader-01.svg","alt",""],["alt","",2,"width","90px","height","64px","border-radius","14px",3,"src"],[1,"pr-2",3,"click"],[1,"fa","fa-pencil"],["data-toggle","modal","data-target","#exampleModal",1,"my","btn","btn-outline-danger","btn-sm",3,"click"],[1,"fa","fa-trash-o","text-danger"],["id","exampleModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title",2,"border-bottom","2px outset red"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],["role","alert",1,"alert","alert-danger",2,"font-size","17px","text-align","center"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-primary"],["type","button","data-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t.YNc(1,b,2,0,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",3)(7,"div",6)(8,"h2",7),t._uU(9," Slider"),t.qZA()(),t._UZ(10,"div",6),t.qZA()(),t.TgZ(11,"div",3)(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12)(17,"h5",13),t._uU(18,"Data Slider"),t.qZA()(),t.TgZ(19,"div",14)(20,"a",15),t.NdJ("click",function(){return e.openForm()}),t._uU(21," Add Data"),t._UZ(22,"i",16),t.qZA(),t.TgZ(23,"div",17),t._UZ(24,"i",18),t.TgZ(25,"input",19),t.NdJ("keyup",function(n){return e.search(n.target)}),t.ALo(26,"translate"),t.qZA()()()(),t.TgZ(27,"div",20)(28,"table",21)(29,"thead")(30,"tr",22)(31,"th"),t._uU(32,"ID"),t.qZA(),t.TgZ(33,"th"),t._uU(34,"Title Ar"),t.qZA(),t.TgZ(35,"th"),t._uU(36,"Title En"),t.qZA(),t.TgZ(37,"th"),t._uU(38,"Description Ar"),t.qZA(),t.TgZ(39,"th"),t._uU(40,"Description En"),t.qZA(),t.TgZ(41,"th"),t._uU(42,"Image"),t.qZA(),t.TgZ(43,"th"),t._uU(44,"Created At"),t.qZA(),t.TgZ(45,"th"),t._uU(46,"Updated At"),t.qZA(),t.TgZ(47,"th"),t._uU(48),t.ALo(49,"translate"),t.qZA(),t.TgZ(50,"th",23),t._uU(51),t.ALo(52,"translate"),t.qZA()()(),t.TgZ(53,"tbody"),t.YNc(54,_,42,12,"tr",24),t.ALo(55,"paginate"),t.qZA()(),t.TgZ(56,"div",25)(57,"pagination-controls",26),t.NdJ("pageChange",function(n){return e.nav(n)}),t.qZA()()()()()()()()()()()),2&i&&(t.xp6(1),t.Q6J("ngIf",e.img),t.xp6(24),t.MGl("placeholder","",t.lcZ(26,5,"AllWorkers.Search"),"...."),t.xp6(23),t.Oqu(t.lcZ(49,7,"AllWorkers.Image")),t.xp6(3),t.Oqu(t.lcZ(52,9,"AllWorkers.Action")),t.xp6(3),t.Q6J("ngForOf",t.xi3(55,11,e.sildershow,t.WLB(14,C,e.page,e.total))))},dependencies:[g.sg,g.O5,m.LS,g.uU,T.X$,m._s],styles:[".my[_ngcontent-%COMP%]:hover{background:none!important}.my[_ngcontent-%COMP%]{border:none;font-size:10px}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:center}"]});const U=[{path:"",component:c}];class s{}s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[p.Bz.forChild(U),p.Bz]});var q=a(7775);class d{}d.\u0275fac=function(i){return new(i||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[g.ez,s,q.m,m.JX]})}}]);