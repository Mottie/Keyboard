Originally posted by Jeremy Satterfield in his [blog][1], [jQuery plugins][2] and on [Snipplr][3].

**Features** ([Demo][4])

* An on-screen virtual keyboard embedded within the browser window which will popup when a specified entry field is focused.
* The user can then type and preview their input before Accepting or Canceling.
* Add custom keyboard layouts easily.
* Add up to four key sets to each layout using the shift and alt keys.
* Position the keyboard in any location around the element.
* Easily modify the key text to any language or symbol.
* Allow direct input or lock the preview window.
* Scroll through the other key sets using the mousewheel while hovering over a key to bypass the need to use alt and shift keys.
* Easily type in characters with diacritics. Here are some combination examples:

    * ' + vowel ( vowel with acute accent, e.g. ' + e = é )
    * \` + vowel ( vowel with grave accent, e.g., \` + e = è )
    * " + vowel ( vowel with diaeresis, e.g., " + e = ë )
    * ^ + vowel ( vowel with circumflex accent, e.g., ^ + e = ê )
    * ~ + certain letters ( letter with tilde, e.g. ~ + n = ñ, ~ + o = õ )
    * ' + c ( becomes ç )

* Enable, disable or add more diacritic functionality as desired.
* ARIA support (may not be fully implemented)
* As a jQuery UI widget, this widget styling will automatically match the selected jQuery UI theme with the exception of the required CSS listed below.

**Setup**

* Page Head

        <!-- jQuery & jQueryUI + theme -->
        <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/ui-lightness/jquery-ui.css" type="text/css" rel="stylesheet" />
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js" type="text/javascript"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js" type="text/javascript"></script>
        <script src="js/jquery.mousewheel.js" type="text/javascript"></script>

        <!-- keyboard widget css & script -->
        <link href="css/keyboard.css" type="text/css" rel="stylesheet" />
        <script src="js/jquery.keyboard.js" type="text/javascript"></script>

* CSS (from the keyboard.css file)

        .ui-keyboard { padding: .3em; position: absolute; left: 0; top: 0; z-index: 16000; }
        .ui-keyboard div { font-size: 1.1em; }
        .ui-keyboard-button { height: 2em; width: 2em; margin: .1em; }
        .ui-keyboard-widekey { width: 4em; }
        .ui-keyboard-space { width: 15em; }
        .ui-keyboard-preview { width: 100%; text-align: left; margin-bottom: 3px; }
        .ui-keyboard-keyset { text-align: center; }

* HTML

        <textarea id="keyboard"></textarea>

* Script (showing defaults)

        $('#keyboard').keyboard({

          // choose layout
          layout       : 'qwerty',
          customLayout : [['{cancel}']],
          position     : {
            my : 'center top',
            at : 'center top'
          },

          // change keyboard language / symbol
          display      : {
            'a'      : '\u2714', // check mark - same action as accept
            'accept' : 'Accept',
            'alt'    : 'AltGr',
            'b'      : '\u2190', // Left arrow (same as &larr;)
            'bksp'   : 'Bksp', // Left arrow (same as &larr;)
            'c'      : '\u2716', // big X, close - same action as cancel
            'cancel' : 'Cancel',
            'clear'  : 'C',      // clear num pad
            'e'      : '\u21b5', // down, then left arrow - enter symbol
            'enter'  : 'Enter',
            's'      : '\u21e7', // thick up arrow
            'shift'  : 'Shift',
            'sign'   : '\u00b1', // +/- sign for num pad
            'space'  : 'Space',
            't'      : '\u21e5', // right arrow to bar (used since this virtual keyboard works with one directional tabs)
            'tab'    : '\u21e5 Tab' // \u21b9 is the true tab symbol (left & right arrows)
          },

          // Class added to the Accept and cancel buttons (originally 'ui-state-highlight')
          actionClass : 'ui-state-active',

          // Prevents direct input in the preview window when true
          lockInput    : false,

          // When the character is added to the input
          keyBinding : 'mousedown',

          // combos (emulate dead keys : http://en.wikipedia.org/wiki/Keyboard_layout#US-International)
          // if user inputs `a the script converts it to à, ^o becomes ô, etc.
          useCombos  : true

        });

**Options & Details**

`layout` - [String] Specify which keyboard layout to use.

