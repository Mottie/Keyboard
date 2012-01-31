Originally posted by Jeremy Satterfield in his [blog][1], [jQuery plugins][2] and on [Snipplr][3]. Currently maintained by [Mottie][4].

###Features ([Demo][5])

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

###Documentation

Moved to the Wiki Pages: [Home][6] | [FAQ][7] | [Setup][8] | [Options][9] ( [Layout][10], [Language][11], [Useability][12], [Actions][13] ) | [Methods][14] | [Theme][15] | [Log][16]

###To Do

* Waiting for requests :)
* Add more regional keyboard layouts.

###Known Problems 

* *IE* and *Opera*:
    * In a text area with multiple carriage returns, the caret positioning will be off when repositioning it with the mouse.
    * Using the right and left arrow keys to navigate through a text area with multiple carriage returns is problematic. The caret doesn't behave like in other browsers when moving from one line to the next. You can always reposition the caret using the mouse.
* *Opera*: When pressing the tab key while inside a textarea, all browsers but Opera add the tab to the virtual keyboard textarea.
* *Safari*: See the QWERTY Text Area demo with a locked input. While using the virtual keyboard to type, it enters the text in backwards! This is because textareas with a "readonly" attribute always returns zero for the caret postion.
* *Typing Extension*:
    * When pressing "Alt", the key set will change to the alt key set, but the focus will be moved to the browser menu. Pressing it quickly a second time will return the focus. This is build into the browser and it isn't possible (as far as I know) to automatically restore the window focus the first time alt is pressed.
    * Holding down the Alt key and trying to type is also not possible since the Windows OS is assuming you are trying to type a shortcut key to access the browser menu. You can still click the keys in the alt key set with the mouse.
    * Simulated typing on the keyboard breaks when the CapLock is on. Still looking for a cross-browser solution.

### Dependencies
* Required
    * jQuery 1.4.3+
    * jQuery UI Positioning Utility
    * jQuery UI CSS (can be customized)
    * jQuery caret (included with source)
* Optional
    * jQuery mousewheel plugin - allows using mousewheel to scroll through other key sets
    * jQuery keyboard typing extension - simulate typing on the virtual keyboard
    * jQuery keyboard autocomplete extension - for use with jQuery UI autocomplete

###Licensing

* Keyboard code: [MIT License][18] for all versions.
* Caret code by C. F., Wong (Cloudgen): [MIT License][18]
* Layouts files: Most are under [WTFPL][19], unless the file itself specifies otherwise.

###Change Log

Only the latest changes will be shown below, see the wiki log to view older versions.

###Version 1.9.7

