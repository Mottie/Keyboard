Originally posted by Jeremy Satterfield in his [blog][1], [jQuery plugins][2] and on [Snipplr][3].

**Features**

* An on-screen virtual keyboard embedded within the browser window which will popup when a specified entry field is focused.
* The user can then type and preview their input before Accepting or Canceling.
* As a jQuery UI widget, this widget styling will automatically match the selected jQuery UI theme with the exception of the required CSS listed below.

**Usage**

* Page Head

        <!-- jQuery & jQueryUI + theme -->
        <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/ui-lightness/jquery-ui.css" type="text/css" rel="stylesheet" />
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js" type="text/javascript"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js" type="text/javascript"></script>

        <!-- keyboard widget css & script -->
        <link rel="stylesheet" href="css/keyboard.css" type="text/css" />
        <script src="js/jquery.keyboard.js" type="text/javascript"></script>


* CSS (from the keyboard.css file)

        /* keyboard - jQuery UI Widget */
        .ui-keyboard { padding: .3em; position: absolute; z-index: 16000; }
        .ui-keyboard-button { height: 2em; width: 2em; margin: .1em; }
        .ui-keyboard-actionkey { width: 4em; }
        .ui-keyboard-space { width: 15em; }
        .ui-keyboard-preview { width: 100%; text-align: left; }

* HTML

        <textarea id="keyboard"></textarea>

* Script (showing defaults)

        $('#keyboard').keyboard({
          layout       : 'qwerty',
          customLayout : [['{cancel}']]
        });

**Options & Details**

* `layout` - [String] specify which keyboard layout to use.

    * `qwerty` - Standard QWERTY layout (Default)
    * `alpha ` - Alphabetical layout
    * `dvorak` - Dvorak Simplified layout
    * `num` - Numerical (ten-key) layout
    * `custom` - Uses a custom layout as defined by the customLayout option

* `customLayout` - [Array] Specify a customer layout

    * An Array of arrays
    * Each internal array is a new keyboard row
    * Each internal array can contain either one or two
    * String elements (Lower case and Upper case respectively)
    * Each string element must have each character or key seperated by a space
    * Special/"Action" keys include:
          * `{space}` - Spacebar
          * `{bksp}` - Backspace
          * `{shift}` - Shift/Capslock
          * `{return}` - Return/New Line
          * `{accept}` - Updates element value and closes keyboard
          * `{cancel}` - Clears changes and closes keyboard
          * `{dec}` - Decimal for numeric entry, only allows one decimal
          * `{neg}` - Negative for numeric entry
          * `{sp:#}` - Replace # with a numerical value, adds blank space, value of 1 ~ width of one key (do not include spaces)

**Licensing**

* [Creative Commons Attribution-Share Alike 3.0 Unported License][4]

**To Do** (most of these are almost done and ready to post in the next version)

* Add International keyboard (AltGr key).
* Add Multiple language support.
* Max length setting.
* Add ARIA support.
* Other tweaks ;)

~~~

**Changelog**

Version 1.4.2 (11/26/2010)

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
  [4]: http://creativecommons.org/licenses/by-sa/3.0/

