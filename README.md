This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.


"C:\Program Files (x86)\Java\jre1.8.0_111\bin\keytool.exe" -genkey -v -keystore moteasy-release-key.keystore -alias motKey -keyalg RSA -keysize 2048 -validity 10000

"C:\Program Files\Java\jdk1.8.0_131\bin\keytool.exe" -exportcert -list -v -alias motKey -keystore moteasy-release-key.keystore 

"c:\\Program Files\Java\jdk1.8.0_131\bin\jarsigner.exe" -verbose -sigalg SHA256withRSA -digestalg SHA1 -keystore moteasy-release-key.keystore platforms\android\build\outputs\apk\android-release-unsigned.apk motkey

"c:\\Users\michael.lozano\AppData\Local\Android\sdk\build-tools\25.0.2\zipalign.exe" -v 4 platforms\android\build\outputs\apk\android-release-unsigned.apk MotEasy.apk
