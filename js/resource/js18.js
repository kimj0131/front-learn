const click2Div = document.getElementById("click2");

// 선택한 HTML요소에 자바스크립트로 이벤트 추가하기 1 (HTML 속성에 추가하기)
click2Div.onclick = (e) => {
	// 이벤트 콜백 함수에서의 this는 이벤트 발생 주체가 아닌 window객체를 가르킨다
	// console.log(this);

	// this 대신 이벤트 객체를 사용해 이벤트 발생 요소를 선택할 수 있다.
	console.log(e);

	// e.target : 현재 이벤트가 발생한 요소
	// this.document.body.style.backgroundColor = "green";
	e.target.style.backgroundColor = "green";
	e.target.style.color = "white";
};

// 선택한 HTML요소에 자바스크립트로 이벤트 추가하기 2 (addEventListener 함수로 추가하기)
// addEventListener > 앞에 이벤트이름
click2Div.addEventListener("mouseleave", (e) => {
	// console.log(this);
	e.target.style.backgroundColor = "white";
	e.target.style.color = "black";
});

// 이벤트의 종류는 구글링...
// ex) Javascript event list ..
//

// 이벤트 중첩 테스트
const outer = document.getElementById("outer");
const inner1 = document.getElementById("inner1");
const inner2 = document.getElementById("inner2");

// addEventListener(이벤트 종류, 이벤트 처리 함수, 캡처링 여부)

// e.currentTarget : 버블링 또는 캡처링으로 인해 현재 이벤트의 영향을 받고있는 객체
// e.target : 현재 이벤트를 발생시킨 객체
outer.addEventListener(
	"click",
	(e) => {
		console.log("outer clicked!!");
		if (e.currentTarget === e.target) {
			console.log("범인은", e.target.id, "입니다");
		}
	},
	// true // 캡처링
	false // 버블링
);
inner1.addEventListener(
	"click",
	(e) => {
		console.log("inner1 clicked!!");
		if (e.currentTarget === e.target) {
			console.log("범인은", e.target.id, "입니다");
		}
	},
	true // 캡처링
	// false // 버블링
);
inner2.addEventListener(
	"click",
	(e) => {
		console.log("inner2 clicked!!");
		if (e.currentTarget === e.target) {
			console.log("범인은", e.target.id, "입니다");
		}
	},
	// true // 캡처링
	false // 버블링
);

// 기본 이벤트 막아보기
const userId = document.getElementById("user-id");
const userIntro = document.getElementById("user-intro");
const link1 = document.getElementById("link1");

// keydown, keyup, keypress : 키보드 이벤트들
userId.addEventListener("keydown", (e) => {
	// 기본 동작 취소
	e.preventDefault();

	if (e.key === "Tab") {
		e.currentTarget.value += "\t";
	} else {
		// 기본 동작 취소 가능 여부 체크
		console.log("기본동작 취소 가능 여부", e.cancelable);
		console.log(e);
	}
});

userIntro.addEventListener("keydown", (e) => {
	e.preventDefault();

	if (e.key === "Tab") {
		e.currentTarget.value += "\t";
	} else {
		// 기본 동작 취소 가능 여부 체크
		console.log("기본동작 취소 가능 여부", e.cancelable);
		console.log(e);
	}
});

link1.addEventListener("click", (e) => {
	e.preventDefault();
	alert("뻥이야");
});

const itemList = document.getElementById("item-list");
// const item = document.getElementById("item");

itemList.addEventListener(
	"click",
	(e) => {
		e.target !== e.currentTarget ? alert(e.target.innerHTML) : 0;
		// console.log(e.target.innerHTML);
	},
	true
);
