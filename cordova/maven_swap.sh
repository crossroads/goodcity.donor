#Remove when cordova-android is upgraded to 7.1.2
#!/bin/bash
echo 'Ionic Pro build detected, proritizing maven'
#remove jcenter
sed -i '/jcenter()/d' ./platforms/android/CordovaLib/build.gradle
#append jcenter
sed -i '/google() {/{
N
N
a\
jcenter()
}' ./platforms/android/CordovaLib/build.gradle
cat ./platforms/android/CordovaLib/build.gradle

