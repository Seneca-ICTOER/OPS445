"use strict";(self.webpackChunkOPS445=self.webpackChunkOPS445||[]).push([[878],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?i.createElement(m,s(s({ref:t},u),{},{components:n})):i.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8914:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return c}});var i=n(3117),a=(n(7294),n(3905));const o={id:"codespaces",title:"Using Codespaces",sidebar_position:4,description:"Using GitHub Codespaces for Assessments"},s=void 0,r={unversionedId:"C-ExtraResources/codespaces",id:"C-ExtraResources/codespaces",title:"Using Codespaces",description:"Using GitHub Codespaces for Assessments",source:"@site/docs/C-ExtraResources/codespaces.md",sourceDirName:"C-ExtraResources",slug:"/C-ExtraResources/codespaces",permalink:"/OPS445/C-ExtraResources/codespaces",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS445/tree/main/docs/C-ExtraResources/codespaces.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"codespaces",title:"Using Codespaces",sidebar_position:4,description:"Using GitHub Codespaces for Assessments"},sidebar:"courseNotesSidebar",previous:{title:"Introduction to YAML",permalink:"/OPS445/C-ExtraResources/introduction-to-yaml"},next:{title:"Reference Sheet",permalink:"/OPS445/C-ExtraResources/reference-sheet"}},l={},c=[{value:"Codespaces Introduction",id:"codespaces-introduction",level:2},{value:"Starting the Codespace",id:"starting-the-codespace",level:2},{value:"Committing Your Changes",id:"committing-your-changes",level:2},{value:"Starting A Codespace Manually",id:"starting-a-codespace-manually",level:2},{value:"Committing Manually",id:"committing-manually",level:2},{value:"If You&#39;re Unable To Log Into GitHub",id:"if-youre-unable-to-log-into-github",level:2}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"codespaces-introduction"},"Codespaces Introduction"),(0,a.kt)("p",null,"GitHube Codespaces allows us to run a limited Linux container in the Cloud. You will have a ",(0,a.kt)("strong",{parentName:"p"},"VS Code-like environment")," in your browser, with a Python Debugger, working terminal, and so on."),(0,a.kt)("h2",{id:"starting-the-codespace"},"Starting the Codespace"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the link given to you by your instructor. You will be asked to ",(0,a.kt)("strong",{parentName:"li"},"Accept the assignment"),", same as your labs."),(0,a.kt)("li",{parentName:"ul"},"Instead of ",(0,a.kt)("strong",{parentName:"li"},"Cloning")," your repo, click on the ",(0,a.kt)("strong",{parentName:"li"},"black button")," that says ",(0,a.kt)("strong",{parentName:"li"},"Open As Codespace"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Open As Codespace",src:n(5776).Z,title:"Example of black button that will open a Codespace",width:"645",height:"462"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You should see a loading screen. Please wait and allow the Codespace to launch.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Loading Codespace",src:n(6229).Z,title:"The codespaces is loading",width:"645",height:"462"})),(0,a.kt)("p",null,"If your Codespaces fails to load, please see the section ",(0,a.kt)("strong",{parentName:"p"},"Starting a Codespace Manually")," below."),(0,a.kt)("h2",{id:"committing-your-changes"},"Committing Your Changes"),(0,a.kt)("p",null,"Your assessment repo should be auto-committing your changes as you go. No saving or committing should be necessary. You can verify this by checking the ",(0,a.kt)("strong",{parentName:"p"},"Source Control")," icon on the left side of your Codespace window:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Source Control Empty",src:n(5291).Z,title:"There is nothing to commit",width:"59",height:"65"})),(0,a.kt)("p",null,"If you see a number, please be patient and wait for about a minute. The number should disappear on its own. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Source Control Change",src:n(357).Z,title:"There is something to commit",width:"59",height:"65"})),(0,a.kt)("p",null,"If the number doesn't disappear, please see the section ",(0,a.kt)("strong",{parentName:"p"},"Committing Manually")," below."),(0,a.kt)("p",null,"Return to your repository landing page and ",(0,a.kt)("strong",{parentName:"p"},"reload")," it. Verify that your script file has been changed. It should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Recent Change",src:n(1361).Z,title:"Recent changes",width:"950",height:"74"})),(0,a.kt)("p",null,"If no recent change is detected, you will have to ",(0,a.kt)("strong",{parentName:"p"},"commit manually"),"."),(0,a.kt)("h2",{id:"starting-a-codespace-manually"},"Starting A Codespace Manually"),(0,a.kt)("p",null,'If the codespace doesn\'t start when you click the "Open As Codespace" button, you can start it manually from the repository landing page.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find the green ",(0,a.kt)("strong",{parentName:"li"},"Code")," button on the repository landing page. It is the same button you use for cloning."),(0,a.kt)("li",{parentName:"ul"},"Click the tab that says ",(0,a.kt)("strong",{parentName:"li"},"Codespaces"),"."),(0,a.kt)("li",{parentName:"ul"},"Click the plus sign to start a new codespace.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Start a codespace",src:n(1611).Z,title:"Starting a new codespace",width:"1039",height:"473"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you get a message about the page being, blocked, refresh the repository landing page."),(0,a.kt)("li",{parentName:"ul"},"Click the green ",(0,a.kt)("strong",{parentName:"li"},"Code")," button again. You will see an active codespace with a randomly generated name. Click on it to launch the codespace.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Running Codespaces",src:n(7641).Z,title:"Enter a running codespace",width:"1039",height:"473"})),(0,a.kt)("h2",{id:"committing-manually"},"Committing Manually"),(0,a.kt)("p",null,"If you see a number next to the ",(0,a.kt)("strong",{parentName:"p"},"Source Control")," icon that doesn't go away, you can make a manual commit."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on Source Control icon. You will see a list of uncommitted files. ",(0,a.kt)("strong",{parentName:"li"},"If your Python script is not in this list, then no further commits are necessary and you can stop reading"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Source Control File List",src:n(2452).Z,title:"a list of uncommitted files",width:"386",height:"167"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you ",(0,a.kt)("strong",{parentName:"li"},"do")," see your Python script in this list (for example, ",(0,a.kt)("inlineCode",{parentName:"li"},"script.py")," in the screenshot above), then click on the plus sign ",(0,a.kt)("strong",{parentName:"li"},"+")," next to the file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enter a commit message in the text box"),'. For example: "finished quiz". ',(0,a.kt)("strong",{parentName:"li"},"If you do not enter a commit message, the next step will not work"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Click the Commit button"),". If a dialog box appears, accept the default value and continue."),(0,a.kt)("li",{parentName:"ul"},"You will now need to push. Click the button ",(0,a.kt)("strong",{parentName:"li"},"with three dots"),". Find the option to ",(0,a.kt)("strong",{parentName:"li"},"Push"),"."),(0,a.kt)("li",{parentName:"ul"},"If you encounter an error, notify your instructor immediately.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pushing Code",src:n(5335).Z,title:"Doing a manual push",width:"325",height:"275"})),(0,a.kt)("h2",{id:"if-youre-unable-to-log-into-github"},"If You're Unable To Log Into GitHub"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Launch MyApps"),(0,a.kt)("li",{parentName:"ul"},"Launch ",(0,a.kt)("strong",{parentName:"li"},"Python 3.12"),". Wait for the File Explorer Window to appear."),(0,a.kt)("li",{parentName:"ul"},"Launch ",(0,a.kt)("strong",{parentName:"li"},"VS Code 1.82"),". Make sure this is VS Code, and not Visual Studio!"),(0,a.kt)("li",{parentName:"ul"},"In VS Code, install the ",(0,a.kt)("strong",{parentName:"li"},"Python Extension"),". "),(0,a.kt)("li",{parentName:"ul"},"In VS Code, create a new file. Name it ",(0,a.kt)("strong",{parentName:"li"},"script.py"),"."),(0,a.kt)("li",{parentName:"ul"},"After saving this file, ensure that a ",(0,a.kt)("strong",{parentName:"li"},"Python Debugger")," is specified at the bottom of your screen. If not, close VS Code and launch Python again."),(0,a.kt)("li",{parentName:"ul"},"After completing your file, ",(0,a.kt)("strong",{parentName:"li"},"attach it to your test using the paperclip icon"),". Click inside the text box to make the icons appear.")))}d.isMDXComponent=!0},5776:function(e,t,n){t.Z=n.p+"assets/images/codespaces-button-3d530d0bae78509e7ea7ee429a44a66a.png"},6229:function(e,t,n){t.Z=n.p+"assets/images/codespaces-loading-03e3bb806395fee54e3f40979ba738f5.png"},2452:function(e,t,n){t.Z=n.p+"assets/images/enter-commit-message-0da10570c51c68c9cdda51ace272be3c.png"},7641:function(e,t,n){t.Z=n.p+"assets/images/enter-running-codespace-e39a7ec7d39b323456605991637bb47b.png"},5291:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABBCAYAAABvnNwUAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAtdEVYdENyZWF0aW9uIFRpbWUATW9uIDI3IE1heSAyMDI0IDAxOjIxOjEwIFBNIEVEVFHyyAIAAAQCSURBVGiB7ZlvSBtnGMB/m4WDCjc2yPDDbYWlExZxI4GCwUGDA8PG/DOWwKB2Be0ELYJzgnSCcw51QhsCVgPDCe0qCIaVKSjJh2BhoF2HB5bky0yh2w2KB4oHlb3dwvZhpJsdtWN5k7rzfh9f7t7n+eXhfd7nyFM1fv/v9+//yg+3f+L/ivvlSrb9X/PjxIv7Pvd0ifI5EDiydsWRtSuOrF1xZO3K4ZTd7G5is7vpSeZSdA5nZQ8DjqxdcWTtiiNrVxxZu+LI/hdctZ1cmFvmZnqD9e+Wmf28Be+zsnaXgxRZtXaQy1/00KDtoC/Nkbz1C+7QIJene/AqMiLI4UjhW2iEusK4rQS94XMsGAAK7tYpZj9uo6Nhiva4VXgYCRReWaUKzzEFa3WepJFfFGTj8+hCwe05zkEproTKmli7oLg0XMADX+0FXGVgbe0gHnpD0fw0vOnH/RwY6wkWkmmsXOGZPI7CZcUaC4sbhDrOcaHPYGh6BbMiQMdQCx6xxthSds/j7uYI45824i7Pr3TSrX9Jb/so17cLzmZfpDQoPfYR0ZSF54MJrq2s8e21CKde2mThs/NM/91Va2FgoBHt5zn6w35OnAjSFV1GVLcx3B9ElZHMPsi5enbTTLcHeevMJKv3wEyN8l6wid743qqqJ4N4jxrEhwaJ6ybWdpbkpR7GUhauukZOHpWSzSOROFQIjO/TmAKEkSFz9+GTCqqqoLCJaYo975mmBYqKKqGD7EdJJyhzPYtxpIr6Zt9fHboiSKhOg6yOfq+48Yv8W+5FrE4QWwow3PEVi94Eq3dVPLUBPOoGM59MkSlyRy7tbJwziHeHab+4jKhuJPS2D9WYJ9p5mqFU8QePklYWgJyJsQWqAtkrZ3lnZO0f93CxKJ6s5ifUEMCjqShl+WgKrmM+arwaQp9k6FLpRKFIsmrNhyy+60MrB37LrwpETmAZGySjo8SmE2R3ixH90RRHttIH+lX6x6ZY0A1ECUbBf4M8WcWFtzmAWwFEmpmRCHH9YHzt5JHTjV0B+mYTzA6H8SiAUkXH1XnG3686MF88IEVWpb5vlNZXBNcvnub1147z6htnid1Sqe8bodVTeARZSPie9VNf50LcmKA/tvLnuHhnmWj/FJmyKurr3BLSlEPhsmUKahmILZM9J3TLwsqBUv5MwSFkUbisSKPfFqi1YUKV+ROq4D3ViFexyGY2Cg4hi8K7cS7LzPgcofEWBuYSNNxIY7l81FS7EHqEWPLgdGQp3dhKDXKma5LkHQVPbQBvxQ76lfO0t02SKeWI9Bik3bNGKkJXKiJru6Lg/CNgVxxZu+LI2hVH1q44snblUMk+mI2fj37zJPMoCYeqso6sXXFk7cofSXNFfLKI7nUAAAAASUVORK5CYII="},5335:function(e,t,n){t.Z=n.p+"assets/images/push-8b7442935093ef28462f345dc4ce4533.png"},1361:function(e,t){t.Z="data:image/png;base64,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cwfLPlWwFRGRzgWPm0LwqUKOlFdjd/MjIjGR8O8P8V5pbxt0JiIiV+p6uuZf18H2x6jOGUTik6/yyEAfPGjEenAHr/1yKZusPd0yERHpC5zNJqISHyDB7IkBB7aqQ2T/fgsHT/d0y0REpLtdT9f86/oZWxEREREREemdujP76ed+REREREREpE9TsBUREREREZE+TcFWRERERERE+jQFWxEREREREenTFGxFRERERESkT1OwFRERERERkT5NwVZERERERET6NAVbERERERER6dMUbEVERERERKRPM/R0A9oTFj68p5sgIiIiIiIifUSvDLYlRw73dBNERERERETkKurODk0NRRYREREREZE+TcFWRERERERE+jQFWxEREREREenTFGxFRERERESkT1OwFRERERERkT5NwVZERERERET6NAVbERERERER6dMUbEVERERERKRPU7AVERERERGRPk3BVkRERERERPo0BVsRERERERHp0ww93YCraUjoUP71obkXXf+tzcbewj3s2P6na9gqERERERER6U7XdbCdMnU6x0qPcqz06AXrJiRMbPNfhVsREREREZG+6boOtjeZzRftkZ2QMJG9hXvO/j8o3IqIiIiIiPRFP/pnbHds/xM7sj9hQsJEJtzxTz3YEg/GLPmYv6y+F0sPtkJEpNcwxTLr358gPrCnGyIiIiK93XXdY9uRY6VHGRI69GyY/dZm49boUT3Ya9tIRWEWWT4l1HV1E48Ylnwwj5IZD5He5Y1ERHqAJYm5TyQQcN7XqeUfryRtZ2372ziOc2RfEdZOrm+GiBksmDmMA+tWkFHs7J72dsIwIJrkWdOIsX/IijfzaGi7FktkEgnxkYT6+2J0c7D/D7/ivQPtt808cgopE28l2OyOs6aY3ds2kX3Y3rrWk+DbJ5McF4XFCxpOHiL3403kHnVcpGUmwhOnkfizYVg8mrB9s5fszZvZX8NF/w0A6vPX8OLmkrYL3UyExiURP2oEwRYTBqcd67FCsjM+4qCtneO47WHm3jWIA+uXknG4naZ18h4w3vYwi1LCzq34zo71eDEH87LJKarGCYRPW8qsaM/2D92WR9qqzZQ3uyzzCiHmHxOIixzWcv5qyij4ZBNZRefecx2e/y5sf5YxjORfPMxox0f85vUc2jlFIiJyFf1og+3egj0tvbStw5B7g4qtq1h2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NW4K3kYDTns15Xs28X52l34IV0RERHqJ6/oZWxEREREREemdujP76ed+REREREREpE9TsBUREREREZE+TcFWRERERERE+jQFWxEREREREenTel2w/eGHH7jhhht6uhkiIiIiIiJyldxwww388EP3zWPc64Ltd981YjQae7oZIiIiIiIicpUYjUa++66x2+rrdcG23m7Hp/9NPd0MERERERERuUp8+t9Evd3ebfX1umD7rc2Gez93bjKbe7opIiIiIiIi0s1uMptx7+fOtzZbt9Vp6LaautHJqir8AwLw8DBSd+pbGhoaunX8tYiIiIjpV9ZrAAAA0ElEQVSIiFw7N9xwA0ajEZ/+N+Hez52TVVXdW7/J7N9rE+NNZjPeJhP9+nloQikREREREZE+6ocffuC77xqpt9u7taf2jF4dbEVEREREREQ60+uesRURERERERG5FAq2IiIiIiIi0qcp2IqIiIiIiEifpmArIiIiIiIifZqCrYiIiIiIiPRpCrYiIiIiIiLSpynYioiIiIiISJ+mYCsiIiIiIiJ9moKtiIiIiIiI9GkKtiIiIiIiItKnKdiKiIiIiIhIn6ZgKyIiIiIiIn3a/wcT5DHzXj33lQAAAABJRU5ErkJggg=="},357:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABBCAYAAABvnNwUAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAtdEVYdENyZWF0aW9uIFRpbWUATW9uIDI3IE1heSAyMDI0IDAxOjIxOjI1IFBNIEVEVCCf+qMAAAUKSURBVGiB7Zl/SNRnHMdfecYXsr5jwW2yXRSdu9pJxQmFNwfdHNP98gd0SpAtyM2wEJyLSROcc1QLSgRXwnCOWoHoQalQ08IZq2UuPCz0D+cFsZs5v8PWtxl79Fz7w3QZemb3nNV5rz+f7/N5Pp/398PzfD4Pz4J4u/3e8PAIv17/jWcV8ysWOjuuzDgvYg5ieWoIiw1VwmJDlbDYUCUsNlSZn2IH8tMYyE97krEEnfmZ2flAWGyoEhYbqoTFhiphsaFKWOzjYEzYycG6Vn7p6uVqeys1X2Vhe17W6nKQIlZNKOHoNwWkmG7jPlNH87V/MDtLOFpdgE2R4UEOkYEvYcKZl4FZb2J3xi4avQAK5u1V1HyWTW5KFTkuPXA3Egg8s0os1uUKelsDzd7xQYHH1YBbKJitMTwtyZWQWQ39LihGE0ZgQq9pGUYD6IO3EQ9ZKCY7Ke/YMS8F79UmGpu70EcDj2QmAhcrOmg83YszdxcHC72UVl9Ci3aQW5qFVXRw4Ixn0nRzehkVX6Rijhof2Um++1t25+zn/K2Ao/GLlAPKXfkJ5S061o8Oc/JSBxdOlrFl5QCNX+6h+kGtpiyKi1Mx/V5HUYad9euTyStvRazJZm9RMqqMYPwgp/Tc7aI6J5l3tx2hbQi0lv1sTk5jt2tyVtWNydgWeXGVluBya+i3PDR/XcCBFh1jYiobF0mJZlokNhUC75UuNAHC2013/8M7FVRVQWEATROT7DRNB0VFlXCC+GNOOyjtqgdvZCxJ6XH/n9DRyTgTTeBx4x4Krv8g/8vJiLbDVJ5xsDf3e07bmmjrV7EmOLCqvZz4vIruIJ/Ic9sbj3px5WeQc6gVsSYV5/txqN4GyndupbQl+I3HnGYWgFEN7yD0/fkv37kucPamhYhlZ1maBaN/e/H1tyM89fi0TumugyfWZMeZ4sBqUlEM494UjMvj+LnvRT49OgwkEvFAvTGoKzCoK1AsmYieWobaSqWGFBSxavzHnN4UhykK8I2PCsSooODYMB03Z96ciiWTiMUvc+fcDmlxBWXPqpY41J7jFG12sDY2hlWrY1i1OhZ79ik6bi5+5HUWvpRAVHyxtLjkiVWM2NIdmBVAdHFiXxmuK17E/SRGGtehWDJnv6wlk0jjOikhyhFrdFBY00TN3gysCqDEknu8gYoPYifqqWKe5tFsoYHX3lL5qXQJby+cesq0trNEgliVpML9bH9VcP7QVl5fF8PaNz+k8ppKUuE+tlvHZkVGb5jCdgFvpC+haOUCMEzxGX+2s0fCfdZOUqIRcfkwRZWXxtrFG62UF1XRbYglKdEMgGGxaQrje/xY9xfvnRphwM+ZNbXt7AlcrEFBNYAY1JjUFgzq6KOgRD0XsAtZBC5WdOG+LlATMnBaJnYoti2p2BQdT3cvMNYwPC6B2D5I4HV21MOJijqcFVkU1zWRcrkL3RhH/Bojwl1GZfNYvn397RjUFY/lwtffHnCYIOk01ltK2JZ3hOYbCtYEB7bo27iP7SEn+wjd929zwlM//QJ/3GVT8R1+GJn6s1/bWSCtg/K2lJHXUjbtd5/WieipnXWtFT210vrkOb31DLWVMtJ38ZHnj/RdlNofz/nzx51zOxA9tTPOEz21UvtieBJXPMYyLDz1KOY0IqM3TNTRZ/eKNwM+rTMogvwRfsULVcJiQ5Ww2FBlXomdqLMvlMtptp9m5lVmw2JDlbDYUOU/URGwFQvHWOkAAAAASUVORK5CYII="},1611:function(e,t,n){t.Z=n.p+"assets/images/start-codespace-6b9b2b813e29c5eda027ed1719b3b867.png"}}]);