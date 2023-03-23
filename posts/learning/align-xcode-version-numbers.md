---
title: Align XCode version numbers
description: Configure XCode to reference all version and build numbers from a single source of truth for all schemes and sub-projects
tags: xcode, react-native
date: 2023-03-23
---

# Align XCode Version Numbers

Open Xcode (obvious 🚀). Select your main project (not a target). Under 'Build Settings', and in the search bar, type in: 'versioning'. Modify 'Current Project Version' to be the build number you want. Change the 'Marketing Version' to be the version string you want your users to see and to appear on the App Store. Now, in each of your targets, under 'Build Settings', search for 'versioning', modify 'Current Project Version' to be `$(CURRENT_PROJECT_NUMBER)` and 'Marketing Version' to be `$(MARKETING_VERSION)`. You should see them be replaced with the version numbers you supplied earlier.

Finally, modify the Info.plist file so that the 'Current Project Version' and 'Marketing Version' be `$(CURRENT_PROJECT_NUMBER)` and `$(MARKETING_VERSION)`, respectively.

That's it!

## BONUS!

If you're trying to make XCode reference an environment variable so that your Android and iOS version numbers are aligned (such as is described [here](https://ryer.io/learning/react-native-env-vars.html)), you can replace all of the references to `$(CURRENT_PROJECT_NUMBER)` and `$(MARKETING_VERSION)` to the environment variable name you've specified for those values. You can also replace the hard-coded version numbers in your project's build settings tab to the same dynamic references.

Now if you want to make sure Android and iOS are always aligned, and version numbers are incremented synchronously and sensibly during builds, [check this out](https://ryer.io/learning/automate-your-version-numbers.html).