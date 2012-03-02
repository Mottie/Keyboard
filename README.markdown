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

### Version 1.9.12.1

* Updated jquery.mousewheel.js, as the it was only scrolling in one direction.

### Version 1.9.12

* Fixed an issue with an internal caret positioning flag not being set correctly. This change also fixes [issue #57](https://github.com/Mottie/Keyboard/issues/57).

### Version 1.9.11

* Updated mobile extension
 * It now works with jQuery Mobile v1.0.1.
 * The extension no longer uses the mobile buttonMarkup function, it just applies the css class names.
 * Added a hover button option and theme selector.
 * I don't think I'll support the Mobile theme selector because it's not a bookmarklet like I thought it would be. But please feel free to point the mobile stylesheet to a custom mobile theme. The extension will support any of the theme letters (A through whatever).
* Caret position is now saved
 * This started as a fix for all versions of IE, but now applies to Firefox and Opera. It's not working in Webkit (Chrome &amp; Safari) for some reason.
 * When clicking in an input, the keyboard will now open with a new preview window showing or with the existing input with the caret in the position where it was clicked in the text.
 * Hidden inputs will remember the last caret position when revealed.
 * Fix for the new issue added into [issue #24](https://github.com/Mottie/Keyboard/issues/24).

### Version 1.9.10

* Fixed an issue with using `jQuery.noConflict()` in older IE. Fix for [issue #55](https://github.com/Mottie/Keyboard/issues/55).
* Added two Hungarian (Magyar) keyboard layouts. Thanks to Tóth Gergely for sharing - from [issue #48](https://github.com/Mottie/Keyboard/issues/48).
* Fixed a problem with IE8 and hidden inputs. Apparently the original IE8 and not IE9 in compatibility mode has this problem. Thanks to Chris Mullins in [issue #56](https://github.com/Mottie/Keyboard/issues/56).

### Version 1.9.9

* Fixed an issue with the enter key that was introduced in 1.9.8 - sorry!
* The way the key spacer `{sp:#}` is added has changed:
  * In older versions, a span of zero dimensions with a side margin of #em was added, i.e. `{sp:1}` would add a "margin: 0 1em" which adds 1em to the left and right making it 2em wide.
  * Because newer versions of Firefox do not seem to render a zero dimension span at all, the plugin now sets the span width.
  * A `{sp:1}` setting now becomes a span of "2em" width, to keep this consistent with the way this method worked previously.
  * In case this causes problems, one additional change was made so the space can now be set using pixels: `{sp:20px}` which makes the width 20 pixels.
  * Additionally, non-western formats are now supported. Using `{sp:1,5}` or `{sp:1,5em}` will set the span to 3em's in width.
  * This will fix the problem brought up in [issue #48](https://github.com/Mottie/Keyboard/issues/48).

### Version 1.9.8

* Pressing the real keyboard enter key will now use the `$.keyboard.keyaction.enter` function. Discussed in [issue #47](https://github.com/Mottie/Keyboard/issues/47).
* Updated all demos to use jQuery 1.7+.

### Version 1.9.7

* Fixed a problem with the mouse up event not returning focus to the input, possible fix for [issue #45](https://github.com/Mottie/Keyboard/issues/45).
* Changed `acceptValid` default value from `true` to `false`.
* Updated link to jQuery Mobile from 1.0rc1 to 1.0.
* Added package.json in anticipation of the [jQuery plugin](http://plugins.jquery.com/) site.

### Version 1.9.6

* Added `acceptValid` option
  * When true, all input is continually checked using the `validate` callback function, if valid, then the accept button is enabled; otherwise it is disabled.
  * When false, the input is not checked after each input; but the `validate` callback is still called when the input is accepted.
  * Added a "disabled" class to the css which is applied to the accept button when disabled.
* Changed the `validate` callback function
  * It no longer automatically triggers the "canceled" event, you can do that within the callback.
  * If the input is invalid and the keyboard is closed/canceled, the `validate` callback will no longer abort the close.
  * Added an `isClosing` variable which is only `true` when the content was accepted. The `isClosing` variable is `false` when the validate callback is called during input.

### Version 1.9.5

* Added a `validate` callback function
  * This function is called when the keyboard is attempting to close.
  * If the function returns true, the keyboard will continue on, accept the content and close (if not always open).
  * If this function returns false, then a "canceled" event will fire and the keyboard will abort the close.
  * Any other actions can be performed or called from inside of this function. For example, if the value is invalid, you can clear the keyboard input:

    ```javascript
    $('#keyboard').keyboard({
      validate: function(keyboard, value){
        // test value to only allow numbers
        var test = /\d+/.test(value);
        // if the value is invalid, clear the input
        if (!test) { keyboard.$preview.val(''); }
        // return valid test (true or false)
        return test;
      }
    });
    ```

### Version 1.9.4

* Modified to prevent the keyboard from being added multiple times to a single element. Previously, calling the keyboard on an element a second time would add a second keyboard and detach the first one from the plugin.
