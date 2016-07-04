/* Amharic keyboard layouts (Ethiopian)
 * contains layout: 'amharic-1' 
 *
 * Contributor   Michael Messele
 * To use:
 *  Point to this js file into your page header: <script src="layouts/amharic.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('.amh').keyboard({ layout: 'amharic-1' }).addTyping();
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

$.keyboard.layouts['amharic-1'] = {
	'default' : [
		"{u} {i} {ā} {ĕ} {ē} {o} {bksp}",
		"0 1 2 3 4 5 6 7 8 9",
		"\u1200 \u1208 \u1210 \u1218 \u1220 \u1228 \u1230 \u1238 \u1240 \u1260 \u1270 \u1278", //ሀለሐመሠረሰሸቀበተቸ
		"\u1280 \u1290 \u1298 \u12A0 \u12A8 \u12B8 \u12C8 \u12D0 \u12D8 \u12E0 \u12E8 \u12F0", //ኀነኘአከኸወዐዘዠየደ
		"\u1300 \u1308 \u1320 \u1328 \u1330 \u1338 \u1340 \u1348 \u1350 \u1268 {shift}", //ጀገጠጨጰጸፀፈፐቨ
		"{cancel} {space} {accept}"
	],
	'shift' : [
		'- ! " _ $ % & / ( ) = ? \u0300 {bksp}',
		"\u1217 \u120F \u121F \u122F \u1237 \u123F \u124B \u1267 \u1277 \u127F \u128B \u1297 \u129F", //ሗሏሟሯሷሿቋቧቷቿኋኗኟ
		"\u12B3 \u12B0 \u12B2 \u12B4 \u12B5 \u12E7 \u12F7 \u1327 \u132F \u1337 \u133F \u134F \u1357", //ኳኰኲኴኵዧዷጧጯጷጿፏፗ
		"{cancel} {space} {sh} {accept}"
	]
};

$.keyboard.comboRegex = /([`\'~\^\"a-z\u1200-\u137C])([iouāĕē])/mig;

// Keyboard Language
// please update this section to match this language and email me with corrections!
// ***********************
if (typeof(language) === 'undefined') { var language = {}; };
language.amharic = {
	display : {
		'a'      : '\u2714:Accept (Shift-Enter)', // check mark - same action as accept
		'ā'      : '\u122B\u1265\u12D5 [\u12A3]:\u122B\u1265\u12D5', //ራብዕ
		'accept' : '\u1270\u1240\u1263\u12ED:Accept (Shift-Enter)', //ተቀባይ
		'alt'    : 'AltGr:Alternate Graphemes',
		'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
		'bksp'   : '\u121B\u1325\u134A\u12EB:Backspace', //ማጥፊያ
		'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
		'cancel' : '\u1230\u122B\u12E5:Cancel (Esc)', //ሰራዥ
		'clear'  : 'C:Clear',             // clear num pad
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
		'ĕ'      : '\u1213\u121D\u1235 [\u12A4]:\u1213\u121D\u1235', //ሓምስ
		'ē'      : '\u1233\u12F5\u1235 [\u12A5]:\u1233\u12F5\u1235', //ሳድስ
		'enter'  : 'Enter:Enter',
		'i'      : '\u1233\u120D\u1235 [\u12A2]:\u1233\u120D\u1235', //ሳልስ
		'ሀ'    : 'ሀ:ሀሀሀ', //ሀ
		'lock'   : '\u21ea Lock:Caps Lock', // caps lock
		'o'      : '\u1233\u1265\u12A5 [\u12A6]:\u1233\u1265\u12A5', //ሳብእ
		's'      : '\u21e7:Shift',        // thick hollow up arrow
		'shift'  : '\u1217\u120F\u121F ..:Shift', //ሗሏሟ
		'sh'  	 : '\u1200\u1201\u1202 ..:Shift', //ሀሁሂ
		'sign'   : '\u00b1:Change Sign',  // +/- sign for num pad
		'space'  : '&nbsp;:Space',
		't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tab',       // \u21b9 is the true tab symbol (left & right arrows)
		'u'      : '\u12AB\u12A5\u1265 [\u12A1]:\u12AB\u12A5\u1265' //ካእብ
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Use mousewheel to see other keys',
	
	autoAccept   : true,
	
	combos : {
		'/' : { d:"\u0111", D:"\u0110", l:"\u0142", L:"\u0141" }, // stroke d Рl L
		'\u1200' : { u: '\u1201', i: '\u1202', ā: '\u1203', ĕ: '\u1204', ē: '\u1205', o: '\u1206' }, //ሀሁሂሃሄህሆ
		'\u1208' : { u: '\u1209', i: '\u120A', ā: '\u120B', ĕ: '\u120C', ē: '\u120D', o: '\u120E' }, //ለሉሊላሌልሎ
		'\u1210' : { u: '\u1211', i: '\u1212', ā: '\u1213', ĕ: '\u1214', ē: '\u1215', o: '\u1216' }, //ሐሑሒሓሔሕሖ
		'\u1218' : { u: '\u1219', i: '\u121A', ā: '\u121B', ĕ: '\u121C', ē: '\u121D', o: '\u121E' }, //መሙሚማሜምሞ
		'\u1220' : { u: '\u1221', i: '\u1222', ā: '\u1223', ĕ: '\u1224', ē: '\u1225', o: '\u1226' }, //ሠሡሢሣሤሥሦ
		'\u1228' : { u: '\u1229', i: '\u122A', ā: '\u122B', ĕ: '\u122C', ē: '\u122D', o: '\u122E' }, //ረሩሪራሬርሮ
		'\u1230' : { u: '\u1231', i: '\u1232', ā: '\u1233', ĕ: '\u1234', ē: '\u1235', o: '\u1236' }, //ሰሱሲሳሴስሶ 
		'\u1238' : { u: '\u1239', i: '\u123A', ā: '\u123B', ĕ: '\u123C', ē: '\u123D', o: '\u123E' }, //ሸሹሺሻሼሽሾ
		'\u1240' : { u: '\u1241', i: '\u1242', ā: '\u1243', ĕ: '\u1244', ē: '\u1245', o: '\u1246' }, //ቀቁቂቃቄቅቆ
		'\u1260' : { u: '\u1261', i: '\u1262', ā: '\u1263', ĕ: '\u1264', ē: '\u1265', o: '\u1266' }, //በቡቢባቤብቦ 
		'\u1268' : { u: '\u1269', i: '\u126A', ā: '\u126B', ĕ: '\u126C', ē: '\u126D', o: '\u126E' }, //ቨቩቪቫቬቭቮ 
		'\u1270' : { u: '\u1271', i: '\u1272', ā: '\u1273', ĕ: '\u1274', ē: '\u1275', o: '\u1276' }, //ተቱቲታቴትቶ
		'\u1278' : { u: '\u1279', i: '\u127A', ā: '\u127B', ĕ: '\u127C', ē: '\u127D', o: '\u127E' }, //ቸቹቺቻቼችቾ 
		'\u1280' : { u: '\u1281', i: '\u1282', ā: '\u1283', ĕ: '\u1284', ē: '\u1285', o: '\u1286' }, //ኀኁኂኃኄኅኆ
		'\u1290' : { u: '\u1291', i: '\u1292', ā: '\u1293', ĕ: '\u1294', ē: '\u1295', o: '\u1296' }, //ነኑኒናኔንኖ 
		'\u1298' : { u: '\u1299', i: '\u129A', ā: '\u129B', ĕ: '\u129C', ē: '\u129D', o: '\u129E' }, //ኘኙኚኛኜኝኞ
		'\u12A0' : { u: '\u12A1', i: '\u12A2', ā: '\u12A3', ĕ: '\u12A4', ē: '\u12A5', o: '\u12A6' }, //አኡኢኣኤእኦ 
		'\u12A8' : { u: '\u12A9', i: '\u12AA', ā: '\u12AB', ĕ: '\u12AC', ē: '\u12AD', o: '\u12AE' }, //ከኩኪካኬክኮ 
		'\u12B8' : { u: '\u12B9', i: '\u12BA', ā: '\u12BB', ĕ: '\u12BC', ē: '\u12BD', o: '\u12BE' }, //ኸኹኺኻኼኽኾ
		'\u12C8' : { u: '\u12C9', i: '\u12CA', ā: '\u12CB', ĕ: '\u12CC', ē: '\u12CD', o: '\u12CE' }, //ወውዊዋዌውዎ
		'\u12D0' : { u: '\u12D1', i: '\u12D2', ā: '\u12D3', ĕ: '\u12D4', ē: '\u12D5', o: '\u12D6' }, //ዐዑዒዓዔዕዖ
		'\u12D8' : { u: '\u12D9', i: '\u12DA', ā: '\u12DB', ĕ: '\u12DC', ē: '\u12DD', o: '\u12DE' }, //ዘዙዚዛዜዝዞ
		'\u12E0' : { u: '\u12E1', i: '\u12E2', ā: '\u12E3', ĕ: '\u12E4', ē: '\u12E5', o: '\u12E6' }, //ዠዡዢዣዤዥዦ
		'\u12E8' : { u: '\u12E9', i: '\u12EA', ā: '\u12EB', ĕ: '\u12EC', ē: '\u12ED', o: '\u12EE' }, //የዩዪያዬይዮ
		'\u12F0' : { u: '\u12F1', i: '\u12F2', ā: '\u12F3', ĕ: '\u12F4', ē: '\u12F5', o: '\u12F6' }, //ደዱዲዳዴድዶ
		'\u1300' : { u: '\u1301', i: '\u1302', ā: '\u1303', ĕ: '\u1304', ē: '\u1305', o: '\u1306' }, //ጀጁጂጃጄጅጆ 
		'\u1308' : { u: '\u1309', i: '\u130A', ā: '\u130B', ĕ: '\u130C', ē: '\u130D', o: '\u130E' }, //ገጉጊጋጌግጎ 
		'\u1320' : { u: '\u1321', i: '\u1322', ā: '\u1323', ĕ: '\u1324', ē: '\u1325', o: '\u1326' }, //ጠጡጢጣጤጥጦ
		'\u1328' : { u: '\u1329', i: '\u132A', ā: '\u132B', ĕ: '\u132C', ē: '\u132D', o: '\u132E' }, //ጨጩጪጫጬጭጮ
		'\u1330' : { u: '\u1331', i: '\u1332', ā: '\u1333', ĕ: '\u1334', ē: '\u1335', o: '\u1336' }, //ጰጱጲጳጴጵጶ
		'\u1338' : { u: '\u1339', i: '\u133A', ā: '\u133B', ĕ: '\u133C', ē: '\u133D', o: '\u133E' }, //ጸጹጺጻጼጽጾ
		'\u1340' : { u: '\u1341', i: '\u1342', ā: '\u1343', ĕ: '\u1344', ē: '\u1345', o: '\u1346' }, //ፀፁፂፃፄፅፆ
		'\u1348' : { u: '\u1349', i: '\u134A', ā: '\u134B', ĕ: '\u134C', ē: '\u134D', o: '\u134E' }, //ፈፉፊፋፌፍፎ 
		'\u1350' : { u: '\u1351', i: '\u1352', ā: '\u1353', ĕ: '\u1354', ē: '\u1355', o: '\u1356' } //ፐፑፒፓፔፕፖ
	},
};

// This will replace all default language options with these language options.
// it is separated out here so the layout demo will work properly.
$.extend(true, $.keyboard.defaultOptions, language.amharic);

// Override default actions 
$.keyboard.keyaction = {
	u : function(base){
		base.insertText('u'); //ካእብ
	},
	i : function(base){
		base.insertText('i'); //ሳልስ
	},
	ā : function(base){
		base.insertText('ā'); //ራብእ
	},
	ĕ : function(base){
		base.insertText('ĕ'); //ሀምስ
	},
	ē : function(base){
		base.insertText('ē'); //ሳድስ
	},
	o : function(base){
		base.insertText('o'); //ሳብእ
	},
	sh : function(base,el){
		base.lastKeyset[0] = base.shiftActive = !base.shiftActive;
		base.showKeySet(el);
	},
	shift : function(base,el){
		base.lastKeyset[0] = base.shiftActive = !base.shiftActive;
		base.showKeySet(el);
	},
	space : function(base){
		base.insertText(' ');
	},
	cancel : function(base){
		base.close();
		return false; // return false prevents further processing
	},
	accept : function(base){
		base.close(true); // same as base.accept();
		return false;     // return false prevents further processing
	}
};

