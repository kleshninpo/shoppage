(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADLSURBVFhH7ZZRCgMhDAW9RHv/3/Y47fY8bR74IIh0E00sFAfEddnNzKdls+lwkXWrexSYda/7KfjwLeshKyICMw5ZmInZp+AHyCMitBy7eZaOeNazl2E5wQ+Qj0RMy8lIRJiceCLC5cQSkSYnOqIVpMtJT7RMTlrhUjnREcvl4KcBWo5dP6dHtHKc23dXWSn05CQ94pucQJoSYZGT8AiPnIRFjMiJjnjVs4sZOYEUcndEhJwMRfBSOisnOsJ8KTVfoY0gInrm5i8o5QPsLHpMYUWLvQAAAABJRU5ErkJggg=="},20:function(e,t,n){e.exports=n(33)},29:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),i=n.n(c),o=n(10),l=n(13),s=n(9),u="ADD_GOOD_IN_CART",m="DELETE_GOOD_FROM_CART",p="DELETE_ALL_THIS_GOOD_FROM_CART",d="APPLY_DISCOUNT",h="SHOW_HAMBURGER",f={goodsInCart:[],discountSize:1800,isDiscount:!1,showHamburger:!1};var b=Object(o.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(s.a)({},e,{goodsInCart:[].concat(Object(l.a)(e.goodsInCart),[t.payload()])});case m:return Object(s.a)({},e,{goodsInCart:Object(l.a)(t.payload(e.goodsInCart))});case p:return Object(s.a)({},e,{goodsInCart:t.payload(e.goodsInCart)});case d:return Object(s.a)({},e,{isDiscount:!e.isDiscount});case h:return Object(s.a)({},e,{showHamburger:!e.showHamburger});default:return e}},f),g=n(6),E=(n(29),n(1)),O=n(2),j=n(4),y=n(3),v=n(5),C=[{id:1,src:"../img/logo-star.png",about:"\u0417\u0432\u0435\u0437\u0434\u0430",href:"https://star.ru",text:"\u0417\u0432\u0435\u0437\u0434\u043d\u044b\u0439 \u0431\u043b\u043e\u0433"},{id:2,src:"../img/logo-youtube.png",about:"Youtube",href:"https://youtube.ru",text:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430\u0441 \u043d\u0430 YouTube"},{id:3,src:"../img/logo-youtube2.png",about:"Youtube",href:"https://youtube.ru",text:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430\u0448 \u043f\u0440\u044f\u043c\u043e\u0439 \u044d\u0444\u0438\u0440"}],A=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LinksList"},C.map(function(e){return function(e){var t=e.id,n=e.src,a=e.about,c=e.href,i=e.text;return r.a.createElement("a",{className:"logo-link",key:t,href:c},r.a.createElement("img",{src:n,alt:a}),r.a.createElement("p",null,i))}(e)}))}}]),t}(a.Component),x=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"TopLine"},r.a.createElement("div",{className:"content-wrapper topline__content-wrapper"},r.a.createElement("a",{href:"tel:8(800)500-75-55"},r.a.createElement("span",null,"8(800)500-75-55")," \u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0437\u0432\u043e\u043d\u043e\u043a \u043f\u043e \u0420\u043e\u0441\u0441\u0438\u0438"),r.a.createElement(A,null)))}}]),t}(a.Component),w=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"search",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u0430\u0439\u0442\u0443"}))}}]),t}(a.Component),N=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Content"},r.a.createElement("div",{className:"content-wrapper Content__content-wrapper"},r.a.createElement("div",{className:"leftside"},r.a.createElement("a",{href:"/main",className:"main-logo-link"},r.a.createElement("img",{src:"../img/logo.png",alt:"Shop24"})),r.a.createElement(w,null)),r.a.createElement("div",{className:"rightside"},r.a.createElement("p",null,"\u0418\u0432\u0430\u043d"),r.a.createElement("p",null,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435: ",this.props.goodsInCart.length))))}}]),t}(a.Component),k=Object(g.b)(function(e){return{goodsInCart:e.goodsInCart}})(N),_=[{id:1,href:"/clothesAndAccessories",text:"\u041e\u0434\u0435\u0436\u0434\u0430 \u0438 \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b",submenu:[{id:1,href:"/manClothes",text:"\u041c\u0443\u0436\u0441\u043a\u0430\u044f \u041e\u0434\u0435\u0436\u0434\u0430"},{id:2,href:"/womanClothes",text:"\u0416\u0435\u043d\u0441\u043a\u0430\u044f \u041e\u0434\u0435\u0436\u0434\u0430"},{id:3,href:"/accessories",text:"\u0410\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b"}]},{id:2,href:"/shoes",text:"\u041e\u0431\u0443\u0432\u044c",submenu:[{id:1,href:"/manClothes",text:"\u0421\u0430\u043f\u043e\u0433\u0438"},{id:2,href:"/womanClothes",text:"\u0413\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0435 \u0441\u0430\u043f\u043e\u0433\u0438"},{id:3,href:"/accessories",text:"\u0421\u0430\u043f\u043e\u0433\u0438 \u0434\u043b\u044f \u0434\u043e\u043c\u0430"}]},{id:3,href:"/jewelry",text:"\u0423\u043a\u0440\u0430\u0448\u0435\u043d\u0438\u044f",submenu:[{id:1,href:"/manClothes",text:"\u0416\u0435\u043c\u0447\u0443\u0433\u0430"},{id:2,href:"/womanClothes",text:"\u0411\u0440\u0438\u043b\u043b\u0438\u0430\u043d\u0442\u044b"},{id:3,href:"/accessories",text:"\u0410\u043b\u043c\u0430\u0437\u043d\u044b\u0435 \u043e\u0436\u0435\u0440\u0435\u043b\u044c\u044f"}]},{id:4,href:"/fitnessAndHealth",text:"\u041a\u0440\u0430\u0441\u043e\u0442\u0430 \u0438 \u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435",submenu:[{id:1,href:"/manClothes",text:"\u041a\u0440\u0435\u043c\u0430 \u0434\u043b\u044f \u0440\u0443\u043a"},{id:2,href:"/womanClothes",text:"\u041a\u0440\u0435\u043c\u0430 \u0434\u043b\u044f \u043d\u043e\u0433"},{id:3,href:"/accessories",text:"\u0411\u0430\u043b\u044c\u0437\u0430\u043c\u044b \u0434\u043b\u044f \u0434\u0443\u0448\u0438"}]},{id:5,href:"/homeGoods",text:"\u0422\u043e\u0432\u0430\u0440\u044b \u0434\u043b\u044f \u0434\u043e\u043c\u0430",submenu:[{id:1,href:"/manClothes",text:"\u0422\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440\u044b"},{id:2,href:"/womanClothes",text:"\u041f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0438 \u0434\u043b\u044f \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u0445 \u0441\u0430\u043f\u043e\u0433"},{id:3,href:"/accessories",text:"\u0422\u0435\u043b\u0435\u0432\u0438\u0437\u043e\u0440\u044b \u043f\u043e\u043c\u0435\u043d\u044c\u0448\u0435"}]},{id:6,href:"/kitchenGoods",text:"\u0422\u043e\u0432\u0430\u0440\u044b \u0434\u043b\u044f \u043a\u0443\u0445\u043d\u0438",submenu:[{id:1,href:"/manClothes",text:"\u041d\u043e\u0436\u0438"},{id:2,href:"/womanClothes",text:"\u0422\u043e\u043f\u043e\u0440\u044b"},{id:3,href:"/accessories",text:"\u041f\u0438\u043b\u044b"}]}];var I=n(19),D=n.n(I),S=document.body.clientWidth;var z=function(e){var t=e.id,n=e.href,a=e.text,c=e.submenu;return r.a.createElement("li",{key:t,className:"categories-list__item"},r.a.createElement("a",{href:n,onClick:function(e){return function(e){return S<=600?e.preventDefault():e}(e)},className:"anchor"},a),c?r.a.createElement("ul",{className:"submenu"},c.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:e.href},e.text))})):"")},G=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).onHamburgerClick=function(){return n.props.showHamburger?n.refs.categoriesList.setAttribute("class","categories-list"):n.refs.categoriesList.setAttribute("class","categories-list active"),n.props.showHamburgerAction()},n.buttonStyle={background:"url(".concat(D.a,") center center no-repeat"),backgroundSize:"cover"},n}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"categories-list-wrapper"},r.a.createElement("div",{className:"content-wrapper categories-list__content-wrapper"},r.a.createElement("button",{ref:"hamburger",className:"hamburger",onClick:function(){return e.onHamburgerClick()},style:this.props.showHamburger?this.buttonStyle:{}}),r.a.createElement("ul",{ref:"categoriesList",className:"categories-list"},_.map(function(e){return z(e)}))))}}]),t}(a.Component),H=Object(g.b)(function(e){return{showHamburger:e.showHamburger}},function(e){return{showHamburgerAction:function(){return e({type:h})}}})(G),R=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement(x,null),r.a.createElement(k,null),r.a.createElement(H,null))}}]),t}(a.Component),L=[{id:1,name:"\u041f\u043b\u0430\u0442\u044c\u0435-\u043c\u0438\u0434\u0438 \u0441 \u0440\u0430\u0441\u043a\u043b\u0435\u0448\u0435\u043d\u043d\u043e\u0439 \u044e\u0431\u043a\u043e\u0439",price:2450,img:"../img/item-dress.png",color:"\u0441\u0438\u043d\u0438\u0439",size:"44",code:"82039-11",quantity:0},{id:2,name:"\u0422\u0443\u0444\u043b\u0438 \u0436\u0435\u043d\u0441\u043a\u0438\u0435, \u0443\u043a\u0440\u0430\u0448\u0435\u043d\u043d\u044b\u0435 \u043a\u0440\u0443\u0436\u0435\u0432\u043d\u044b\u043c\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0430\u043c\u0438",price:250,img:"../img/item-shoes.png",color:"\u0447\u0435\u0440\u043d\u044b\u0439",size:"38",code:"13524-01",quantity:0},{id:3,name:"\u041f\u043b\u0430\u0442\u044c\u0435-\u043c\u0438\u0434\u0438",price:1450,img:"../img/item-dress2.png",color:"\u0431\u0435\u043b\u044b\u0439",size:"44",code:"75039",quantity:0},{id:4,name:"\u041f\u043b\u0430\u0442\u044c\u0435-\u043c\u0438\u0434\u0438",price:1450,img:"../img/item-dress2.png",color:"\u0431\u0435\u043b\u044b\u0439",size:"46",code:"75039-1",quantity:0}];var F=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(c)))).renderGoods=function(e){var t=e.id,a=e.name,c=e.price,i=e.img,o=e.color,l=e.size,s=e.code,u=e.quantity;return r.a.createElement("div",{key:t,ref:t,className:"flex-row"},r.a.createElement("img",{src:i,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 "+{name:a}}),r.a.createElement("div",{className:"flex-row__item-info"},r.a.createElement("p",{className:"item-info__name"},a),r.a.createElement("p",{className:"item-info__code"},"\u041a\u043e\u0434: ",s),r.a.createElement("p",{className:"item-info__size"},"\u0420\u0430\u0437\u043c\u0435\u0440: ",l),r.a.createElement("p",{className:"item-info__color"},"\u0426\u0432\u0435\u0442: ",o)),r.a.createElement("p",{className:"item-quantity"},r.a.createElement("span",{className:"change-quantity",onClick:function(){return n.props.deleteGoodFromCart(e)}},"-"),u,r.a.createElement("span",{className:"change-quantity",onClick:function(){return n.props.addGoodInCart(e)}},"+")),r.a.createElement("p",{className:"price"},c," \u0440\u0443\u0431."),r.a.createElement("div",null,r.a.createElement("span",{className:"delete",onClick:function(a){return n.refs[t].setAttribute("class","noneDisplay"),n.props.deleteAllThisGoodFromCart(e)}},"\u2716")))},n}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"GoodsList"},L.map(function(t){return e.renderGoods(t)}))}}]),t}(a.Component),T=Object(g.b)(function(e){return{addGoodInCart:e.addGoodInCart,deleteGoodFromCart:e.deleteGoodFromCart,goodsInCart:e.goodsInCart}},function(e){return{addGoodInCart:function(t){return e(function(e){return{type:u,payload:function(){return++e.quantity,e}}}(t))},deleteGoodFromCart:function(t){return e(function(e){return{type:m,payload:function(t){if(t.length){for(var n=0;t[n].code!==e.code;)n++;return--e.quantity,t.splice(n,1),t}return t}}}(t))},deleteAllThisGoodFromCart:function(t){return e(function(e){return{type:p,payload:function(t){return e.quantity=0,t=t.filter(function(t){return t.code!==e.code})}}}(t))}}})(F),Y=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{role:"main",className:"Shop-cart"},r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("h2",{className:"main-caption"},"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430:"),r.a.createElement("div",{className:"flex-row shop-cart__flex-row"},r.a.createElement("h3",null,"\u0422\u043e\u0432\u0430\u0440"),r.a.createElement("h3",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),r.a.createElement("h3",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),r.a.createElement("h3",null,"\u0426\u0435\u043d\u0430"),r.a.createElement("h3",null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),r.a.createElement(T,null)))}}]),t}(a.Component);var q=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).handleApplyDiscount=function(e){"123456"===n.refs.promoInput.value&&(e.currentTarget.setAttribute("disabled",!0),n.props.applyDiscount())},n}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.totalPrice,a=t.discountSize,c=t.isDiscount;return r.a.createElement("div",{className:"Calculate"},r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"promocode"},r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"promo-input"},"\u0415\u0441\u0442\u044c \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434?"),r.a.createElement("input",{id:"promo-input",ref:"promoInput",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u043c\u043e\u043a\u043e\u0434"})),r.a.createElement("button",{className:"ellipse-button enter-promo",onClick:function(t){return e.handleApplyDiscount(t)}},"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c")),r.a.createElement("div",{className:"common-price"},r.a.createElement("div",{className:"common-price__row"},r.a.createElement("p",null,"\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430"),r.a.createElement("p",null,n," \u0440\u0443\u0431.")),c?r.a.createElement("div",{className:"common-price__row promo-row"},r.a.createElement("p",null,"\u041f\u0440\u043e\u043c\u043e\u043a\u043e\u0434"),r.a.createElement("p",null,"-",a," \u0440\u0443\u0431")):"",r.a.createElement("div",{className:"common-price__row"},r.a.createElement("p",null,"\u0412\u0441\u0435\u0433\u043e:"),r.a.createElement("p",null,c?n>=1800?n-a:0:n," \u0440\u0443\u0431.")),r.a.createElement("button",{className:"ellipse-button buy-items"},"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437"))))}}]),t}(a.Component),M=Object(g.b)(function(e){return{isDiscount:e.isDiscount}},function(e){return{applyDiscount:function(){return e({type:d})}}})(q),B=[{id:1,name:"\u0421\u0443\u043c\u043a\u0430 \u0441 \u0431\u0430\u043d\u0430\u043d\u0430\u043c\u0438",price:2450,img:"../img/item-bag-big.png",color:"\u0441\u0438\u043d\u0438\u0439",size:"nosize",code:"82039-11"},{id:2,name:"\u0428\u043b\u044f\u043f\u0430",price:2450,img:"../img/item-hat-big.png",color:"\u0447\u0435\u0440\u043d\u044b\u0439",size:"nosize",code:"13524-01"},{id:3,name:"\u041d\u043e\u0441\u043a\u0438 \u0432 \u0441\u0435\u0442\u043e\u0447\u043a\u0443",price:2450,img:"../img/item-socks-big.png",color:"\u0431\u0435\u043b\u044b\u0439",size:"44",code:"75039"},{id:4,name:"\u041f\u043b\u0430\u0442\u044c\u0435-\u043c\u0438\u0434\u0438",price:2450,img:"../img/item-dress-big.png",color:"\u0431\u0435\u043b\u044b\u0439",size:"46",code:"75039"}],J=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"goods-wrapper"},B.map(function(e){return function(e){var t=e.id,n=e.img,a=e.name,c=e.price;return r.a.createElement("div",{className:"Add-to-cart__item",key:t},r.a.createElement("img",{src:n,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 "+{name:a}}),r.a.createElement("p",null,a),r.a.createElement("p",null,c," \u0440\u0443\u0431."))}(e)}))}}]),t}(a.Component),Q=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Add-to-cart"},r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("h2",{className:"main-caption"},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043a\u0430\u0437\u0443"),r.a.createElement(J,null)))}}]),t}(a.Component),U=[{id:1,img:"../img/Vkontakte.png",href:"vk.com/shop24"},{id:2,img:"../img/Facebook.png",href:"facebook.com/shop24"},{id:3,img:"../img/Odnoklassniki.png",href:"ok.ru/shop24"},{id:4,img:"../img/Pinme.png",href:"pinme.ru/shop24"},{id:5,img:"../img/Pinterest.png",href:"pinterest.com/shop24"},{id:6,img:"../img/Instagram.png",href:"instagram.com/shop24"},{id:7,img:"../img/Youtube.png",href:"youtube.com/shop24"}],P=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Social"},r.a.createElement("p",null,"Shop24 \u0432 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0442\u044f\u0445:"),U.map(function(e){return function(e){var t=e.id,n=e.img,a=e.href,c={background:"url(".concat(n,") center center no-repeat")};return r.a.createElement("a",{href:a,className:"social-item",style:c,key:t}," ")}(e)}))}}]),t}(a.Component),W=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{href:"/main"},r.a.createElement("img",{src:"../img/logo-gray.png",alt:"SHOP24"}))}}]),t}(a.Component),Z=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-contacts"},r.a.createElement("a",{href:"tel:8(800)500-75-55"},"8 (800) 500-75-55*"),r.a.createElement("p",{className:"freeCall"},"*\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0437\u0432\u043e\u043d\u043e\u043a \u043f\u043e \u0420\u043e\u0441\u0441\u0438\u0438"),r.a.createElement("a",{href:"tel:8(495)733-96-03"},"8 (495) 733-96-03"))}}]),t}(a.Component),K=[[{id:1,text:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u043e\u0432\u0430\u0440\u043e\u0432",href:"/"},{id:2,text:"\u041e\u0434\u0435\u0436\u0434\u0430 \u0438 \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044b",href:"/"},{id:3,text:"\u041e\u0431\u0443\u0432\u044c",href:"/"},{id:4,text:"\u0423\u043a\u0440\u0430\u0448\u0435\u043d\u0438\u044f",href:"/"},{id:5,text:"\u041a\u0440\u0430\u0441\u043e\u0442\u0430 \u0438 \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435",href:"/"},{id:6,text:"\u0422\u043e\u0432\u0430\u0440\u044b \u0434\u043b\u044f \u0434\u043e\u043c\u0430, \u0434\u0430\u0447\u0438 \u0438 \u043e\u0442\u0434\u044b\u0445\u0430",href:"/"},{id:7,text:"\u0422\u043e\u0432\u0430\u0440\u044b \u0434\u043b\u044f \u043a\u0443\u0445\u043d\u0438",href:"/"}],[{id:1,text:"\u0417\u0430\u043a\u0430\u0437",href:"/"},{id:2,text:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0438 \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430",href:"/"},{id:3,text:"\u0412\u043e\u0437\u0432\u0440\u0430\u0442",href:"/"},{id:4,text:"\u041f\u043e\u043c\u043e\u0449\u044c",href:"/"},{id:5,text:"\u0411\u043b\u0430\u0433\u043e\u0442\u0432\u043e\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u043d\u0434 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u0430 \u0425\u0430\u0431\u0435\u043d\u0441\u043a\u043e\u0433\u043e",href:"/"},{id:6,text:"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u043d\u0430 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",href:"/"},{id:7,text:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435",href:"/"}],[{id:1,text:"Shop24",href:"/"},{id:2,text:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u0440\u044f\u043c\u043e\u0439 \u044d\u0444\u0438\u0440",href:"/"},{id:3,text:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0447",href:"/"},{id:4,text:"\u0410\u043a\u0446\u0438\u0438",href:"/"},{id:5,text:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442",href:"/"},{id:6,text:"\u041f\u043e\u0438\u0441\u043a \u0438 \u043a\u0440\u0430\u0442\u0430 \u0441\u0430\u0439\u0442\u0430",href:"/"},{id:7,text:"\u041a\u0430\u0440\u0442\u0430 \u0431\u0440\u0435\u043d\u0434\u043e\u0432",href:"/"},{id:8,text:"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c",href:"/"}],[{id:1,text:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",href:"/"},{id:2,text:"\u041e \u043a\u0430\u043d\u0430\u043b\u0435",href:"/"},{id:3,text:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u043e",href:"/"},{id:4,text:"\u041f\u043e\u043a\u0443\u043f\u0430\u0439\u0442\u0435 \u0441 \u043d\u0430\u043c\u0438",href:"/"},{id:5,text:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",href:"/"}]],V=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-list-wrapper"},K.map(function(e,t){return r.a.createElement("ul",{key:t},e.map(function(e){return function(e){var t=e.id,n=e.text,a=e.href;return r.a.createElement("li",{key:t},r.a.createElement("a",{href:a},n))}(e)}))}))}}]),t}(a.Component),X=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer-content"},r.a.createElement("div",{className:"logo-contacts-container"},r.a.createElement(W,null),r.a.createElement(Z,null)),r.a.createElement(V,null))}}]),t}(a.Component),$=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Copyright"},r.a.createElement("p",null,"Copyright \xa9 \u0422\u043e\u0432\u0430\u0440 \u041e\u041e\u041e \xab\u0421\u0442\u0438\u043b\u044c \u0438 \u041c\u043e\u0434\u0430\xbb, 2014-2016. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b."),r.a.createElement("p",null,"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0441\u0430\u0439\u0442\u0430 \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 www.shop24.com \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430."),r.a.createElement("p",null,"115193, \u041c\u043e\u0441\u043a\u0432\u0430, \u0443\u043b. \u041a\u043e\u0436\u0443\u0445\u043e\u0432\u0441\u043a\u0430\u044f 5-\u0430\u044f, \u0434. 9, \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0435 VII"),r.a.createElement("p",null,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d 8 800 500-75-55"))}}]),t}(a.Component),ee=function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("div",{className:"content-wrapper Footer__content-wrapper"},r.a.createElement(P,null),r.a.createElement(X,null),r.a.createElement($,null)))}}]),t}(a.Component),te=(n(31),function(e){function t(){return Object(E.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.goodsInCart,n=e.discountSize,a=e.isDiscount;return r.a.createElement("div",{className:"App"},r.a.createElement(R,null),r.a.createElement(Y,null),r.a.createElement(M,{totalPrice:t.length?t.reduce(function(e,t){return e+t.price},0):0,discountSize:n,isDiscount:a}),r.a.createElement(Q,null),r.a.createElement(ee,null))}}]),t}(a.Component)),ne=Object(g.b)(function(e){return{goodsInCart:e.goodsInCart,discountSize:e.discountSize,isDiscount:e.isDiscount}})(te);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(g.a,{store:b},r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.b862f285.chunk.js.map