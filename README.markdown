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
* Add an input mask extension. I think I'll try to make it compatible with [this plugin](https://github.com/RobinHerbots/jquery.inputmask).

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
    * jQuery UI Positioning Utility (optional, if you position the keyboard yourself)
    * jQuery UI CSS (can be customized)
    * jQuery caret (included with source)
* Optional
    * jQuery mousewheel plugin - allows using mousewheel to scroll through other key sets
    * jQuery keyboard typing extension - simulate typing on the virtual keyboard
    * jQuery keyboard autocomplete extension - for use with jQuery UI autocomplete (also requires jQuery UI Positioning Utility)

## Licensing

* Keyboard code: [MIT License](http://www.opensource.org/licenses/mit-license.php) for all versions.
* Caret code by C. F., Wong (Cloudgen): [MIT License](http://www.opensource.org/licenses/mit-license.php)
* Layouts files: Most are under [WTFPL](http://sam.zoy.org/wtfpl/), unless the file itself specifies otherwise.

## Change Log

Only the latest changes will be shown below, see the wiki log to view older versions.

### Version 1.17.12 (10/22/2013)

* Fixed `stayOpen` to again work properly. Fixes [issue #211](https://github.com/Mottie/Keyboard/issues/211).

### Version 1.17.11 (10/8/2013)

* Caret should no longer get stuck. Fixes [issue #207](https://github.com/Mottie/Keyboard/issues/207).

### Version 1.17.10 (10/7/2013)

* Added `{left}` and `{right}` action keys which move the caret within the input ([demo](http://jsfiddle.net/MK947/1351/)).

### Version 1.17.9 (10/7/2013)

* Fixed download links in demos.
* Bumped version number because of some weirdness.

### Version 1.17.8 (10/7/2013)

* Fixed mousewheel message to now only show up if a key has differing multiple keysets.
* Fixed autocomplete extension to now properly work with both newer and older versions of jQuery UI. Fixes [issue #177](https://github.com/Mottie/Keyboard/issues/177).
* Added the `buttonHover` class to a virtual keyboard key when the "touchstart" event is fired to provide visual feedback. Attempt to [fix #179](https://github.com/Mottie/Keyboard/issues/179).
* Added script to prevent simultaneous "mousedown" &amp; "touchstart" events from producing double entries. Fixes [issue #184](https://github.com/Mottie/Keyboard/issues/184).
* Added colon to the list of accepted keys. Fixes [issue #197](https://github.com/Mottie/Keyboard/issues/197).
* Fixed issue with close not being triggered when clicking in another input with a keyboard attached. Fixes [issue #199](https://github.com/Mottie/Keyboard/issues/199).
* Merged in fix for preventing an error when hiding the keyboard using the navigation extension. See [pull #200](https://github.com/Mottie/Keyboard/pull/200). Thanks @jmsanzg
* Merged in `bower.json` file addition by @peters and registered, thanks! See [pull #202](https://github.com/Mottie/Keyboard/pull/202).

### Version 1.17.7 (5/13/2013)

* Fixed the autocomplete extension to not close the keyboard when clicking within the autocomplete window, including the scroll bar. Fixes [issue #170](https://github.com/Mottie/Keyboard/issues/170).
* Fixed an issue in IE8 where a javascript error would occur in textarea when `usePreview` is `false`. Fixes [issue #134](https://github.com/Mottie/Keyboard/issues/134).

### Version 1.17.6 (5/10/2013)

* Fixed the check combo function to not cause an error when the keyboard is hidden. Fixes [issue #168](https://github.com/Mottie/Keyboard/issues/168).

### Version 1.17.5 (5/6/2013)

* Keyboard visible callback now triggered after the preview gets focus. Fixes [issue #147](https://github.com/Mottie/Keyboard/issues/147).

### Version 1.17.4 (4/14/2013)

* Fixed an issue with IE not giving the preview window focus.
  * Thanks to [@semmelbroesel](https://github.com/semmelbroesel) for the suggestion.
  * Fixes [issue #160](https://github.com/Mottie/Keyboard/issues/160).
