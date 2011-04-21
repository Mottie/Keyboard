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

Moved to the Wiki Pages: [Home][6] | [FAQ][7] | [Setup][8] | [Options][9] ( [Layout][10], [Language][11], [Useability][12] ) | [Methods][13] | [Theme][14] | [Log][15]

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

* Keyboard code: [Creative Commons Attribution-Share Alike 3.0 Unported License][16]
* Caret code by C. F., Wong (Cloudgen): [MIT License][17]
* Layouts files: Most are under [WTFPL][18], unless the file itself specifies otherwise.

###Change Log

Only the latest changes will be shown below, see the wiki log to view older versions.

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

####Version 1.7.7

* Added `usePreview` option
    * When true will add a preview window above the virtual keyboard (same as in previous versions).
    * If set to false, the actual input/textarea will be used.
    * Added `at2` option to the `position` option which is used when this option is false to position the keyboard so it doesn't cover up the input.
    * Added `.ui-keyboard-overlay-input` css class which is only used in IE and when this option is false. This is to keep the input above the overlay.

* Added mapped keys
    * Mapped keys will allow the user to type directly from the keyboard and enter the keys seen on the keyboard.
    * When defining a keyboard layout, assign the map value along with the key as follows:

            "k(m):title/tooltip \u03b5(69):lower_case_epsilon_(type_e) \u0395(69s):upper_case_epsilon_(type_E)"

    * `k` is the key value (\u03b5 in the example).
    * `(m)` is the keyboard character code (69 from event.which value for "e" on the keyboard). 
    * `(ms)` is needed for shifted keys because the mapped numbers need to be unique. So shifted keysets must have a character code followed by an "s" (for shift).
    * `:title/tooltip` is the title/tooltip added to the key's title attribute and pops up when hovering over the key.
    * At this time, this functionality is limited to the default and shifted key sets. If alt or meta key sets are added, these keysets will be ignored; but only when direct typing on the keyboard (the virtual keyboard will still work as usual).
    * See the "Mapped keys" demo for a full example and code.

####Version 1.7.6

* Pressing the tab or enter key inside of an input will now be ignored. Previously it added a "\t" or "\r\n" respectively which sometimes appeared to be adding a space.
* Made keyactions into a public method to make it easier to modify. For example, to make the enter key inside an input to automattically submit the form, do something like this:

        $.keyboard.keyaction.enter = function(base){
          if (base.el.tagName === "input") {
            base.accept();      // accept the content
            $('form').submit(); // submit form on enter
          } else {
            base.insertText('\r\n'); // textarea
          }
        };

* Updated the typing keyboard extension to work properly with the public keyactions
* The "change" event now provides the event object from the change. To use it, bind to the keyboard change event as follows:

        $('.ui-keyboard-input').bind('change.keyboard', function(event, elemnt, keyEvent){
          var txt = event.type + ' event triggered on ' + $(elemnt).attr('name') +
           '; key code = ' + (keyEvent.which !== 1 ? keyEvent.which : keyEvent.text); 
          console.debug(txt);
        });

 * When using the virtual keyboard, keyEvent.text contains the actual text (keyEvent.which == 1).
 * When typing on a real keyboard, keyEvent.text doesn't exist and keyEvent.which contains the key code.
 * Maybe there is a better method for this.

####Version 1.7.5

* Keyboards in IE should no longer continue to expand with each opening of the keyboard - Fix for issue #6. 

####Version 1.7.4

* Fixed issue #4, no more inifintie loop in IE. Thanks pgambling!

####Version 1.7.3

* Fixed a bug introduced with the watermark/placeholder script that clears out existing values.

####Version 1.7.2

* Fixed a problem with tabbing into an input. When the keyboard opened, the tab would be added (when the keyup event fired) into the keyboard preview area. It will still do it if you keep holding down the tab key because of the auto-repeat. Opera still doesn't add a tab to the area, but instead continues to cycle through the keyboard keys - already a known issue =(.
* Changed some more code around to make JSLint happy, it sure is grouchy around this time of month.

####Version 1.7.1

* Password type inputs will now have virtual keyboards with no key hover effects. Hopefully this will increase password security.
* Some code rearrangment.

####Version 1.7

* Added <code>autoAccept</code> option which, if true, will automatically accept the preview window content when clicking outside the keyboard popup. 
* Added <code>change</code> callback/event which fires when the input has been changed (key clicked or manually added to the keyboard window).
* Added input watermarks. Use HTML5 placeholder attribute, the script will emulate it if the browser doesn't support it.
* Changed accepting content in input boxes from pressing enter to shift-enter (now the same as the textareas). This was changed to allow selecting items in the autocomplete popup when using the extension.
* Rearranged code to allow limited chaining of functions and opening a virtual keyboard externally - the function is named <code>reveal</code>. See example below.
* Renamed "acceptClose" function to <code>accept</code>. This function will accept the content and close the keyboard.
* Renamed "kbHide" function to <code>close</code>. This function will close the keyboard and ignore the contents.
* Made some functions chainable to allow the following code:

        // $('#example').getkeyboard() returns keyboard data object, same as $('#example').data('keyboard')
        var example = $('#example').getkeyboard();
        example
         .reveal()                   // opens the virtual keyboard (chainable)
         .insertText('Hello World'); // instantly enters "Hello World" into the input area 
        // do something else here
        // when done you can 
        example.accept();            // accepts the content & closes the keyboard

* Added an extension which will simulate typing on the keyboard for tutorials, etc. Please read the documentation for more details.
    * Setup:

            // all keyboards
            $('.ui-keyboard-input')
             .keyboard(options)
             .typing();

            // or if targeting a specific keyboard
            $('#keyboard1')
            .keyboard(options)
            .typing();

    * Basic Usage:

            // get keyboard object, open it, then start typing simulation
            $('#keyboard-input').getkeyboard()
             .reveal()
             .typeIn('Hello World', 700); // types in the text with a 700ms delay between letters. No callback included.

            // get keyboard object, open it, type in "This is a test" with 700ms delay between types, then the callback function will accept & close the keyboard.
            var kb = $('#keyboard-input').getkeyboard();
            kb
             .reveal()
             .typeIn('This is a test', 500, function(){ kb.accept(); }); // types in the text with a 500ms delay, then accepts the content when done.

* Added an extension which integrates the keyboard with jQuery UI's autocomplete widget. Please read the documentation for more details.
    * Setup:

            // target a specific keyboard, or use $('.ui-keyboard-input') to target all
            $('#keyboard1')
             .keyboard(options)     // keyboard plugin
             .autocomplete(options) // jQuery UI autocomplete
             .addAutoComplete();    // keyboard autocomplete extension, there are no options


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
  [13]: https://github.com/Mottie/Keyboard/wiki/Methods
  [14]: https://github.com/Mottie/Keyboard/wiki/Theme
  [15]: https://github.com/Mottie/Keyboard/wiki/Log
  [16]: http://creativecommons.org/licenses/by-sa/3.0/
  [17]: http://www.opensource.org/licenses/mit-license.php
  [18]: http://sam.zoy.org/wtfpl/
