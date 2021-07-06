(self.webpackChunkrematch_docs=self.webpackChunkrematch_docs||[]).push([[46],{1345:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(9603),r=a(120),o=(a(7378),a(5318)),l=["components"],s={id:"plugins",title:"Plugins",sidebar_label:"Plugins",slug:"/api-reference/plugins"},i=void 0,p={unversionedId:"api-reference/plugins",id:"api-reference/plugins",isDocsHomePage:!1,title:"Plugins",description:"Plugins provide the possibility to extend Rematch functionality. They can overwrite configuration, add new models or even replace the whole store. To get the idea how to build plugins, you can visit plugins section and refer to the source code of each plugin built by the Rematch team.",source:"@site/../docs/api-reference/plugins.md",sourceDirName:"api-reference",slug:"/api-reference/plugins",permalink:"/docs/api-reference/plugins",editUrl:"https://github.com/rematch/rematch/edit/main/docs/../docs/api-reference/plugins.md",version:"current",frontMatter:{id:"plugins",title:"Plugins",sidebar_label:"Plugins",slug:"/api-reference/plugins"},sidebar:"docs",previous:{title:"Store",permalink:"/docs/api-reference/store"},next:{title:"Introduction",permalink:"/docs/plugins/"}},c=[{value:"Configuration",id:"configuration",children:[]},{value:"Example of plugins implementation:",id:"example-of-plugins-implementation",children:[]}],d={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Plugins provide the possibility to extend Rematch functionality. They can overwrite configuration, add new models or even replace the whole store. To get the idea how to build plugins, you can visit ",(0,o.kt)("a",{parentName:"p",href:"/docs/plugins/"},"plugins")," section and refer to the source code of each plugin built by the Rematch team."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Plugin is an object that can contain the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"config"),"]"," (",(0,o.kt)("em",{parentName:"p"},"{models, redux}"),"): object with two properties - ",(0,o.kt)("inlineCode",{parentName:"p"},"models")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"redux"),". They allow to add additional models to the store with a plugin and overwrite redux configuration. The shape of these properties is the same as accepted by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/#initconfig"},"init")," method. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"models"},"Models")," and ",(0,o.kt)("a",{parentName:"p",href:"redux"},"Redux")," documentation for details.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"exposed"),"]"," (",(0,o.kt)("em",{parentName:"p"},"{","[string]",": ((rematchStore, ...args) => any) | object}"),"): it allows to assign extra properties to the store for communication between plugins as it is executed before ",(0,o.kt)("em",{parentName:"p"},"onModel")," and ",(0,o.kt)("em",{parentName:"p"},"onStoreCreated")," hooks. It must be either an object or a function accepting Rematch store and returning a value.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"createMiddleware"),"]"," (",(0,o.kt)("em",{parentName:"p"},"(bag) => Redux.Middleware"),"): used for creating custom middleware that needs access to Rematch internals available in the Rematch 'bag'. If you don't need to access 'bag', you can also put middleware in ",(0,o.kt)("inlineCode",{parentName:"p"},"config.redux.middlewares")," as described in ",(0,o.kt)("a",{parentName:"p",href:"redux"},"Redux"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"onReducer"),"]"," (",(0,o.kt)("em",{parentName:"p"},"(reducer, modelName, bag) => reducer | void"),"): executed when a ",(0,o.kt)("em",{parentName:"p"},"base reducer")," is created for a model. It can return a new reducer, in which case it will overwrite the one created by Rematch.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"onRootReducer"),"]"," (",(0,o.kt)("em",{parentName:"p"},"(reducer, bag) => reducer | void"),"): executed when a ",(0,o.kt)("em",{parentName:"p"},"root reducer")," is created for the store. It can return a new root reducer, in which case it will overwrite the one created by Rematch.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"onModel"),"]"," (",(0,o.kt)("em",{parentName:"p"},"(namedModel, rematchStore) => void"),"): when the whole setup for models is completed - reducers and dispatchers are ready, ",(0,o.kt)("inlineCode",{parentName:"p"},"onModel")," hook is executed for each model. It is also executed every time a model is added dynamically to the store. It can be used to collect information about models' reducers and effects, to overwrite them or create new properties.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("inlineCode",{parentName:"p"},"onStoreCreated"),"]"," (",(0,o.kt)("em",{parentName:"p"},"(rematchStore, bag) => rematchStore | void"),"): the last hook, runs at the end when Rematch Store is ready. It can return a new store, in which case it will overwrite the one created by Rematch. Usually, it is used to add extra properties or functions to the store. If you choose to do this with a plugin with TypeScript, be sure to update your stores typings."))),(0,o.kt)("h3",{id:"example-of-plugins-implementation"},"Example of plugins implementation:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"plugin"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  config: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    redux: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      combineReducers: customCombineReducers,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    models: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      extra: extraModel,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  exposed: { select: {} },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"createMiddleware"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": ("),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"rematchBag"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},") "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," ("),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"store"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},") "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," ("),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"next"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},") "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," ("),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"action"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},") "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// do something here")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"next"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"(action);")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"onReducer"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"reducer"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"modelName"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"bag"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},") {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// do something")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"onRootReducer"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"reducer"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"bag"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},") {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// do something")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"onModel"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"namedModel"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"rematchStore"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},") {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// do something")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"onStoreCreated"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"rematchStore"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#E36209"}},"bag"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},") {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// do something")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"};"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"plugin"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  config: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    redux: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      combineReducers: customCombineReducers,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    models: {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      extra: extraModel,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  exposed: { select: {} },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"createMiddleware"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},": ("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"rematchBag"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," ("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"store"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," ("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"next"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," ("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"action"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// do something here")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"next"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"(action);")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"onReducer"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"reducer"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"modelName"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"bag"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// do something")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"onRootReducer"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"reducer"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"bag"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// do something")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"onModel"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"namedModel"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"rematchStore"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// do something")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"onStoreCreated"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"rematchStore"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},", "),(0,o.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"bag"),(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// do something")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"};")))))),(0,o.kt)("p",null,"You can look at our official plugins to check examples to start with."))}m.isMDXComponent=!0},5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return N}});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),N=r,k=m["".concat(i,".").concat(N)]||m[N]||d[N]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);