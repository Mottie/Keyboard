Originally posted by Jeremy Satterfield in his [blog](http://jsatt.blogspot.com/2010/01/on-screen-keyboard-widget-using-jquery.html), [jQuery plugins](http://plugins.jquery.com/project/virtual_keyboard) and on [Snipplr](http://snipplr.com/view/21577/virtual-keyboard-widget/). Currently maintained by [Mottie](https://github.com/Mottie/Keyboard).

## Features ([Demo](http://mottie.github.com/Keyboard/))

* An on-screen virtual keyboard embedded within the browser window which will popup when a specified entry field is focused.
* The user can then type and preview their input before Accepting or Canceling.
* Add custom keyboard layouts easily.
* Add up to four standard key sets to each layout that use the shift and alt keys (default, shift, alt and alt-shift).
* Add any number of optional modifier keys (meta keys) to add more key sets.
* Each meta key set also includes the shift, alt and alt-shift keysets - New in version 1.8.9.
* Position the keyboard in any location around the element, or target another element on the page.
* Easily modify the key text to any language or symbol.
* Allow direct input or lock the preview window.
* Set a maximum length to the inputted content.
* Scroll through the other key sets using the mouse wheel while hovering over a key to bypass the need to use alt, shift or meta keys.
* Easily type in characters with diacritics. Here are some default combination examples - it is possible to add more.

    * ' + vowel ( vowel with acute accent, e.g. ' + e = é )
    * \` + vowel ( vowel with grave accent, e.g., \` + e = è )
    * " + vowel ( vowel with diaeresis, e.g., " + e = ë )
    * ^ + vowel ( vowel with circumflex accent, e.g., ^ + e = ê )
    * ~ + certain letters ( letter with tilde, e.g. ~ + n = ñ, ~ + o = õ )

* Enable, disable or add more diacritic functionality as desired.
* Use callbacks and event triggers that occur when the keyboard is open or closed and when the content has changed, been accepted or canceled.
* ARIA support (may not be fully implemented)
* As jQuery UI is a dependancy, this plugin's styling will automatically match the selected jQuery UI theme with the exception of the required CSS found in the keyboard.css file.
* Built in watermarking. It emulates HTML5's placeholder, if the browser doesn't support it.
* Typing extension allows you to simulate typing into the keyboard for demo purposes or to assist user input.
* Autocomplete extension will integrate this keyboard plugin with jQuery UI's autocomplete widget.
* Multiple region specific keyboard layouts included in a separate directory. This is a work in progress and slowly growing.

## Documentation

Moved to the Wiki Pages: [Home](https://github.com/Mottie/Keyboard/wiki/Home) | [FAQ](https://github.com/Mottie/Keyboard/wiki/FAQ) | [Setup](https://github.com/Mottie/Keyboard/wiki/Setup) | [Usage](https://github.com/Mottie/Keyboard/wiki/Usage) | [Options](https://github.com/Mottie/Keyboard/wiki/Options) ( [Layout](https://github.com/Mottie/Keyboard/wiki/Layout), [Language](https://github.com/Mottie/Keyboard/wiki/Language), [Useability](https://github.com/Mottie/Keyboard/wiki/Useability), [Actions](https://github.com/Mottie/Keyboard/wiki/Actions) ) | [Methods](https://github.com/Mottie/Keyboard/wiki/Methods) | [Theme](https://github.com/Mottie/Keyboard/wiki/Theme) | [Log](https://github.com/Mottie/Keyboard/wiki/Log)

## To Do

* Waiting for requests :)
* Add more regional keyboard layouts.

## Known Problems 

* *IE* and *Opera*:
    * In a text area with multiple carriage returns, the caret positioning will be off when repositioning it with the mouse.
    * Using the right and left arrow keys to navigate through a text area with multiple carriage returns is problematic. The caret doesn't behave like in other browsers when moving from one line to the next. You can always reposition the caret using the mouse.
* *Opera*: When pressing the tab key while inside a textarea, all browsers but Opera add the tab to the virtual keyboard textarea.
* *Safari*: See the QWERTY Text Area demo with a locked input. While using the virtual keyboard to type, it enters the text in backwards! This is because textareas with a "readonly" attribute always returns zero for the caret postion.
* *Typing Extension*:
    * When pressing "Alt", the key set will change to the alt key set, but the focus will be moved to the browser menu. Pressing it quickly a second time will return the focus. This is build into the browser and it isn't possible (as far as I know) to automatically restore the window focus the first time alt is pressed.
    * Holding down the Alt key and trying to type is also not possible since the Windows OS is assuming you are trying to type a shortcut key to access the browser menu. You can still click the keys in the alt key set with the mouse.
    * Simulated typing on the keyboard breaks when the CapLock is on. Still looking for a cross-browser solution.

## Dependencies
* Required
    * jQuery 1.4.3+
    * jQuery UI Positioning Utility
    * jQuery UI CSS (can be customized)
    * jQuery caret (included with source)
* Optional
    * jQuery mousewheel plugin - allows using mousewheel to scroll through other key sets
    * jQuery keyboard typing extension - simulate typing on the virtual keyboard
    * jQuery keyboard autocomplete extension - for use with jQuery UI autocomplete

## Licensing

* Keyboard code: [MIT License](http://www.opensource.org/licenses/mit-license.php) for all versions.
* Caret code by C. F., Wong (Cloudgen): [MIT License](http://www.opensource.org/licenses/mit-license.php)
* Layouts files: Most are under [WTFPL](http://sam.zoy.org/wtfpl/), unless the file itself specifies otherwise.

## Change Log

Only the latest changes will be shown below, see the wiki log to view older versions.

### Version 1.9.18 (5/13/2012)

* Fixed an issue of the input clearing when `usePreview` is `false` and `alwaysOpen` is `true`. Brought up in [issue #37](https://github.com/Mottie/Keyboard/issues/37#issuecomment-5298677).

### Version 1.9.17 (5/8/2012)

* Added Turkish layouts. Thanks to [barisaydinoglu](https://github.com/barisaydinoglu)!

### Version 1.9.16 (4/30/2012)

* Caret position is now better retained in older IE. Fix for [issue #61](https://github.com/Mottie/Keyboard/issues/61).
* Invalid input should now revert back to the last valid input instead of breaking the keyboard. Fix for [issue #62](https://github.com/Mottie/Keyboard/issues/62).
* The repeating key obtained by holding down the mouse on a virtual key can now be disabled by setting the `repeatRate` to `0` (zero). Fix for [issue #63](https://github.com/Mottie/Keyboard/issues/63).
* Clicking on a virtual keyboard key will no longer submit a form - fix for [issue #64](https://github.com/Mottie/Keyboard/issues/64).

### Version 1.9.15

* Updated Mobile demo
  * Updated to [jQuery Mobile version 1.1.0 RC1](http://jquerymobile.com/blog/2012/02/28/announcing-jquery-mobile-1-1-0-rc1/)
  * Extra demo css added because the theme selector radio buttons were not displaying properly due to some issues with the data-attributes showing "[Object object]" instead of true or false. I'm not sure why, and don't have the time to investigate.
* Fixed a problem where keyboards with `alwaysOpen` and `autoAccept` set to `true` would keep focus on the input when clicking outside the input. Fix for [issue #59](https://github.com/Mottie/Keyboard/issues/59).
* Fixed an issue with `tabNavigation` not working properly. Also, discovered that `tabindex="0"` should not be used. Fix for [issue #60](https://github.com/Mottie/Keyboard/issues/60).

### Version 1.9.14

* Multiple synchronized keyboards with `alwaysOpen` and `autoAccept` set to `true` should now switch properly. Fix for [issue #58](https://github.com/Mottie/Keyboard/issues/58).

### Version 1.9.13

* Multiple synchronized keyboards with `alwaysOpen` set to `true` should now switch properly. Fix for [issue #58](https://github.com/Mottie/Keyboard/issues/58).

### Version 1.9.12.1

* Updated jquery.mousewheel.js, as the it was only scrolling in one direction.
