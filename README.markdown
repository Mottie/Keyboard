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

~~~

**Licensing**

* Keyboard code: [Creative Commons Attribution-Share Alike 3.0 Unported License][14]
* Caret code by C. F., Wong (Cloudgen): [MIT License][15]

**Change Log**

Only the latest changes will be shown below, see the log to view older versions.

Version 1.5.5

* Removed jquery-ui class "ui-helper-hidden-accessible" as the recent change now prevents the popup from showing.

Version 1.5.4

* Copied code from the jQuery Caret plugin to allow inserting text at the caret inside the preview window. It may not be perfect, but it appears to work in the latest versions of Firefox, Chrome, IE and Opera.
* Added a `maxLength` option to limit the amount of text. It is set to `false` by default which disables the limit.
* Added a way to name keys, these names are added to the key's title attribute. If a tooltip plugin is used on the page, just target '.ui-keyboard-button' and get the tooltip from the title.
    * Keys defined in the `display` option follow this format "Key Name:Key's Label". The "Key Name" is what is actually shown on the virtual keyboard, while "Key's Label" is added to the key's title attribute. The "Key's Label" can include spaces.

            display: {
              'accept' : 'Accept:Accept the Content',
              'meta1'  : '\u2666:Alternate character set',  // Diamond
              'meta2'  : '\u2665:Some other character set', // Heart
            }

    * The key names defined in the `customLayout` cannot include spaces, the script will assume you want a new key. So only in the `customLayout` follow this format "key:Key_Label" - replace all spaces with an underscore. Here is an example (view demo.js for another example - Meta):

            customLayout: {
              'default' : [
                '! @:this_is_an_at_symbol # $ % ^ & *:this_is_an_asterisk ( ) - + {bksp}'
              ]
            }

    * View demo.js source for more examples.

* Added `dec` to the `display` options for the decimal key (only allows one decimal). It wasn't previously added because the decimal key was just a period; now it can have a label! YAY!
* Added a+e and o+e ligatures to the combination keys.
* Replaced Hebrew characters from the Meta Sets Demo - it added characters from right-to-left and mixing them with left-to-right characters would just confuse people too much (as it did to me o.O)
* Changed Custom: Junk demo to include vowels and accent keys to allow visualization of inputing combo keys.


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