* Fixed a problem with the mouse up event not returning focus to the input, possible fix for [issue #45](https://github.com/Mottie/Keyboard/issues/45).
* Changed `acceptValid` default value from `true` to `false`.
* Updated link to jQuery Mobile from 1.0rc1 to 1.0.
* Added package.json in anticipation of the [jQuery plugin](http://plugins.jquery.com/) site.

###Version 1.9.6

* Added `acceptValid` option
  * When true, all input is continually checked using the `validate` callback function, if valid, then the accept button is enabled; otherwise it is disabled.
  * When false, the input is not checked after each input; but the `validate` callback is still called when the input is accepted.
  * Added a "disabled" class to the css which is applied to the accept button when disabled.
* Changed the `validate` callback function
  * It no longer automatically triggers the "canceled" event, you can do that within the callback.
  * If the input is invalid and the keyboard is closed/canceled, the `validate` callback will no longer abort the close.
  * Added an `isClosing` variable which is only `true` when the content was accepted. The `isClosing` variable is `false` when the validate callback is called during input.

###Version 1.9.5

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

###Version 1.9.4

* Modified to prevent the keyboard from being added multiple times to a single element. Previously, calling the keyboard on an element a second time would add a second keyboard and detach the first one from the plugin.

###Version 1.9.3

* Added `switchInput` callback to the options; it replaces the default switching input code if added.
* Fixed Navigation extension to not repeat keys. Fix for [issue #36](https://github.com/Mottie/Keyboard/issues/36).
* Fixed Autocomplete extension to allow selecting an item on click. Fix for [issue #35](https://github.com/Mottie/Keyboard/issues/35).
* Fixed key repeat problem reported in [issue #32](https://github.com/Mottie/Keyboard/issues/32).
* The placeholder attribute in the preview window is no longer being removed. So, if the preview input loses focus, the placeholder message will return; but this will only work in broswers that support the HTML5 placeholder attribute. The plugin only adds this enhancement to the original input, if the browser doesn't support it. Requested by Attila.
* Fixed the spacer key to now accept decimal numbers `{sp:1.3}`; previously only `{sp:1}` or `{sp:.5}` would work. Additionally, a new class name for these spacers was added - `ui-keyboard-spacer` with some css to prevent Opera from increasing the line-height of the row - reported by Attila, Thanks!
* Opera should now also give the input/textarea focus when the keyboard opens. Reported by Attila.
* Main demo page will now dynamically adjust in width, except in older IE.

###Version 1.9.2

* Added "ui-keyboard-input-current" to the input that has a keyboard open - useful for highlighting the input when `usePreview` is `false`.
* Added `enterNavigation` option:
 * When true, pressing enter (shift-enter in textarea) on either the real or virtual keyboard will shift focus to the next input with a keyboard attached. I am considering changing this to the next input ( with or without a keyboard attached ).
 * When false, pressing enter do nothing in an input and shift to the next line in a textarea.
* Fixed the mouse repeat code to not repeat action keys. Fix for <a href="https://github.com/Mottie/Keyboard/issues/32">issue #32</a>.
* Fixed space bar title from the mousewheel message to the space bar message.

###Version 1.9.1

* Keyboard not closing properly... blond moment alert!
 * Apparently I forgot that the body doesn't always fill up the browser window. So on the basic demo, you have to click above the input to close the keyboard.
 * Changed "body" back to document, so ummm ignore that comment about clicking on the scroll bar not closing the keyboard anymore.

###Version 1.9

* Fixed caret positioning issues in IE9 introduced in v1.8.12:
 * IE9 caret position is now saved so if the input loses focus, the caret position is restored. Fix for [issue #24](https://github.com/Mottie/Keyboard/issues/24).
 * IE9 caret position can now be set by mouse clicking inside the input/textarea.

* Fixed an issue with restricted input causing an error when trying to add any of these special characters: []\^$.|?*+(){}

* Rewrote the code that closes the keyboard when clicking outside of the keyboard.
 * Done because of the above IE9 caret issue.
 * The overlay that was added to all IE browsers was removed, along with its css. It was originally added because if a keyboard was already visible, a new keyboard would not open when focus is given to a new input/textarea. This is no longer an issue with the new code.
 * Clicking on the scrollbar to scroll down the page will no longer close the keyboard.

* The keyboard will now stay in place when resizing the browser window. YAY!

* Added `repeatDelay` and `repeatRate` options:
 * These options work with the new mouse key repeat functionality.
 * Basically holding down a virtual keyboard key with your mouse or finger on a touch device, will now cause that key to repeat after an initial delay. Similar to what the real keyboard does while typing.
 * Adjust the `repeatDelay` to change the amount of time to pause before starting to repeat the key.
 * Adjust the `repeatRate` value to change the characters per second entered into the input area. Please note that due to the variation in javascript speeds between browsers, the maxiumum repeat rate my vary - in Firefox, it appears that there is no difference in rate with numbers above 20.
 * This enhancement was added thanks to Pascal-bach's request in [issue #32](https://github.com/Mottie/Keyboard/issues/32).

* Added css3 media queries to the keyboard.css file, so the keyboard should resize to match the available screen width.

* Added a `css` option:
 * This option contains all of the jQuery UI class names used by the plugin to allow for further customization.
 * The css option include css for the major elements ("input" and "container") and the different button states ("buttonDefault", "buttonHover", "buttonActive" and "buttonDisabled").
 * I was going to try to replace these classes to make the keyboard work with jQuery Mobile themes, but that theming system is a bit more convoluted, so I made a mobile extension instead (see below).

    ```javascript
    css : {
      input          : 'ui-widget-content ui-corner-all', // input & preview
      container      : 'ui-widget-content ui-widget ui-corner-all ui-helper-clearfix', // keyboard container
      buttonDefault  : 'ui-state-default ui-corner-all', // default state
      buttonHover    : 'ui-state-hover',  // hovered button
      buttonAction   : 'ui-state-active', // Action keys (e.g. Accept, Cancel, Tab, etc); this replaces "actionClass" option
      buttonDisabled : 'ui-state-disabled' // used when disabling the decimal button {dec} when a decimal exists in the input area
    }
    ```

* Removed the "actionClass" option in favor of the "css" option above.

* Added a jQuery Mobile extension (v1.0)
 * This extension allows jQuery Mobile themes to be applied to the keyboard.
 * Set the desired theme swatch letter in the options for the container, regular buttons, action buttons and active buttons.
 * Updated keyboard.css with mobile specific definitions - wider keys needed because of font size and "text-overflow:ellipsis" use
 * Note:
   * The new css3 media queries may not work perfectly for the jQuery Mobile themes - I don't own an iPad/iPhone/iWhatever, so please adjust and report back to me any issues.
   * The "Active Buttons" setting is limited in that if the swatch letter of the Regular buttons is greater than the swatch letter of the Active Buttons, the theme doesn't apply properly. For example, Regular button swatch B with Active Button swatch A won't work because of the way the css is set up.
   * When the jQuery Mobile Theme Roller become available, I will add it to the demo page.


  [1]: http://jsatt.blogspot.com/2010/01/on-screen-keyboard-widget-using-jquery.html
  [2]: http://plugins.jquery.com/project/virtual_keyboard
  [3]: http://snipplr.com/view/21577/virtual-keyboard-widget/
  [4]: https://github.com/Mottie/Keyboard
  [5]: http://mottie.github.com/Keyboard/
  [6]: https://github.com/Mottie/Keyboard/wiki/Home
  [7]: https://github.com/Mottie/Keyboard/wiki/FAQ
  [8]: https://github.com/Mottie/Keyboard/wiki/Setup
  [9]: https://github.com/Mottie/Keyboard/wiki/Options
  [10]: https://github.com/Mottie/Keyboard/wiki/Layout
  [11]: https://github.com/Mottie/Keyboard/wiki/Language
  [12]: https://github.com/Mottie/Keyboard/wiki/Useability
  [13]: https://github.com/Mottie/Keyboard/wiki/Actions
  [14]: https://github.com/Mottie/Keyboard/wiki/Methods
  [15]: https://github.com/Mottie/Keyboard/wiki/Theme
  [16]: https://github.com/Mottie/Keyboard/wiki/Log
  [17]: http://creativecommons.org/licenses/by-sa/3.0/
  [18]: http://www.opensource.org/licenses/mit-license.php
  [19]: http://sam.zoy.org/wtfpl/
