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

### Version 1.17.1 (2/12/2013)

* Version bump to add plugin to [jQuery plugin registry](http://plugins.jquery.com/keyboard/).

### Version 1.17 (2/12/2013)

* Added portuguese layout and modified the layout demo to build the layout selector instead of adding an option element each time.
* Added an `{empty}` special key which inserts a blank unclickable key into the keyboard. Using `{sp:1}` will does not add a key, but a blank space between keys.
* Added a method to restore the caret position in IE in attempts to fix [issue #131](https://github.com/Mottie/keyboard/issues/131).
* Added a `return false` to prevent a click through on elements behind the keyboard when the `autoAccept` option is `true`.
* Modified the `switchInput` function to now target non-keyboard enabled elements - try [this demo](http://jsfiddle.net/Mottie/MK947/715/).
* Removed Opera textarea hack as it has been fixed in the latest versions. [This demo](http://jsfiddle.net/vwb3c/) should work properly now (keep hitting carriage returns).

### Version 1.16 (12/13/2012)

* Added `beforeVisible` event
 * This event occurs after the keyboard object (`keyboard.$keyboard`) has been built.
 * This event occurs immediately before the keyboard is positioned by the position utility.
 * Use this event to position the keyboard if you decide *not* to include the position utility.
 * Discussed adding this event in [issue #124](https://github.com/Mottie/Keyboard/issues/124).
* All hover states are now cleared:
 * When the keyboard becomes visible. Fixes [issue #124](https://github.com/Mottie/Keyboard/issues/124).
 * For touch devices. Fixes [issue #114](https://github.com/Mottie/Keyboard/issues/114).
 * For the navigation extension.
* Fixed autocomplete for jQuery UI v1.9+
 * The extension is still backwards compatible with older versions of jQuery UI.
 * Fixes [issue #115](https://github.com/Mottie/Keyboard/issues/115) and [issue #128](https://github.com/Mottie/Keyboard/issues/128).
* Added `caretToEnd` option
 * When `true` the caret will always be moved to the end of the content when the keyboard is revealed.
 * If `false` the caret position will be restored to the last position it was in; at the beginning upon initial opening.
 * Enhancement request for [issue #129](https://github.com/Mottie/Keyboard/issues/129).
* Added `lastKey` and `$lastKey` to the api (access the api using `kb = $('#keyboard').data('keyboard')`):
 * `kb.lastKey` contains the last typed character determined using the typed character code (not the actual text), when pressing keys on your actual keyboard, not the virtual one.
 * `kb.lastKey` contains the value from the clicked virtual keyboard button.
 * If any keys are mapped, the `kb.lastKey` will contain the mapped key character.
 * `kb.$lastKey` will be a jQuery object of the clicked keyboard button. If the actual keyboard was used to enter a character, this value will contain an empty array `[]` (length = 0).
 * Enhancement added for [issue #127](https://github.com/Mottie/Keyboard/issues/127).
* Added syntax highlighting to the demo code.
* Added Thai layout. Thanks to Herve Buyle via email! 

### Version 1.15 (10/16/2012)

* Added iPad touch events.
 * Thanks to [mfayez](https://github.com/mfayez) for sharing the code!
 * Hopefully this fixes issues [#100](https://github.com/Mottie/Keyboard/issues/100) and [#117](https://github.com/Mottie/Keyboard/issues/117).
* Added a `{default}` action key definition.
  * Clicking it makes the keyboard show the default keyset.
  * See gitaarik's updated [iPad demo](http://mottie.github.com/Keyboard/) code to see how it is used.
* Fixed a problem which should prevent a combo replace error. See [issue #116](https://github.com/Mottie/Keyboard/issues/116#issuecomment-9479917).
* Modified space bar css to not use a negative text indent. See [this article](http://nicolasgallagher.com/another-css-image-replacement-technique/).

### Version 1.14.1 (10/8/2012)

* Disabled jQuery UI Themeswitcher from the main and layouts demo pages, as the script is no longer available.
* Updated demos to use jQuery 1.8 and jQuery UI 1.9.

### Version 1.14 (10/2/2012)

* Added iPad &amp; iPad email demos by [gitaarik](https://github.com/gitaarik).

### Version 1.13 (9/9/2012)

* Fixed error caused by closing a keyboard in OSX using ctrl-esc or alt-esc. Fixes [issue #102](https://github.com/Mottie/Keyboard/issues/102).
* Added Japanese and Spanish layouts thanks to [pacoalcantara](https://github.com/pacoalcantara)!
* Added Polish layout thanks to Piotr (via email)!
* Wide keys now use a `min-width` instead of `width`. This allows the key to properly expand to fit the text within it.
* Updated autocomplete extension to save the caret position in IE9. Thanks to [banku](https://github.com/banku) for the fix in [issue #95](https://github.com/Mottie/Keyboard/issues/95).
* Updated navigation extension:
  * Removed the `toggleKey` option.
  * Custom key codes can be assigned to any of the navigation keys within the new `$.keyboard.navigationKeys` object. Extend it as follows:

    ```javascript
    // change default navigation keys
    $.extend($.keyboard.navigationKeys, {
      toggle     : 112, // toggle key; F1 = 112 (event.which value for function 1 key)
      enter      : 13,  // Enter
      pageup     : 33,  // PageUp key
      pagedown   : 34,  // PageDown key
      end        : 35,  // End key
      home       : 36,  // Home key
      left       : 37,  // Left arrow key
      up         : 38,  // Up arrow key
      right      : 39,  // Right arrow key
      down       : 40   // Down arrow key
    });
    ```

   Enhancement request from [issue #90](https://github.com/Mottie/Keyboard/issues/90). Thanks [faboudib](https://github.com/faboudib)!

  * Movement of the highlighted navigation key can now be triggered using `navigate` for predefined movement; see the [updated demo](http://mottie.github.com/Keyboard/navigate.html)

    ```javascript
    // navkey contains the name of the key: e.g. "home", "right", "pageup", etc
    var navkey = "pageup";
    $('#keyboard').trigger('navigate', navkey);
    ```

    Or, highlight a specific navigation key using the `navigateTo` trigger:

    ```javascript
    // navigate to the third row and fourth key (zero-based indexes) - [ row, index ]
    $('#keyboard').trigger('navigateTo', [2,3]);
    ```
