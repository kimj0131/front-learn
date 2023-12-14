// 연습문제
// const gugudan = document.getElementById("gugudan");

// gugudan.style.display = "grid";
// gugudan.style.gridTemplateColumns = "100px 100px 100px 100px ";
// gugudan.style.fontSize = "20px";

// function println(docu, value) {
// 	docu.innerHTML += value;
// }

// for (let i = 2; i <= 9; i++) {
// 	println(gugudan, '<div id="row-' + i + '">' + i + "단 : ");
// 	let row = document.getElementById("row-" + i);

// 	for (let j = 1; j <= 9; j++) {
// 		println(row, i + "x" + j + "=" + i * j + " ");
// 	}

// 	row.style.border = "1px black solid";
// 	row.style.paddingTop = "5px";
// 	row.style.paddingLeft = "10px";
// 	row.style.marginTop = "10px";
// 	row.style.marginLeft = "10px";
// }

// 강사님 풀이

const gugudanDiv = document.getElementById("gugudan");

gugudanDiv.style.display = "grid";
gugudanDiv.style.gridTemplateColumns = "repeat(8, 1fr)";
gugudanDiv.style.gap = "3px 3px";

function makeGugudanDiv(dan, gop) {
	// return "<div>" + dan + "x" + gop + "=" + dan * gop + "</div>";
	// 자바스크립트의 format String
	return `<div>${dan}x${gop}=${dan * gop}<div>`;
}

for (let gop = 1; gop <= 9; gop++) {
	for (let dan = 2; dan <= 9; dan++) {
		gugudanDiv.innerHTML += makeGugudanDiv(dan, gop);
	}
}

////////////////////////////////////////////////////////////////////////

// while문의 활용
// Java랑 다르게 조건문에 0을 제외한 숫자를 넣으면 true로 간주한다
let i = 0;
while (true) {
	console.log(i++);

	if (i === 10) {
		break;
	}
}

console.log("while문이 끝났습니다..");
