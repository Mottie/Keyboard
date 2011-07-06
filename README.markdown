Originally posted by Jeremy Satterfield in his [blog][1], [jQuery plugins][2] and on [Snipplr][3]. Currently maintained by [Mottie][4].

###Features ([Demo][5])

* An on-screen virtual keyboard embedded within the browser window which will popup when a specified entry field is focused.
* The user can then type and preview their input before Accepting or Canceling.
* Add custom keyboard layouts easily.
* Add up to four standard key sets to each layout that use the shift and alt keys.
* Add any number of optional modifier keys (meta keys) to add more key sets.
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
    * ' + c ( becomes ç )

* Enable, disable or add more diacritic functionality as desired.
* Use callbacks and event triggers that occur when the keyboard is open or closed and when the content has changed, been accepted or canceled.
* ARIA support (may not be fully implemented)
* As jQuery UI is a dependancy, this plugin's styling will automatically match the selected jQuery UI theme with the exception of the required CSS listed below.
* Built in watermarking. It emulates HTML5's placeholder if the browser doesn't support it.
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
* *Safari*: See the QWERTY Text Area demo with a locked input. While using the virtual keyboard to type, it enters the text in backwards! I can't see anyway to fix this as you can't differentiate webkit browsers (it works fine in Chrome).
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

* Keyboard code: [Creative Commons Attribution-Share Alike 3.0 Unported License][17]
* Caret code by C. F., Wong (Cloudgen): [MIT License][18]
* Layouts files: Most are under [WTFPL][19], unless the file itself specifies otherwise.

###Change Log

Only the latest changes will be shown below, see the wiki log to view older versions.

