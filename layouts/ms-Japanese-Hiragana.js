/* Japanese Hiragana Keyboard Layout
* from http://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdJapan.html
*/
jQuery.keyboard.layouts["ms-Japanese Hiragana"] = {
	"name" : "ms-Japanese Hiragana",
	"lang" : ["ja"],

	// Hiragana
	"normal" : [
		"\u308d:Ro \u306c:Nu \u3075:Hu \u3042:A \u3046:U \u3048:E \u304a:O \u3084:Ya \u3086:Yu \u3088:Yo \u308f:Wa \u307b:Ho \u3078:He {bksp}",
		"{tab} \u305f:Ta \u3066:Te \u3044:I \u3059:Su \u304b:Ka \u3093:N \u306a:Na \u306b:Ni \u3089:Ra \u305b:Se \u309b \u309c \u3080:Mu",
		"\u3061:Ti \u3068:To \u3057:Si \u306f:Ha \u304D:Ki \u304f:Ku \u307e:Ma \u306e:No \u308a:Ri \u308c:Re \u3051:Ke {enter}",
		"{shift} \u3064:Tu \u3055:Sa \u305d:So \u3072:Hi \u3053:Ko \u307f:Mi \u3082:Mo \u306d:Ne \u308b:Ru \u3081:Me {shift}",
		"{accept} {space} {meta3} {meta1:Kana} {cancel}"
	],
	"shift" : [
		"\u308d:Ro \u306c:Nu \u3075:Hu \u3041:a \u3045:u \u3047:e \u3049:o \u3083:ya \u3085:yu \u3087:yo \u3092:Wo \u30fc \u3078:He {bksp}",
		"{tab} \u305f:Ta \u3066:Te \u3043:i \u3059:Su \u304b:Ka \u3093:N \u306a:Na \u306b:Ni \u3089:Ra \u305b:Se \u300c \u300d \u3080:Mu",
		"\u3061:Ti \u3068:To \u3057:Si \u306f:Ha \u304D:Ki \u304f:Ku \u307e:Ma \u306e:No \u308a:Ri \u308c:Re \u3051:Ke {enter}",
		"{shift} \u3063:tu \u3055:Sa \u305d:So \u3072:Hi \u3053:Ko \u307f:Mi \u3082:Mo \u3001 \u3002 \u30fb {shift}",
		"{accept} {space} {meta3} {meta1:Kana} {cancel}"
	],
	// English - half width (normal)
	// \u5168 全 = full width active; switch to half width
	// \u534a 半 = half width active; switch to full width
	"meta1" : [
		"` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
		"{tab} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; : {enter}",
		"{shift} z x c v b n m , . / {shift}",
		"{accept} {space} {default:Eng} {meta2:\u534a:full} {cancel}"
	],
	"meta1-shift" : [
		"~ ! @ # $ % ^ & * ( ) _ + {bksp}",
		"{tab} Q W E R T Y U I O P { } |",
		"A S D F G H J K L + * {enter}",
		"{shift} Z X C V B N M < > ? {shift}",
		"{accept} {space} {default:Eng} {meta2:\u534a:full} {cancel}"
	],
	// English - full width
	"meta2" : [
		"\uff40 \uff11 \uff12 \uff13 \uff14 \uff15 \uff16 \uff17 \uff18 \uff19 \uff10 \uff0d \uff1d {bksp}",
		"{tab} \uff51 \uff57 \uff45 \uff52 \uff54 \uff59 \uff55 \uff49 \uff4f \uff50 \uff3b \uff3d \uffe5",
		"\uff41 \uff53 \uff44 \uff46 \uff47 \uff48 \uff4a \uff4b \uff4c \uff1b \uff07 {enter}",
		"{shift} \uff5a \uff58 \uff43 \uff56 \uff42 \uff4e \uff4d \uff0c \uff0e \uff0f {shift}",
		"{accept} {space} {default:Eng} {meta1:\u5168:half} {cancel}"
	],
	"meta2-shift" : [
		"\uff5e \uff01 \uff20 \uff03 \uff04 \uff05 \uff3e \uff06 \uff0a \uff08 \uff09 \uff3f \uff0b {bksp}",
		"{tab} \uff31 \uff37 \uff25 \uff32 \uff34 \uff39 \uff35 \uff29 \uff2f \uff30 \uff5b \uff5d \uff5c",
		"\uff21 \uff33 \uff24 \uff26 \uff27 \uff28 \uff2a \uff2b \uff2c \uff1a \uff02 {enter}",
		"{shift} \uff3a \uff38 \uff23 \uff36 \uff22 \uff2e \uff2d \uff1c \uff1e \uff1f {shift}",
		"{accept} {space} {meta3:Eng} {meta1:\u5168:half} {cancel}"
	],
	// Katakana full width
	"meta3" : [
		"\u30ed:Ro \u30cc:Nu \u30d5:Hu \u30a2:A \u30a6:U \u30a8:E \u30aa:O \u30e4:Ya \u30e6:Yu \u30e8:Yo \u30ef:Wa \u30db:Ho \u30d8:He {bksp}",
		"{tab} \u30bf:Ta \u30c6:Te \u30a4:I \u30b9:Su \u30ab:Ka \u30f3:N \u30ca:Na \u30cb:Ni \u30e9:Ra \u30bb:Se \u309b \u309c \u30e0:Mu",
		"\u30c1:Ti \u30c8:To \u30b7:Si \u30cf:Ha \u30ad:Ki \u30af:Ku \u30de:Ma \u30ce:No \u30ea:Ri \u30ec:Re \u30b1:Ke {enter}",
		"{shift} \u30c4:Tu \u30b5:Sa \u30bd:So \u30d2:Hi \u30b3:Ko \u30df:Mi \u30e2:Mo \u30cd:Ne \u30eb:Ru \u30e1:Me {shift}",
		"{accept} {space} {default} {meta2} {meta4:\u5168:half} {cancel}"
	],
	"meta3-shift" : [
		"\u30ed:Ro \u30cc:Nu \u30d5:Hu \u30a1:a \u30a5:u \u30a7:e \u30a9:o \u30e3:ya \u30e5:yu \u30e7:yo \u30f2:Wo \u30fc \u30d8:He {bksp}",
		"{tab} \u30bf:Ta \u30c6:Te \u30a3:i \u30b9:Su \u30ab:Ka \u30f3:N \u30ca:Na \u30cb:Ni \u30e9:Ra \u30bb:Se \u300c \u300d \u30e0:Mu",
		"\u30c1:Ti \u30c8:To \u30b7:Si \u30cf:Ha \u30ad:Ki \u30af:Ku \u30de:Ma \u30ce:No \u30ea:Ri \u30ec:Re \u30b1:Ke {enter}",
		"{shift} \u30c3:tu \u30b5:Sa \u30bd:So \u30d2:Hi \u30b3:Ko \u30df:Mi \u30e2:Mo \u3001 \u3002 \u30fb {shift}",
		"{accept} {space} {default} {meta2} {meta4:\u5168:half} {cancel}"
	],
	// Katakana half width
	"meta4" : [
		"\uff9b:Ro \uff87:Nu \uff8c:Hu \uff71:A \uff73:U \uff74:E \uff75:O \uff94:Ya \uff95:Yu \uff96:Yo \uff9c:Wa \uff8e:Ho \uff8d:He {bksp}",
		"{tab} \uff80:Ta \uff83:Te \uff72:I \uff7d:Su \uff76:Ka \uff9d:N \uff85:Na \uff86:Ni \uff97:Ra \uff7e:Se \uff9e \uff9f \uff91:Mu",
		"\uff81:Ti \uff84:To \uff7c:Si \uff8a:Ha \uff77:Ki \uff78:Ku \uff8f:Ma \uff89:No \uff98:Ri \uff9a:Re \uff79:Ke {enter}",
		"{shift} \uff82:Tu \uff7b:Sa \uff7f:So \uff8b:Hi \uff7a:Ko \uff90:Mi \uff93:Mo \uff88:Ne \uff99:Ru \uff92:Me {shift}",
		"{accept} {space} {default} {meta1} {meta3:\u534a:full} {cancel}"
	],
	"meta4-shift" : [
		"\uff9b:Ro \uff87:Nu \uff8c:Hu \uff67:a \uff69:u \uff6a:e \uff6b:o \uff6c:ya \uff6d:yu \uff6e:yo \uff66:Wo \uff70 \uff8d:He {bksp}",
		"{tab} \uff80:Ta \uff83:Te \uff68:i \uff7d:Su \uff76:Ka \uff9d:N \uff85:Na \uff86:Ni \uff97:Ra \uff7e:Se \u300c \u300d \uff91:Mu",
		"\uff81:Ti \uff84:To \uff7c:Si \uff8a:Ha \uff77:Ki \uff78:Ku \uff8f:Ma \uff89:No \uff98:Ri \uff9a:Re \uff79:Ke {enter}",
		"{shift} \uff6f:tu \uff7b:Sa \uff7f:So \uff8b:Hi \uff7a:Ko \uff90:Mi \uff93:Mo \u3001 \u3002 \u30fb {shift}",
		"{accept} {space} {default} {meta1} {meta3:\u534a:full} {cancel}"
	]
};
