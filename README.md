Originally posted by Jeremy Satterfield in his [blog](http://jsatt.blogspot.com/2010/01/on-screen-keyboard-widget-using-jquery.html), [jQuery plugins](http://plugins.jquery.com/project/virtual_keyboard) and on [Snipplr](http://snipplr.com/view/21577/virtual-keyboard-widget/). Currently maintained by [Mottie](https://github.com/Mottie/Keyboard).

## Features ([Demo](http://mottie.github.com/Keyboard/))

* An on-screen virtual keyboard embedded within the browser window which will popup when a specified entry field is focused.
* The user can then type and preview their input before Accepting or Canceling.
* Add custom keyboard layouts easily.
* Add up to four standard key sets to each layout that use the shift and alt keys (default, shift, alt and alt-shift).
* Add any number of optional modifier keys (meta keys) to add more key sets.
* Each meta key set can also include the shift, alt and alt-shift keysets.
* Position the keyboard in any location around the element, or target another element on the page (using jQuery UI position utility)
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
* jQuery UI themes are used by default, but Bootstrap themes can also be applied.
* Built in watermarking. It emulates HTML5's placeholder, if the browser doesn't support it.
* Typing extension allows you to simulate typing into the keyboard for demo purposes or to assist user input.
* Autocomplete extension will integrate this keyboard plugin with jQuery UI's autocomplete widget.
* Multiple region specific keyboard layouts included in a separate directory. This is a work in progress and slowly growing.

## Packages

* Install using [bower](https://github.com/bower/bower) via `bower install keyboard`.
* Install using [npm](https://www.npmjs.com/) via `npm install virtual-keyboard`.

## Documentation

Wiki: [Home](https://github.com/Mottie/Keyboard/wiki/Home) | [FAQ](https://github.com/Mottie/Keyboard/wiki/FAQ) | [Setup](https://github.com/Mottie/Keyboard/wiki/Setup) | [Usage](https://github.com/Mottie/Keyboard/wiki/Usage) | [Options](https://github.com/Mottie/Keyboard/wiki/Options) ( [Layout](https://github.com/Mottie/Keyboard/wiki/Layout), [Language](https://github.com/Mottie/Keyboard/wiki/Language), [Useability](https://github.com/Mottie/Keyboard/wiki/Useability), [Actions](https://github.com/Mottie/Keyboard/wiki/Actions) ) | [Methods](https://github.com/Mottie/Keyboard/wiki/Methods) | [Theme](https://github.com/Mottie/Keyboard/wiki/Theme) | [Log](https://github.com/Mottie/Keyboard/wiki/Log)

## To Do

* Waiting for requests :)
* Add more regional keyboard layouts.
* Add an input mask extension. I think I'll try to make it compatible with [this plugin](https://github.com/RobinHerbots/jquery.inputmask).
* Allow attaching a keyboard to a contenteditable element.

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
    * jQuery caret (included with source)
* Optional
    * jQuery UI Positioning Utility (optional, if you position the keyboard yourself)
    * jQuery UI CSS (can be customized) / Bootstrap CSS
    * jQuery mousewheel plugin - allows using mousewheel to scroll through other key sets
    * jQuery UI Autocomplete widget - use with jQuery keyboard autocomplete extension

## Contributing

* Install [node.js](http://nodejs.org/) - this includes `npm` (node package manager).
* Run `npm install` in the root directory.
* Run `npm install -g grunt-cli` to install the grunt command-line interface.
* Make any changes to the code.
* Unit tests will be added later.
* Run `grunt` to perform a new build in the `/dist` folder.
* Submit a pull request from a branch other than the `main`.

## Licensing

* Keyboard code: [MIT License](http://www.opensource.org/licenses/mit-license.php) for all versions.
* Caret code by C. F., Wong (Cloudgen): [MIT License](http://www.opensource.org/licenses/mit-license.php)
* Layouts files: Most are under [WTFPL](http://sam.zoy.org/wtfpl/), unless the file itself specifies otherwise.

## Change Log

Only the latest changes will be shown below, see the wiki log to view older versions.

### Version 1.25.0 (8/12/2015)

* Core
  * Don't stop repeating when touch moves within the same key.
  * Add `noFocus` option to avoid focusing the input; use with caution for old IE!
  * Ensure `lockInput` is effective when toggling.
  * Add `ignoreEsc` option to prevent escape from closing the keyboard.
  * See [pull #377](https://github.com/Mottie/Keyboard/pull/377); thanks [@isfs](https://github.com/isfs) for all the above changes!
  * Some more tweaks to the above code.
  * Add `popup` css option (in addition to `container` css option; they both add to the same element) to allow for adding theme class names more easily.
  * Adjust css to include "ui-keyboard-dark-theme" to use brighter icons.
  * Fix `&#160;` (a.k.a. `&nbsp;`) to prevent it from showing up in the space bar.
* Caret extension
  * Ensure caret is properly initialised and visible for an `alwaysOpen` keyboard.
  * Make caret visible immediately on reveal, not just when another event occurs.
  * See [pull #376](https://github.com/Mottie/Keyboard/pull/377).
* Theme
  * Add a basic white, non-library (not jQuery UI or Bootstrap) theme
  * This theme is to be used when neither jQuery UI css nor position utility is used as it positions the keyboard at the bottom of the browser windows using css.
  * See [the demo here](http://jsfiddle.net/Mottie/jsh0377k/).

### Version 1.24.1 (8/5/2015)

* Caret extension:
  * Avoid javascript errors when caret extension used without a preview window.
  * Caret is now removed when keyboard is hidden (when `userPreview` is `false`).
  * Thanks [@isfs](https://github.com/isfs); see [pull #376](https://github.com/Mottie/Keyboard/pull/376).

### Version 1.24.0 (8/2/2015)

#### Docs

* Use protocol-relative urls
* Add font-awesome to repository. Removes initial delay in page rendering.

#### Core

* Clear key now enables `{dec}` key. See [issue #370](https://github.com/Mottie/Keyboard/issues/370).
* Add processName function
  * Previously, if a `t` and `test` button were added to a layout

      ```js
      'normal' : [ 't test st\u03b1\u03b2\u03bexyz' ]
      ```

    both keys would end up with a class name of `ui-keyboard-t`, because only the first letter was used.

  * The `processName` function now includes all characters, so the class name for the `test` button would become `ui-keyboard-test`.
  * If there are any non-alphanumeric characters, the character code for each symbol would be used instead. So a `stαβξxyz` button would have a class name of `ui-keyboard-st-945-946-958xyz` (notice that there is not a `-` between the `958` and `xyz`, this is because alphanumeric characters don't get a `-` added in front.
  * Dashes are left in as-is (e.g. `test-xx` stays as `test-xx`, or `test-αβ` becomes `test-945-946`).
  * Underscores are left as-is when followed by an alphanumeric character (e.g. `test_xx` stays as `test_xx`). When followed by a non-alphanumeric character, the underscore is followed by a dash, then the decimal ascii value of the character (e.g. `test_\u03b1\u03b2` becomes `test_-945-946`).
  * The result is this processed name is added after the virtual key prefix contained in `$.keyboard.css.keyPrefix` (default is `ui-keyboard-`). So a key named "test-αβ" in the layout will have a class name of `ui-keyboard-text-945-946`.
  * The result of this function is saved to the virtual key's `data-name` attribute.
* The `data-name` attribute replaces the `name` attribute on buttons
  *  `data-name` contains the suffix of the virtual button class name (e.g. `text-945-946` from the last example)
  * Modified `showSet` function to allow passing the keyset name instead of the key element (which looked for `el.name`)
* The `lockInput` option now blocks backspace, enter, capslock and pasting from the physical keyboard.
* Mapped keys
  * Now work correctly without the mousewheel plugin. Fixes [issue #373](https://github.com/Mottie/Keyboard/issues/373).
  * The mapped character will be now be run through the processName function and used in the virtual key class name
* Add `buildKey` callback function: it allows the modification of the text of the virtual key, like add line breaks or modify the HTML.
* Add `useWheel` option:
  * Setting this option to `true` (default) allows using the mousewheel while hovering over a virtual key to show key content from other keyset layers.
  * Setting it as `false` will now limit the amount of processing that occurs while hovering over a virtual key.
* Add callback function to the `destroy` function

    ```js
    // no parameters
    $('input')data('keyboard').destroy(function(){
      alert('keyboard destroyed');
    });
    ```

* Add `layout` parameter to `customHash` function as a start to adding QUnit testing.

#### Action keys

* Add zero-width keys &amp; non-breaking space as action keys:
  * `{NBSP}` - non-breaking space.
  * `{ZWNJ}` - zero-width non-joiner.
  * `{ZWJ}`  - zero-width joiner.
  * `{LRM}`  - left-to-right mark.
  * `{RLM}`  - right-to-left mark.
* `keyaction` definitions can now be set as a string instead of a function. The following two functions are *equivalent*:

    ```js
    // new method
    $.keyboard.keyaction.kirby = '<('-'<) ^('-')^ (>'-')>';
    // original/alternative method
    $.keyboard.keyaction.kirby = function( base ) {
      base.insertText('<('-'<) ^('-')^ (>'-')>');
    }
    ```

#### Caret

* Use `$.keyboard.caret(#)` where `#` sets the start & end of the caret (no text is selected).
* Use `$.keyboard.caret('start')` or `$.keyboard.caret(0)` to move the caret to the beginning.
* Use `$.keyboard.caret('end')` (or, really any string that isn't `'start'`) to move the caret to the end.

#### Language

* Languages: Add native & English name to language value.

#### Extensions

* Update typing extension to use meta keys properly; since the `name` attribute is no longer used.
