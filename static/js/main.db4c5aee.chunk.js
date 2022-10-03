(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var c=s(9),a=s.n(c),n=s(10),r=s(5),i=s(2),o=s(3),l=s.n(o),d=s(1),j=(s(16),s(17),s(18),s(4)),m=s.n(j),u=s(0),b=function(e){var t=e.posts,s=e.postId,c=e.setPostId,a=e.fetchComments,n=e.setShowForm;return Object(u.jsxs)("div",{"data-cy":"PostsList",children:[Object(u.jsx)("p",{className:"title",children:"Posts:"}),Object(u.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"has-background-link-light",children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"Post",children:[Object(u.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(u.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:s===e.id?Object(u.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link",onClick:function(){c(0),n(!1)},children:"Close"}):Object(u.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-light",onClick:function(){c(e.id),a(e.id),n(!1)},children:"Open"})})]},e.id)}))})]})]})},h=(s(20),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.addComment,s=Object(d.useState)(""),c=Object(i.a)(s,2),a=c[0],n=c[1],r=Object(d.useState)(""),o=Object(i.a)(r,2),l=o[0],j=o[1],b=Object(d.useState)(""),h=Object(i.a)(b,2),O=h[0],x=h[1],p=Object(d.useState)(!1),f=Object(i.a)(p,2),v=f[0],N=f[1],y=Object(d.useState)(!1),g=Object(i.a)(y,2),w=g[0],C=g[1],S=Object(d.useState)(!1),k=Object(i.a)(S,2),E=k[0],P=k[1],F=Object(d.useState)(!1),I=Object(i.a)(F,2),T=I[0],U=I[1],B=!a||!l||!O;return Object(u.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){if(e.preventDefault(),B)return C(""===a),P(""===l),void U(""===O);t(a,l,O,N),x("")},children:[Object(u.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:m()("input",{"input is-danger":w}),value:a,onChange:function(e){n(e.target.value),C(!1)}}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-user"})}),w&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),w&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:m()("input",{"input is-danger":E}),value:l,onChange:function(e){j(e.target.value),P(!1)}}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-envelope"})}),E&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),E&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:m()("textarea",{"textarea is-danger":T}),value:O,onChange:function(e){x(e.target.value),U(!1)}})}),T&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(u.jsxs)("div",{className:"field is-grouped",children:[Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"submit",className:m()("button is-link",{"button is-link is-loading":v}),children:"Add"})}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){n(""),j(""),x(""),C(!1),P(!1),U(!1)},children:"Clear"})})]})]})},x=function(e){var t=e.selectedPost,s=e.comments,c=e.loadingComment,a=e.showComments,n=e.dropErrorComments,r=e.removeComment,i=e.setShowForm,o=e.showForm,l=e.addComment;return Object(u.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(u.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(u.jsxs)("div",{className:"block",children:[Object(u.jsxs)("h2",{"data-cy":"PostTitle",children:["#",null===t||void 0===t?void 0:t.id,": ",null===t||void 0===t?void 0:t.title]}),Object(u.jsx)("p",{"data-cy":"PostBody",children:null===t||void 0===t?void 0:t.body})]}),c&&Object(u.jsx)(h,{}),n&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),a&&Object(u.jsxs)("div",{className:"block",children:[0===s.length?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No Comments yet"})}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"title is-4",children:"Comments:"}),s.map((function(e){return Object(u.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(u.jsxs)("div",{className:"message-header",children:[Object(u.jsx)("a",{href:e.email,"data-cy":"CommentAuthor",children:e.name}),Object(u.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){r(e.id)},children:"delete button"})]}),Object(u.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]})}))]}),o?Object(u.jsx)(O,{addComment:l}):Object(u.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){i(!0)},children:"Write a comment"})]})]})})},p=function(e){var t=e.showUsers,s=e.setShowUsers,c=e.users,a=e.selectedUser,n=e.setSelectedUser,r=e.fetchPosts,i=e.setPostId;return Object(u.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(u.jsx)("div",{className:"dropdown-trigger",children:Object(u.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){s(!t)},children:[0===a?Object(u.jsx)("span",{children:"Choose a user"}):Object(u.jsx)("span",{children:c[a-1].name}),Object(u.jsx)("span",{className:"icon is-small",children:Object(u.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),t&&Object(u.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(u.jsx)("div",{className:"dropdown-content",children:c.map((function(e){return Object(u.jsx)(u.Fragment,{children:a===e.id?Object(u.jsx)("a",{href:"#user-".concat(e.id),className:"dropdown-item is-active",onClick:function(){s(!t)},children:e.name},e.id):Object(u.jsx)("a",{href:"#user-".concat(e.id),className:"dropdown-item",onClick:function(){n(e.id),i(0),r(e.id),s(!t)},children:e.name},e.id)})}))})})]})},f="https://mate.academy/students-api";function v(e){return new Promise((function(t){setTimeout(t,e)}))}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),"DELETE"===t?fetch(f+e,c).then((function(e){if(!e.ok)throw new Error;return e.json()})):v(300).then((function(){return fetch(f+e,c)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var y=function(e){return N(e)},g=function(e,t){return N(e,"POST",t)},w=function(e){return N(e,"DELETE")},C=function(e){return y("/posts?userId=".concat(e))},S=function(e){return y("/comments?postId=".concat(e))},k=function(e){return w("/comments/".concat(e))},E=function(e,t,s,c){return g("/comments/",{postId:e,name:t,email:s,body:c})},P=function(){var e=Object(d.useState)(!1),t=Object(i.a)(e,2),s=t[0],c=t[1],a=Object(d.useState)([]),o=Object(i.a)(a,2),j=o[0],O=o[1],f=Object(d.useState)(0),v=Object(i.a)(f,2),N=v[0],g=v[1],w=Object(d.useState)([]),P=Object(i.a)(w,2),F=P[0],I=P[1],T=Object(d.useState)(0),U=Object(i.a)(T,2),B=U[0],L=U[1],D=Object(d.useState)(!1),M=Object(i.a)(D,2),A=M[0],_=M[1],J=Object(d.useState)(!1),q=Object(i.a)(J,2),W=q[0],G=q[1],Y=Object(d.useState)(!1),z=Object(i.a)(Y,2),H=z[0],K=z[1],Q=Object(d.useState)(!1),R=Object(i.a)(Q,2),V=R[0],X=R[1],Z=Object(d.useState)([]),$=Object(i.a)(Z,2),ee=$[0],te=$[1],se=Object(d.useState)(!1),ce=Object(i.a)(se,2),ae=ce[0],ne=ce[1],re=Object(d.useState)(!1),ie=Object(i.a)(re,2),oe=ie[0],le=ie[1],de=Object(d.useState)(!1),je=Object(i.a)(de,2),me=je[0],ue=je[1],be=Object(d.useCallback)(function(){var e=Object(r.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!1),_(!0),K(!1),e.prev=3,e.next=6,C(t);case 6:s=e.sent,I(s),_(!1),X(!0),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),_(!1),K(!0);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),[]),he=Object(d.useCallback)(function(){var e=Object(r.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ne(!1),G(!0),le(!1),e.prev=3,e.next=6,S(t);case 6:s=e.sent,te(s),G(!1),ne(!0),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),G(!1),le(!0);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),[]),Oe=Object(d.useCallback)(function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(t);case 3:te((function(e){return e.filter((function(e){return e.id!==t}))})),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),ne(!1),le(!0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),[]),xe=Object(d.useCallback)(function(){var e=Object(r.a)(l.a.mark((function e(t,s,c,a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,E(B,t,s,c);case 4:r=e.sent,te((function(e){return[].concat(Object(n.a)(e),[r])})),a(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),a(!1);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,s,c,a){return e.apply(this,arguments)}}(),[]);Object(d.useEffect)((function(){var e=function(){var e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("/users");case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var pe=Object(d.useMemo)((function(){return F.find((function(e){return e.id===B}))}),[F,B]);return Object(u.jsx)("main",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"tile is-ancestor",children:[Object(u.jsx)("div",{className:"tile is-parent",children:Object(u.jsxs)("div",{className:"tile is-child box is-success",children:[Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(p,{users:j,showUsers:s,setShowUsers:c,selectedUser:N,setSelectedUser:g,fetchPosts:be,setPostId:L})}),H&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),Object(u.jsxs)("div",{className:"block","data-cy":"MainContent",children:[0===N&&Object(u.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),V&&(0===F.length?Object(u.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}):Object(u.jsx)(b,{posts:F,postId:B,setPostId:L,fetchComments:he,setShowForm:ue})),A&&Object(u.jsx)(h,{})]})]})}),Object(u.jsx)("div",{"data-cy":"Sidebar",className:m()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":0!==B}),children:Object(u.jsx)("div",{className:"tile is-child box is-success ",children:Object(u.jsx)(x,{selectedPost:pe,comments:ee,loadingComment:W,showComments:ae,dropErrorComments:oe,removeComment:Oe,setShowForm:ue,showForm:me,addComment:xe})})})]})})})};a.a.render(Object(u.jsx)(P,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.db4c5aee.chunk.js.map