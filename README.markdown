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

## Bower

Install using [bower](https://github.com/bower/bower) via `bower install keyboard`.

## Documentation

Wiki: [Home](https://github.com/Mottie/Keyboard/wiki/Home) | [FAQ](https://github.com/Mottie/Keyboard/wiki/FAQ) | [Setup](https://github.com/Mottie/Keyboard/wiki/Setup) | [Usage](https://github.com/Mottie/Keyboard/wiki/Usage) | [Options](https://github.com/Mottie/Keyboard/wiki/Options) ( [Layout](https://github.com/Mottie/Keyboard/wiki/Layout), [Language](https://github.com/Mottie/Keyboard/wiki/Language), [Useability](https://github.com/Mottie/Keyboard/wiki/Useability), [Actions](https://github.com/Mottie/Keyboard/wiki/Actions) ) | [Methods](https://github.com/Mottie/Keyboard/wiki/Methods) | [Theme](https://github.com/Mottie/Keyboard/wiki/Theme) | [Log](https://github.com/Mottie/Keyboard/wiki/Log)

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

### Version 1.18.4 (3/6/2014)

* Include minified version update...

### Version 1.18.3 (3/6/2014)

* Empty buttons class names are once again set as `ui-keyboard-empty`, instead of `ui-keyboard-`. Fixes [issue #244](https://github.com/Mottie/Keyboard/issues/244)
* Empty buttons can now include a width setting
  * The width is set using the same method as the space setting (`{empty:1.0em}` or `{empty:20px}`
  * Note that the `em` width values actually get doubled to be consistent with the spacer (see [spacers](https://github.com/Mottie/Keyboard/wiki/Layout#wiki-spacers) for more details)
* Destroy method works before keyboard is revealed. Fixes [issue #247](https://github.com/Mottie/Keyboard/issues/247).

### Version 1.18.2 (3/1/2014)

* Add `type` attribute to virtual keyboard buttons
* Scramble extension no longer ignores spacers. Fixes [issue #240](https://github.com/Mottie/Keyboard/issues/240)
* Fix initial focus - when a preview input is used, the focus is again transferred to it upon keyboard opening.
* Fix remember caret position in preview input after reveal (except in IE; not sure why)
* Caret plugin now accepts an object
* Updated all extensions to work with v1.18+
  * Previously, extensions assumed that a built keyboard would always exist in memory
  * Extensions are now reapplied when a "new" keyboard is revealed.

### Version 1.18.1 (2/19/2014)

* Custom layouts are now stored using a unique hash; this fixes the broken main demo page with lots of custom layouts.
* Attempt to fix external links on the mobile demo pages... grrrr.

### Version 1.18.0 (2/18/2014)

* Modified script so only one keyboard is built per layout
  * Only the initial keyboard for a specific layout will show any lag time while the layout is built.
  * All subsequent keyboards with the same layout will merely make a copy of the already built layout.
  * Each input will get its own copy (clone) of the keyboard in case the keyboard is set to always be open or stay open.
  * When the keyboard closes, it is destroyed. This was done to reduce the amount of memory utilized when many inputs have keyboards assigned.
  * Fixes issues [#217](https://github.com/Mottie/Keyboard/issues/217), [#238](https://github.com/Mottie/Keyboard/issues/238) and possibly [issue #92](https://github.com/Mottie/Keyboard/issues/92).
* Mobile extension (all thanks to [BrandonLWhite](https://github.com/BrandonLWhite)):
  * Resolved issue with Flash of unstyled content (FUOC) when using jQuery Mobile. Fixes [#233](https://github.com/Mottie/Keyboard/pull/233).
  * Add demo page for [jQuery Mobile v1.4](http://mottie.github.com/Keyboard/jquery-mobile-1.4.html).
  * Fix an error with numeric keys causing javascript errors
* Navigation extension:
  * Added caret navigation - it utilities the <kbd>Insert</kbd> and <kbd>Delete</kbd> keys to move the caret right and left, respectively.
  * Update demo styling
