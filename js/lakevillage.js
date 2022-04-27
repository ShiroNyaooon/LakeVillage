let txtMessageRow1s = new Array();
let txtMessageRow2s = new Array();
let cntRow1Now = 0;
let cntRow1Max = 0;
let cntRow2Now = 0;
let cntRow2Max = 0;
let scrollVal = 0;
let isEndMsg = false;
let isStopScroll = false;
let isStopEvent = false;
let isStopRoom = false;
let isStopAccess = false;
	
$(window).on('load', function(){

	txtMessageRow1s.push("b");
	txtMessageRow1s.push("び");
	txtMessageRow1s.push("びw");
	txtMessageRow1s.push("びわ");
	txtMessageRow1s.push("びわk");
	txtMessageRow1s.push("びわこ");
	txtMessageRow1s.push("びわこn");
	txtMessageRow1s.push("びわこの");
	txtMessageRow1s.push("びわこの");
	txtMessageRow1s.push("びわこの");
	txtMessageRow1s.push("琵琶湖<span>の</span>");
	txtMessageRow1s.push("琵琶湖<span>の</span>");
	txtMessageRow1s.push("琵琶湖<span>の</span>");
	txtMessageRow1s.push("琵琶湖<span>の</span>");
	txtMessageRow1s.push("琵琶湖<span>の</span>c");
	txtMessageRow1s.push("琵琶湖<span>の</span>cy");
	txtMessageRow1s.push("琵琶湖<span>の</span>ちゅ");
	txtMessageRow1s.push("琵琶湖<span>の</span>ちゅう");
	txtMessageRow1s.push("琵琶湖<span>の</span>ちゅうs");
	txtMessageRow1s.push("琵琶湖<span>の</span>ちゅうsh");
	txtMessageRow1s.push("琵琶湖<span>の</span>ちゅうし");
	txtMessageRow1s.push("琵琶湖<span>の</span>ちゅうしn");
	txtMessageRow1s.push("琵琶湖<span>の</span>ちゅうしん");
	txtMessageRow1s.push("琵琶湖<span>の</span>ちゅうしんd");
	txtMessageRow1s.push("琵琶湖<span>の</span>ちゅうしんで");
	txtMessageRow1s.push("琵琶湖<span>の</span>ちゅうしんで");
	txtMessageRow1s.push("琵琶湖<span>の</span>ちゅうしんで");
	txtMessageRow1s.push("琵琶湖<span>の</span>中心<span>で</span>");
	txtMessageRow1s.push("琵琶湖<span>の</span>中心<span>で</span>");
	txtMessageRow1s.push("琵琶湖<span>の</span>中心<span>で</span>");
	txtMessageRow1s.push("琵琶湖<span>の</span>中心<span>で</span>");
	txtMessageRow1s.push("琵琶湖<span>の</span>中心<span>で</span>");
	cntRow1Max = txtMessageRow1s.length;

	txtMessageRow2s.push("い");
	txtMessageRow2s.push("いk");
	txtMessageRow2s.push("いか");
	txtMessageRow2s.push("いかd");
	txtMessageRow2s.push("いかだ");
	txtMessageRow2s.push("いかだd");
	txtMessageRow2s.push("いかだで");
	txtMessageRow2s.push("いかだで");
	txtMessageRow2s.push("いかだで");
	txtMessageRow2s.push("イカダ<span>で</span>");
	txtMessageRow2s.push("イカダ<span>で</span>");
	txtMessageRow2s.push("イカダ<span>で</span>");
	txtMessageRow2s.push("イカダ<span>で</span>k");
	txtMessageRow2s.push("イカダ<span>で</span>ky");
	txtMessageRow2s.push("イカダ<span>で</span>きゃ");
	txtMessageRow2s.push("イカダ<span>で</span>きゃn");
	txtMessageRow2s.push("イカダ<span>で</span>きゃん");
	txtMessageRow2s.push("イカダ<span>で</span>きゃんp");
	txtMessageRow2s.push("イカダ<span>で</span>きゃんぷ");
	txtMessageRow2s.push("イカダ<span>で</span>きゃんぷ");
	txtMessageRow2s.push("イカダ<span>で</span>きゃんぷ");
	txtMessageRow2s.push("イカダ<span>で</span>キャンプ");
	txtMessageRow2s.push("イカダ<span>で</span>キャンプ");
	txtMessageRow2s.push("イカダ<span>で</span>キャンプ");
	txtMessageRow2s.push("イカダ<span>で</span>キャンプ");
	txtMessageRow2s.push("イカダ<span>で</span>キャンプ！");
	cntRow2Max = txtMessageRow2s.length;

	setTimeout(function(){
		window.setInterval(viewMessage, 140);
	}, 2000);
});
 
function viewMessage() {

	if(!isEndMsg) {
		if(cntRow1Now < cntRow1Max) {
			$("#txtMainVisual1").html(txtMessageRow1s[cntRow1Now]);
			cntRow1Now++;
		}
		else if(cntRow2Now < cntRow2Max) {
			$("#txtMainVisual2").html(txtMessageRow2s[cntRow2Now]);
			cntRow2Now++;
		}
		else {
			isEndMsg = true;
			window.clearInterval(viewMessage);
			//window.setInterval(autoScroll, 30);
		}
	}

}

function autoScroll() {

	if(!isStopScroll) {
		scrollVal+=3;
		$(window).scrollTop(scrollVal);
		if(scrollVal >= 450 && !isStopEvent) {
			isStopEvent = true;
			waitAutoScroll(7000)
		}
		else if(scrollVal >= 940 && !isStopRoom) {
			isStopRoom = true;
			waitAutoScroll(7000)
		}
		else if(scrollVal >= 1450 && !isStopAccess) {
			isStopAccess = true;
			waitAutoScroll(7000)
		}
		else if(scrollVal >= 2500) {
			$(window).scrollTop(0);
			isStopScroll = true;
		}
	}
}

function waitAutoScroll(waitTime) {
	isStopScroll = true;
	setTimeout(function(){
		isStopScroll = false;
	}, waitTime);
}