#Remove when cordova-android is upgraded to 7.1.2
#!/bin/bash
if [ "$CI_SERVER" = "yes" ]; then
  # If CI_SERVER is undefined or 'no' then the build is not running in Ionic Pro
  echo 'Cordova android build detected, proritizing maven'
  #remove jcenter
  sed -i '/jcenter()/d' ../platforms/android/CordovaLib/build.gradle
  #append jcenter
  sed -i '/maven {/{
  N
  N
  a\
  jcenter()
  }' ../platforms/android/CordovaLib/build.gradle
  cat ../platforms/android/CordovaLib/build.gradle
fi
