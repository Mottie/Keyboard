# Language Files

## I need your help!
The language file translations are incomplete :cry:

File names are typically named after their [ISO 639-1](http://www.loc.gov/standards/iso639-2/php/English_list.php) two letter code. If a three letter code is needed, then please feel free to include it.

Any missing language files, or language files with "untranslated" in the file name (e.g. `"mn.untranslated.js"`) indicate that no translation has been made for that language. If you are willing, your assistance would be greatly appreciated in making these translations!

## What do I need to do?

Start with the `_language_template.js` file. I'll try to break down each section to make it easier:

### Naming the file
If you don't know the language ISO 639-1 or ISO 639-2 code, [look it up here](http://www.loc.gov/standards/iso639-2/php/English_list.php). I have been using the two letter code, but if the three letter code is needed, please feel free to use it.

Now save the template file using the language code as the file name (e.g. `"ru.js"`)

Inside the template, change "all" to the language code. Then change the `language` parameter to the native name of the language plus the English name in parentheses. In this example, lets say we're working on Russian, so the result would look like this:

```js
jQuery.keyboard.language.ru = {
	language: 'Русский (Russian)',
```

### Display text

In this section, text that appears on the keyboard and in the tooltips will need to be translated. For example, if you look at the first line:

```js
'a' : '\u2714:Accept (Shift+Enter)',
```

* The `'a'` should not be modified!
  * This is the key used by the keyboard plugin to indiciate that a smaller version of the accept key is being used.
  * The full version equivalent would be `'accept'`, but really there is no difference between the two. You can make the text of the `'a'` key exactly match the `'accept'` key.
* The `\u2714` is the javascript unicode hex value for a [check mark](http://www.fileformat.info/info/unicode/char/2714/index.htm).
  * The reason the unicode is used here is because of issues of files being converted to file types other than UTF-8 will corrupt the symbols.
  * It is also acceptable to use `&#x2714` or `&#10004;` (decimal) here.
  * See the [get unicode value](#getting-a-unicode-value) section for more information.
* The colon (`:`) separates the text of the keyboard action key from the title/tooltip.
* `"Accept (Shift+Enter)"` becomes the action key title/tooltip text and is only visible when the user hovers over the key with a mouse.

### Decimal

Within the display text is the `'dec'` definition.

```js
'dec' : '.:Decimal',
```

This action key is used in the "num" (number pad) layout and will disable itself if the symbol is contained within the input/textarea content, since only one symbol is allowed.

Some languages use the comma to indicate fractional values in the number format. In this case, change the value of this display text from a period to a comma.

```js
'dec' : ',:Decimal',
```

And don't forget to modify or remove the tooltip!

### Wheel message

This message is displayed over non-action keys to indicate there are other keysets assigned to the key being hovered over, and using the mousewheel will allow the user quick access to those alternative keys. Only keys in the other keysets in the same position as the hovered key will be shown while scrolling.

```js
wheelMessage : 'Use mousewheel to see other keys'
```

Some users/developers might find this tooltip annoying, so remove it as desired.

### Combos

This may be a difficult section to deal with, so ignore it as desired.

* First off, combination (dead keys) have been included to allow typing a key that is typically found on standard US keyboards to allow easier typing in of accented or special characters.
* When the `useCombos` option is `true` (set as default), entering in `~a` (tilde + a) would result in `ã`.
* This section allows customizing this behavior.

Skipping over the `comboRegex` definition for now, look at the `combos` definitions. Here is a simplified tilde definition:

```js
'~' : { a:"\u00e3", A:"\u00c3", e:"\u1ebd", E:"\u1ebc" }
```

* The left side `'~'` defines the first key of the combination that the user will type in.
* The right side contains the second key of the combination. Notice that both lower and upper case letters have been included.
* So combining `'~'` with `'a'` will return `\u00e3` which is the javascript unicode hex value for this character: `ã`.
* Combining `'~'` with `'A'` will return `\u00c3` which becomes `Ã`, and so on.
* Add more, or remove combinations from this definition as desired.
* If using basic letters `a-z` as the second key of the combination, then no changes will be made to the `comboRegex` definition.

Now lets say you want to add the combination `|0` (vertical bar + zero) to create `'ϕ'` (it's an example, just go with it; see the [get unicode value](#getting-a-unicode-value) section on how to get a unicode value)

* A new combo will need to be added

    ```js
    '|' : { 0:"\u0ed5" }
    ```

* And the `comboRegex` will need to be updated

    ```js
    //                        **       * <- new additions
    comboRegex : /([`\'~\^\"ao\|])([a-z0])/mig
    ```

   See the next section for an explanation.

   If you don't know regex, feel free to [open an issue](https://github.com/Mottie/Keyboard/issues) and ask for assistance.


### Combo regular expression (`comboRegex`)

The default `comboxRegex` is as follows:

```js
comboRegex : /([`\'~\^\"ao])([a-z])/mig,
```

It is split into two halves by parentheses

```js
([`\'~\^\"ao]) // first character of combo
([a-z])        // second character of combo
```

In order to add a new combo, like the `|0` (vertical bar + zero) to create `'ϕ'` example, additions will be made in both halves of the regular expression

```js
([`\'~\^\"ao\|])
```

Adding `\|` to the first character because `|` has special meaning in regexp and should be escaped. I know some may argue that this particular character doesn't need to be escaped inside of square brackets, but I added it here just to be safe, and it doesn't hurt anything.

```js
([a-z0])
```

Adding `0` because it only targets letters `a-z` (case-insensitive) by default.

The resulting definition becomes:

```js
comboRegex : /([`\'~\^\"ao\|])([a-z0])/mig
```

### RTL

If the language has a right-to-left direction, then set the `rtl` setting:

```js
// language direction
rtl: true
```

This value defaults to `false`

## Getting a Unicode Value

### Can't type the character?

Use [shapecatcher.com](http://shapecatcher.com/)
* This site allows you to draw the symbol, then choose the appropriate symbol from the results.
* A unicode value is included with the results as `0xhhhh`. Change the value to `\uhhhh` or `&#xhhhh`.


### Already have the character?

To convert a character, or list of characters to its unicode value, use [Google Closure Compiler](http://closure-compiler.appspot.com/home)

* Click "Reset"
* Then paste in some valid javascript... something like this:

    ```js
    var a = 'Thìs ïs ã Têst';
    ```

* Click "Compile"
* On the right side a compressed result will appear

    ```js
    var a="Th\u00ecs \u00efs \u00e3 T\u00east";
    ```

## Template Language Definition

```js
jQuery.keyboard.language.all = {
	language: 'All (All)',
	display : {
		'a'      : '\u2714:Accept (Shift+Enter)', // check mark - same action as accept
		'accept' : 'Accept:Accept (Shift+Enter)',
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
	wheelMessage : 'Use mousewheel to see other keys'

	// uncomment, then include changes to the comboRegex here
	/*
	, comboRegex : /([`\'~\^\"ao])([a-z])/mig,
	*/

	// uncomment, then include any changes to the combos option here
	/*
	, combos : {
		// grave
		'`' : { a:"\u00e0", A:"\u00c0", e:"\u00e8", E:"\u00c8", i:"\u00ec", I:"\u00cc", o:"\u00f2", O:"\u00d2",
				u:"\u00f9", U:"\u00d9", y:"\u1ef3", Y:"\u1ef2" },
		// acute & cedilla
		"'" : { a:"\u00e1", A:"\u00c1", e:"\u00e9", E:"\u00c9", i:"\u00ed", I:"\u00cd", o:"\u00f3", O:"\u00d3",
				u:"\u00fa", U:"\u00da", y:"\u00fd", Y:"\u00dd" },
		// umlaut/trema
		'"' : { a:"\u00e4", A:"\u00c4", e:"\u00eb", E:"\u00cb", i:"\u00ef", I:"\u00cf", o:"\u00f6", O:"\u00d6",
				u:"\u00fc", U:"\u00dc", y:"\u00ff", Y:"\u0178" },
		// circumflex
		'^' : { a:"\u00e2", A:"\u00c2", e:"\u00ea", E:"\u00ca", i:"\u00ee", I:"\u00ce", o:"\u00f4", O:"\u00d4",
				u:"\u00fb", U:"\u00db", y:"\u0177", Y:"\u0176" },
		// tilde
		'~' : { a:"\u00e3", A:"\u00c3", e:"\u1ebd", E:"\u1ebc", i:"\u0129", I:"\u0128", o:"\u00f5", O:"\u00d5",
				u:"\u0169", U:"\u0168", y:"\u1ef9", Y:"\u1ef8", n:"\u00f1", N:"\u00d1" }
	}
	*/
};
```
