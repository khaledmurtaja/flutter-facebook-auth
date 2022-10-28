"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5405],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1021:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],p={},d="Android configuration",l={unversionedId:"android",id:"android",title:"Android configuration",description:"Upon installation of this plugin, configuration is needed on Android before running the project again. If this is not done, an error of No implementation found would show because the Facebook SDK on Android would throw an Exception error if the configuration is not yet defined. This error also locks the other plugins in your project, so if the plugin is not yet needed, either remove it or comment it out from the pubspec.yaml file.",source:"@site/docs/android.md",sourceDirName:".",slug:"/android",permalink:"/docs/5.x.x/android",draft:!1,editUrl:"https://github.com/darwin-morocho/flutter-facebook-auth/tree/master/website/docs/android.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/docs/5.x.x/intro"},next:{title:"iOS configuration",permalink:"/docs/5.x.x/ios"}},s={},c=[],m={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"android-configuration"},"Android configuration"),(0,r.kt)("admonition",{title:"IMPORTANT",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Upon installation of this plugin, configuration is needed on Android before running the project again. If this is not done, an error of ",(0,r.kt)("strong",{parentName:"p"},"No implementation found")," would show because the Facebook SDK on Android would throw an Exception error if the configuration is not yet defined. This error also locks the other plugins in your project, so if the plugin is not yet needed, either remove it or comment it out from the pubspec.yaml file.")),(0,r.kt)("admonition",{title:"IMPORTANT",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Since the native facebook sdk 15.0.0 the ",(0,r.kt)("inlineCode",{parentName:"p"},"minSdkVersion")," required is ",(0,r.kt)("inlineCode",{parentName:"p"},"21"),".\nYou must go to ",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," and define ",(0,r.kt)("inlineCode",{parentName:"p"},"minSdkVersion")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"21")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"    defaultConfig {\n        ...\n        minSdkVersion 21\n        targetSdkVersion 33\n        ...\n    }\n"))),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/facebook-login/android/?locale=en"},"Facebook Login for Android - Quickstart")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select an App or Create a New App")),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/98711287-cedfdc80-2352-11eb-9eb3-761f43ba4f7e.png"}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Skip the step 2 (Download the Facebook App)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Skip the step 3 (Integrate the Facebook SDK)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("strong",{parentName:"p"},"Your Resources and Manifest")," add this config in your android project"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open your ",(0,r.kt)("inlineCode",{parentName:"p"},"/android/app/src/main/res/values/strings.xml")," file, or create one if it doesn't exists.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the following (replace ",(0,r.kt)("inlineCode",{parentName:"p"},"{your-app-id}")," with your facebook app Id) and with your client token:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'    <string name="facebook_app_id">{your-app-id}</string>\n    <string name="facebook_client_token">YOUR_CLIENT_TOKEN</string>\n')),(0,r.kt)("p",{parentName:"li"}," Here one example of ",(0,r.kt)("inlineCode",{parentName:"p"},"strings.xml")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <string name="facebook_app_id">1365719610250300</string>\n    <string name="facebook_client_token">YOUR_CLIENT_TOKEN</string>\n</resources>\n')),(0,r.kt)("p",{parentName:"li"}," You can find the ",(0,r.kt)("strong",{parentName:"p"},"client token")," in your facebook developers console"),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/144253037-f1750fbd-62ac-42fb-88a6-2f7ed8113f3e.png"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"/android/app/src/main/AndroidManifest.xml")," file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the following uses-permission element after the application element"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.INTERNET"/>\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the following meta-data element, an activity for Facebook, and an activity and intent filter for Chrome Custom Tabs inside your application element"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>\n<meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>\n')),(0,r.kt)("p",{parentName:"li"},"Here one example of ",(0,r.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="app.meedu.flutter_facebook_auth_example">\n    <uses-permission android:name="android.permission.INTERNET" />\n    <application\n       android:name="${applicationName}"\n       android:icon="@mipmap/ic_launcher"\n       android:label="facebook auth">\n\n       <meta-data\n           android:name="com.facebook.sdk.ApplicationId"\n           android:value="@string/facebook_app_id" />\n       <meta-data \n           android:name="com.facebook.sdk.ClientToken" \n           android:value="@string/facebook_client_token"/>\n\n        <activity\n           android:name=".MainActivity"\n           android:configChanges="orientation|keyboardHidden|keyboard|screenSize|smallestScreenSize|locale|layoutDirection|fontScale|screenLayout|density|uiMode"\n           android:hardwareAccelerated="true"\n           android:launchMode="singleTop"\n           android:theme="@style/LaunchTheme"\n           android:exported="true"\n           android:windowSoftInputMode="adjustResize">\n           <meta-data\n               android:name="io.flutter.embedding.android.NormalTheme"\n               android:resource="@style/NormalTheme" />\n           <meta-data\n               android:name="io.flutter.embedding.android.SplashScreenDrawable"\n               android:resource="@drawable/launch_background" />\n           <intent-filter>\n               <action android:name="android.intent.action.MAIN" />\n               <category android:name="android.intent.category.LAUNCHER" />\n           </intent-filter>\n       </activity>\n       <meta-data\n           android:name="flutterEmbedding"\n           android:value="2" />\n    </application>\n</manifest>\n')))))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Associate Your Package Name and Default Class with Your App"),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/98712455-54b05780-2354-11eb-9509-aa2846af1a2d.png"}),(0,r.kt)("ol",{parentName:"li",start:6},(0,r.kt)("li",{parentName:"ol"},"Provide the Development and Release Key Hashes for Your App")),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/15864336/98712555-73aee980-2354-11eb-9c25-c1ef3760fce1.png"}),(0,r.kt)("p",{parentName:"li"},"To find info to how to generate you key hash go to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/facebook-login/android?locale=en_US#6--provide-the-development-and-release-key-hashes-for-your-app"},"https://developers.facebook.com/docs/facebook-login/android?locale=en_US#6--provide-the-development-and-release-key-hashes-for-your-app")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: if your application uses ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/googleplay/android-developer/answer/9842756?visit_id=637406280862877202-1623101210&rd=1"},"Google Play App Signing")," then you should get certificate SHA-1 fingerprint from Google Play Console and convert it to base64")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"You should add key hashes for every build variants like release, debug, CI/CD, etc.")))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Queries\nApps that target Android API 30+ (Android 11+) cannot call Facebook native apps unless the package visibility needs are declared. Please follow ",(0,r.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/android/troubleshooting/#faq_267321845055988"},"https://developers.facebook.com/docs/android/troubleshooting/#faq_267321845055988")," to make the declaration. To solve it you have to add in the AndroidManifest.xml file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<manifest package="com.example.app">\n    <queries>\n        <provider android:authorities="com.facebook.katana.provider.PlatformProvider" />\n    </queries>\n    ...\n</manifest>\n')),(0,r.kt)("admonition",{title:"KEEP IN MIND",type:"danger"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If your app is still in developing mode in your ",(0,r.kt)("inlineCode",{parentName:"p"},"facebook console")," to test the ",(0,r.kt)("inlineCode",{parentName:"p"},"login flow")," you only can use ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/development/build-and-test/test-users/"},"test accounts")," or use the facebook account witch is the owner of the app in the facebook developer console.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If want to test the login flow with the native facebook app and your app is in developing mode your account must be added to the developer team ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/development/build-and-test/app-roles"},"https://developers.facebook.com/docs/development/build-and-test/app-roles"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you want to get the user email and public profile you must check in your facebook developers console\nthat you have that permissions enabled.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15864336/198648412-201fcd9b-8c24-440f-893e-23c5c6efc664.png",alt:"image"})))),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Starting with Android 11 the facebook ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientToken")," is mandatory (check the above example).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Facebook app to perform the login request when it is installed. The native Facebook app compare your app signing(key hash) with the key hash registered in your Facebook developers console. If the login flow doesn't works with the Facebook app that means that you have problems with your hash. Make sure that you have added the correct key hashes in your console.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you get error like this:\n",(0,r.kt)("inlineCode",{parentName:"p"},"Missing 'package' key attribute on element package at ...")," "),(0,r.kt)("p",{parentName:"li"}," This issue happens for the combination of:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Using Android-SDK's API level 31 (or later),\nWith old Gradle version(s).\n")),(0,r.kt)("p",{parentName:"li"}," Check your ",(0,r.kt)("inlineCode",{parentName:"p"},"com.android.tools.build:gradle")," version in ",(0,r.kt)("inlineCode",{parentName:"p"},"android/build.gradle"),". It's should be ",(0,r.kt)("inlineCode",{parentName:"p"},"3.5.4")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"higher"),".")))))}u.isMDXComponent=!0}}]);