// import {
//     LoaderFunctionArgs,
//     createBrowserRouter,
//     redirect,
//   } from "react-router-dom";
//   import { redirectTo } from "../services/redirectService";
  
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       loader: loginWithAuthLoader,
//       lazy: () => import("../views/index"),
//       children: [
//         {
//           path: "",
//           loader: () => redirect("/dashboard"),
//         },
//         {
//           path: "dashboard",
//           lazy: () => import("../views/dashboard"),
//         },
//         {
//           path: "workflow",
//           children: [
//             {
//               path: "",
//               loader: () => redirect("/workflow/prospect"),
//             },
//             {
//               path: ":stage",
//               lazy: () => import("../views/workflow/index"),
//             },
//           ],
//         },
//       ],
//     },
//     {
//       path: "login",
//       lazy: () => import("../views/login"),
//     },
//     {
//       path: "company-settings",
//       lazy: () => import("../views/company-setting"),
//       loader: loginWithAuthLoader,
  
//       children: [
//         {
//           path: "",
//           lazy: () => import("../views/company-settings/index"),
//         },
//         {
//           path: "accessrights",
//           lazy: () => import("../views/company-settings/accessrights"),
//         },
//         {
//           path: "approvers",
//           lazy: () => import("../views/company-settings/approvers"),
//         },
//         {
//           path: "career-site",
//           lazy: () => import("../views/company-settings/career-site"),
//         },
//         {
//           path: "company-profile",
//           lazy: () => import("../views/company-settings/company-profile"),
//         },
//         {
//           path: "custom-fields",
//           lazy: () => import("../views/company-settings/custom-fields"),
//         },
//         {
//           path: "external-api-settings",
//           lazy: () => import("../views/company-settings/external-api-settings"),
//         },
//         {
//           path: "look-feel",
//           lazy: () => import("../views/company-settings/look-feel"),
//         },
//         {
//           path: "manage-agencies",
//           lazy: () => import("../views/company-settings/manage-agencies"),
//         },
//         {
//           path: "manage-allTags",
//           lazy: () => import("../views/company-settings/manage-allTags"),
//         },
//         {
//           path: "manage-campuses",
//           lazy: () => import("../views/company-settings/manage-campuses"),
//         },
//         {
//           path: "manage-clients",
//           lazy: () => import("../views/company-settings/manage-clients"),
//         },
//         {
//           path: "manage-domains",
//           lazy: () => import("../views/company-settings/manage-domains"),
//         },
//         {
//           path: "manage-job-codes",
//           lazy: () => import("../views/company-settings/manage-job-codes"),
//         },
//         {
//           path: "manage-lists",
//           lazy: () => import("../views/company-settings/manage-lists"),
//         },
  
//         {
//           path: "manage-locations",
//           lazy: () => import("../views/company-settings/manage-locations"),
//         },
//         {
//           path: "manage-roles",
//           lazy: () => import("../views/company-settings/manage-roles"),
//         },
//         {
//           path: "manage-sources",
//           lazy: () => import("../views/company-settings/manage-sources"),
//         },
//         {
//           path: "manage-spcl-user",
//           lazy: () => import("../views/company-settings/manage-spcl-user"),
//         },
//         {
//           path: "manage-users",
//           lazy: () => import("../views/company-settings/manage-users"),
//         },
//         {
//           path: "onboarding-documents",
//           lazy: () => import("../views/company-settings/onboarding-documents"),
//         },
//         {
//           path: "page-customization",
//           lazy: () => import("../views/company-settings/page-customization"),
//         },
//         {
//           path: "preferences",
//           lazy: () => import("../views/company-settings/preferences"),
//         },
//         {
//           path: "referral-settings",
//           lazy: () => import("../views/company-settings/referral-settings"),
//         },
//         {
//           path: "Subscription",
//           lazy: () => import("../views/company-settings/subscription"),
//         },
//         {
//           path: "tatsettings",
//           lazy: () => import("../views/company-settings/tatsettings"),
//         },
//         {
//           path: "templates",
//           lazy: () => import("../views/company-settings/templates"),
//         },
//       ],
//     },
//     {
//       path: "employee-signup",
//       lazy: () => import("../views/employee-signup"),
//     },
//     {
//       path: "forgot-password",
//       lazy: () => import("../views/forgot-password"),
//     },
//     {
//       path: "reset-password",
//       lazy: () => import("../views/reset-password"),
//     },
//     {
//       path: "stop",
//       lazy: () => import("../views/stop"),
//       loader: () => {
//         const user = localStorage.getItem("user");
//         if (user) {
//           const loggedInUser = JSON.parse(user);
//           if (loggedInUser.email_verification.status == "verified") {
//             redirectTo();
//           }
//         } else {
//           return redirect("/login");
//         }
//         return null;
//       },
//     },
//     {
//       path: "verify",
//       lazy: () => import("../views/verify-page"),
//     },
//     {
//       path: "user-preferences",
//       lazy: () => import("../views/User-preferences/index"),
//       loader: loginWithAuthLoader,
//       children: [
//         {
//           path: "",
//           loader: () => redirect("/user-preferences/preferences"),
//         },
//         {
//           path: "preferences",
//           lazy: () => import("../views/User-preferences/email-preferences"),
//         },
//         {
//           path: "profile",
//           lazy: () => import("../views/User-preferences/profile-details"),
//         },
//         {
//           path: "myintegrations",
//           lazy: () => import("../views/User-preferences/integrations"),
//         },
//       ],
//     },
//     {
//       path: "signup",
//       lazy: () => import("../views/signup"),
//       loader: () => {
//         const user = localStorage.getItem("user");
//         if (user) {
//           const loggedInPerson = JSON.parse(user);
//           if (loggedInPerson.superAdmin == true) {
//             return redirect("/superadmin");
//           } else {
//             redirectTo();
//           }
//         }
//         return null;
//       },
//     },
//     {
//       path: "pendingverification",
//       lazy: () => import("../views/pendingverification"),
//       loader: () => {
//         const user = localStorage.getItem("user");
//         if (user) {
//           const loggedInPerson = JSON.parse(user);
//           if (
//             loggedInPerson &&
//             typeof loggedInPerson.customerState !== "undefined"
//           ) {
//             if (loggedInPerson.customerState.isAuthorized) {
//               redirectTo();
//             }
//           }
//         } else {
//           return redirect("/login");
//         }
//         return null;
//       },
//     },
//     {
//       path: "logout",
//       loader: () => {
//         localStorage.clear();
//         sessionStorage.clear();
//         return redirect("/login");
//       },
//     },
//   ]);
  
//   function loginWithAuthLoader({ request: { url } }: LoaderFunctionArgs) {
//     if (!localStorage.getItem("token")) {
//       sessionStorage.setItem("previousUrl", url);
//       return redirect("/login");
//     }
//     return null;
//   }
  
//   export default router;
  