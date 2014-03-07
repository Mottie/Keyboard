/* Hindi keyboard layouts
 * contains layout: 'hindi'
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/hindi.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'hindi' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

$.keyboard.layouts['hindi'] = {
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

    'shift' : [
        '~ \u0967 \u0968 \u0969 \u096A \u096B \u096C \u096D \u096E \u096F \u0966 \u0903 \u090B {bksp}',
        '{tab} \u0914 \u0910 \u0906 \u0908 \u090A \u092D \u0919 \u0918 \u0927 \u091D \u0922 \u099e \u091E \u0911',
        '\u0913 \u090F \u0905 \u0907 \u0909 \u092B \u0931 \u0916 \u0925 \u091B \u0920 {enter}',
        '{shift} "" \u0901 \u0923 \u0928 \u0935 \u0933 \u0936 \u0937 \u0964 \u095F {shift}',
        '{accept} {alt} {space} {alt} {cancel}'
    ],

    'default' : [
        '` \u090D \u0945 \u094D\u0930 \u0930\u094D \u091C\u094D\u091E \u0924\u094D\u0930 \u0915\u094D\u0937 \u0936\u094D\u0930 \u096F \u0966 - \u0943 {bksp}',
        '{tab} \u094C \u0948 \u093E \u0940 \u0942 \u092C \u0939 \u0917 \u0926 \u091C \u0921 \u093C \u0949 \\',
        '\u094B \u0947 \u094D \u093F \u0941 \u092A \u0930 \u0915 \u0924 \u091A \u091F {enter}',
        '{shift} \u0902 \u092E \u0928 \u0935 \u0932 \u0938 , . \u092F {shift}',
        '{accept} {alt} {space} {alt} {cancel}'
    ]
    
};

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ***********************
if (typeof(language) === 'undefined') { var language = {}; };
language.hindi = {
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
$.extend(true, $.keyboard.defaultOptions, language.hindi);
