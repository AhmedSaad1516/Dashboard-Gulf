"use strict";(self.webpackChunkDashboard_valuecleainig=self.webpackChunkDashboard_valuecleainig||[]).push([[674],{7674:(P,Z,l)=>{l.r(Z),l.d(Z,{ActivitiesModule:()=>p});var g=l(6895),h=l(9299),a=l(4006),_=l(5938),t=l(4650),T=l(529);class c{constructor(i){this.http=i}getData(i){let e=new T.LE;return i.search&&(e=e.append("search",i.search)),this.http.get("https://gulfland.gulfsaudi.com/public/api/dashboard/activities",{params:e})}create(i){return this.http.post("https://gulfland.gulfsaudi.com/public/api/dashboard/activities",i)}delete(i){return this.http.delete("https://gulfland.gulfsaudi.com/public/api/dashboard/activities/"+i)}update(i,e){return this.http.post("https://gulfland.gulfsaudi.com/public/api/dashboard/activities/"+e,i)}}c.\u0275fac=function(i){return new(i||c)(t.LFG(T.eN))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});var b=l(7185),x=l(8423),v=l(9549),C=l(4859),q=l(4144);function U(n,i){1&n&&(t.TgZ(0,"div",29),t._UZ(1,"img",30),t.qZA())}function y(n,i){1&n&&(t.TgZ(0,"h1",31),t._uU(1,"Add New Data"),t.qZA())}function I(n,i){1&n&&(t.TgZ(0,"h1",31),t._uU(1,"Update Data"),t.qZA())}function S(n,i){1&n&&(t.ynx(0),t._uU(1,"The ar.title field is required."),t.BQk())}function N(n,i){1&n&&(t.ynx(0),t._uU(1,"The ar.title must be at least 3 characters long."),t.BQk())}function k(n,i){if(1&n&&(t.TgZ(0,"mat-error",32),t.YNc(1,S,2,0,"ng-container",33),t.YNc(2,N,2,0,"ng-container",33),t.qZA()),2&n){const e=t.oxw();let r,o;t.xp6(1),t.Q6J("ngIf",null==(r=e.formSilder.get("ar.title"))||null==r.errors?null:r.errors.required),t.xp6(1),t.Q6J("ngIf",null==(o=e.formSilder.get("ar.title"))||null==o.errors?null:o.errors.minlength)}}function D(n,i){1&n&&(t.ynx(0),t._uU(1,"The ar.description field is required."),t.BQk())}function J(n,i){1&n&&(t.ynx(0),t._uU(1,"The ar.description must be at least 3 characters long."),t.BQk())}function w(n,i){if(1&n&&(t.TgZ(0,"mat-error",32),t.YNc(1,D,2,0,"ng-container",33),t.YNc(2,J,2,0,"ng-container",33),t.qZA()),2&n){const e=t.oxw();let r,o;t.xp6(1),t.Q6J("ngIf",null==(r=e.formSilder.get("ar.description"))||null==r.errors?null:r.errors.required),t.xp6(1),t.Q6J("ngIf",null==(o=e.formSilder.get("ar.description"))||null==o.errors?null:o.errors.minlength)}}function Y(n,i){1&n&&(t.ynx(0),t._uU(1,"The en.title field is required."),t.BQk())}function Q(n,i){1&n&&(t.ynx(0),t._uU(1,"The en.title must be at least 3 characters long."),t.BQk())}function F(n,i){if(1&n&&(t.TgZ(0,"mat-error",32),t.YNc(1,Y,2,0,"ng-container",33),t.YNc(2,Q,2,0,"ng-container",33),t.qZA()),2&n){const e=t.oxw();let r,o;t.xp6(1),t.Q6J("ngIf",null==(r=e.formSilder.get("en.title"))||null==r.errors?null:r.errors.required),t.xp6(1),t.Q6J("ngIf",null==(o=e.formSilder.get("en.title"))||null==o.errors?null:o.errors.minlength)}}function O(n,i){1&n&&(t.ynx(0),t._uU(1,"The en.description field is required."),t.BQk())}function B(n,i){1&n&&(t.ynx(0),t._uU(1,"The en.description must be at least 3 characters long."),t.BQk())}function L(n,i){if(1&n&&(t.TgZ(0,"mat-error",32),t.YNc(1,O,2,0,"ng-container",33),t.YNc(2,B,2,0,"ng-container",33),t.qZA()),2&n){const e=t.oxw();let r,o;t.xp6(1),t.Q6J("ngIf",null==(r=e.formSilder.get("en.description"))||null==r.errors?null:r.errors.required),t.xp6(1),t.Q6J("ngIf",null==(o=e.formSilder.get("en.description"))||null==o.errors?null:o.errors.minlength)}}function M(n,i){1&n&&(t.TgZ(0,"button",34),t._uU(1,"Create"),t.qZA())}function E(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.update())}),t._uU(1,"Update"),t.qZA()}}class u{constructor(i,e,r,o,s,d){this.data=i,this.fb=e,this.serv=r,this.toaster=o,this.sppiner=s,this.dialog=d,this.workers=[],this.show=!1,this.url="",this.photo={photoImages:[]},this.img=!1}ngOnInit(){this.createForm()}createForm(){this.formSilder=this.fb.group({ar:this.fb.group({title:[this.data?.translations[0]?.title||"",[a.kI.required,a.kI.minLength(3)]],description:[this.data?.translations[0]?.description||"",[a.kI.required,a.kI.minLength(3)]]}),en:this.fb.group({title:[this.data?.translations[1]?.title||"",[a.kI.required,a.kI.minLength(3)]],description:[this.data?.translations[1]?.description||"",[a.kI.required,a.kI.minLength(3)]]}),image:[this.data?.image_path||"",[a.kI.required]]})}selectPhoto(i){const e=i.target.files[0];if(e){this.photoName=e.name,this.formSilder.get("image")?.setValue(e);const r=new FileReader;r.onload=o=>{this.url=o.target?.result},r.readAsDataURL(e)}}create(){if(this.formSilder.valid){const i=this.createFormData();this.img=!0,this.serv.create(i).subscribe(e=>{this.img=!1,this.dialog.close(!0),this.toaster.success("created successfully","",{closeButton:!0,progressBar:!0,timeOut:3e3});let r=new Audio("../../../assets/notification-sound/login.wav");r.load(),r.play()},e=>{this.img=!1})}else this.formSilder.markAllAsTouched()}createFormData(){const i=new FormData;return i.append("ar[title]",this.formSilder.get("ar.title")?.value),i.append("en[title]",this.formSilder.get("en.title")?.value),i.append("ar[description]",this.formSilder.get("ar.description")?.value),i.append("en[description]",this.formSilder.get("en.description")?.value),i.append("image",this.formSilder.get("image")?.value),i}update(){if(this.formSilder.valid){const i=this.createFormData();this.img=!0,this.serv.update(i,this.data.id).subscribe(e=>{this.img=!1,this.dialog.close(!0),this.toaster.success("updated successfully","",{closeButton:!0,progressBar:!0,timeOut:3e3});let r=new Audio("../../../assets/notification-sound/login.wav");r.load(),r.play()},e=>{this.img=!1})}else this.formSilder.markAllAsTouched()}close(){this.dialog.close()}}u.\u0275fac=function(i){return new(i||u)(t.Y36(_.WI),t.Y36(a.qu),t.Y36(c),t.Y36(b._W),t.Y36(x.t2),t.Y36(_.so))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-addactivities"]],decls:50,vars:12,consts:[[1,"wrapper"],["id","pre-loader",4,"ngIf"],[1,"p-4"],[1,"d-flex","justify-content-between","align-items-center"],["class","m-0",4,"ngIf"],[1,"animate__animated","animate__fadeInDown",2,"margin-top","46px",3,"formGroup","ngSubmit"],[1,"row","mt-3"],["formGroupName","ar",1,"col-md-12"],[1,"col-md-12"],["appearance","outline",1,"w-100"],["for","arTitle"],["matInput","","id","arTitle","formControlName","title","placeholder","Title Ar"],["class","error",4,"ngIf"],["for","arDescription"],["matInput","","id","arDescription","formControlName","description","placeholder","Description Ar"],["formGroupName","en",1,"col-md-12"],["for","enTitle"],["matInput","","id","enTitle","formControlName","title","placeholder","Title En"],["for","enDescription"],["matInput","","id","enDescription","formControlName","description","placeholder","Description En"],["for","selected","type","button",1,"button","gray","small"],["role","alert"],["alt","",1,"myu",3,"src"],["type","file","id","selected","hidden","",3,"change"],[1,"tw-p-6"],[1,"d-flex","justify-content-center","align-items-center"],["mat-flat-button","","class","btn btn-success py-1 px-5 mx-2","type","submit",4,"ngIf"],["mat-flat-button","","class","btn btn-success py-1 px-5 mx-2","type","button",3,"click",4,"ngIf"],["mat-flat-button","","type","button",1,"btn","btn-danger","py-1","px-5",3,"click"],["id","pre-loader"],["src","assets/loader-01.svg","alt",""],[1,"m-0"],[1,"error"],[4,"ngIf"],["mat-flat-button","","type","submit",1,"btn","btn-success","py-1","px-5","mx-2"],["mat-flat-button","","type","button",1,"btn","btn-success","py-1","px-5","mx-2",3,"click"]],template:function(i,e){if(1&i&&(t.TgZ(0,"div",0),t.YNc(1,U,2,0,"div",1),t.qZA(),t.TgZ(2,"div",2)(3,"header",3),t.YNc(4,y,2,0,"h1",4),t.YNc(5,I,2,0,"h1",4),t.qZA(),t._UZ(6,"hr"),t.TgZ(7,"form",5),t.NdJ("ngSubmit",function(){return e.create()}),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"mat-form-field",9)(12,"mat-label",10),t._uU(13,"Title Ar"),t.qZA(),t._UZ(14,"input",11),t.YNc(15,k,3,2,"mat-error",12),t.qZA()(),t.TgZ(16,"div",8)(17,"mat-form-field",9)(18,"mat-label",13),t._uU(19,"Arabic Description"),t.qZA(),t._UZ(20,"input",14),t.YNc(21,w,3,2,"mat-error",12),t.qZA()()(),t.TgZ(22,"div",15)(23,"div",8)(24,"mat-form-field",9)(25,"mat-label",16),t._uU(26,"English Title"),t.qZA(),t._UZ(27,"input",17),t.YNc(28,F,3,2,"mat-error",12),t.qZA()(),t.TgZ(29,"div",8)(30,"mat-form-field",9)(31,"mat-label",18),t._uU(32,"English Description"),t.qZA(),t._UZ(33,"input",19),t.YNc(34,L,3,2,"mat-error",12),t.qZA()()(),t.TgZ(35,"div",8)(36,"label",20),t._uU(37,"Select Photo"),t.qZA(),t.TgZ(38,"div",21)(39,"div")(40,"p"),t._uU(41),t.qZA()(),t._UZ(42,"img",22),t.qZA(),t.TgZ(43,"input",23),t.NdJ("change",function(o){return e.selectPhoto(o)}),t.qZA()()(),t.TgZ(44,"footer",24)(45,"div",25),t.YNc(46,M,2,0,"button",26),t.YNc(47,E,2,0,"button",27),t.TgZ(48,"button",28),t.NdJ("click",function(){return e.close()}),t._uU(49,"Close"),t.qZA()()()()()),2&i){let r,o,s,d;t.xp6(1),t.Q6J("ngIf",e.img),t.xp6(3),t.Q6J("ngIf",!e.data),t.xp6(1),t.Q6J("ngIf",e.data),t.xp6(2),t.Q6J("formGroup",e.formSilder),t.xp6(8),t.Q6J("ngIf",(null==(r=e.formSilder.get("ar.title"))?null:r.invalid)&&(null==(r=e.formSilder.get("ar.title"))?null:r.touched)),t.xp6(6),t.Q6J("ngIf",(null==(o=e.formSilder.get("ar.description"))?null:o.invalid)&&(null==(o=e.formSilder.get("ar.description"))?null:o.touched)),t.xp6(7),t.Q6J("ngIf",(null==(s=e.formSilder.get("en.title"))?null:s.invalid)&&(null==(s=e.formSilder.get("en.title"))?null:s.touched)),t.xp6(6),t.Q6J("ngIf",(null==(d=e.formSilder.get("en.description"))?null:d.invalid)&&(null==(d=e.formSilder.get("en.description"))?null:d.touched)),t.xp6(7),t.Oqu(e.url?e.photoName:e.formSilder.value.image),t.xp6(1),t.Q6J("src",e.url?e.url:e.formSilder.value.image,t.LSH),t.xp6(4),t.Q6J("ngIf",!e.data),t.xp6(1),t.Q6J("ngIf",e.data)}},dependencies:[g.O5,v.TO,v.KE,v.hX,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,a.x0,C.lW,q.Nt]});var A=l(4333),G=l(3081);function R(n,i){1&n&&(t.TgZ(0,"div",27),t._UZ(1,"img",28),t.qZA())}function W(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._UZ(12,"img",29),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"date"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"date"),t.qZA(),t.TgZ(19,"td")(20,"a",30),t.NdJ("click",function(){const s=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.openFormEdit(s))}),t._UZ(21,"i",31),t.qZA()(),t.TgZ(22,"td")(23,"a",32),t.NdJ("click",function(){const s=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.opendelet(s.id))}),t._UZ(24,"i",33),t.qZA(),t.TgZ(25,"div",34)(26,"div",35)(27,"div",36)(28,"div",37)(29,"h2",38),t._uU(30,"Warning"),t.qZA(),t.TgZ(31,"button",39)(32,"span",40),t._uU(33,"\xd7"),t.qZA()()(),t.TgZ(34,"div",41)(35,"div",42),t._uU(36," Are you sure you want to delete the item? "),t.qZA()(),t.TgZ(37,"div",43)(38,"button",44),t._uU(39,"Close"),t.qZA(),t.TgZ(40,"button",45),t.NdJ("click",function(){const s=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.delete(s.id))}),t._uU(41,"Delete"),t.qZA()()()()()()()}if(2&n){const e=i.$implicit,r=i.index;t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Oqu(null==e.translations[0]?null:e.translations[0].title),t.xp6(2),t.Oqu(null==e.translations[1]?null:e.translations[1].title),t.xp6(2),t.Oqu(null==e.translations[1]?null:e.translations[1].description),t.xp6(2),t.Oqu(null==e.translations[0]?null:e.translations[0].description),t.xp6(2),t.Q6J("src",e.image_path,t.LSH),t.xp6(2),t.Oqu(t.lcZ(15,8,e.created_at)),t.xp6(3),t.Oqu(t.lcZ(18,10,e.updated_at))}}const H=function(n,i){return{id:"item",itemsPerPage:10,currentPage:n,totalItems:i}};class f{constructor(i,e,r,o,s){this.serv=i,this.dialog=e,this.fb=r,this.toster=o,this.rotue=s,this.sildershow=[],this.img=!1,this.page=1,this.filter={page:this.page,limit:10}}ngOnInit(){this.getAllData()}getAllData(){this.img=!0,this.serv.getData(this.filter).subscribe(i=>{this.sildershow=i.activities.data,this.total=i.activities.total,console.log(this.total),this.img=!1})}openForm(){this.dialog.open(u,{width:"750px",height:"600px",disableClose:!0}).afterClosed().subscribe(e=>{1==e&&this.getAllData()})}openFormEdit(i){this.dialog.open(u,{width:"750px",height:"600px",disableClose:!0,data:i}).afterClosed().subscribe(r=>{1==r&&this.getAllData()})}opendelet(i){this.id=i}delete(i){this.img=!0,this.serv.delete(this.id).subscribe(e=>{this.toster.success(e.message,"",{disableTimeOut:!1,titleClass:"toastr_title",messageClass:"toastr_message",timeOut:3e3,onActivateTick:!1,toastClass:"ngx-toastr",progressBar:!0,easing:"ease-in",enableHtml:!0,newestOnTop:!0,tapToDismiss:!0,positionClass:"toast-top-right",closeButton:!0}),this.img=!1;let r=new Audio;r.src="../../../assets/notification-sound/login.wav",r.load(),r.play(),this.getAllData()},e=>{this.img=!1})}search(i){this.filter.search=i.value,clearTimeout(this.timeOutId),this.timeOutId=setTimeout(()=>{this.getAllData()},1500)}nav(i){this.page=i,this.getAllData()}}f.\u0275fac=function(i){return new(i||f)(t.Y36(c),t.Y36(_.uw),t.Y36(a.qu),t.Y36(b._W),t.Y36(h.F0))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-activities"]],decls:55,vars:14,consts:[[1,"wrapper"],["id","pre-loader",4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"content-wrapper"],[1,"page-title"],[1,"col-sm-6"],[1,"mb-0",2,"font-size","1.571rem","font-weight","800"],[1,"col-xl-12","mb-30"],[1,"card","card-statistics","h-100"],[1,"card-body"],[1,"d-block","d-md-flex","justify-content-between"],[1,"d-block"],[1,"card-title","pb-0","border-0"],[1,"d-block","d-md-flex","clearfix","sm-mt-20"],[1,"button","button-border","icon","small",2,"margin-right","13px","border-radius","38px",3,"click"],[1,"fa","fa-long-arrow-right"],[1,"widget-search","ml-0","clearfix"],[1,"fa","fa-search"],["type","search",1,"form-control",3,"placeholder","keyup"],[1,"table-responsive","mt-15"],[1,"table","center-aligned-table","mb-0"],[2,"border-top","1px solid #dee2e6"],[2,"text-align","center"],[4,"ngFor","ngForOf"],[1,"container"],["id","item",3,"pageChange"],["id","pre-loader"],["src","assets/loader-01.svg","alt",""],["alt","",2,"width","90px","height","64px","border-radius","14px",3,"src"],[1,"pr-2",3,"click"],[1,"fa","fa-pencil"],["data-toggle","modal","data-target","#exampleModal",1,"my","btn","btn-outline-danger","btn-sm",3,"click"],[1,"fa","fa-trash-o","text-danger"],["id","exampleModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title",2,"border-bottom","2px outset red"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],["role","alert",1,"alert","alert-danger",2,"font-size","17px","text-align","center"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-primary"],["type","button","data-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t.YNc(1,R,2,0,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",3)(7,"div",6)(8,"h2",7),t._uU(9," Activitie"),t.qZA()(),t._UZ(10,"div",6),t.qZA()(),t.TgZ(11,"div",3)(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12)(17,"h5",13),t._uU(18,"Data Activities"),t.qZA()(),t.TgZ(19,"div",14)(20,"a",15),t.NdJ("click",function(){return e.openForm()}),t._uU(21," Add Data"),t._UZ(22,"i",16),t.qZA(),t.TgZ(23,"div",17),t._UZ(24,"i",18),t.TgZ(25,"input",19),t.NdJ("keyup",function(o){return e.search(o.target)}),t.ALo(26,"translate"),t.qZA()()()(),t.TgZ(27,"div",20)(28,"table",21)(29,"thead")(30,"tr",22)(31,"th"),t._uU(32,"ID"),t.qZA(),t.TgZ(33,"th"),t._uU(34,"Title Ar"),t.qZA(),t.TgZ(35,"th"),t._uU(36,"Title En"),t.qZA(),t.TgZ(37,"th"),t._uU(38,"Description Ar"),t.qZA(),t.TgZ(39,"th"),t._uU(40,"Description En"),t.qZA(),t.TgZ(41,"th"),t._uU(42,"Image"),t.qZA(),t.TgZ(43,"th"),t._uU(44,"Created At"),t.qZA(),t.TgZ(45,"th"),t._uU(46,"Updated At"),t.qZA(),t.TgZ(47,"th",23),t._uU(48),t.ALo(49,"translate"),t.qZA()()(),t.TgZ(50,"tbody"),t.YNc(51,W,42,12,"tr",24),t.ALo(52,"paginate"),t.qZA()(),t.TgZ(53,"div",25)(54,"pagination-controls",26),t.NdJ("pageChange",function(o){return e.nav(o)}),t.qZA()()()()()()()()()()()),2&i&&(t.xp6(1),t.Q6J("ngIf",e.img),t.xp6(24),t.MGl("placeholder","",t.lcZ(26,4,"AllWorkers.Search"),"...."),t.xp6(23),t.Oqu(t.lcZ(49,6,"AllWorkers.Action")),t.xp6(3),t.Q6J("ngForOf",t.xi3(52,8,e.sildershow,t.WLB(11,H,e.page,e.total))))},dependencies:[g.sg,g.O5,A.LS,g.uU,G.X$,A._s]});const j=[{path:"",component:f}];class m{}m.\u0275fac=function(i){return new(i||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[h.Bz.forChild(j),h.Bz]});var z=l(7775);class p{}p.\u0275fac=function(i){return new(i||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[g.ez,m,z.m,A.JX]})}}]);