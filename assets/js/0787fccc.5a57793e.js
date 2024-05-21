"use strict";(self.webpackChunkOPS445=self.webpackChunkOPS445||[]).push([[883],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=i,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return m}});var a=n(3117),i=(n(7294),n(3905));const r={id:"assignment1c",title:"Assignment 1 Version C",sidebar_position:4,description:"Assignment 1 Version C"},o="Assignment 1 Version C",l={unversionedId:"B-Assignments/assignment1c",id:"B-Assignments/assignment1c",title:"Assignment 1 Version C",description:"Assignment 1 Version C",source:"@site/docs/B-Assignments/assignment1c.md",sourceDirName:"B-Assignments",slug:"/B-Assignments/assignment1c",permalink:"/OPS445/B-Assignments/assignment1c",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS445/tree/main/docs/B-Assignments/assignment1c.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"assignment1c",title:"Assignment 1 Version C",sidebar_position:4,description:"Assignment 1 Version C"},sidebar:"courseNotesSidebar",previous:{title:"Assignment 1 Version B",permalink:"/OPS445/B-Assignments/assignment1b"},next:{title:"Assignment 2 Home Page",permalink:"/OPS445/B-Assignments/assignment2"}},s={},m=[{value:"Overview",id:"overview",level:2},{value:"Restrictions",id:"restrictions",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Preparation",id:"preparation",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Check Your Work",id:"check-your-work",level:4},{value:"Feedback",id:"feedback",level:4},{value:"Milestone 2",id:"milestone-2",level:3},{value:"Check Your Work",id:"check-your-work-1",level:4},{value:"Feedback",id:"feedback-1",level:4},{value:"Final Submission",id:"final-submission",level:3},{value:"Final Checks",id:"final-checks",level:4},{value:"Submitting Your Code For Review",id:"submitting-your-code-for-review",level:4},{value:"Formatting And Style",id:"formatting-and-style",level:2},{value:"Comments And Documentation",id:"comments-and-documentation",level:3},{value:"PEP",id:"pep",level:3},{value:"Functions and Variables",id:"functions-and-variables",level:3},{value:"Git Commits",id:"git-commits",level:3},{value:"Rubric",id:"rubric",level:2},{value:"Sample Output",id:"sample-output",level:2}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"assignment-1-version-c"},"Assignment 1 Version C"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Your assignment will be to return an end date (including day of week), given a start date and number of days."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"python3 assignment1.py 20/09/2023 100")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"The end date is Fri, 29/12/2023.\n")),(0,i.kt)("h2",{id:"restrictions"},"Restrictions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You may ",(0,i.kt)("strong",{parentName:"li"},"only use ",(0,i.kt)("inlineCode",{parentName:"strong"},"sys")," for parsing command line arguments"),"."),(0,i.kt)("li",{parentName:"ul"},"No other modules are allowed")),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("p",null,"The assignment will be broken into two milestones and one final submission. Please update your repository for each milestone and complete the final submission in order to earn all marks."),(0,i.kt)("p",null,"Deadlines will be given by your instructor."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"preparation"},"Preparation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Accept the assignment on Blackboard."),(0,i.kt)("li",{parentName:"ol"},"Once you accepted the assignment, you will get access to a starting repo."),(0,i.kt)("li",{parentName:"ol"},"Add your code to the ",(0,i.kt)("em",{parentName:"li"},"existing")," ",(0,i.kt)("inlineCode",{parentName:"li"},"assignment1.py")," file."),(0,i.kt)("li",{parentName:"ol"},"Commit after ",(0,i.kt)("strong",{parentName:"li"},"each significant change")," to the code."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"You can never have too many commits.")," GitHub is your proof of work and your backup if things go wrong.")),(0,i.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You are provided with a function called ",(0,i.kt)("inlineCode",{parentName:"li"},"after()"),". This function is complete and should successfully return the next day's date when provided with a starting date in ",(0,i.kt)("inlineCode",{parentName:"li"},"DD/MM/YYYY")," format. You can experiment with this function by importing it into the Python interpreter:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from assignment1 import after\nafter('25/01/2023')\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Use your understanding of ",(0,i.kt)("inlineCode",{parentName:"li"},"after()")," to complete the ",(0,i.kt)("inlineCode",{parentName:"li"},"before()")," function. This should return a previous day's date.")),(0,i.kt)("p",null,"This Milestone will also ask you to ",(0,i.kt)("em",{parentName:"p"},"refactor")," your code. This means modifying existing code to make it more portable."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Complete the ",(0,i.kt)("inlineCode",{parentName:"li"},"leap_year()")," function, using the relevant code that's already inside ",(0,i.kt)("inlineCode",{parentName:"li"},"after()"),"."),(0,i.kt)("li",{parentName:"ol"},"Edit your ",(0,i.kt)("inlineCode",{parentName:"li"},"after()")," function. Replace any code that calculates leap years with a ",(0,i.kt)("inlineCode",{parentName:"li"},"leap_year")," function call.  "),(0,i.kt)("li",{parentName:"ol"},"Repeat the same process for the ",(0,i.kt)("inlineCode",{parentName:"li"},"mon_max()")," function."),(0,i.kt)("li",{parentName:"ol"},"Verify that ",(0,i.kt)("inlineCode",{parentName:"li"},"after()")," still works after your changes."),(0,i.kt)("li",{parentName:"ol"},"Don't forget to push your code.")),(0,i.kt)("h4",{id:"check-your-work"},"Check Your Work"),(0,i.kt)("p",null,"Use the check script to verify your work so far."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"python3 CheckA1.py -f -v TestAfter"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"python3 CheckA1.py -f -v TestLeap"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"python3 CheckA1.py -f -v TestMonMax")),(0,i.kt)("h4",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,"I will provide you feedback on ",(0,i.kt)("strong",{parentName:"p"},"GitHub"),". Check the ",(0,i.kt)("strong",{parentName:"p"},"Issues")," tab, and make any changes that are required before the next deadline. You can ",(0,i.kt)("strong",{parentName:"p"},"close the issue")," to indicate that you have seen the comment."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"milestone-2"},"Milestone 2"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Complete the ",(0,i.kt)("inlineCode",{parentName:"li"},"day_iter()")," function. Given a starting date and number of days, ",(0,i.kt)("inlineCode",{parentName:"li"},"day_iter()")," should call either ",(0,i.kt)("inlineCode",{parentName:"li"},"after()")," (if the number is positive) or ",(0,i.kt)("inlineCode",{parentName:"li"},"before()")," (if the number is negative). inside of a loop. Once the loop as completed, this function should return the end date as a DD/MM/YYYY string."),(0,i.kt)("li",{parentName:"ol"},"Complete the ",(0,i.kt)("inlineCode",{parentName:"li"},"valid_date()")," function. This should use error checking to make sure that any date entered by the user is valid.")),(0,i.kt)("h4",{id:"check-your-work-1"},"Check Your Work"),(0,i.kt)("p",null,"Use the check script to verify your work."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"python3 CheckA1.py -f -v TestValidDate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"python3 CheckA1.py -f -v TestDayIter"))),(0,i.kt)("h4",{id:"feedback-1"},"Feedback"),(0,i.kt)("p",null,"Once again I will provide you feedback on ",(0,i.kt)("strong",{parentName:"p"},"GitHub"),". Check the ",(0,i.kt)("strong",{parentName:"p"},"Issues")," tab, and make any changes that are required before the next deadline. You can ",(0,i.kt)("strong",{parentName:"p"},"close the issue")," to indicate that you have seen the comment."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"final-submission"},"Final Submission"),(0,i.kt)("p",null,"For the final submission you should integrate your functions into a working script, add relevant comments and implement some ",(0,i.kt)("strong",{parentName:"p"},"error checking")," so that invalid dates will cause a ",(0,i.kt)("strong",{parentName:"p"},"usage")," message to be displayed. In addition, if the second argument is not a valid number, usage should also be printed."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("em",{parentName:"li"},"main")," block, check the number of arguments. The first argument must be a valid date, and the second argument should be a valid number (positive or negative)."),(0,i.kt)("li",{parentName:"ol"},"Call the ",(0,i.kt)("inlineCode",{parentName:"li"},"day_iter()")," function and save the end date. Use the provided ",(0,i.kt)("inlineCode",{parentName:"li"},"day_of_week()")," function to get the day."),(0,i.kt)("li",{parentName:"ol"},"Complete the ",(0,i.kt)("inlineCode",{parentName:"li"},"usage()")," function. This should print a helpful message to the user when they make a mistake, and exit.")),(0,i.kt)("h4",{id:"final-checks"},"Final Checks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"python3 CheckA1.py -f -v TestFinal")," to test the final version of your script. ")),(0,i.kt)("h4",{id:"submitting-your-code-for-review"},"Submitting Your Code For Review"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Push your code to GitHub before the deadline."),(0,i.kt)("li",{parentName:"ol"},"In addition, ",(0,i.kt)("strong",{parentName:"li"},"submit your code to Blackboard"),". A link will be provided.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"formatting-and-style"},"Formatting And Style"),(0,i.kt)("p",null,"A significant amount of your mark will be based on the things that ",(0,i.kt)("em",{parentName:"p"},"aren't")," your code. Please review the following guidelines to maximise your grade."),(0,i.kt)("h3",{id:"comments-and-documentation"},"Comments And Documentation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"You need to be commenting your code"),". The following documentation is required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"in-line comments"),": Any line of code that is doing something non-obvious should be commented. Explain ",(0,i.kt)("strong",{parentName:"li"},"why")," you are doing something, rather than ",(0,i.kt)("strong",{parentName:"li"},"what")," you are doing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"function docstrings"),": After your ",(0,i.kt)("inlineCode",{parentName:"li"},"def"),' line, you enter a docstring inside "". Any function that doesn\'t already come with a docstring should have one.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"top-level docstring"),": You will have noticed that the top of your ",(0,i.kt)("inlineCode",{parentName:"li"},"assignment1.py")," file already has this docstring. Complete the ",(0,i.kt)("strong",{parentName:"li"},"Academic Honesty declaration")," and complete the docstring.")),(0,i.kt)("h3",{id:"pep"},"PEP"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0008/"},"PEP-8 Style Guide")," is an official Python document that describes best practices for formatting your code. ",(0,i.kt)("strong",{parentName:"p"},"You should follow this guide as much as possible"),". You may find that ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/python/linting"},"using a linter")," to check style to be useful. "),(0,i.kt)("h3",{id:"functions-and-variables"},"Functions and Variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In addition to the required functions, you may create as many functions as you need.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Functions should be in lower case, and spaces should be represented with an underscore. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"function_name"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Any data used inside of a function should be passed in as a parameter. Avoid global variables.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Variables should have a sensible name. Avoid naming things ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),". Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," with a more suitable name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Variables should be in lower case, and spaces represented by an underscore. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"start_date"),"."))),(0,i.kt)("h3",{id:"git-commits"},"Git Commits"),(0,i.kt)("p",null,"A workplace will have its own policy about how often to commit, and how to document commits. For us, ",(0,i.kt)("strong",{parentName:"p"},"git commits are your proof of work"),". Assignments that lack commits are subject to ",(0,i.kt)("strong",{parentName:"p"},"Academic Integrity review"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A good practice is to create a commit for ",(0,i.kt)("strong",{parentName:"li"},"every significant change")," to your code. ",(0,i.kt)("strong",{parentName:"li"},"At the very least, commit after completing each of the required functions.")),(0,i.kt)("li",{parentName:"ul"},"An acceptable commit message needs to short, but should also describe the change. For example: ",(0,i.kt)("inlineCode",{parentName:"li"},'git commit -m "completed the leap_year function"'),".")),(0,i.kt)("h2",{id:"rubric"},"Rubric"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Element"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Marks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Milestone 1:")),(0,i.kt)("td",{parentName:"tr",align:"right"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TestAfter Checks"),(0,i.kt)("td",{parentName:"tr",align:"right"},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TestBefore Checks"),(0,i.kt)("td",{parentName:"tr",align:"right"},"3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TestLeap Checks"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TestMonMax Checks"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Milestone 2:")),(0,i.kt)("td",{parentName:"tr",align:"right"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TestValidDate Checks"),(0,i.kt)("td",{parentName:"tr",align:"right"},"4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TestDayIter Checks"),(0,i.kt)("td",{parentName:"tr",align:"right"},"6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Final Submission:")),(0,i.kt)("td",{parentName:"tr",align:"right"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TestFinal Checks"),(0,i.kt)("td",{parentName:"tr",align:"right"},"16")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Comments and Documentation"),(0,i.kt)("td",{parentName:"tr",align:"right"},"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"github use"),(0,i.kt)("td",{parentName:"tr",align:"right"},"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"functions and style"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"error checking"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2")))),(0,i.kt)("h2",{id:"sample-output"},"Sample Output"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assignment1.py 18/05/2023 50")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"The end date is Fri, 07/07/2023.\n")),(0,i.kt)("p",null,"Works with a negative number:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assignment1.py 21/05/2023 -50")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"The end date is Sat, 01/04/2023.\n")),(0,i.kt)("p",null,"Wrong number of arguments:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assignment1.py 21/05/2023")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: assignment1.py YYYY-MM-DD NN\n")),(0,i.kt)("p",null,"If either the date or the number is invalid, print usage:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assignment1.py 31/02/2023 gorilla")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: assignment1.py YYYY-MM-DD NN\n")))}u.isMDXComponent=!0}}]);