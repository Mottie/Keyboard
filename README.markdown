Originally posted by Jeremy Satterfield in his [blog][1], [jQuery plugins][2] and on [Snipplr][3].

**Features** ([Demo][4])

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
* Use callbacks and event triggers that occur when the keyboard is open or closed and when the content has been accepted or canceled.
* ARIA support (may not be fully implemented)
* As a jQuery UI widget, this widget styling will automatically match the selected jQuery UI theme with the exception of the required CSS listed below.

**Documentation**

Moved to the Wiki Pages: [Home][5] | [Setup][6] | [Options][7] ( [Layout][8], [Language][9], [Useability][10] ) | [Methods][11] | [Theme][12] | [Log][13]

**To Do**

* Waiting for requests :)

**Known Problems**

* IE: In a textarea with multiple (more than three) carriage returns, repositioning the caret near the end of the content will add the following clicked keys at the end.
* Opera: When pressing the tab key while inside a textarea, all browsers but Opera add the tab to the virtual keyboard input.

~~~

**Licensing**

* Keyboard code: [Creative Commons Attribution-Share Alike 3.0 Unported License][14]
* Caret code by C. F., Wong (Cloudgen): [MIT License][15]

**Change Log**

Only the latest changes will be shown below, see the wiki log to view older versions.

Version 1.6.2

* Prevent keyboard below the accept key from opening (stopped the event propogation) - fixed issue #2.

Version 1.6.1

* Setting <code>restrictInput</code> to true now prevents showing invalid keys in the input/textarea while typing.
* Added <code>preventPaste</code>. When true, it prevents pasting content into the input/textarea by either (ctrl-v) or the right-click menu.
* Fixed issue #1 to prevent potential problems with prototype.

Version 1.6

* Numerous problems were introduced with the release of jQuery 1.5 and jQuery UI 1.8.9, so the core code no longer uses the jQuery UI widget factory, but still needs jQuery UI. There were no changes to the way this plugin is called or modified with options.
* Cleaned up code and made some parts more readable.
* Fixed IE keyboard going across the screen. Removed 100% width from the <code>.ui-keyboard-preview</code> css as the width is now set in the code.
* Fixed IE placing cursor at beginning of content when opened a second time.
* Fixed IE memory overflow error using custom events. Somehow related to jQuery 1.5.
* Fixed IE problem with clicking in another input block which did close the previous virtual keyboard, but did not initialize the keyboard in the input/keyboard that was clicked inside. Added an overlay under the keyboard, in IE only, to resolve this problem.
* Replaced custom caret code and added the Caret plugin (by C.F.,Wong) into the core. This resolved caret positioning problems in IE, except in textareas with lots of carriage returns.
* Pressing "Enter" inside of an input or pressing "Shift-Enter" inside of a textarea will now accept the content. Added label to the Accept button to indicate this shortcut is now available.
* Pressing "Tab" inside of the keyboard input/textarea will now add a tab instead of navigating to the first key in the keyboard.
* Known problems section added to readme.

  [1]: http://jsatt.blogspot.com/2010/01/on-screen-keyboard-widget-using-jquery.html
  [2]: http://plugins.jquery.com/project/virtual_keyboard
  [3]: http://snipplr.com/view/21577/virtual-keyboard-widget/
  [4]: http://mottie.github.com/Keyboard/
  [5]: https://github.com/Mottie/Keyboard/wiki/Home
  [6]: https://github.com/Mottie/Keyboard/wiki/Setup
  [7]: https://github.com/Mottie/Keyboard/wiki/Options
  [8]: https://github.com/Mottie/Keyboard/wiki/Layout
  [9]: https://github.com/Mottie/Keyboard/wiki/Language
  [10]: https://github.com/Mottie/Keyboard/wiki/Useability
  [11]: https://github.com/Mottie/Keyboard/wiki/Methods
  [12]: https://github.com/Mottie/Keyboard/wiki/Theme
  [13]: https://github.com/Mottie/Keyboard/wiki/Log
  [14]: http://creativecommons.org/licenses/by-sa/3.0/
  [15]: http://www.opensource.org/licenses/mit-license.php
