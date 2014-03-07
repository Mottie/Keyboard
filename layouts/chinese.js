/* Chinese keyboard layouts
 * contains layout: 'chinese'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/chinese.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'chinese' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */
$.keyboard.layouts['chinese'] = {
    'alt' : [
        "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
        "{tab} q w e r t y u i o p [ ] \\",
        "a s d f g h j k l ; ' {enter}",
        "{shift} z x c v b n m , . / {shift}",
        "{accept} {alt} {space} {alt} {cancel}"
    ],
    'alt-shift' : [
        "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
        "{tab} Q W E R T Y U I O P { } |",
        'A S D F G H J K L : " {enter}',
        "{shift} Z X C V B N M < > ? {shift}",
        "{accept} {alt} {space} {alt} {cancel}"
    ],

    'default' : [
        '\u20AC 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
        '{tab} \u624B \u7530 \u6C34 \u53E3 \u5EFF \u535C \u5C71 \u6208 \u4EBA \u5FC3 [ ] \\',
        '\u65E5 \u5C38 \u6728 \u706B \u571F \u7AF9 \u5341 \u5927 \u4E2D ; \' {enter}',
        '{shift} \uFF3A \u96E3 \u91D1 \u5973 \u6708 \u5F13 \u4E00 . - / {shift}',
        '{accept} {alt} {space} {alt} {cancel}'
    ],

    'shift' : [
        '~ ! @ # $ % ^ & * ) ( _ + {bksp}',
        '{tab} q w e r t y u i o p { } |',
        'a s d f g h j k l : " {enter}',
        '{shift} z x c v b n m , < > ? {shift}',
        '{accept} {alt} {space} {alt} {cancel}'
    ]
};

// Keyboard Language
// ***********************
if (typeof(language) === 'undefined') { var language = {}; };
language.chinese = {
    display : {
        'a'      : '\u2714:Accept (Shift-Enter)', // check mark - same action as accept
        'accept' : 'Accept:Accept (Shift-Enter)',
        'alt'    : 'AltGr:Alternate Graphemes',
        'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
        'bksp'   : 'Bksp:Backspace',
        'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
        'cancel' : 'Cancel:Cancel (Esc)',
        'clear'  : 'C:Clear',             // clear num pad
        'combo'  : '\u00f6:Toggle Combo Keys',
        'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
        'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
        'enter'  : 'Enter:Enter',
        'lock'   : '\u21ea Lock:Caps Lock', // caps lock
        's'      : '\u21e7:Shift',        // thick hollow up arrow
        'shift'  : 'Shift:Shift',
        'sign'   : '\u00b1:Change Sign',  // +/- sign for num pad
        'space'  : '&nbsp;:Space',
        't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
        'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
    },
    // Message added to the key title while hovering, if the mousewheel plugin exists
    wheelMessage : 'Use mousewheel to see other keys',
};

// This will replace all default language options with these language options.
// it is separated out here so the layout demo will work properly.
$.extend(true, $.keyboard.defaultOptions, language.chinese);
