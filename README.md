# NativeNotes

This project illustrates common aspects of developing mobile cross-platform applications with NativeScript and Angular.

The eventual application implements the following features:
* display of notes via NativeScript list-view module
* ability to add notes via NativeScript dialog module
* master-detail routing from the list of notes to a specific note
* ability to attach an image to a specific note via NativeScript imagepicker

## User Interface on Android 
<img src="https://nilsmehlhorn.github.io/NativeNotes/master.png?raw=true" alt="master-view of applications" width="320px" hspace="20"/><img src="https://nilsmehlhorn.github.io/NativeNotes/detail.png?raw=true" alt="detail-view of applications" width="320px"/>

## User Interface on iOS
<img src="https://nilsmehlhorn.github.io/NativeNotes/master_ios.png?raw=true" alt="master-view of applications" width="320px" hspace="20"/><img src="https://nilsmehlhorn.github.io/NativeNotes/detail_ios.png?raw=true" alt="detail-view of applications" width="320px"/>



## Setup

1. [Setup NativeScript on your sytem](https://docs.nativescript.org/start/quick-setup)
2. Clone repository via `git clone https://github.com/nilsmehlhorn/NativeNotes.git`
2. *(Optional)* Checkout a certain tag via `git checkout tags/<tag-name>`
3. Add target platform via `tns platform add (ios|android)`
4. Run via `tns run (ios|android)`
