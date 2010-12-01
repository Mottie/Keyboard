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
* Scroll through the other key sets using the mousewheel while hovering over a key to bypass the need to use alt, shift or meta keys.
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

Moved to the Wiki Pages: [Home][6] | [Setup][7] | [Options][8] ( [Layout][9], [Language][10], [Useability][11] ) | [Methods][12] | [Theme][13] | [Log][14]

**Licensing**

* [Creative Commons Attribution-Share Alike 3.0 Unported License][5]

**Change Log**

Only the latest changes will be shown below, see the log to view older versions.

Version 1.5.3

* Added optional modifier keys (meta) to add additional key sets. There is no limit on the number of meta keys you can add. Look for meta key in the customLayout section for more details.
* Changed keyset class names to include '-keyset' in them.
* Completely changed the layout format
    * When adding a custom layout, each keyset is named with all of it rows. This will make it easier to add meta key sets without defining shift and alt key sets as would be necessary in the original formatting. See the customLayout section for more details.
    * Each keyset now contains the keyboard rows instead of each row containing each keyset. See the example HTML in the Theme section above.
* Added another method to position the keyboard since the `position` property `of` works well if you target a single target. This new method requires the target to be added to the element data - in a variable named `keyboardPosition`. See the positioning section above for more details.

  [1]: http://jsatt.blogspot.com/2010/01/on-screen-keyboard-widget-using-jquery.html
  [2]: http://plugins.jquery.com/project/virtual_keyboard
  [3]: http://snipplr.com/view/21577/virtual-keyboard-widget/
  [4]: http://mottie.github.com/Keyboard/
  [5]: http://creativecommons.org/licenses/by-sa/3.0/
  [6]: https://github.com/Mottie/Keyboard/wiki/Home
  [7]: https://github.com/Mottie/Keyboard/wiki/Setup
  [8]: https://github.com/Mottie/Keyboard/wiki/Options
  [9]: https://github.com/Mottie/Keyboard/wiki/Layout
  [10]: https://github.com/Mottie/Keyboard/wiki/Language
  [11]: https://github.com/Mottie/Keyboard/wiki/Useability
  [12]: https://github.com/Mottie/Keyboard/wiki/Methods
  [13]: https://github.com/Mottie/Keyboard/wiki/Theme
  [14]: https://github.com/Mottie/Keyboard/wiki/Log