####Version 1.8.5
* Added Russian layout - thanks to Yury Kotlyarov (https://github.com/yura).
* Added `alwaysOpen` option
  * Setting this option to `true` will keep the keyboard open at all times.
  * The keyboard will automatically open when initialized.
  * The class `ui-keyboard-always-open` will be added to the keyboard.
  * See the Layout demo page to see this option in action!
* Renamed `placeholder` class to `ui-keyboard-placeholder`.

####Version 1.8.4
* Fixed lockedInput causing errors in Firefox - fix for [issue #12](https://github.com/Mottie/Keyboard/issues/12).

####Version 1.8.3
* Replaced all the keyboard keys with `<buttons>` instead of `<input>` to allow adding of an image overlay.
* Removed all keyrow wrappers, so now every key is floating inside the keyset. This allows you to make different sized keys and position them however you want with the CSS.
* *NOTE* Changed the order of parameters in every event!
    * Sorry if this breaks any extra coding you may have added, but I did it to provide a keyboard object with every event and make everything more consistent.
    * Previously you had to use "$(el).getkeyboard()" function inside of the event function to get the keyboard object.
    * In the event callback, the order is now (event, keyboard, elem). Where "event" is the event object, "keyboard" is the keyboard object and "elem" is the input element (non jQuery).
    * The only event function that is different from the above order is the "beforeClose" event! The old order was (event, element, accepted). The new order is now as in this example:
    ```javascript
    // Binding to the "beforeClose" event - it has an extra parameter ("accepted")
    $('.ui-keyboard-input').bind('beforeClose.keyboard', function(event, keyboard, elem, accepted){
      var txt = "Virtual Keyboard for " + elem.id + " is about to close, and it's contents were ";
      txt += (accepted ? 'accepted' : 'ignored');
      txt += '. Current content = ' + elem.value;
      txt += '. Original content = ' + keyboard.originalContent;
      alert(txt);
    });
    ```
    * see the <a href="https://github.com/Mottie/Keyboard/wiki/Methods">Methods</a> wiki documents page for more details.
* Fixed an issue in Chrome where the caret would go out of view while typing on the virtual keyboard (horizontal scrolling of inputs).
* Fixed the typing extension not highlighting the tab or backspace while typing.
* Added "initialized" event which is triggered when the keyboard script has completed initialization.
* Added a basic demo page, called "basic.html". This is a minimal setup.
* Added a basic scientific calculator demo page. For demonstration only, it's not meant to replace your calculator but to show how to add more key actions, change display names and apply image overlays to the keys.
* Moved demo files into a separate directory.
* Updated all demo pages to HTML5 formatting.

####Version 1.8.2
* Fixed a problem with decimals not working in Eurpoean format when `restrictedInput` is `true`.
* Fixed code that allows adding custom action keys. It now works properly when adding a corresponding `display` option. Examples added to the [Actions][13] wiki page.

####Version 1.8.1
* Added `beforeClose` trigger and callback which is called just before the contents are accepted/canceled.
* Fixed keyboard positioning to now include `offset` options... opps!

####Version 1.8

* This version is **NOT BACKWARDS COMPATABLE!**
* Added event namespacing
    * If you used any custom binding events (i.e. keyboard 'visible', 'hidden' or content 'accepted', etc.), then just add '.keyboard' to the end of the event to make your script compatable with this version. Example:

            $('.ui-keyboard-input').bind('accepted.keyboard canceled.keyboard', function(event, elemnt){
              // event.type will contain "accepted" or "canceled" as before, event.namespace will contain "keyboard"
              var txt = $(elemnt).attr('name') + ' keyboard was closed and its content was ' + event.type;
            });
    * Namespacing was added because of the addition of multiple new keyboard layouts. Use the destroy method when switching layouts (see the layouts.html source for an example).
    * Because of the namespacing, this version now requires **a minimum of jQuery 1.4.3+**
* Added `{combo}` action toggle key. While active, typing combo keys will continue to work as before. When inactive, combo keys are ignored, but all combos will be formed once active again.
* Improved the caret positioning to now allow replacing selected text - special thanks to Derek Wickwire for the code!
* Text selection and navigation using arrow key shortcuts (shift-arrow, shift-ctrl-arrow, etc) now work as expected (except maybe in IE & Opera textareas with multiple carriage returns).
* Fixed an issue with the keyboard closing automatically when a key set doesn't exist.
* Virtual keyboards with `restrictInput` enabled (set to true) will now allow the use of delete, backspace and some navigation keys (arrows, home & end).
* Typing on the virtual keyboard should now keep the cursor in view (in a textarea). It may be a bit buggy in IE.
* Updated the typing extension (also not backwards compatable):
    * Fixed a bug introduced into the typing extension with the last update... it wouldn't change keysets properly while typing - oops!
    * It will now simulate typing on the virtual keyboard while typing on your real keyboard.
    * When the extension is enabled, pressing Shift or alt on your real keyboard will change the displayed keyset on the virtual keyboard; but when using the alt in Windows, you'll have to press it twice to return focus from the menu back into the keyboard window (see known issues above).
    * Two new options were added to the typing extension. `showTyping` and `delay`.
        * `showTyping` (default is true) will enable or disable the virtual keyboard typing simulation, but the "typeIn()" function simulation will continue to work as it did before.
        * `delay` will set the delay of the virtual keyboard highlighting that occurs while the user types on the real keyboard.
* Fixed autocomplete extension problem with arrow key navigation reseting the list. It still does it, but very rarely.
* Changed mapped keys introduced in version 1.7.7 to allow entering the actual key to change instead of the "event.which" value (which ends up being different depending on your browser - see http://unixpapa.com/js/key.html).
    * Mapped keys will allow the user to type directly from the keyboard and enter the keys seen on the virtual keyboard.
    * When defining a keyboard layout, assign the map value along with the key as follows:

            "n(a):title/tooltip \u03b5(e):lower_case_epsilon_(type_e) \u0395(E):upper_case_epsilon_(type_E)"

    * `n` is the key value (\u03b5 in the second example).
    * `(a)` is now the actual keyboard character to replace (e in the second example). So in this example, when the user presses the "a" key on the keyboard, the character "n" will be entered into the input.
    * `:title/tooltip` is the title/tooltip added to the key's title attribute and pops up when hovering over the key. All spaces must be replaced with an underscore "_". If you use spaces, the script will assume you are assigning a new key.
    * See the "Mapped keys" demo for a full example and code.
* The Decimal key (for a unique decimal) will now function properly when changing the display option for decimal from ".:Decimal" to ",:Decimal" (European notation).
* Added a layouts directory which contains the first few of many new layouts for various languages.
    * Not that many layouts are available yet... adding more as I have time.
    * To use a keyboard layout, include the file in the page header

            <script src="layouts/albanian.js" type="text/javascript"></script>

    * Then initialize the keyboard using the appropriate layout name (found inside the file).

            $('input').keyboard({ layout: 'qwertz-albanian' });
    * See the "layouts.htm" page source

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
