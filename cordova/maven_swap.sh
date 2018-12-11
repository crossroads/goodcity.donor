#Remove when cordova-android is upgraded to 7.1.2
#!/bin/bash
echo 'Cordova android build detected, prioritizing maven'
#remove jcenter
sed -i '/jcenter()/d' ./platforms/android/CordovaLib/build.gradle
#append jcenter
sed -i '/maven {/{
N
N
a\
google()
}' ./platforms/android/CordovaLib/build.gradle
cat ./platforms/android/CordovaLib/build.gradle
