---
title: Set up Android signing configs
description: CLI methods to generate your very own release and debug signing configs for Android mobile development
tags: android, react-native, devops, wips
date: 2023-03-23
---

# Android Signing Config

We will need a keystore and to sign the bundle for RELEASE
Resource: https://medium.com/androiddevelopers/building-your-first-app-bundle-bbcd228bf631
Run ONCE for every computer that will build and upload bundles to Play Store:

``` shell

debug: 
`keytool -genkey -v -keystore ~/path/to/android/project/app/debug.keystore -alias androidDebugKey -storepass passwordOfYourChoosing -keypass passwordOfYourChoosing -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Android Debug,O=Android,C=US"`

release:
`keytool -genkey -v -keystore ~/path/to/android/project/app/release.keystore -alias androidReleasekey -storepass passwordOfYourChoosing -keypass passwordOfYourChoosing -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Android Release,O=Android,C=US"`
```

Later on, when you get to signing the release as part of a bundle you send to Google Play Store Console, you may have to do something like:

``` shell
`jarsigner -keystore $pathToKeystore app-release.aab $keyAlias`
```