(self.webpackChunkrematch_docs=self.webpackChunkrematch_docs||[]).push([[411],{4285:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var n=t(9603),o=t(120),r=(t(7378),t(5318)),s=["components"],l={id:"models",title:"Models",sidebar_label:"Models",slug:"/api-reference/models"},p=void 0,i={unversionedId:"api-reference/models",id:"api-reference/models",isDocsHomePage:!1,title:"Models",description:"Models are crucial parts of your store. They allow you to define your initial state, reducers and effects. You can provide them to the Rematch init method as config.models property.",source:"@site/../docs/api-reference/models.md",sourceDirName:"api-reference",slug:"/api-reference/models",permalink:"/docs/api-reference/models",editUrl:"https://github.com/rematch/rematch/edit/main/docs/../docs/api-reference/models.md",version:"current",frontMatter:{id:"models",title:"Models",sidebar_label:"Models",slug:"/api-reference/models"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/api-reference/"},next:{title:"Redux",permalink:"/docs/api-reference/redux"}},c=[{value:"Configuration",id:"configuration",children:[]}],d={toc:c};function m(e){var a=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Models are crucial parts of your store. They allow you to define your initial state, reducers and effects. You can provide them to the Rematch ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/#initconfig"},"init")," method as ",(0,r.kt)("inlineCode",{parentName:"p"},"config.models")," property."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Configuration for a model is build using the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"]"," (",(0,r.kt)("em",{parentName:"p"},"string"),"): the name will become a key in the store's state and in the dispatch created by Rematch. It means that you will be able to access state of a model named 'count' using ",(0,r.kt)("inlineCode",{parentName:"p"},"store.getState().count")," and dispatch actions using ",(0,r.kt)("inlineCode",{parentName:"p"},"store.dispatch.count"),". If you don't provide a name for the model, Rematch will use a key from the ",(0,r.kt)("inlineCode",{parentName:"p"},"models")," object provided to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/#initconfig"},"init")," function.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"state")," (",(0,r.kt)("em",{parentName:"p"},"any"),"): initial state for a model.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"reducers")," (",(0,r.kt)("em",{parentName:"p"},"{ ","[string]",": (state, payload) => any }"),"): an object of functions that change the model's state. These functions take the model's previous state and a payload, and return the model's next state. These should be pure functions relying only on the state and payload arguments to compute the next state. For code that relies on the \"outside world\" ","(","impure functions like api calls, etc.",")",", use effects."),(0,r.kt)("p",{parentName:"li"},"Reducers may also listen to actions from other models by listing the 'model name' + 'action name' as their key (see example).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("inlineCode",{parentName:"p"},"baseReducer"),"]"," (",(0,r.kt)("em",{parentName:"p"},"(state, action) => state"),"): a reducer that will run before the model's ",(0,r.kt)("inlineCode",{parentName:"p"},"reducers"),". This function takes the model's previous state and an action, and returns the model state that ",(0,r.kt)("inlineCode",{parentName:"p"},"reducers")," will use."),(0,r.kt)("p",{parentName:"li"},"In general, you don't need to use baseReducer. However, it is especially useful for adding redux libraries to your store in a structured manner. See the recipe for ",(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/redux-plugins"},"redux plugins"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"[",(0,r.kt)("inlineCode",{parentName:"p"},"effects"),"]"," (",(0,r.kt)("em",{parentName:"p"},"{ ","[string]",": (payload, rootState) } | (dispatch => { ","[string]",": (payload, rootState) })"),"): effects have access to model's state and reducers, and they allow to handle the world outside of the model. Therefore, they are often used to manage asynchronous actions."),(0,r.kt)("p",{parentName:"li"},"Effect is a function which takes a payload and store's ",(0,r.kt)("strong",{parentName:"p"},"root state")," and returns anything. ",(0,r.kt)("inlineCode",{parentName:"p"},"effects")," property is an object with effect functions. ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," reference of each effect is bind to the model's dispatcher, which means it's possible to dispatch model's actions from effects."),(0,r.kt)("p",{parentName:"li"},"There might a need to access dispatchers for different models - not only the one being defined. In this case, it is possible to define ",(0,r.kt)("inlineCode",{parentName:"p"},"effects")," as a factory taking store's dispatch and returning object with effect functions."),(0,r.kt)("p",{parentName:"li"},"Effects functions that share a name with a reducer are called ",(0,r.kt)("strong",{parentName:"p"},"after")," their reducer counterpart."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki github-light with-title",style:{backgroundColor:"#fff",color:"#24292e"}},(0,r.kt)("div",{parentName:"pre",className:"code-title"},"models.js"),(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"export"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"countModel"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  state: { counter: "),(0,r.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"0"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," }, "),(0,r.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// initial state")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  reducers: {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"add"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},": ("),(0,r.kt)("span",{parentName:"div",style:{color:"#E36209"}},"state"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#E36209"}},"payload"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"..."),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"state,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"        counter: state.counter "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"+"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," payload,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      };")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    },")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  effects: {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"async"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"loadData"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#E36209"}},"payload"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#E36209"}},"rootState"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},") {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"response"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"await"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"fetch"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#032F62"}},"`http://example.com/${"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"payload"),(0,r.kt)("span",{parentName:"div",style:{color:"#032F62"}},"}`"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},");")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"data"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"await"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," response."),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"json"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"();")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"this"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"add"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"(data); "),(0,r.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// dispatch action to a local reducer")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    },")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"};")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"export"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"exampleNamedModel"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  name: "),(0,r.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"example"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  state: "),(0,r.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"1000"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  reducers: {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"subtract"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},": ("),(0,r.kt)("span",{parentName:"div",style:{color:"#E36209"}},"state"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#E36209"}},"payload"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," state "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"-"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," payload,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"effects"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},": ("),(0,r.kt)("span",{parentName:"div",style:{color:"#E36209"}},"dispatch"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," ({")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"async"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"triggerData"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#E36209"}},"payload"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#E36209"}},"rootState"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},") {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      console."),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"log"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"(rootState.example); "),(0,r.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// log current state of example model")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"await"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," dispatch.count."),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"loadData"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"(payload); "),(0,r.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// dispatch action from a different model")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    },")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  }),")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"};"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki github-dark with-title",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,r.kt)("div",{parentName:"pre",className:"code-title"},"models.js"),(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"countModel"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  state: { counter: "),(0,r.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"0"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," }, "),(0,r.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// initial state")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  reducers: {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"add"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},": ("),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"state"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"payload"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"..."),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"state,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        counter: state.counter "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"+"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," payload,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      };")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    },")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  },")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  effects: {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"async"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"loadData"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"payload"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"rootState"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"response"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"fetch"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#9ECBFF"}},"`http://example.com/${"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"payload"),(0,r.kt)("span",{parentName:"div",style:{color:"#9ECBFF"}},"}`"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},");")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"data"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," response."),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"json"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"();")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"this"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"add"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"(data); "),(0,r.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// dispatch action to a local reducer")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    },")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  },")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"};")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"exampleNamedModel"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  name: "),(0,r.kt)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"example"'),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  state: "),(0,r.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"1000"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  reducers: {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"subtract"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},": ("),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"state"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"payload"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," state "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"-"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," payload,")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  },")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"effects"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},": ("),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"dispatch"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," ({")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"async"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"triggerData"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"payload"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFAB70"}},"rootState"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},") {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      console."),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"log"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"(rootState.example); "),(0,r.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// log current state of example model")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," dispatch.count."),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"loadData"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"(payload); "),(0,r.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// dispatch action from a different model")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    },")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  }),")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"};")))))),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki github-light with-title",style:{backgroundColor:"#fff",color:"#24292e"}},(0,r.kt)("div",{parentName:"pre",className:"code-title"},"store.js"),(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," { init } "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"@rematch/core"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," { countModel, exampleNamedModel } "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"./models"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"store"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"init"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"({")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  models: {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    count: countModel, "),(0,r.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// adding model with a name 'count', taken from the key since our countModel object doesn't define its name")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    anything: exampleNamedModel, "),(0,r.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// adding model with a name 'example' which is defined in the model")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292E"}},"});"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki github-dark with-title",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,r.kt)("div",{parentName:"pre",className:"code-title"},"store.js"),(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," { init } "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"@rematch/core"'),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," { countModel, exampleNamedModel } "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#9ECBFF"}},'"./models"'),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#79B8FF"}},"store"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#B392F0"}},"init"),(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"({")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  models: {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    count: countModel, "),(0,r.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// adding model with a name 'count', taken from the key since our countModel object doesn't define its name")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    anything: exampleNamedModel, "),(0,r.kt)("span",{parentName:"div",style:{color:"#6A737D"}},"// adding model with a name 'example' which is defined in the model")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  },")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#E1E4E8"}},"});")))))))}m.isMDXComponent=!0},5318:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return N}});var n=t(7378);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(t),N=o,k=m["".concat(p,".").concat(N)]||m[N]||d[N]||r;return t?n.createElement(k,s(s({ref:a},c),{},{components:t})):n.createElement(k,s({ref:a},c))}));function N(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<r;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);