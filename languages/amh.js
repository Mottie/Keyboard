// Keyboard Language
// Ethiopic kezboard to support Amahric and Gǝʿǝz made by Pietro Liuzzo and Solomon Gebreyes Beyene.
// ***********************
jQuery.keyboard.language.amh = {
    language: 'ፊደል (Fidal) Amharic and Gǝʿǝz',
    display: {
        'a': '\u2714:መቀበል (Shift+Enter)', // check mark - same action as accept
        'accept': 'Accept:መቀበል (Shift+Enter)',
        'alt': 'AltGr:ተለዋጭ፡ ፊደል፡',
        'b': '\u2190:ማጥፊያ', // Left arrow (same as &larr;)
        'bksp': 'Bksp:ማጥፊያ',
        'c': '\u2716:መሠረዝ', // big X, close - same action as cancel
        'cancel': 'Cancel:መሠረዝ',
        'clear': 'C:ማፅዳት', // clear num pad
        'combo': '\u00f6:Toggle Combo Keys',
        'dec': '.:የአሀዝ፡ ቁጥር', // decimal point for num pad (optional), change '.' to ',' for European format
        'e': '\u21b5:መጀመር', // down, then left arrow - enter symbol
        'enter': 'Enter:መጀመር',
        'lock': '\u21ea Lock:አሮጌ፡ ለውጥ', // caps lock
        's': '\u21e7:መለወጥ', // thick hollow up arrow
        'shift': 'Shift:መለወጥ',
        'sign': '\u00b1:የሒሣብ፡ ምልክት፡ መቀየር', // +/- sign for num pad
        'space': '&nbsp;:ክፍት፡ቦታ',
        't': '\u21e5:መግፊያ', // right arrow to bar (used since this virtual keyboard works with one directional tabs)
        'tab': '\u21e5 Tab:መግፊያ' // \u21b9 is the true tab symbol (left & right arrows)
    },
    // Message added to the key title while hovering, if the mousewheel plugin exists
    wheelMessage: 'Use mousewheel to see other keys'
    
    // uncomment, then include changes to the comboRegex here
    
    , comboRegex: /([`\'~\^\"a-z0-9\{\}\[\]\|<>])([a-z0-9_\-\.\|`\'~\^\"!,=])/mig
    
    
    // uncomment, then include any changes to the combos option here
    
    , combos: {
        a: {
            a: '\u02be', '.': '\u1ea1', 1: "\u00e0", 2: "\u00e1", 3: "\u00e3", '=': "\u00e2", 9: "\u00e4", '-': "\u0101", ',': '\u1360'
        },
        A: {
            A: '\u02bf', '-': "\u0100", 1: "\u00c0", 2: "\u00c1", 3: "\u00c3", 9: "\u00c4", '=': "\u00c2"
        },
        e: {
            e: '\u01dd', '-': "\u0113", ',': '\u1367', 1: "\u00e8", 2: "\u00e9", 3: "\u1ebd", 9: "\u00eb", '=': "\u00ea"
        },
        E: {
            E: '\u018e', '-': "\u0112", 1: "\u00c8", 2: "\u00c9", 3: "\u1ebc", 9: "\u00cb", '=': "\u00ca"
        },
        i: {
            1: "\u00ec", 2: "\u00ed", 3: "\u0129", 9: "\u00ef", 9: "\u00f6", '=': "\u00ee"
        },
        I: {
            1: "\u00cc", 2: "\u00cd", 3: "\u0128", 9: "\u00cf", '=': "\u00ce"
        },
        o: {
            1: "\u00f2", 2: "\u00f3", 3: "\u00f5", '=': "\u00f4"
        },
        O: {
            1: "\u00d2", 2: "\u00d3", 3: "\u00d5", 9: "\u00d6", '=': "\u00d4"
        },
        u: {
            1: "\u00f9", 2: "\u00fa", 3: "\u0169", 9: "\u00fc", '=': "\u00fb"
        },
        U: {
            1: "\u00d9", 2: "\u00da", 3: "\u0168", 9: "\u00dc", '=': "\u00db"
        },
        'h': {
            a: "\u1200", u: "\u1201", i: "\u1202", A: "\u1203", E: "\u1204", e: "\u1205", o: "\u1206", '!': '\u1207', '_': '\u1e2b', '.': '\u1e25'
        },
        "l": {
            a: "\u1208", u: "\u1209", i: "\u120a", A: "\u120b", E: "\u120c", e: "\u120d", o: "\u120e", '!': '\u120F'
        },
        "H": {
            a: "\u1210", u: "\u1211", i: "\u1212", A: "\u1213", E: "\u1214", e: "\u1215", o: "\u1216", '!': '\u1217', '_': '\u1e2a'
        },
        "m": {
            a: "\u1218", u: "\u1219", i: "\u121a", A: "\u121b", E: "\u121c", e: "\u121d", o: "\u121e", '!': '\u121F'
        },
        "S": {
            a: "\u1220", u: "\u1221", i: "\u1222", A: "\u1223", E: "\u1224", e: "\u1225", o: "\u1226", '!': '\u1227', '.': '\u1e62', '|': '\u0160', 6: "\u015A"
        },
        "r": {
            a: "\u1228", u: "\u1229", i: "\u122a", A: "\u122b", E: "\u122c", e: "\u122d", o: "\u122e", '!': '\u122F'
        },
        "s": {
            a: "\u1230", u: "\u1231", i: "\u1232", A: "\u1233", E: "\u1234", e: "\u1235", o: "\u1236", '!': '\u1237', '.': '\u1e63', '|': '\u0161', 6: "\u015b"
        },
        "v": {
            a: "\u1238", u: "\u1239", i: "\u123a", A: "\u123b", E: "\u123c", e: "\u123d", o: "\u123e", '!': '\u123F'
        },
        "q": {
            a: "\u1240", u: "\u1241", i: "\u1242", A: "\u1243", E: "\u1244", e: "\u1245", o: "\u1246", '!': '\u1247'
        },
        "b": {
            a: "\u1260", u: "\u1261", i: "\u1262", A: "\u1263", E: "\u1264", e: "\u1265", o: "\u1266", '!': '\u1267', ',': '\u1363'
        },
        "B": {
            a: "\u1268", u: "\u1269", i: "\u126A", A: "\u126B", E: "\u126C", e: "\u126D", o: "\u126E", '!': '\u126F'
        },
        "t": {
            a: "\u1270", u: "\u1271", i: "\u1272", A: "\u1273", E: "\u1274", e: "\u1275", o: "\u1276", '!': '\u1277', '.': '\u1e6d'
        },
        "c": {
            a: "\u1278", u: "\u1279", i: "\u127a", A: "\u127b", E: "\u127c", e: "\u127d", o: "\u127e", '!': '\u127F', '_': '\u010d\u0323', '|': '\u010d', ',': '\u1364'
        },
        "x": {
            a: "\u1280", u: "\u1281", i: "\u1282", A: "\u1283", E: "\u1284", e: "\u1285", o: "\u1286", '!': '\u1287'
        },
        "n": {
            a: "\u1290", u: "\u1291", i: "\u1292", A: "\u1293", E: "\u1294", e: "\u1295", o: "\u1296", '!': '\u1297', 3: "\u00f1"
        },
        "N": {
            a: "\u1298", u: "\u1299", i: "\u129a", A: "\u129b", E: "\u129c", e: "\u129d", o: "\u129e", '!': '\u129F', 3: "\u00d1"
        },
        "'": {
            a: "\u12a0", u: "\u12a1", i: "\u12a2", A: "\u12a3", E: "\u12a4", e: "\u12a5", o: "\u12a6", '!': '\u12A7'
        },
        "k": {
            a: "\u12a8", u: "\u12a9", i: "\u12aa", A: "\u12ab", E: "\u12ac", e: "\u12ad", o: "\u12ae", '!': '\u12AF'
        },
        "K": {
            a: "\u12b8", u: "\u12b9", i: "\u12ba", A: "\u12bb", E: "\u12bc", e: "\u12bd", o: "\u12be"
        },
        "w": {
            a: "\u12c8", u: "\u12c9", i: "\u12ca", A: "\u12cb", E: "\u12cc", e: "\u12cd", o: "\u12ce", '!': '\u12CF', '=': "\u02b7"
        },
        "W": {
            a: "\u12d0", u: "\u12d1", i: "\u12d2", A: "\u12d3", E: "\u12d4", e: "\u12d5", o: "\u12d6"
        },
        "z": {
            a: "\u12d8", u: "\u12d9", i: "\u12da", A: "\u12db", E: "\u12dc", e: "\u12dd", o: "\u12de", '!': '\u12DF', '|': '\u017e'
        },
        "Z": {
            a: "\u12e0", u: "\u12e1", i: "\u12e2", A: "\u12e3", E: "\u12e4", e: "\u12e5", o: "\u12e6", '!': '\u12E7', '|': '\u017d'
        },
        "y": {
            a: "\u12e8", u: "\u12e9", i: "\u12ea", A: "\u12eb", E: "\u12ec", e: "\u12ed", o: "\u12ee", '!': '\u12EF', 1: "\u1ef3", 2: "\u00fd", 3: "\u1ef9", 9: "\u00ff", '=': "\u0177"
        },
        "d": {
            a: "\u12f0", u: "\u12f1", i: "\u12f2", A: "\u12f3", E: "\u12f4", e: "\u12f5", o: "\u12f6", '!': '\u12F7', '.': '\u1e0d', ',': '\u1366'
        },
        "L": {
            a: "\u12F8", u: "\u12F9", i: "\u12FA", A: "\u12FB", E: "\u12FC", e: "\u12FD", o: "\u12FE", '!': '\u12FF'
        },
        "D": {
            a: "\u1300", u: "\u1301", i: "\u1302", A: "\u1303", E: "\u1304", e: "\u1305", o: "\u1306", '!': '\u1307', '.': '\u1e0c'
        },
        "g": {
            a: "\u1308", u: "\u1309", i: "\u130a", A: "\u130b", E: "\u130c", e: "\u130d", o: "\u130e", '!': '\u130F', '|': '\u01e7'
        },
        "G": {
            a: "\u1318", u: "\u1319", i: "\u131a", A: "\u131b", E: "\u131c", e: "\u131d", o: "\u131e", '!': '\u131F', '|': '\u01e6'
        },
        "T": {
            a: "\u1320", u: "\u1321", i: "\u1322", A: "\u1323", E: "\u1324", e: "\u1325", o: "\u1326", '!': '\u1327', '.': '\u1e6c'
        },
        "C": {
            a: "\u1328", u: "\u1329", i: "\u132a", A: "\u132b", E: "\u132c", e: "\u132d", o: "\u132e", '!': '\u132F'
        },
        "p": {
            a: "\u1330", u: "\u1331", i: "\u1332", A: "\u1333", E: "\u1334", e: "\u1335", o: "\u1336", '!': '\u1337', 6: "\u1e57"
        },
        "j": {
            a: "\u1338", u: "\u1339", i: "\u133a", A: "\u133b", E: "\u133c", e: "\u133d", o: "\u133e", '!': '\u133F'
        },
        "J": {
            a: "\u1340", u: "\u1341", i: "\u1342", A: "\u1343", E: "\u1344", e: "\u1345", o: "\u1346", '!': '\u1347'
        },
        "f": {
            a: "\u1348", u: "\u1349", i: "\u134a", A: "\u134b", E: "\u134c", e: "\u134d", o: "\u134e", '!': '\u134F', ',': '\u1368'
        },
        "P": {
            a: "\u1350", u: "\u1351", i: "\u1352", A: "\u1353", E: "\u1354", e: "\u1355", o: "\u1356", '!': '\u1357', 6: "\u1E56"
        },
        "Q": {
            a: "\u1250", u: "\u1251", i: "\u1252", A: "\u1253", E: "\u1254", e: "\u1255", o: "\u1256"
        },
        "[": {
            a: "\u1248", i: "\u124a", A: "\u124b", E: "\u124c", e: "\u124d"
        },
        "]": {
            a: "\u1288", i: "\u128a", A: "\u128b", E: "\u128c", e: "\u128d"
        },
        "}": {
            a: "\u12b0", i: "\u12b2", A: "\u12b3", E: "\u12b4", e: "\u12b5"
        },
        "{": {
            a: "\u1310", i: "\u1312", A: "\u1313", E: "\u1314", e: "\u1315"
        },
        "M": {
            a: "\u1380", i: "\u1381", E: "\u1382", e: "\u1383"
        },
        "|": {
            a: "\u1384", i: "\u1385", E: "\u1386", e: "\u1387"
        },
        "<": {
            a: "\u1388", i: "\u1389", E: "\u138A", e: "\u138B"
        },
        ">": {
            a: "\u138C", i: "\u138D", E: "\u138E", e: "\u138F"
        },
        'Y': {
            1: "\u1ef2", 2: "\u00dd", 3: "\u1ef8", 9: "\u0178", '=': "\u0176"
        }
    },
    // language direction
    rtl: false
};
