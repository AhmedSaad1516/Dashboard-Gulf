"use strict";(self.webpackChunkDashboard_valuecleainig=self.webpackChunkDashboard_valuecleainig||[]).push([[932],{6932:(W,Z,i)=>{i.r(Z),i.d(Z,{AreaModule:()=>p});var g=i(6895),h=i(9299),l=i(4006),_=i(5938),t=i(4650),v=i(529);class d{constructor(e){this.http=e}getData(e){let a=new v.LE;return e.search&&(a=a.append("search",e.search)),this.http.get("https://gulf.carpulla.com/public/api/v1/dashboard/areas",{params:a})}createSilder(e){return this.http.post("https://gulf.carpulla.com/public/api/v1/dashboard/areas",e)}delete(e){return this.http.delete("https://gulf.carpulla.com/public/api/v1/dashboard/areas/"+e)}update(e,a){return this.http.post("https://gulf.carpulla.com/public/api/v1/dashboard/areas/"+a,e)}}d.\u0275fac=function(e){return new(e||d)(t.LFG(v.eN))},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"});var T=i(7185),x=i(8423),A=i(9549),C=i(4859),y=i(4144);function U(r,e){1&r&&(t.TgZ(0,"div",21),t._UZ(1,"img",22),t.qZA())}function q(r,e){1&r&&(t.TgZ(0,"h1",23),t._uU(1,"Add New Data"),t.qZA())}function I(r,e){1&r&&(t.TgZ(0,"h1",23),t._uU(1,"Update Data"),t.qZA())}function N(r,e){1&r&&(t.ynx(0),t._uU(1,"The ar.name field is required."),t.BQk())}function k(r,e){1&r&&(t.ynx(0),t._uU(1,"The ar.name must be at least 3 characters long."),t.BQk())}function w(r,e){if(1&r&&(t.TgZ(0,"mat-error",24),t.YNc(1,N,2,0,"ng-container",25),t.YNc(2,k,2,0,"ng-container",25),t.qZA()),2&r){const a=t.oxw();let n,o;t.xp6(1),t.Q6J("ngIf",null==(n=a.formSilder.get("ar.name"))||null==n.errors?null:n.errors.required),t.xp6(1),t.Q6J("ngIf",null==(o=a.formSilder.get("ar.name"))||null==o.errors?null:o.errors.minlength)}}function J(r,e){1&r&&(t.ynx(0),t._uU(1,"The en.name field is required."),t.BQk())}function S(r,e){1&r&&(t.ynx(0),t._uU(1,"The en.name must be at least 3 characters long."),t.BQk())}function D(r,e){if(1&r&&(t.TgZ(0,"mat-error",24),t.YNc(1,J,2,0,"ng-container",25),t.YNc(2,S,2,0,"ng-container",25),t.qZA()),2&r){const a=t.oxw();let n,o;t.xp6(1),t.Q6J("ngIf",null==(n=a.formSilder.get("en.name"))||null==n.errors?null:n.errors.required),t.xp6(1),t.Q6J("ngIf",null==(o=a.formSilder.get("en.name"))||null==o.errors?null:o.errors.minlength)}}function Y(r,e){1&r&&(t.TgZ(0,"button",26),t._uU(1,"Create"),t.qZA())}function F(r,e){if(1&r){const a=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(a);const o=t.oxw();return t.KtG(o.updateWorker())}),t._uU(1,"Update"),t.qZA()}}class u{constructor(e,a,n,o,s,m){this.data=e,this.fb=a,this.serv=n,this.toaster=o,this.sppiner=s,this.dialog=m,this.workers=[],this.show=!1,this.img=!1}ngOnInit(){this.createForm()}createForm(){this.formSilder=this.fb.group({ar:this.fb.group({name:[this.data?.translations[0]?.name||"",[l.kI.required,l.kI.minLength(3)]]}),en:this.fb.group({name:[this.data?.translations[1]?.name||"",[l.kI.required,l.kI.minLength(3)]]})})}createSilder(){if(this.formSilder.valid){const e=this.createFormData();this.img=!0,this.serv.createSilder(e).subscribe(a=>{this.img=!1,this.dialog.close(!0),this.toaster.success("created successfully","",{closeButton:!0,progressBar:!0,timeOut:3e3});let n=new Audio("../../../assets/notification-sound/login.wav");n.load(),n.play()},a=>{this.img=!1})}else this.formSilder.markAllAsTouched()}createFormData(){const e=new FormData;return e.append("ar[name]",this.formSilder.get("ar.name")?.value),e.append("en[name]",this.formSilder.get("en.name")?.value),e}updateWorker(){if(this.formSilder.valid){const e=this.createFormData();this.img=!0,this.serv.update(e,this.data.id).subscribe(a=>{this.img=!1,this.dialog.close(!0),this.toaster.success("updated successfully","",{closeButton:!0,progressBar:!0,timeOut:3e3});let n=new Audio("../../../assets/notification-sound/login.wav");n.load(),n.play()},a=>{this.img=!1})}else this.formSilder.markAllAsTouched()}close(){this.dialog.close()}}u.\u0275fac=function(e){return new(e||u)(t.Y36(_.WI),t.Y36(l.qu),t.Y36(d),t.Y36(T._W),t.Y36(x.t2),t.Y36(_.so))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-addarea"]],decls:29,vars:8,consts:[[1,"wrapper"],["id","pre-loader",4,"ngIf"],[1,"p-4"],[1,"d-flex","justify-content-between","align-items-center"],["class","m-0",4,"ngIf"],[1,"animate__animated","animate__fadeInDown",2,"margin-top","46px",3,"formGroup","ngSubmit"],[1,"row","mt-3"],["formGroupName","ar",1,"col-md-12"],[1,"col-md-12"],["appearance","outline",1,"w-100"],["for","arTitle"],["matInput","","id","arTitle","formControlName","name","placeholder","Name Ar"],["class","error",4,"ngIf"],["formGroupName","en",1,"col-md-12"],["for","enTitle"],["matInput","","id","enTitle","formControlName","name","placeholder","Name En"],[1,"tw-p-6"],[1,"d-flex","justify-content-center","align-items-center"],["mat-flat-button","","class","btn btn-success py-1 px-5 mx-2","type","submit",4,"ngIf"],["mat-flat-button","","class","btn btn-success py-1 px-5 mx-2","type","button",3,"click",4,"ngIf"],["mat-flat-button","","type","button",1,"btn","btn-danger","py-1","px-5",3,"click"],["id","pre-loader"],["src","assets/loader-01.svg","alt",""],[1,"m-0"],[1,"error"],[4,"ngIf"],["mat-flat-button","","type","submit",1,"btn","btn-success","py-1","px-5","mx-2"],["mat-flat-button","","type","button",1,"btn","btn-success","py-1","px-5","mx-2",3,"click"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,U,2,0,"div",1),t.qZA(),t.TgZ(2,"div",2)(3,"header",3),t.YNc(4,q,2,0,"h1",4),t.YNc(5,I,2,0,"h1",4),t.qZA(),t._UZ(6,"hr"),t.TgZ(7,"form",5),t.NdJ("ngSubmit",function(){return a.createSilder()}),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"mat-form-field",9)(12,"mat-label",10),t._uU(13,"Name Ar"),t.qZA(),t._UZ(14,"input",11),t.YNc(15,w,3,2,"mat-error",12),t.qZA()()(),t.TgZ(16,"div",13)(17,"div",8)(18,"mat-form-field",9)(19,"mat-label",14),t._uU(20,"English Name"),t.qZA(),t._UZ(21,"input",15),t.YNc(22,D,3,2,"mat-error",12),t.qZA()()()(),t.TgZ(23,"footer",16)(24,"div",17),t.YNc(25,Y,2,0,"button",18),t.YNc(26,F,2,0,"button",19),t.TgZ(27,"button",20),t.NdJ("click",function(){return a.close()}),t._uU(28,"Close"),t.qZA()()()()()),2&e){let n,o;t.xp6(1),t.Q6J("ngIf",a.img),t.xp6(3),t.Q6J("ngIf",!a.data),t.xp6(1),t.Q6J("ngIf",a.data),t.xp6(2),t.Q6J("formGroup",a.formSilder),t.xp6(8),t.Q6J("ngIf",(null==(n=a.formSilder.get("ar.name"))?null:n.invalid)&&(null==(n=a.formSilder.get("ar.name"))?null:n.touched)),t.xp6(7),t.Q6J("ngIf",(null==(o=a.formSilder.get("en.name"))?null:o.invalid)&&(null==(o=a.formSilder.get("en.name"))?null:o.touched)),t.xp6(3),t.Q6J("ngIf",!a.data),t.xp6(1),t.Q6J("ngIf",a.data)}},dependencies:[g.O5,A.TO,A.KE,A.hX,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,l.x0,C.lW,y.Nt]});var b=i(4333),O=i(3081);function Q(r,e){1&r&&(t.TgZ(0,"div",27),t._UZ(1,"img",28),t.qZA())}function B(r,e){if(1&r){const a=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td")(14,"a",29),t.NdJ("click",function(){const s=t.CHM(a).$implicit,m=t.oxw();return t.KtG(m.openFormEdit(s))}),t._UZ(15,"i",30),t.qZA()(),t.TgZ(16,"td")(17,"a",31),t.NdJ("click",function(){const s=t.CHM(a).$implicit,m=t.oxw();return t.KtG(m.opendelet(s.id))}),t._UZ(18,"i",32),t.qZA(),t.TgZ(19,"div",33)(20,"div",34)(21,"div",35)(22,"div",36)(23,"h2",37),t._uU(24,"Warning"),t.qZA(),t.TgZ(25,"button",38)(26,"span",39),t._uU(27,"\xd7"),t.qZA()()(),t.TgZ(28,"div",40)(29,"div",41),t._uU(30," Are you sure you want to delete the item? "),t.qZA()(),t.TgZ(31,"div",42)(32,"button",43),t._uU(33,"Close"),t.qZA(),t.TgZ(34,"button",44),t.NdJ("click",function(){const s=t.CHM(a).$implicit,m=t.oxw();return t.KtG(m.delete(s.id))}),t._uU(35,"Delete"),t.qZA()()()()()()()}if(2&r){const a=e.$implicit,n=e.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(null==a.translations[0]?null:a.translations[0].name),t.xp6(2),t.Oqu(null==a.translations[1]?null:a.translations[1].name),t.xp6(2),t.Oqu(t.lcZ(9,5,a.created_at)),t.xp6(3),t.Oqu(t.lcZ(12,7,a.updated_at))}}const L=function(r,e){return{id:"item",itemsPerPage:10,currentPage:r,totalItems:e}};class f{constructor(e,a,n,o,s){this.serv=e,this.dialog=a,this.fb=n,this.toster=o,this.rotue=s,this.sildershow=[],this.img=!1,this.page=1,this.filter={page:this.page,limit:10}}ngOnInit(){this.getAllData()}getAllData(){this.img=!0,this.serv.getData(this.filter).subscribe(e=>{this.sildershow=e.sliders.data,this.total=e.sliders.total,console.log(this.total),this.img=!1})}openForm(){this.dialog.open(u,{width:"500px",height:"400px",disableClose:!0}).afterClosed().subscribe(a=>{1==a&&this.getAllData()})}openFormEdit(e){this.dialog.open(u,{width:"500px",height:"400px",disableClose:!0,data:e}).afterClosed().subscribe(n=>{1==n&&this.getAllData()})}opendelet(e){this.id=e}delete(e){this.img=!0,this.serv.delete(this.id).subscribe(a=>{this.toster.success(a.message,"",{disableTimeOut:!1,titleClass:"toastr_title",messageClass:"toastr_message",timeOut:3e3,onActivateTick:!1,toastClass:"ngx-toastr",progressBar:!0,easing:"ease-in",enableHtml:!0,newestOnTop:!0,tapToDismiss:!0,positionClass:"toast-top-right",closeButton:!0}),this.img=!1;let n=new Audio;n.src="../../../assets/notification-sound/login.wav",n.load(),n.play(),this.getAllData()},a=>{this.img=!1})}search(e){this.filter.search=e.value,clearTimeout(this.timeOutId),this.timeOutId=setTimeout(()=>{this.getAllData()},1500)}nav(e){this.page=e,this.getAllData()}}f.\u0275fac=function(e){return new(e||f)(t.Y36(d),t.Y36(_.uw),t.Y36(l.qu),t.Y36(T._W),t.Y36(h.F0))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-area"]],decls:49,vars:14,consts:[[1,"wrapper"],["id","pre-loader",4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"content-wrapper"],[1,"page-title"],[1,"col-sm-6"],[1,"mb-0",2,"font-size","1.571rem","font-weight","800"],[1,"col-xl-12","mb-30"],[1,"card","card-statistics","h-100"],[1,"card-body"],[1,"d-block","d-md-flex","justify-content-between"],[1,"d-block"],[1,"card-title","pb-0","border-0"],[1,"d-block","d-md-flex","clearfix","sm-mt-20"],[1,"button","button-border","icon","small",2,"margin-right","13px","border-radius","38px",3,"click"],[1,"fa","fa-long-arrow-right"],[1,"widget-search","ml-0","clearfix"],[1,"fa","fa-search"],["type","search",1,"form-control",3,"placeholder","keyup"],[1,"table-responsive","mt-15"],[1,"table","center-aligned-table","mb-0"],[2,"border-top","1px solid #dee2e6"],[2,"text-align","center"],[4,"ngFor","ngForOf"],[1,"container"],["id","item",3,"pageChange"],["id","pre-loader"],["src","assets/loader-01.svg","alt",""],[1,"pr-2",3,"click"],[1,"fa","fa-pencil"],["data-toggle","modal","data-target","#exampleModal",1,"my","btn","btn-outline-danger","btn-sm",3,"click"],[1,"fa","fa-trash-o","text-danger"],["id","exampleModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title",2,"border-bottom","2px outset red"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],["role","alert",1,"alert","alert-danger",2,"font-size","17px","text-align","center"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-primary"],["type","button","data-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.YNc(1,Q,2,0,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",3)(7,"div",6)(8,"h2",7),t._uU(9," Area"),t.qZA()(),t._UZ(10,"div",6),t.qZA()(),t.TgZ(11,"div",3)(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12)(17,"h5",13),t._uU(18,"Data Area"),t.qZA()(),t.TgZ(19,"div",14)(20,"a",15),t.NdJ("click",function(){return a.openForm()}),t._uU(21," Add Data"),t._UZ(22,"i",16),t.qZA(),t.TgZ(23,"div",17),t._UZ(24,"i",18),t.TgZ(25,"input",19),t.NdJ("keyup",function(o){return a.search(o.target)}),t.ALo(26,"translate"),t.qZA()()()(),t.TgZ(27,"div",20)(28,"table",21)(29,"thead")(30,"tr",22)(31,"th"),t._uU(32,"ID"),t.qZA(),t.TgZ(33,"th"),t._uU(34,"Area Ar"),t.qZA(),t.TgZ(35,"th"),t._uU(36,"Area En"),t.qZA(),t.TgZ(37,"th"),t._uU(38,"Created At"),t.qZA(),t.TgZ(39,"th"),t._uU(40,"Updated At"),t.qZA(),t.TgZ(41,"th",23),t._uU(42),t.ALo(43,"translate"),t.qZA()()(),t.TgZ(44,"tbody"),t.YNc(45,B,36,9,"tr",24),t.ALo(46,"paginate"),t.qZA()(),t.TgZ(47,"div",25)(48,"pagination-controls",26),t.NdJ("pageChange",function(o){return a.nav(o)}),t.qZA()()()()()()()()()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",a.img),t.xp6(24),t.MGl("placeholder","",t.lcZ(26,4,"AllWorkers.Search"),"...."),t.xp6(17),t.Oqu(t.lcZ(43,6,"AllWorkers.Action")),t.xp6(3),t.Q6J("ngForOf",t.xi3(46,8,a.sildershow,t.WLB(11,L,a.page,a.total))))},dependencies:[g.sg,g.O5,b.LS,g.uU,O.X$,b._s]});const M=[{path:"",component:f}];class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[h.Bz.forChild(M),h.Bz]});var G=i(7775);class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[g.ez,c,G.m,b.JX]})}}]);