* 'qwerty' - Standard QWERTY layout (Default).
* 'international'` - Standard US-international QWERTY layout.
* 'alpha' - Alphabetical layout.
* 'dvorak' - Dvorak Simplified layout.
* 'num' - Numerical (ten-key) layout.
* 'custom' - Uses a custom layout as defined by the `customLayout` option.
* Default value is 'qwerty'

`customLayout` - [Array] Specify a custom layout

* An Array of arrays & each internal array is a new keyboard row.

        // two row keyboard
        [ [row1], [row2] ]

        // example: four rows; no shift/alt key sets
        [ ['r o w 1'], ['r o w 2'], ['r o w 3'], ['{accept} {cancel}'] ]

* Each internal array can contain one to four rows (default, shifted, alt and alt-shift... respectively).
* String elements (Lower case and Upper case, alt lower case and alt-upper case respectively).
* Each string element must have each character or key seperated by a space.

        // two rows; each row has four key sets. An {accept} or {check}, {shift} and {alt} key are required.
        [ [default, shifted, alt, alt-shift], [default, shifted, alt, alt-shift] ]

        // example: three rows; shift keyset rows included
        // note: the {shift} needs to be included in both the default and shifted keysets, that's why there are two
        [ ['a b c d', 'A B C D'], ['E F G H', 'E F G H'], ['{shift} {check}', '{shift} {check}'] ]

* In the list below where two special/"Action" keys are shown, both keys have the same action but different appearances.
* Special/"Action" keys include:

    * `{a}`, `{accept}` - (required) Updates element value and closes keyboard.
    * `{alt}`, `{altgr}` - (optional/required) AltGr for International keyboard which switches the key set. Required for alt keysets.
    * `{b}`, `{bksp}` - (optional) Backspace. Deletes from the end of the content (for now).
    * `{c}`, `{cancel}` - (optional) Clears changes and closes keyboard (clicking outside or hitting escape does this as well)
    * `{clear}` - (optional) Clear input window - used in num pad
    * `{dec}` - (optional) Decimal for numeric entry, only allows one decimal point in the window (meant for use in num pad)
    * `{e}`, `{enter}` - (optional) Enter/New Line. {e} is the narrow enter key.
    * `{s}`, `{shift}` - (optional/required) Shift/Capslock. Required to show shifted keysets.
    * `{sign}` - (optional) Change sign of numeric entry (positive or negative)
    * `{sp:#}` - (optional) Replace # with a numerical value, adds blank space in the keyboard. A value of 1 ~ width of one key (1em).
    * `{space}` - (optional) Spacebar
    * `{t}`, `{tab}` - (optional) Tab. {t} is the narrow tab key.

`position` [Object] Set keyboard positioning

* The script uses the jQuery UI positioning utility
* Adjust where the keyboard pops up relative to the input area.
* `my` refers to a keyboard location. `'center top'` is the keyboard point that is attached to the `at` element location.
* `at` refers to the element location (the input or textbox). `'center top'` is the element point where the keypoint point is attached.

        position     : {
          my : 'center top',
          at : 'center top'
        }

* For more information see the jQuery UI position utility [documents][7].
* The default settings are shown above.

`display` - [Object] Button language / symbol options

* Change the displayed button text by modifying the value, in the key:value pair, with the text or symbol you want to use.
* The default values are shown in the following list. The abbreviated names contain only a symbol so as to fit the layout style as desired:

    * `'a'      : '\u2714'` - Alternate accept button - unicode for check mark symbol
    * `'accept' : 'Accept'` - Accept button text
    * `'alt'    : 'AltGr'` - Alt button text (AltGr is for international key sets)
    * `'b'      : '\u2190'` - Alternate backspace button - unicode for left arrow. Same as &larr;
    * `'bksp'   : 'Bksp'` - Backspace button text
    * `'c'      : '\u2716'` - Alternate cancel button - unicode for big X
    * `'cancel' : 'Cancel` - Cancel button text
    * `'clear'  : 'C'` - Clear window content (used in num pad)
    * `'e'      : '\u21b5'` - Alternate enter button - unicode for down, then left arrow (enter symbol)
    * `'enter'  : 'Enter'` - Enter button text
    * `'s'      : '\u21e7'` - Alternate shift button - unicode for a thick up arrow
    * `'shift'  : 'Shift'` - Shift button text
    * `'sign'   : '\u00b1'` - Change sign (used in num pad) - unicode for a +- symbol
    * `'space'  : 'Space'` - Space button text
    * `'t'      : '\u21e5'` - Alternate tab button - unicode for right arrow to bar (used since only one directional tabs available)
    * `'tab'    : '\u21e5 Tab'` - Tab button text (Note: \u21b9 is the true tab symbol (left & right arrows) but not used here)

`actionClass` - [String] Class name used to make keys a different color

* This varibale contains the class that is only added to the Accept and cancel buttons to give them a different color from the normal keys.
* It was originally set to 'ui-state-highlight' which looks good in some themes, but not others.
* This class name can also be a custom one that you set up for these keys as well.
* Default is `'ui-state-active'`.

`lockInput` - [Boolean] Allow access to the preview window from outside the virtual keyboard

* When set to false, the user can type and edit in the preview window
* If true, the user will only be able to add characters to the preview window using the virtual keyboard.
* Default is `false`.

`keyBinding` - [String] Mouse event used to interact with the key

* This is the event type that the script binds to the key.
* Possible options include 'mouseup', 'mousedown' and 'click'. Using an event like 'mouseenter' may get a little messy.
* Default is `'mousedown'`.

`useCombos` [Boolean] Allows users to type in key combos to add characters with diacritics

* If true, the script will automatically convert key combinations into diacritics characters.
* If false, the script will ignore the triggering key combinations.
* This is an automatic feature on international keyboards ([dead keys][6]), so the script is only emulating the same function.

`Combos` [Object] Not listed in the above options, but you can add more if you wish

* The full set of combinations are not intended to be changed so they were not listed in the options above.
* But you can add more key combinations as desired by using this format (try it in the Custom: Junk demo)

        combos : {
          'a' : { e: 'æ' },
          'A' : { E: 'Æ' }
        }

* In the default settings the root key is a diacritic ( \`, ', ", ^, ~ ) and the script is only setup to accept these. And also the 'a' so the example above will work if you try it.
* To use different diacritics the regex in the `_checkCombos` function will need to be modified. If you don't know how to do this, then please add an issue and we will look into adding it.
* Note that even though these special characters are included in this plugin they may not be visible in all browsers. They may need to be set to the proper encoding (e.g. UTF-8, ISO-8859, etc).

**Style**

* The keyboard is set up to match the current jQuery UI theme, but it is still highly customizable with CSS.
* The basic css, shown above, has no color styling but can have styling added to override the jQuery UI theme.
* Action keys will have a class name of "ui-keyboard-{name}". So "bksp" (backspace) will have the class name of "ui-keyboard-bksp".
* All other keys will have the unicode decimal value of the first character in the class name ("ui-keyboard-#"). So the tidle character has a unicode decimal value of 126, the class name will be "ui-keyboard-126". This is the same as typing `&#126;` into the page or alt-0126 (hold down the alt key and press 0126 in the keypad).
* Key sets are named as follows: 

    * 'ui-keyboard-default'  - Default (lower case keys)
    * 'ui-keyboard-shifted'  - Shift active (upper case keys)
    * 'ui-keyboard-alted'    - Alt key set
    * 'ui-keyboard-altshift' - Alt plus shift key set

* The basic keyboard markup is as follows, using the basic QWERTY layout:

        <!-- Keyboard wrapper (QWERTY layout) -->
        <div class="ui-keyboard ui-widget-content ui-widget ui-corner-all ui-helper-clearfix ui-helper-hidden-accessible">
          <!-- preview window -->
          <div>
            <input type="text" class="qwerty ui-widget-content ui-keyboard-preview ui-corner-all">
          </div>
          <!-- first row -->
          <div class="ui-keyboard-row ui-keyboard-row0">
            <!-- default key set -->
            <div class="ui-keyboard-keyset ui-keyboard-default">
              <input type="button" class="ui-keyboard-button ui-state-default ui-corner-all ui-keyboard-96" name="key_0_0" value="`">
              <input type="button" class="ui-keyboard-button ui-state-default ui-corner-all ui-keyboard-49" name="key_0_1" value="1">
              ...
              <input type="button" class="ui-keyboard-button ui-state-default ui-corner-all ui-keyboard-61" name="key_0_12" value="=">
              <input type="button" class="ui-keyboard-button ui-state-default ui-corner-all ui-keyboard-bksp ui-keyboard-widekey ui-keyboard-actionkey" name="key_bksp" value="Bksp">
            </div>
            <!-- shifted key set -->
            <div class="ui-keyboard-keyset ui-keyboard-shifted" style="display: none;">
              <input type="button" class="ui-keyboard-button ui-state-default ui-corner-all ui-keyboard-126" name="key_0_0" value="~">
              <input type="button" class="ui-keyboard-button ui-state-default ui-corner-all ui-keyboard-33" name="key_0_1" value="!">
              ...
              <input type="button" class="ui-keyboard-button ui-state-default ui-corner-all ui-keyboard-43" name="key_0_12" value="+">
              <input type="button" class="ui-keyboard-button ui-state-default ui-corner-all ui-keyboard-bksp ui-keyboard-widekey ui-keyboard-actionkey" name="key_bksp" value="Bksp">
            </div>
          </div> <!-- end first row -->
          ...
          <!--  fifth row -->
          <div class="ui-keyboard-row ui-keyboard-row4">
            <!-- default key set -->
            <div class="ui-keyboard-keyset ui-keyboard-default">
              <input type="button" class="ui-keyboard-button ui-state-default ui-corner-all ui-keyboard-accept ui-keyboard-widekey ui-keyboard-actionkey ui-state-active" name="key_accept" value="Accept">
              <input type="button" class="ui-keyboard-button ui-state-default ui-corner-all ui-keyboard-space ui-keyboard-widekey ui-keyboard-actionkey" name="key_space" value="Space">
              <input type="button" class="ui-keyboard-button ui-state-default ui-corner-all ui-keyboard-cancel ui-keyboard-widekey ui-keyboard-actionkey ui-state-active" name="key_cancel" value="Cancel">
            </div>
            <!-- shifted key set -->
            <div class="ui-keyboard-keyset ui-keyboard-shifted" style="display: none;">
              <input type="button" class="ui-keyboard-button ui-state-default ui-corner-all ui-keyboard-accept ui-keyboard-widekey ui-keyboard-actionkey ui-state-active" name="key_accept" value="Accept">
              <input type="button" class="ui-keyboard-button ui-state-default ui-corner-all ui-keyboard-space ui-keyboard-widekey ui-keyboard-actionkey" name="key_space" value="Space">
              <input type="button" class="ui-keyboard-button ui-state-default ui-corner-all ui-keyboard-cancel ui-keyboard-widekey ui-keyboard-actionkey ui-state-active" name="key_cancel" value="Cancel">
            </div>
          </div> <!-- end fifth row -->
        </div> <!-- end wrapper -->

**Licensing**

* [Creative Commons Attribution-Share Alike 3.0 Unported License][5]

**To Do**

* Allow inserting text at the caret inside the preview window.
* Add max length setting.
* Add additional buttons to change key sets (similiar to the alt key).
* Add callbacks.
* Add _destroy function.
* Work on setting up one keyboard per layout to speed up initialization.

~~~

**Changelog**

Version 1.5 (11/28/2010) - Rob G

* Changed class of preview window from 'ui-state-active' to 'ui-widget-content' because it looks bad in some themes.
* Added 'ui-widget-content' class to the element (input or textarea).
* Added International keyboard Layout (AltGr key) and expanded the keysets up to four.
* Added more special/"action" keys:
    * Previous text only keys now have a companion symbol only key. The abbreviated names contain only a symbol so as to fit the layout style as desired.
    * Added alt key to allow accessing two additional key sets.
    * Changed name of {neg} to {sign}. This key changes the sign of the input.
    * Added tab key
* Fixed positioning utility problem I added in the last version - show the popup before positioning (duh).
* Added `position` option to allow positioning the keyboard anywhere around the input/textarea.
* Added `display` option to support multiple languages or change key symbols.
* Added `actionClass` option to allow changing the style of the accept and cancel keys.
* Added `lockInput` option to lock or unlock the ability to access the preview window.
* Added `keyBinding` option to change the keyboard key behaviour.
* Added `useCombos` to enable the dead key emulation which allows entering diacritic key combinations.
* Using the escape key now closes the keyboard.
* Added mousewheel support to allow scrolling through the other keysets while hovering over a key.
* Added ARIA support (may not be complete).

Version 1.4.2 (11/26/2010) - Rob G

* Made a copy of the code and documentation hosted at [snipplr][3] on github.
* Slightly modified the code to correct JSLint nags. All except functions in a loop and adding conditions inside for in loop - will be fixed in next version.
* Had to fix the keyboard positioning so it would work in IE properly
    * Using jQuery UI position utility was causing a bug where opening the keyboard popup more than once would move the popup down and left
    * See a demo of the problem here: http://jsfiddle.net/Mottie/EMXGF/.
* Will add you Jeremy when you get a github account :)

Version 1.4.1 (11/18/2010)

* Attach keyboard to the body tag for instances where a parent element is position relative
* Add focus method to refocus the input preview so that a cursor is visible

Version 1.4

* Update positioning to jQuery UI 1.8 position method
* Other tweaks for cleaning code

Version 1.3 (1/17/2010)

* Hide keyboard when clicking outside of keyboard
* Tweek positioning to fit better on screen if page scrolled or resized

Version 1.2 (1/15/2010)

* Align keyboard with element it is called from
* Append keyboard DOM to elements parent instead of body

Version 1.1 (10/30/2009)

* Change Preview window to clone the selected element to match the proper formatting of the element (i.e. not showing characters in password fields)
* Add Return key to insert new lines into textareas
* Change style of Accept and Cancel buttons to "ui-state-highlight" to standout
* Add ability for designer to create a custom keyboard layout

Version 1.0 (10/21/2009)

* Initial build by Jeremy Satterfield.

  [1]: http://jsatt.blogspot.com/2010/01/on-screen-keyboard-widget-using-jquery.html
  [2]: http://plugins.jquery.com/project/virtual_keyboard
  [3]: http://snipplr.com/view/21577/virtual-keyboard-widget/
  [4]: http://mottie.github.com/Keyboard/
  [5]: http://creativecommons.org/licenses/by-sa/3.0/
  [6]: http://en.wikipedia.org/wiki/Keyboard&#95;layout#US-International
  [7]: http://jqueryui.com/demos/position/

