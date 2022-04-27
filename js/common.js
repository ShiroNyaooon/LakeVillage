/*****************************************************************
* 	時刻取得(時分秒)
 * 【パラメータ１】フォーマット 'yyyy-MM-dd HH:mm:ss'
 ****************************************************************/
function GetDate(pFormat) {
	let lDate = new Date();
	let sFormat = (pFormat === "" ? "yyyy-MM-dd HH:mm:ss" : pFormat);
	sFormat = sFormat.replace(/yyyy/g, String(lDate.getFullYear()));
	sFormat = sFormat.replace(/MM/g, String(lDate.getMonth()).padStart(2, '0'));
	sFormat = sFormat.replace(/dd/g, String(lDate.getDate()).padStart(2, '0'));
	sFormat = sFormat.replace(/HH/g, String(lDate.getHours()).padStart(2, '0'));
	sFormat = sFormat.replace(/mm/g, String(lDate.getMinutes()).padStart(2, '0'));
	sFormat = sFormat.replace(/ss/g, String(lDate.getSeconds()).padStart(2, '0'));
	return sFormat;
}

/*****************************************************************
 * 	文字列の末尾から、指定した数の文字列を取り出す
 * 【パラメータ１】文字列
 * 【パラメータ２】文字数
 ****************************************************************/
function Right(pStr, pLength) {
	if(pStr.length <= pLength) {
		return pStr;
	}
	else {
		return pStr.substring(pStr.length - pLength, pStr.length);
	}
}

/*****************************************************************
 * 	ランダム
 * 【パラメータ１】最小値：6面サイコロの場合は1
 * 【パラメータ２】最大値：6面サイコロの場合は6
 ****************************************************************/
function Random(pFrom, pTo) {
	if(pTo > pFrom && pFrom >= 0) {
		return Math.floor(Math.random() * (pTo - pFrom + 1) + pFrom);
	}
	else {
		return pFrom;
	}
}

/*****************************************************************
 * 	自然数チェック
 * 【パラメータ１】最小値：6面サイコロの場合は1
 * 【パラメータ２】最大値：6面サイコロの場合は6
 ****************************************************************/
function IsNaturalNumber() {

}
 

/*****************************************************************
 * 	ログ出力
 ****************************************************************/
function Log(text) {
	console.log(text);
}

/*****************************************************************
 * 	ラベルに文字列表示
 ****************************************************************/
var GmTextKey = "";
function SetGmText(elementNm, strTxt, key) { 
	GmTextKey = key;
	$(elementNm).text("");
	SetGmTextSub(elementNm, strTxt, key);
}
function SetGmTextSub(elementNm, strTxt, key){
	if(strTxt.length >= 1 && GmTextKey === key) {
		let sOld = $(elementNm).text();
		let sNow = sOld + strTxt.substr(0, 1);
		let sNew = strTxt.substr(1, strTxt.length -1);
		$(elementNm).text(sNow);
		setTimeout(function(){
			SetGmTextSub(elementNm, sNew, key)
		},20);
	}
}

/*****************************************************************
 * 	テキストボックスに文字列表示
 ****************************************************************/
var GmValKey = "";
function SetGmVal(elementNm, strTxt, key) {
	GmValKey = key;
	$(elementNm).val("");
	SetGmValSub(elementNm, strTxt, key);
}
function SetGmValSub(elementNm, strTxt, key){
	 if(strTxt.length >= 1 && GmValKey === key) {
		 let sOld = $(elementNm).val();
		 let sNow = sOld + strTxt.substr(0, 1);
		 let sNew = strTxt.substr(1, strTxt.length -1);
		 $(elementNm).val(sNow);
		 setTimeout(function(){
			SetGmValSub(elementNm, sNew, key)
		 },20);
	 }
}