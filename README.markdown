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

###Version 1.9.2

* Added "ui-keyboard-input-current" to the input that has a keyboard open - useful for highlighting the input when `usePreview` is `false`.
* Added `enterNavigation` option:
 * When true, pressing enter (shift-enter in textarea) on either the real or virtual keyboard will shift focus to the next input with a keyboard attached. I am considering changing this to the next input ( with or without a keyboard attached ).
 * When false, pressing enter do nothing in an input and shift to the next line in a textarea.
* Fixed the mouse repeat code to not repeat action keys. Fix for <a href="https://github.com/Mottie/Keyboard/issues/32">issue #32</a>.
* FIxed space bar title from the mousewheel message to the space bar message.

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

####Version 1.8.17
* Changed the license to a [MIT License][18].
 * Previous versions will be retroactively converted from a [Creative Commons Attribution-Share Alike 3.0 Unported License][17] to a [MIT License][18].
 * I have spoken with the original author, Jeremy Satterfield, and he has agreed to this change.
 * This licensing change applies to all of the extensions as well, which were previously dual licensed under MIT and GPLv2.
* The layout files will remain under [WTFPL][19].

####Version 1.8.16
* Added `tabNavigation` option:
  * Setting this option to `true` allows the tab key (on the real keyboard) to tab into the next input/textarea.
  * When true, this option works best when the `usePreview` option is `false`.
* Added `appendLocally` option:
  * This option was added to append the keyboard within the same container as the input it is attached to.
  * The advantage of doing this allows for setting the `tabNavigation` option to `true` and tab to the next input area. Otherwise, the keyboard is appended to the body of the page and the next tab will switch the focus to the browser location window.
  * The disadvantage of setting this option to `true` is that the keyboard width will be limited by the width of the input container. If you set this option to true on the main demo page (index.html), all keyboard widths will be limited to the width of the `.block` class which groups each demo - it's not pretty.

