(this["webpackJsonpstory-starter"]=this["webpackJsonpstory-starter"]||[]).push([[0],{32:function(e,t,a){e.exports=a(59)},37:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),s=a.n(r),i=(a(37),a(1)),l=a(2),c=a(4),u=a(3),m=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("li",null,o.a.createElement("p",null,o.a.createElement("span",null,"Submitted by:")," ",this.props.name),o.a.createElement("p",null,this.props.prompt),o.a.createElement("button",{onClick:this.props.handleClick,value:this.props.prompt},"Use This Prompt"))}}]),a}(n.Component),d=a(30),p=a(12),h=a.n(p);a(38);h.a.initializeApp({apiKey:"AIzaSyBHGyhWu241c44zWc72hDrp8ZJuU3djt6g",authDomain:"u-2-write.firebaseapp.com",databaseURL:"https://u-2-write.firebaseio.com",projectId:"u-2-write",storageBucket:"u-2-write.appspot.com",messagingSenderId:"541732055845",appId:"1:541732055845:web:c2c0dbbf598c65c1be08cc"});var y=h.a,g=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).submitPrompt=function(t){t.preventDefault();var a=y.database().ref(),n={name:e.state.name,prompt:e.state.prompt};a.push(n),e.props.closeModal()},e.handleUserInput=function(t){e.setState(Object(d.a)({},t.target.id,t.target.value))},e.state={name:"Anonymous",prompt:""},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"modalTop"},o.a.createElement("button",{className:"backButton",onClick:this.props.back},o.a.createElement("i",{className:"fas fa-chevron-left","aria-hidden":"true"}),o.a.createElement("p",null,"Back to User Prompts"))),o.a.createElement("form",{action:"",className:"promptSubmitForm",onSubmit:this.submitPrompt},o.a.createElement("label",{className:"sr-only",htmlFor:"name"},"Your Name (optional)"),o.a.createElement("input",{type:"text",id:"name",placeholder:"Your Name (optional)",onChange:this.handleUserInput}),o.a.createElement("label",{className:"sr-only",htmlFor:"prompt"},"Your Prompt"),o.a.createElement("textarea",{name:"prompt",id:"prompt",placeholder:"Type your prompt here",required:!0,cols:"20",rows:"10",onChange:this.handleUserInput}),o.a.createElement("button",{type:"submit"},"Submit Prompt!")))}}]),a}(n.Component),f=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).selectPrompt=function(t){return e.props.selectPrompt(t)},e.showForm=function(){e.setState({renderPrompts:!e.state.renderPrompts})},e.state={selectedPrompt:"",renderPrompts:!0},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"modalOuter"},o.a.createElement("div",{className:"modalInner"},o.a.createElement("button",{className:"exitButton",onClick:this.props.closeModal,"aria-label":"Exit modal"},o.a.createElement("i",{className:"far fa-times-circle","aria-hidden":"true"})),this.state.renderPrompts?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"modalTop"},o.a.createElement("h2",null,"Prompts Submitted by Users"),o.a.createElement("button",{onClick:this.showForm},o.a.createElement("p",null,"Submit a Prompt"),o.a.createElement("i",{className:"fas fa-chevron-right","aria-hidden":"true"}))),o.a.createElement("ul",null,this.props.userPrompts.map((function(t,a){return o.a.createElement(m,{key:a,name:t.name,prompt:t.prompt,handleClick:e.props.selectPrompt})})))):o.a.createElement(g,{closeModal:this.props.closeModal,back:this.showForm})))}}]),a}(n.Component),b=function(e){return o.a.createElement("header",{className:"wrapper"},o.a.createElement("h1",null,"Story Starter"),o.a.createElement("div",{className:"toggleButton"},o.a.createElement("button",{className:e.lightMode?"move":null,"aria-label":"Toggle between light and dark mode",onClick:e.toggleTheme},o.a.createElement("i",{className:"fas fa-sun"}),o.a.createElement("i",{className:"fas fa-moon"}))))},v=function(){return[{day:1,dailyPrompt:"Write a 150 word story in the comedy genre. It's about a philosopher and should include a football. Also use the sentence 'Is anyone there?' Bonus prompt: The story involves a fight."},{day:2,dailyPrompt:"Write a 350 word story in the drama genre. It's about an art director and should include a crown. Also use the sentence 'It's too warm.' Bonus prompt: There is a great storm."},{day:3,dailyPrompt:"Write a 300 word story in the military genre. It's about an emperor and should include a steam boat. Also use the sentence 'Whoopsidaisies!' Bonus prompt: Your character is hated by everyone."},{day:4,dailyPrompt:"Write a 100 word story in the adventure genre. It's about a dog breeder and should include a certificate. Also use the sentence 'He can change.' Bonus prompt: Your character is loved by everyone."},{day:5,dailyPrompt:"Write a 400 word story in the military genre. It's about a cowardly fireman and should include a piece of paper. Also use the sentence 'I love you.' Bonus prompt: Your character is hated by everyone."},{day:6,dailyPrompt:"Write a 150 word story in the science fiction genre. It's about a hot-shot ceo and should include coloring pencils. Also use the sentence 'Don't trust everything you see.' Bonus prompt: The Sun is failing."},{day:7,dailyPrompt:"Write a 100 word story in the military genre. It's about a pilot and should include a time machine. Also use the sentence 'Not for you.' Bonus prompt: The story takes place in a desert."},{day:8,dailyPrompt:"Write a 700 word story in the children genre. It's about a fat baker and should include a milkshake. Also use the sentence 'Run!' Bonus prompt: The story takes place two-hundred years from now."},{day:9,dailyPrompt:"Write a 450 word story in the romance genre.It's about a dog breeder and should include a computer. Also use the sentence 'You have my permission.' Bonus prompt: Your story involves a damsel in distress."},{day:10,dailyPrompt:"Write a 900 word story in the magical realism genre. It's about a barista and should include a fridge. Also use the sentence 'Leave me alone!' Bonus prompt: Your character is very shy."},{day:11,dailyPrompt:"Write a 750 word story in the epic genre. It's about an unsuccessful policeman and should include glass. Also use the sentence 'He can change.' Bonus prompt: There is a great storm."},{day:12,dailyPrompt:"Write a 200 word story in the adventure genre. It's about a fat baker and should include a pillow. Also use the sentence 'Thanks for nothing.' Bonus prompt: Your character is shipwrecked."},{day:13,dailyPrompt:"Write a 650 word story in the comedy genre. It's about a liar and should include a pencil. Also use the sentence 'Thanks for nothing.' Bonus prompt: Your character is dying."},{day:14,dailyPrompt:"Write a 150 word story in the drama genre. It's about a scientist and should include coloring pencils. Also use the sentence 'Aren't you afraid?' Bonus prompt: The story takes place in a desert."},{day:15,dailyPrompt:"Write a 800 word story in the comedy genre. It's about a druid and should include fire. Also use the sentence 'What problem?' Bonus prompt: Your character has a world-changing idea."},{day:16,dailyPrompt:"Write a 600 word story in the military genre. It's about a politician and should include not enough money. Also use the sentence 'I'll deal with you later.' Bonus prompt: Your character is shipwrecked."},{day:17,dailyPrompt:"Write a 900 word story in the comedy genre. It's about a politician and should include a watch. Also use the sentence 'I'd like a day without punishing you.' Bonus prompt: The story involves a fight."},{day:18,dailyPrompt:"Write a 950 word story in the children genre. It's about a demon and should include a ripped-up bank note. Also use the sentence 'I'll deal with you later.' Bonus prompt: Your character is shipwrecked."},{day:19,dailyPrompt:"Write a 850 word story in the suspense genre. It's about a fascist and should include a flag. Also use the sentence 'Whoopsidaisies!' Bonus prompt: Your character has just met the love of his/her life."},{day:20,dailyPrompt:"Write a 900 word story in the science fiction genre. It's about a film producer and should include a dictionary. Also use the sentence 'There is no time.' Bonus prompt: Your story involves a damsel in distress."},{day:21,dailyPrompt:"Write a 50 word story in the magical realism genre. It's about a dog breeder and should include a motor bike. Also use the sentence 'It is required of you.' Bonus prompt: Your story involves a damsel in distress."},{day:22,dailyPrompt:"Write a 50 word story in the fantasy genre. It's about a truck driver and should include a football. Also use the sentence 'You have my permission.' Bonus prompt: Your character is shipwrecked."},{day:23,dailyPrompt:"Write a 550 word story in the suspense genre. It's about an archivist and should include a fridge. Also use the sentence 'Whoopsidaisies!' Bonus prompt: Your character is loved by everyone."},{day:24,dailyPrompt:"Write a 150 word story in the drama genre. It's about an addict and should include an umbrella. Also use the sentence 'It's your fault.' Bonus prompt: The story takes place in a desert."},{day:25,dailyPrompt:"Write a 1000 word story in the crime genre. It's about a famous musician and should include headphones. Also use the sentence 'I will end you for this.' Bonus prompt: Your character is very shy."},{day:26,dailyPrompt:"Write a 250 word story in the magical realism genre. It's about a dictator and should include a wooden cross. Also use the sentence 'You will take the fall for this.' Bonus prompt: Your character is dying."},{day:27,dailyPrompt:"Write a 1000 word story in the adventure genre. It's about a bank counter and should include a set of binoculars. Also use the sentence 'You shouldn't have heard that.' Bonus prompt: Your character is dying."},{day:28,dailyPrompt:"Write a 150 word story in the suspense genre. It's about a gamer and should include a watch. Also use the sentence 'Not for you.' Bonus prompt: There is a great storm."},{day:29,dailyPrompt:"Write a 100 word story in the magical realism genre. It's about a struggling musician and should include ice cream. Also use the sentence 'Leave me alone!' Bonus prompt: Your character has just met the love of his/her life."},{day:30,dailyPrompt:"Write a 550 word story in the magical realism genre. It's about an acupuncturist and should include a painting. Also use the sentence 'Never.' Bonus prompt: The story takes place in a desert."},{day:31,dailyPrompt:"Write a 500 word story in the children genre. It's about a penniless writer and should include a window. Also use the sentence 'I will end you for this.' Bonus prompt: Your character has a world-changing idea."}]},w=a(7),E=a.n(w),k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).doIntervalChange=function(){n.props.keepChecking&&(n.myInterval=setInterval((function(){n.setState((function(e){return{counter:e.counter-1}})),n.props.sendTime(n.state.counter),n.state.counter<0&&(clearInterval(n.myInterval),n.setState({counter:0}),E()({title:"Keep writing!"}))}),1e3))},n.state={counter:10,keepChecking:!0},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.secondsToCount;this.setState({counter:e,keepChecking:this.props.keepChecking}),this.doIntervalChange()}},{key:"componentDidUpdate",value:function(e){this.props.keepChecking!==e.keepChecking&&clearInterval(this.myInterval)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"render",value:function(){return o.a.createElement("div",{className:"visuallyHidden"})}}]),a}(n.Component),P=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{action:"",className:"timeSelection",onSubmit:e.setTimer},o.a.createElement("h2",null,"How long do you want to write?"),o.a.createElement("label",{htmlFor:"intervals",className:"sr-only"},"Time Intervals"),o.a.createElement("select",{name:"intervals",id:"intervals",onChange:e.getFormSelection},o.a.createElement("option",{value:"300000"},"5 min"),o.a.createElement("option",{value:"600000"},"10 min"),o.a.createElement("option",{value:"1200000"},"20 min"),o.a.createElement("option",{value:"1800000"},"30 min"),o.a.createElement("option",{value:"2700000"},"45 min"),o.a.createElement("option",{value:"3600000"},"1 hr")),o.a.createElement("button",{type:"submit",onClick:e.startTime},"Start Timer")))},T=(a(41),a(31)),I=a.n(T),C=a(13),S=a.n(C),W=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getDailyPrompt=function(){var t=v()[(new Date).getDate()-1].dailyPrompt;e.setState({selectedPrompt:t})},e.setTimer=function(t){t.preventDefault(),e.setState({formDisable:!1});var a=setInterval((function(){e.setState({keepChecking:!0,elapsedTime:e.state.elapsedTime-1e3,displayForm:!0}),e.getTime(),0===e.state.elapsedTime&&(E()({title:"Time's up!",text:"Restart the timer to continue writing"}),e.setState({keepChecking:!1,formDisable:!0,stopTimer:!e.state.stopTimer,elapsedTime:e.state.setTime}),clearInterval(a))}),1e3)},e.getFormSelection=function(t){e.setState({setTime:t.target.value,elapsedTime:t.target.value})},e.saveMessage=function(t){e.saveText(t,"message"),e.setState({isCountingDown:!1},(function(){e.startTime()}))},e.stopTime=function(){return e.setState({isCountingDown:!1})},e.startTime=function(){return e.setState({isCountingDown:!0})},e.wordCount=function(){var t=e.state.message.split(" ").filter((function(e){return""!==e}));e.setState({wordCount:t.length})},e.saveText=function(t){e.setState({message:t.target.value},(function(){e.wordCount()}))},e.toggleModal=function(){e.setState({modalOpen:!e.state.modalOpen})},e.selectPrompt=function(t){var a=t.target.value;e.setState({selectedPrompt:a,modalOpen:!e.state.modalOpen})},e.getTime=function(){var t=Math.floor(e.state.elapsedTime/e.state.setTime*100);e.setState({percentTime:t}),document.documentElement.style.setProperty("--inner-width","".concat(e.state.percentTime,"%"))},e.toggleTheme=function(){e.setState({lightMode:!e.state.lightMode}),e.state.lightMode?(e.setState({theme:"lightMode"}),document.documentElement.style.setProperty("--body-font-color","black")):(e.setState({theme:"darkMode"}),document.documentElement.style.setProperty("--body-font-color","white"))},e.enableForm=function(){e.setState({formDisable:!1,wordCount:0})},e.handleEditorChange=function(t,a){var n=e.getPlainText(a.getData());e.setState({htmlMessage:a.getData(),message:n,isCountingDown:!1},(function(){e.wordCount(),e.startTime()}))},e.printWindow=function(){document.querySelector(".printArea").innerHTML=e.state.htmlMessage,window.print()},e.state={modalOpen:!1,message:"",wordCount:0,setTime:3e5,elapsedTime:3e5,prompts:[],selectedPrompt:"None selected",userPrompts:[],isCountingDown:!1,percentTime:"",dailyPrompt:"",formDisable:!1,stopTimer:!1,keepChecking:!0,displayForm:!1,lightMode:!1,theme:"lightMode",htmlMessage:"",configuration:{toolbar:["heading","bold","italic","bulletedList","numberedList","alignment","blockQuote","link"]}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var o in a)n.unshift(a[o]);e.setState({userPrompts:n})})),S.a.create(document.querySelector("#editor"),{alignment:{options:["left","center","right"]}}).catch((function(e){console.error(e)}))}},{key:"getPlainText",value:function(e){return e.replace(/<[^>]*>/g,"")}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"printArea"}),o.a.createElement("div",{className:"App ".concat(this.state.theme)},this.state.modalOpen?o.a.createElement(f,{closeModal:this.toggleModal,selectPrompt:this.selectPrompt,userPrompts:this.state.userPrompts}):null,o.a.createElement(b,{lightMode:this.state.lightMode,toggleTheme:this.toggleTheme}),o.a.createElement("main",{className:"wrapper"},o.a.createElement("div",{className:"description"},o.a.createElement("p",null,"The writing app that keeps you focused."),o.a.createElement("p",null,"Choose your prompt. Choose your time. Start writing!")),o.a.createElement("div",{className:"promptSelection"},o.a.createElement("h2",null,"Choose Your Prompt"),o.a.createElement("button",{onClick:this.getDailyPrompt},"Get Daily Prompt"),o.a.createElement("button",{onClick:this.toggleModal},"Get User Prompts")),o.a.createElement(P,{setTimer:this.setTimer,getFormSelection:this.getFormSelection,startTime:this.startTime}),this.state.isCountingDown?o.a.createElement(k,{secondsToCount:"15",sendTime:this.getTime,keepChecking:this.state.keepChecking}):null,o.a.createElement("div",{className:"writingComponent"},o.a.createElement("h3",null,"Selected Prompt:"),o.a.createElement("p",{className:"prompt"},this.state.selectedPrompt),this.state.displayForm?o.a.createElement(o.a.Fragment,null,o.a.createElement(I.a,{config:this.state.configuration,editor:S.a,disabled:!!this.state.formDisable,onChange:this.handleEditorChange}),o.a.createElement("div",{className:"outer"},o.a.createElement("div",{className:"inner"})),o.a.createElement("div",{className:"formBottomBar"},o.a.createElement("p",null,"Word Count: ",this.state.wordCount),o.a.createElement("button",{className:"saveToPDF",onClick:this.printWindow,"aria-label":"Save To PDF"},o.a.createElement("i",{className:"far fa-file-pdf","aria-hidden":"true"})))):null)),o.a.createElement("footer",{className:"wrapper"},o.a.createElement("p",null,"\xa92020 ",o.a.createElement("a",{href:"https://kajanthkumar.com/"},"Kajanth"),", ",o.a.createElement("a",{href:"https://www.robinnong.com"},"Robin")," and ",o.a.createElement("a",{href:"https://shanelbeebe.com/"},"Shanel"),". Daily prompts provided by ",o.a.createElement("a",{href:"https://thestoryshack.com/"},"StoryShack"),"."))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.ad424243.chunk.js.map