import Vue from "vue";
import { AclInstaller, AclCreate, AclRule } from "vue-acl";
import router from "@/router";

Vue.use(AclInstaller);

let initialRole = "guest";
if (localStorage.getItem("userRole"))
  initialRole = localStorage.getItem("userRole");

export default new AclCreate({
  initial: initialRole,
  notfound: "/pages/error-404",
  router,
  acceptLocalRules: true,
  globalRules: {
    guest: new AclRule("guest").generate(),
    sudo: new AclRule("admin").or("sudo").generate(),
    admin: new AclRule("admin").or("sudo").generate(),
    editor: new AclRule("editor")
      .or("admin")
      .or("sudo")
      .generate(),
    public: new AclRule("admin")
      .or("editor")
      .or("sudo")
      .generate()
  }
});
