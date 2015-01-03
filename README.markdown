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

### Version 1.19.3 (1/3/2015)

* Core: correct problem with typed characters (introduced in 1.19.2). Fixes [issue #324](https://github.com/Mottie/Keyboard/issues/324).
* Typing extension: Fix issue with callback being called repeatedly.

### Version 1.19.2 (12/26/2014)

* Core
  * Update keyboard languages before building.
  * Reset active keysets when switching layouts.
  * Restore contents of preview when swapping layouts.
  * Fix clicking on mousewheel altered keys; empty keys are now ignored.
* Layouts
  * Fix mislabeled languages.
  * Make corrections to Hindi layout. See [issue #323](https://github.com/Mottie/Keyboard/issues/323).
  * Add Persian (Farsi) layout. Thanks to Majid R via email.
  * Add layouts generated & modified from the [greywyvern virtual keyboard](http://www.greywyvern.com/code/javascript/keyboard).

### Version 1.19.1 (11/20/2014)

* Num layout now uses `{dec}` instead of a decimal point. Fixes [issue #318](https://github.com/Mottie/Keyboard/issues/318).
* Save original settings, so scramble extension works properly. Fixes [issue #276](https://github.com/Mottie/Keyboard/issues/276).

### Version 1.19.0 (11/19/2014)

* Core
  * Check for jQuery UI before checking for the position utility. Fixes [issue #263](https://github.com/Mottie/Keyboard/issues/263).
  * Add `maxInsert` option; when `true` it allows inserting characters at the caret when the max length is set. Fixes [issue #289](https://github.com/Mottie/Keyboard/issues/289).
  * Fix tab navigation when `openOn` option is empty. Fixes [issue #275](https://github.com/Mottie/Keyboard/issues/275).
  * Allow inline renaming of action keys; it works the same as the other non-action keys
  * Remove mousewheel scrolling through keyset text for action keys
  * Build will now ignore layout keys `name`, `lang` and `rtl`.
  * Add `restricted` callback function. Fixes [issue #305](https://github.com/Mottie/Keyboard/issues/305).
  * Add `reposition` option to automatically reposition the keyboard on window resize.
  * Modified `reposition` option to ignore repositioning when the keyboard is not attached to the page 'body'. See [pull request #317](https://github.com/Mottie/Keyboard/pull/317). Thanks [eugenius](https://github.com/eugenius)!
  * The `change` callback no longer keeps the last keyboard open. Fixes [issue #311](https://github.com/Mottie/Keyboard/issues/311) and [issue #308](https://github.com/Mottie/Keyboard/issues/308).
  * Ensure preview variable is updated & keyboard is positioned properly when `usePreview` is `false`.
  * Switching inputs (tab/enter navigation) now ignores disabled elements.
  * Page no longer scrolls in Firefox upon initialization. Fixes [issue #213](https://github.com/Mottie/Keyboard/issues/213).
  * Fix initial positioning when `usePreview` is `false`.

* Caret
  * Fix js error when using email/number inputs. Fixes [issue #309](https://github.com/Mottie/Keyboard/issues/309).
  * Caret detect `selectionStart` in Firefox using alternate method. Fixes [issue #311](https://github.com/Mottie/Keyboard/issues/311).
  * Caret position can again be set to zero. Fixes [issue #315](https://github.com/Mottie/Keyboard/issues/315).

* Demo
  * Fix Colemak demo; contenteditable not yet supported.
  * Changed International demo to use a Bootstrap theme.
  * Changed syntax highlighting script to prettify.

* Layouts
  * Updated all layouts to include an internal language definition.
  * The language used in virtual keyboard keys now automatically switches to the layout set language; this can be overridden by the core `language` setting.
  * Updated Russian layout. Thanks to James Newton via email.
  * Add Serbian layout. Thanks to James Newton via email.
  * Add an example template file (`_template.js`) for use as a starting template to add more language layouts.

* Extensions
  * Autocomplete extension: now works with jQuery v2.1+. Fixes [issue #291](https://github.com/Mottie/Keyboard/issues/291).
  * Typing extension: add `lockTypeIn` option & fix javascript error while user types.
  * Scramble extension: Keyboard no longer disappears when scramble initializes more than once. Fixes [issue #283](https://github.com/Mottie/Keyboard/issues/283).
