"use strict";(self.webpackChunkDashboard_valuecleainig=self.webpackChunkDashboard_valuecleainig||[]).push([[263],{4263:(ie,b,l)=>{l.r(b),l.d(b,{UsersModule:()=>g});var p=l(6895),_=l(9299),s=l(4006),h=l(5938),e=l(4650),Z=l(529);class u{constructor(r){this.http=r}getData(r){let t=new Z.LE;return r.search&&(t=t.append("search",r.search)),this.http.get("https://gulf.carpulla.com/public/api/v1/dashboard/users",{params:t})}create(r){return this.http.post("https://gulf.carpulla.com/public/api/v1/dashboard/users",r)}delete(r){return this.http.delete("https://gulf.carpulla.com/public/api/v1/dashboard/users/"+r)}update(r,t){return this.http.post("https://gulf.carpulla.com/public/api/v1/dashboard/users/"+t,r)}}u.\u0275fac=function(r){return new(r||u)(e.LFG(Z.eN))},u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"});var v=l(7185),w=l(8423),x=l(9549),T=l(4859),C=l(4144);function y(o,r){1&o&&(e.TgZ(0,"div",26),e._UZ(1,"img",27),e.qZA())}function U(o,r){1&o&&(e.TgZ(0,"h1",28),e._uU(1,"Add New Data"),e.qZA())}function q(o,r){1&o&&(e.TgZ(0,"h1",28),e._uU(1,"Update Data"),e.qZA())}function I(o,r){1&o&&(e.ynx(0),e._uU(1,"The name field is required."),e.BQk())}function k(o,r){1&o&&(e.ynx(0),e._uU(1,"The name must be at least 3 characters long."),e.BQk())}function N(o,r){if(1&o&&(e.TgZ(0,"mat-error",29),e.YNc(1,I,2,0,"ng-container",30),e.YNc(2,k,2,0,"ng-container",30),e.qZA()),2&o){const t=e.oxw();let n,a;e.xp6(1),e.Q6J("ngIf",null==(n=t.formAdd.get("name"))||null==n.errors?null:n.errors.required),e.xp6(1),e.Q6J("ngIf",null==(a=t.formAdd.get("name"))||null==a.errors?null:a.errors.minlength)}}function J(o,r){1&o&&(e.ynx(0),e._uU(1,"The email field is required."),e.BQk())}function O(o,r){1&o&&(e.ynx(0),e._uU(1,"Invalid email format."),e.BQk())}function Q(o,r){if(1&o&&(e.TgZ(0,"mat-error",29),e.YNc(1,J,2,0,"ng-container",30),e.YNc(2,O,2,0,"ng-container",30),e.qZA()),2&o){const t=e.oxw(2);let n,a;e.xp6(1),e.Q6J("ngIf",null==(n=t.formAdd.get("email"))||null==n.errors?null:n.errors.required),e.xp6(1),e.Q6J("ngIf",null==(a=t.formAdd.get("email"))||null==a.errors?null:a.errors.email)}}function Y(o,r){if(1&o&&(e.TgZ(0,"div",7)(1,"mat-form-field",8)(2,"mat-label",31),e._uU(3,"Email"),e.qZA(),e._UZ(4,"input",32),e.YNc(5,Q,3,2,"mat-error",11),e.qZA()()),2&o){const t=e.oxw();let n;e.xp6(5),e.Q6J("ngIf",(null==(n=t.formAdd.get("email"))?null:n.invalid)&&(null==(n=t.formAdd.get("email"))?null:n.touched))}}function P(o,r){1&o&&(e.ynx(0),e._uU(1,"The address field is required."),e.BQk())}function M(o,r){if(1&o&&(e.TgZ(0,"mat-error",29),e.YNc(1,P,2,0,"ng-container",30),e.qZA()),2&o){const t=e.oxw();let n;e.xp6(1),e.Q6J("ngIf",null==(n=t.formAdd.get("address"))||null==n.errors?null:n.errors.required)}}function B(o,r){1&o&&(e.ynx(0),e._uU(1,"The phone field is required."),e.BQk())}function F(o,r){1&o&&(e.ynx(0),e._uU(1,"The phone must be at least 8 characters long."),e.BQk())}function D(o,r){1&o&&(e.ynx(0),e._uU(1,"Please enter numbers only."),e.BQk())}function L(o,r){if(1&o&&(e.TgZ(0,"mat-error",29),e.YNc(1,B,2,0,"ng-container",30),e.YNc(2,F,2,0,"ng-container",30),e.YNc(3,D,2,0,"ng-container",30),e.qZA()),2&o){const t=e.oxw();let n,a,i;e.xp6(1),e.Q6J("ngIf",null==(n=t.formAdd.get("phone"))||null==n.errors?null:n.errors.required),e.xp6(1),e.Q6J("ngIf",null==(a=t.formAdd.get("phone"))||null==a.errors?null:a.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(i=t.formAdd.get("phone"))||null==i.errors?null:i.errors.pattern)}}function z(o,r){1&o&&(e.ynx(0),e._uU(1,"The password field is required."),e.BQk())}function E(o,r){1&o&&(e.ynx(0),e._uU(1,"The password must be at least 6 characters. "),e.BQk())}function j(o,r){1&o&&(e.ynx(0),e._uU(1,"The passwords must have at least one uppercase ('A'-'Z')."),e.BQk())}function S(o,r){if(1&o&&(e.TgZ(0,"mat-error",29),e.YNc(1,z,2,0,"ng-container",30),e.YNc(2,E,2,0,"ng-container",30),e.YNc(3,j,2,0,"ng-container",30),e.qZA()),2&o){const t=e.oxw(2);let n,a,i;e.xp6(1),e.Q6J("ngIf",(null==(n=t.formAdd.get("password"))?null:n.touched)&&(null==(n=t.formAdd.get("password"))||null==n.errors?null:n.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(a=t.formAdd.get("password"))?null:a.touched)&&(null==(a=t.formAdd.get("password"))||null==a.errors?null:a.errors.minLength)),e.xp6(1),e.Q6J("ngIf",(null==(i=t.formAdd.get("password"))?null:i.touched)&&(null==(i=t.formAdd.get("password"))||null==i.errors?null:i.errors.upperCase))}}function G(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",7)(1,"mat-form-field",8)(2,"mat-label",33),e._uU(3,"Password"),e.qZA(),e._UZ(4,"input",34),e.TgZ(5,"span",35),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.viewpass())}),e._UZ(6,"i",36),e.qZA(),e.YNc(7,S,4,3,"mat-error",11),e.qZA()()}if(2&o){const t=e.oxw();let n;e.xp6(4),e.Q6J("type",t.changetype?"password":"text"),e.xp6(2),e.Q6J("ngClass",t.visible?"fa fa-eye":"fa fa-eye-slash"),e.xp6(1),e.Q6J("ngIf",(null==(n=t.formAdd.get("password"))?null:n.invalid)&&(null==(n=t.formAdd.get("password"))?null:n.touched))}}function H(o,r){1&o&&(e.ynx(0),e._uU(1,"The password_confirmation field is required."),e.BQk())}function W(o,r){1&o&&(e.ynx(0),e._uU(1,"The password_confirmation must be at least 6 characters. "),e.BQk())}function R(o,r){1&o&&(e.ynx(0),e._uU(1,"The passwords must have at least one uppercase ('A'-'Z')."),e.BQk())}function V(o,r){if(1&o&&(e.TgZ(0,"mat-error",29),e.YNc(1,H,2,0,"ng-container",30),e.YNc(2,W,2,0,"ng-container",30),e.YNc(3,R,2,0,"ng-container",30),e.qZA()),2&o){const t=e.oxw(2);let n,a,i;e.xp6(1),e.Q6J("ngIf",(null==(n=t.formAdd.get("password_confirmation"))?null:n.touched)&&(null==(n=t.formAdd.get("password_confirmation"))||null==n.errors?null:n.errors.required)),e.xp6(1),e.Q6J("ngIf",(null==(a=t.formAdd.get("password_confirmation"))?null:a.touched)&&(null==(a=t.formAdd.get("password_confirmation"))||null==a.errors?null:a.errors.minLength)),e.xp6(1),e.Q6J("ngIf",(null==(i=t.formAdd.get("password_confirmation"))?null:i.touched)&&(null==(i=t.formAdd.get("password_confirmation"))||null==i.errors?null:i.errors.upperCase))}}function K(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",7)(1,"mat-form-field",8)(2,"mat-label",37),e._uU(3,"Confirm Password"),e.qZA(),e._UZ(4,"input",38),e.TgZ(5,"span",35),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.viewpasss())}),e._UZ(6,"i",36),e.qZA(),e.YNc(7,V,4,3,"mat-error",11),e.qZA()()}if(2&o){const t=e.oxw();let n;e.xp6(4),e.Q6J("type",t.changetypee?"password":"text"),e.xp6(2),e.Q6J("ngClass",t.visiblee?"fa fa-eye":"fa fa-eye-slash"),e.xp6(1),e.Q6J("ngIf",(null==(n=t.formAdd.get("password_confirmation"))?null:n.invalid)&&(null==(n=t.formAdd.get("password_confirmation"))?null:n.touched))}}function $(o,r){1&o&&(e.TgZ(0,"button",39),e._uU(1,"Create"),e.qZA())}function X(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"button",40),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.update())}),e._uU(1,"Update"),e.qZA()}}class c{constructor(r,t,n,a,i,d){this.data=r,this.fb=t,this.serv=n,this.toaster=a,this.sppiner=i,this.dialog=d,this.workers=[],this.show=!1,this.url="",this.photo={photoImages:[]},this.img=!1,this.visible=!0,this.changetype=!0,this.visiblee=!0,this.changetypee=!0}ngOnInit(){this.createForm()}createForm(){this.formAdd=this.fb.group({name:[this.data?.name||"",s.kI.required],phone:[this.data?.phone||"",[s.kI.required,s.kI.minLength(8),this.phoneNumberValidator]],address:[this.data?.address||"",s.kI.required],email:[this.data?.email||"",[s.kI.required,s.kI.email]],password:[this.data?.password||"",[s.kI.required,this.passwordValidator]],password_confirmation:[this.data?.password||"",[s.kI.required,this.passwordValidator]],image:[this.data?.image_path||null,s.kI.required]})}passwordValidator(r){const t=r.value;if(!t)return{required:!0};const n=t.length>=6,a=/[A-Z]/.test(t),i=/[a-z]/.test(t),d={};return n||(d.minLength=!0),a||(d.upperCase=!0),i||(d.lowerCase=!0),Object.keys(d).length?d:null}phoneNumberValidator(r){return/^[0-9]*$/.test(r.value)?null:{pattern:!0}}selectPhoto(r){const t=r.target.files[0];if(t){this.photoName=t.name,this.formAdd.get("image")?.setValue(t);const n=new FileReader;n.onload=a=>{this.url=a.target?.result},n.readAsDataURL(t)}}create(){if(this.formAdd.invalid){this.toaster.error("Please fill in all required fields.","",{closeButton:!0,progressBar:!0,timeOut:3e3});let t=new Audio("../../../assets/notification-sound/login.wav");return t.load(),void t.play()}if(this.formAdd.get("password")?.value!==this.formAdd.get("password_confirmation")?.value){this.toaster.error("Passwords do not match.","",{closeButton:!0,progressBar:!0,timeOut:3e3});let t=new Audio("../../../assets/notification-sound/login.wav");return t.load(),void t.play()}this.img=!0;let r=this.createFormData();this.serv.create(r).subscribe({next:t=>{this.dialog.close(!0),this.img=!1,this.toaster.success("Created successfully.","",{closeButton:!0,progressBar:!0,timeOut:3e3});let n=new Audio("../../../assets/notification-sound/login.wav");n.load(),n.play()},error:t=>{this.img=!1;let n="The email has already been taken.";t.error&&t.error.errors&&t.error.errors.email&&(n=t.error.errors.email[0]),this.toaster.error(n,"",{closeButton:!0,progressBar:!0,timeOut:3e3});let a=new Audio("../../../assets/notification-sound/login.wav");a.load(),a.play()}})}createFormData(){const r=new FormData;return Object.entries(this.formAdd.value).forEach(([t,n])=>{r.append(t,n)}),r}update(){if(this.formAdd.invalid){this.toaster.error("Please fill in all required fields.","",{closeButton:!0,progressBar:!0,timeOut:3e3});let t=new Audio("../../../assets/notification-sound/login.wav");return t.load(),void t.play()}if(this.formAdd.get("password")?.value!==this.formAdd.get("password_confirmation")?.value){this.toaster.error("Passwords do not match.","",{closeButton:!0,progressBar:!0,timeOut:3e3});let t=new Audio("../../../assets/notification-sound/login.wav");return t.load(),void t.play()}this.img=!0;let r=this.createFormData();this.serv.update(r,this.data?.id).subscribe({next:t=>{this.dialog.close(!0),this.img=!1,this.toaster.success("Created successfully.","",{closeButton:!0,progressBar:!0,timeOut:3e3})},error:t=>{this.img=!1;let n="The email has already been taken.";t.error&&t.error.errors&&t.error.errors.email&&(n=t.error.errors.email[0]),this.toaster.error(n,"",{closeButton:!0,progressBar:!0,timeOut:3e3});let a=new Audio("../../../assets/notification-sound/login.wav");a.load(),a.play()}})}close(){this.dialog.close()}viewpass(){this.visible=!this.visible,this.changetype=!this.changetype}viewpasss(){this.visiblee=!this.visiblee,this.changetypee=!this.changetypee}}c.\u0275fac=function(r){return new(r||c)(e.Y36(h.WI),e.Y36(s.qu),e.Y36(u),e.Y36(v._W),e.Y36(w.t2),e.Y36(h.so))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-adduser"]],decls:45,vars:14,consts:[[1,"wrapper"],["id","pre-loader",4,"ngIf"],[1,"p-4"],[1,"d-flex","justify-content-between","align-items-center"],["class","m-0",4,"ngIf"],[1,"animate__animated","animate__fadeInDown",2,"margin-top","46px",3,"formGroup","ngSubmit"],[1,"row","mt-3"],[1,"col-md-12"],["appearance","outline",1,"w-100"],["for","name"],["matInput","","id","name","formControlName","name","placeholder","Add Name"],["class","error",4,"ngIf"],["class","col-md-12",4,"ngIf"],["for","address"],["type","text","matInput","","id","address","formControlName","address","placeholder","Add Address"],["for","phone"],["type","text","matInput","","id","phone","formControlName","phone","placeholder","Add Phone","pattern","[0-9]*","title","Please enter numbers only"],["for","selected","type","button",1,"button","gray","small"],["role","alert"],["alt","",1,"myu",3,"src"],["type","file","id","selected","hidden","",3,"change"],[1,"tw-p-6"],[1,"d-flex","justify-content-center","align-items-center"],["mat-flat-button","","class","btn btn-success py-1 px-5 mx-2","type","submit",4,"ngIf"],["mat-flat-button","","class","btn btn-success py-1 px-5 mx-2","type","button",3,"click",4,"ngIf"],["mat-flat-button","","type","button",1,"btn","btn-danger","py-1","px-5",3,"click"],["id","pre-loader"],["src","assets/loader-01.svg","alt",""],[1,"m-0"],[1,"error"],[4,"ngIf"],["for","email"],["type","email","matInput","","id","email","formControlName","email","placeholder","Add Email"],["for","password"],["matInput","","id","password","formControlName","password","placeholder","Add Password",3,"type"],[1,"eyeicon",3,"click"],[2,"font-size","17px",3,"ngClass"],["for","password_confirmation"],["matInput","","id","password_confirmation","formControlName","password_confirmation","placeholder","Confirm Password",3,"type"],["mat-flat-button","","type","submit",1,"btn","btn-success","py-1","px-5","mx-2"],["mat-flat-button","","type","button",1,"btn","btn-success","py-1","px-5","mx-2",3,"click"]],template:function(r,t){if(1&r&&(e.TgZ(0,"div",0),e.YNc(1,y,2,0,"div",1),e.qZA(),e.TgZ(2,"div",2)(3,"header",3),e.YNc(4,U,2,0,"h1",4),e.YNc(5,q,2,0,"h1",4),e.qZA(),e._UZ(6,"hr"),e.TgZ(7,"form",5),e.NdJ("ngSubmit",function(){return t.create()}),e.TgZ(8,"div",6)(9,"div",7)(10,"mat-form-field",8)(11,"mat-label",9),e._uU(12,"Name"),e.qZA(),e._UZ(13,"input",10),e.YNc(14,N,3,2,"mat-error",11),e.qZA()(),e.YNc(15,Y,6,1,"div",12),e.TgZ(16,"div",7)(17,"mat-form-field",8)(18,"mat-label",13),e._uU(19,"Address"),e.qZA(),e._UZ(20,"input",14),e.YNc(21,M,2,1,"mat-error",11),e.qZA()(),e.TgZ(22,"div",7)(23,"mat-form-field",8)(24,"mat-label",15),e._uU(25,"Phone"),e.qZA(),e._UZ(26,"input",16),e.YNc(27,L,4,3,"mat-error",11),e.qZA()(),e.YNc(28,G,8,3,"div",12),e.YNc(29,K,8,3,"div",12),e.TgZ(30,"div",7)(31,"label",17),e._uU(32,"Select Photo"),e.qZA(),e.TgZ(33,"div",18)(34,"div")(35,"p"),e._uU(36),e.qZA()(),e._UZ(37,"img",19),e.qZA(),e.TgZ(38,"input",20),e.NdJ("change",function(a){return t.selectPhoto(a)}),e.qZA()()(),e.TgZ(39,"footer",21)(40,"div",22),e.YNc(41,$,2,0,"button",23),e.YNc(42,X,2,0,"button",24),e.TgZ(43,"button",25),e.NdJ("click",function(){return t.close()}),e._uU(44,"Close"),e.qZA()()()()()),2&r){let n,a,i;e.xp6(1),e.Q6J("ngIf",t.img),e.xp6(3),e.Q6J("ngIf",!t.data),e.xp6(1),e.Q6J("ngIf",t.data),e.xp6(2),e.Q6J("formGroup",t.formAdd),e.xp6(7),e.Q6J("ngIf",(null==(n=t.formAdd.get("name"))?null:n.invalid)&&(null==(n=t.formAdd.get("name"))?null:n.touched)),e.xp6(1),e.Q6J("ngIf",!t.data),e.xp6(6),e.Q6J("ngIf",(null==(a=t.formAdd.get("address"))?null:a.invalid)&&(null==(a=t.formAdd.get("address"))?null:a.touched)),e.xp6(6),e.Q6J("ngIf",(null==(i=t.formAdd.get("phone"))?null:i.invalid)&&(null==(i=t.formAdd.get("phone"))?null:i.touched)),e.xp6(1),e.Q6J("ngIf",!t.data),e.xp6(1),e.Q6J("ngIf",!t.data),e.xp6(7),e.Oqu(t.url?t.photoName:t.formAdd.value.image),e.xp6(1),e.Q6J("src",t.url?t.url:t.formAdd.value.image,e.LSH),e.xp6(4),e.Q6J("ngIf",!t.data),e.xp6(1),e.Q6J("ngIf",t.data)}},dependencies:[p.mk,p.O5,x.TO,x.KE,x.hX,s._Y,s.Fj,s.JJ,s.JL,s.c5,s.sg,s.u,T.lW,C.Nt],styles:[".form_container[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:15px;padding:50px 40px 20px;background-color:#fff;box-shadow:0 106px 42px #00000003,0 59px 36px #0000000d,0 26px 26px #00000017,0 7px 15px #0000001a,0 0 #0000001a;border-radius:11px;font-family:Inter,sans-serif}.logo_container[_ngcontent-%COMP%]{box-sizing:border-box;width:80px;height:80px;background:linear-gradient(180deg,rgba(248,248,248,0) 50%,#F8F8F888 100%);border:1px solid #F7F7F8;filter:drop-shadow(0px .5px .5px #EFEFEF) drop-shadow(0px 1px .5px rgba(239,239,239,.5));border-radius:11px}.title_container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px}.title[_ngcontent-%COMP%]{margin:0;font-size:1.25rem;font-weight:700;color:#212121}.subtitle[_ngcontent-%COMP%]{font-size:.725rem;max-width:80%;text-align:center;line-height:1.1rem;color:#8b8e98}.input_container[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;position:relative;display:flex;flex-direction:column;gap:5px}.icon[_ngcontent-%COMP%]{width:20px;position:absolute;z-index:99;left:-146px;bottom:19px}.input_label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600}.input_field[_ngcontent-%COMP%]{width:auto;height:60px;padding:5px 0 6px 49px;cursor:pointer;border-radius:11px;outline:none;border:2px solid #e5e5e5;filter:drop-shadow(0px 1px 0px #efefef) drop-shadow(0px 1px .5px rgba(239,239,239,.5));transition:all .3s cubic-bezier(.15,.83,.66,1)}.input_field[_ngcontent-%COMP%]:focus{border:1px solid transparent;box-shadow:0 0 0 2px #242424;background-color:transparent}.sign-in_btn[_ngcontent-%COMP%]{width:100%;height:40px;border:0;background:#115DFC;border-radius:7px;outline:none;color:#fff;cursor:pointer}.sign-in_ggl[_ngcontent-%COMP%]{width:100%;height:40px;display:flex;align-items:center;justify-content:center;gap:10px;background:#ffffff;border-radius:7px;outline:none;color:#242424;border:1px solid #e5e5e5;filter:drop-shadow(0px 1px 0px #efefef) drop-shadow(0px 1px .5px rgba(239,239,239,.5));cursor:pointer}.sign-in_apl[_ngcontent-%COMP%]{width:100%;height:40px;display:flex;align-items:center;justify-content:center;gap:10px;background:#212121;border-radius:7px;outline:none;color:#fff;border:1px solid #e5e5e5;filter:drop-shadow(0px 1px 0px #efefef) drop-shadow(0px 1px .5px rgba(239,239,239,.5));cursor:pointer}.separator[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;gap:30px;color:#8b8e98}.separator[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{display:block;width:100%;height:1px;border:0;background-color:#e8e8e8}.note[_ngcontent-%COMP%]{font-size:.75rem;color:#8b8e98;text-decoration:underline}.form-group[_ngcontent-%COMP%]{position:relative;width:250px}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #ddd;height:40px;padding:0 15px;border-radius:5px;font-size:15px;width:100%}.eyeicon[_ngcontent-%COMP%]{position:absolute;right:16px;top:8px;cursor:pointer}.ii[_ngcontent-%COMP%]{background:none!important}.error[_ngcontent-%COMP%]{font-size:12px!important}"]});var A=l(4333),ee=l(3081);function te(o,r){1&o&&(e.TgZ(0,"div",27),e._UZ(1,"img",28),e.qZA())}function re(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._UZ(12,"img",29),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.ALo(15,"date"),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.ALo(18,"date"),e.qZA(),e.TgZ(19,"td")(20,"a",30),e.NdJ("click",function(){const i=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.openFormEdit(i))}),e._UZ(21,"i",31),e.qZA()(),e.TgZ(22,"td")(23,"a",32),e.NdJ("click",function(){const i=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.opendelet(i.id))}),e._UZ(24,"i",33),e.qZA(),e.TgZ(25,"div",34)(26,"div",35)(27,"div",36)(28,"div",37)(29,"h2",38),e._uU(30,"Warning"),e.qZA(),e.TgZ(31,"button",39)(32,"span",40),e._uU(33,"\xd7"),e.qZA()()(),e.TgZ(34,"div",41)(35,"div",42),e._uU(36," Are you sure you want to delete the item? "),e.qZA()(),e.TgZ(37,"div",43)(38,"button",44),e._uU(39,"Close"),e.qZA(),e.TgZ(40,"button",45),e.NdJ("click",function(){const i=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.delete(i.id))}),e._uU(41,"Delete"),e.qZA()()()()()()()}if(2&o){const t=r.$implicit,n=r.index;e.xp6(2),e.Oqu(n+1),e.xp6(2),e.Oqu(null==t?null:t.name),e.xp6(2),e.Oqu(null==t?null:t.email),e.xp6(2),e.Oqu(null==t?null:t.phone),e.xp6(2),e.Oqu(null==t?null:t.address),e.xp6(2),e.Q6J("src",t.image_path,e.LSH),e.xp6(2),e.Oqu(e.lcZ(15,8,t.created_at)),e.xp6(3),e.Oqu(e.lcZ(18,10,t.updated_at))}}const ne=function(o,r){return{id:"item",itemsPerPage:10,currentPage:o,totalItems:r}};class f{constructor(r,t,n,a,i){this.serv=r,this.dialog=t,this.fb=n,this.toster=a,this.rotue=i,this.showData=[],this.img=!1,this.page=1,this.filter={page:this.page,limit:10}}ngOnInit(){this.getAllData()}getAllData(){this.img=!0,this.serv.getData(this.filter).subscribe(r=>{this.showData=r.Users.data,this.total=r.Users.total,this.img=!1})}openForm(){this.dialog.open(c,{width:"750px",height:"700px",disableClose:!0}).afterClosed().subscribe(t=>{1==t&&this.getAllData()})}openFormEdit(r){this.dialog.open(c,{width:"750px",height:"700px",disableClose:!0,data:r}).afterClosed().subscribe(n=>{1==n&&this.getAllData()})}opendelet(r){this.id=r}delete(r){this.img=!0,this.serv.delete(this.id).subscribe(t=>{this.toster.success(t.message,"",{disableTimeOut:!1,titleClass:"toastr_title",messageClass:"toastr_message",timeOut:3e3,onActivateTick:!1,toastClass:"ngx-toastr",progressBar:!0,easing:"ease-in",enableHtml:!0,newestOnTop:!0,tapToDismiss:!0,positionClass:"toast-top-right",closeButton:!0});let n=new Audio;n.src="../../../assets/notification-sound/login.wav",n.load(),n.play(),this.img=!1,this.getAllData()},t=>{this.img=!1})}search(r){this.filter.search=r.value,clearTimeout(this.timeOutId),this.timeOutId=setTimeout(()=>{this.getAllData()},1500)}nav(r){this.page=r,this.getAllData()}}f.\u0275fac=function(r){return new(r||f)(e.Y36(u),e.Y36(h.uw),e.Y36(s.qu),e.Y36(v._W),e.Y36(_.F0))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-user"]],decls:58,vars:17,consts:[[1,"wrapper"],["id","pre-loader",4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"content-wrapper"],[1,"page-title"],[1,"col-sm-6"],[1,"mb-0",2,"font-size","1.571rem","font-weight","800"],[1,"col-xl-12","mb-30"],[1,"card","card-statistics","h-100"],[1,"card-body"],[1,"d-block","d-md-flex","justify-content-between"],[1,"d-block"],[1,"card-title","pb-0","border-0"],[1,"d-block","d-md-flex","clearfix","sm-mt-20"],[1,"button","button-border","icon","small",2,"margin-right","13px","border-radius","38px",3,"click"],[1,"fa","fa-long-arrow-right"],[1,"widget-search","ml-0","clearfix"],[1,"fa","fa-search"],["type","search",1,"form-control",3,"placeholder","keyup"],[1,"table-responsive","mt-15"],[1,"table","center-aligned-table","mb-0"],[2,"border-top","1px solid #dee2e6"],[2,"text-align","center"],[4,"ngFor","ngForOf"],[1,"container"],["id","item",3,"pageChange"],["id","pre-loader"],["src","assets/loader-01.svg","alt",""],["alt","",2,"width","90px","height","64px","border-radius","14px",3,"src"],[1,"pr-2",3,"click"],[1,"fa","fa-pencil"],["data-toggle","modal","data-target","#exampleModal",1,"my","btn","btn-outline-danger","btn-sm",3,"click"],[1,"fa","fa-trash-o","text-danger"],["id","exampleModal","tabindex","-1","role","dialog","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title",2,"border-bottom","2px outset red"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],["role","alert",1,"alert","alert-danger",2,"font-size","17px","text-align","center"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-primary"],["type","button","data-dismiss","modal",1,"btn","btn-danger",3,"click"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0),e.YNc(1,te,2,0,"div",1),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",3)(7,"div",6)(8,"h2",7),e._uU(9," Users"),e.qZA()(),e._UZ(10,"div",6),e.qZA()(),e.TgZ(11,"div",3)(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12)(17,"h5",13),e._uU(18,"Data User"),e.qZA()(),e.TgZ(19,"div",14)(20,"a",15),e.NdJ("click",function(){return t.openForm()}),e._uU(21," Add Data"),e._UZ(22,"i",16),e.qZA(),e.TgZ(23,"div",17),e._UZ(24,"i",18),e.TgZ(25,"input",19),e.NdJ("keyup",function(a){return t.search(a.target)}),e.ALo(26,"translate"),e.qZA()()()(),e.TgZ(27,"div",20)(28,"table",21)(29,"thead")(30,"tr",22)(31,"th"),e._uU(32,"ID"),e.qZA(),e.TgZ(33,"th"),e._uU(34,"Name"),e.qZA(),e.TgZ(35,"th"),e._uU(36,"Email"),e.qZA(),e.TgZ(37,"th"),e._uU(38,"Phone"),e.qZA(),e.TgZ(39,"th"),e._uU(40,"Address"),e.qZA(),e.TgZ(41,"th"),e._uU(42,"Image"),e.qZA(),e.TgZ(43,"th"),e._uU(44,"Created At"),e.qZA(),e.TgZ(45,"th"),e._uU(46,"Updated At"),e.qZA(),e.TgZ(47,"th"),e._uU(48),e.ALo(49,"translate"),e.qZA(),e.TgZ(50,"th",23),e._uU(51),e.ALo(52,"translate"),e.qZA()()(),e.TgZ(53,"tbody"),e.YNc(54,re,42,12,"tr",24),e.ALo(55,"paginate"),e.qZA()(),e.TgZ(56,"div",25)(57,"pagination-controls",26),e.NdJ("pageChange",function(a){return t.nav(a)}),e.qZA()()()()()()()()()()()),2&r&&(e.xp6(1),e.Q6J("ngIf",t.img),e.xp6(24),e.MGl("placeholder","",e.lcZ(26,5,"AllWorkers.Search"),"...."),e.xp6(23),e.Oqu(e.lcZ(49,7,"AllWorkers.Image")),e.xp6(3),e.Oqu(e.lcZ(52,9,"AllWorkers.Action")),e.xp6(3),e.Q6J("ngForOf",e.xi3(55,11,t.showData,e.WLB(14,ne,t.page,t.total))))},dependencies:[p.sg,p.O5,A.LS,p.uU,ee.X$,A._s]});const oe=[{path:"",component:f}];class m{}m.\u0275fac=function(r){return new(r||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[_.Bz.forChild(oe),_.Bz]});var ae=l(7775);class g{}g.\u0275fac=function(r){return new(r||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[p.ez,m,ae.m,A.JX]})}}]);