####Version 1.8.15
* Fixed `restrictInput` to better work with multiple length keys
 * It is now designed to remove any non-matching characters or letter groups. For example, if you clicked a key to enter "Hello" then hit the backspace, what would be left is "Hell" which doesn't match any keys, so "Hell" will also be removed.
 * One issue I noticed is with entering numbers, as mentioned in [issue #28](https://github.com/Mottie/Keyboard/issues/28). Say you enter "3131" then hit the backspace, the plugin would see "313". Well there is no lone "3", but there is a "13" and because it starts from the left side of the string, it decides to remove the "3" and you end up with "13".
* Updated Layouts demo & current layouts
 * Each language layout now includes the display options to modify the keyboard language (alt, accept, cancel, shift, etc).
 * Since I'm a silly American that isn't fluent in any other language, I've only attempted (and poorly at that) to change the Albanian display language. All other layout languages still have English as the display language, so please feel free to share any corrections.

####Version 1.8.14.2
* Added options to the Navigation extension
 * `position : [0,0]` - This sets the current highlighted key position. The array contains the row number and the key index (zero based index).
 * `toggleMode : false` - Sets the focus of the navigation keys. When true, the focus is the virtual keyboard and when false the input/textarea gets focus.
 * `toggleKey  : 112` - This sets which key is used to toggle the navigation focus. The function 1 (F1) key has an `event.which` key value of 112.
 * `focusClass : 'hasFocus'` - This sets the css class to add to the virtual keyboard to indicate that it has focus (toggleMode is true).

####Version 1.8.14.1
* Fixed the navigation extension to not include a return key to the input area unintentionally.

####Version 1.8.14
* Changed some of the data attributes for each virtual keyboard key
  * Added `data-pos` which contains the button's row and row-index - used by the navigation extension.
  * Removed the data that is now in `data-pos` from the button name attribute.
  * The name attribute now contains the action key name (e.g. Enter, Accept, etc) or the key's ascii character code (e.g. "a" has a name attribute of "97").
* Typing Extension (v1.3)
  * Updated to work when `alwaysOpen` is `true` - it never knew the keyboard was open.
* Autocomplete Extension (v1.2)
  * Updated to work when `alwaysOpen` is `true`.
* Added navigation extension (v1.0)
  * This extension allows you to navigate the virtual keyboard using the navigation keys: up, down, left, right, pageUp, pageDown, home and end.
  * The disadvantage is that now you will need to use the mouse to position the caret inside of the input or textarea.
  * Pressing enter will trigger the key - same as mouse clicking on it.

####Version 1.8.13
* Updates for changes brought up in [issue #20](https://github.com/Mottie/Keyboard/issues/20):
  * Fixed the ability to switch to the base meta keyset if the meta set doesn't have a shift or alt key. Previously, it would just ignore the keyset change.
  * When the `stickyShift` is `false`, switching to any meta key set will now release the shift key.
  * Thanks for the suggestions Pascal-bach!

####Version 1.8.12
* Updated the caret script
 * It will now differentiate IE9 from older versions, as IE9 behaves like the other modern browsers.
 * There are still problems with Opera, IE7 and IE8 in textareas with multiple carriage returns; but it's a little bit easier to deal with.
 * Safari still does not return the correct caret position in the [QWERTY Text Area](http://mottie.github.com/Keyboard/) demo with locked input (readonly is applied to the textarea). So any entered text will always be positioned at the start of the text area. I'll try to figure out a work around for this.
* Ctrl (or Command) Y and Z are now allowed keys to enable use of the redo and undo keyboard shortcuts.

####Version 1.8.11
* Added `{lock}` action toggle key.
 * This key will act like a caps lock key, but as described in the last update, its status does not always match the actual caps lock key
 * This behaviour could be very confusing to users, so I decided not to include the caps lock key in any of the default keyboards. But it is available.
 * When active, the shift key set will be visible until the caps lock or shift key is pressed.
* Added `stickyShift` option
 * This option only applies to the virtual keyboard keys (mouse clicks), the actual keyboard overrides this option.
 * When true, the shift key will behave as it always has - it will toggle the shift key set until pressed again.
 * If false, the shift key set will remain active until after the next key is clicked on.
* Removed some uncommon default diacritics & ligatures
 * they can easily be added back using the [`combos` option](https://github.com/Mottie/Keyboard/wiki/Useability) - the regex wasn't changed
 * ' + c = ç, ' + C = Ç
 * ~ + n = ñ, ~ + N = Ñ
 * a + e = æ, A + E = Æ
 * o + e = œ, O + E = Œ

####Version 1.8.10
* Added caps lock key functionality
 * No caps lock key was added to the keyboard. The existing shift key should show the status of the caps lock (inconsistently).
 * There is no reliable method to detect the state of the caps lock key, except while typing the normal alphabet.
 * The displayed key set will properly update when the user starts typing.
 * Pressing the shift key on the keyboard will override the key set shown; but if the caps lock is enabled, the shift state will correct itself when typing is resumed.
 * Using a mouse still functions as before - clicking the shift key toggles its state.

####Version 1.8.9
* Added shift, alt and shift-alt keysets to meta keysets.
 * When adding these keysets to the layout, use `meta#`, `meta#-shift`, `meta#-alt` and `meta#-alt-shift`.
 * Enhancement request from [pascal-bach](https://github.com/pascal-bach) in [issue #17](https://github.com/Mottie/Keyboard/issues/17), thanks for the suggestion!
 * Updated the [Custom: Meta Sets](http://mottie.github.com/Keyboard/) demo to reflect these enhancements. 

####Version 1.8.8
* Fixed a bug where multiple "alwaysOpen" keyboards would not switch focus.

####Version 1.8.7
* Fixed a bug that expanded the keyboard/moved it each time it is opened - one pixel at a time.

####Version 1.8.6a
* Added a Danish keyboard layout, thanks to Torben Junker Kjær!
* Changed the name of the Scandinavian keyboard layout to Swedish. Also thanks to Torben.

####Version 1.8.6
* Added `ui-keyboard-has-focus`
 * This class is added to the keyboard when it opens
 * If the keyboard has `alwaysOpen` set to `true`, the currently focused keyboard will have this class applied.
 * In the base css, the z-index of this class is slightly bigger than the open keyboard.

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

    ```javascript
$('.ui-keyboard-input').bind('accepted.keyboard canceled.keyboard', function(event, elemnt){
  // event.type will contain "accepted" or "canceled" as before, event.namespace will contain "keyboard"
  var txt = $(elemnt).attr('name') + ' keyboard was closed and its content was ' + event.type;
});
```

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
