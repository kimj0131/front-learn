////////////////////////////////////////////////////////////////////////
// 타이머
const timerDiv = document.querySelector(".timer");

const timeDiv = document.createElement("div");
timeDiv.classList.add("playtimerResult");
const playTime = document.createTextNode("0.000");

timeDiv.appendChild(playTime);
timerDiv.appendChild(timeDiv);

let time = null;
const playStart = function () {
	let startTime = new Date();
	// console.log(startTime);
	time = setInterval(() => {
		let beginTime = new Date();
		let resultTime = (beginTime - startTime) / 1e3;
		playTime.textContent = resultTime;
	}, 1);
};

const playEnd = function () {
	clearInterval(time);
};

////////////////////////////////////////////////////////////////////////
// 스테이지
// 랜덤숫자로 채워진 배열 생성
const ranNumfrom01 = getRandomNumber(1, 25);
const ranNumfrom26 = getRandomNumber(26, 50);

// 배열을 기반으로 tapbox를 생성하는 메서드
const appendRandomPad = function (min, max) {
	for (let i = 0; i < 25; i++) {
		const boxDiv = document.createElement("div");
		const boxSpan = document.createElement("span");
		boxSpan.classList.add("tapBox");
		const boxNum = document.createTextNode(ranNumfrom01[i]);
		boxDiv.appendChild(boxSpan);
		boxSpan.appendChild(boxNum);
		grid_x5.appendChild(boxDiv);
	}
};

// grid_x5가 처음호출되면 tapbox를 채운다
const grid_x5 = document.querySelector(".grid_x5");
grid_x5.onload = appendRandomPad(1, 25);

// 랜덤한 번호가 있는 배열에서 숫자 하나씩 리턴
const getRanNumToArr = () => {
	let nextNum = ranNumfrom26[0];
	ranNumfrom26.shift();
	return nextNum;
};

// 클릭 이벤트
// 클릭한 숫자가 맞는지 확인하기 위한 변수
let boxCount = 1;
grid_x5.addEventListener("click", (e) => {
	// .tapBox만 동작하게 설정
	if (e.target !== grid_x5 && e.target.textContent == boxCount) {
		// 딜레이를 주고 투명해지게 한다
		e.target.style.opacity = 0;
		e.target.style.transition = "all 0.5s";
		setTimeout(() => {
			// 카운트 26번까지 다른번호가 등장하고 배경색이 다르게 설정
			if (boxCount <= 26) {
				const boxNum = getRanNumToArr();
				e.target.textContent = boxNum;
				e.target.style.opacity = 1;
				e.target.style.backgroundColor = "#340cc5";
			}
		}, 500);
		boxCount++;
	}
	// 클릭한 타겟의 innerText가 1일 경우 타이머작동 (게임시작)
	if (e.target.innerText === "1") {
		playStart();
	}
	// 클릭한 타겟의 innerText가 50일 경우
	// 타이머종료 후 로컬스토리지에 저장 (게임종료)
	if (e.target.innerText === "50") {
		playEnd();
		saveLocalStorage();
	}
});

// 로컬스토리지에 저장하는 메서드
let saveNum = localStorage.length;
const saveLocalStorage = () => {
	const playtimerResult = document.querySelector(".playtimerResult");
	localStorage.setItem("sv" + saveNum, playtimerResult.innerText);
};

// 다시하기 (페이지 새로고침)
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => location.reload(true));

// 랜덤으로 중복없는 숫자를 생성해 배열로 리턴하는 메서드
function getRandomNumber(min, max) {
	// 생성된 숫자를 저장할 배열
	let generatedNumbers = [];
	// 랜덤 숫자를 생성하는 함수
	function generateNumber() {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	// 생성된 숫자가 배열에 있는지 확인하는 함수
	function isDuplicate(number) {
		// 배열의 요소를 순회하면서 number와 같은 값이 있으면 true를 리턴
		for (let element of generatedNumbers) {
			if (element === number) {
				return true;
			}
		}
		// 배열의 요소를 모두 확인했는데 number와 같은 값이 없으면 false를 리턴
		return false;
	}
	// 랜덤 숫자를 생성하고 중복 여부를 확인하는 반복문
	while (generatedNumbers.length < max - min + 1) {
		// 랜덤 숫자를 생성
		let randomNumber = generateNumber();
		// 생성된 숫자가 배열에 없으면 배열에 추가
		if (!isDuplicate(randomNumber)) {
			generatedNumbers.push(randomNumber);
		}
		// 생성된 숫자가 배열에 있으면 다시 반복
	}
	// 생성된 숫자가 들어있는 배열을 리턴
	return generatedNumbers;
}

////////////////////////////////////////////////////////////////////////
// 랭크
// 로컬스토리지에서 클리어타임을 배열에 넣고 정렬
const rankSize = localStorage.length;
let rankList = [];
for (let i = 0; i < rankSize; i++) {
	rankList.push(localStorage.getItem("sv" + i));
}
rankList.sort();
// console.log(rankList);

// div로 집어넣기
const rank = document.querySelector(".rank");

// 리스트를 넣는 메서드
const rankingListUpdate = () => {
	for (let i = 0; i < 20; i++) {
		const newRankDiv = document.createElement("div");
		const ranking = () => {
			let next = rankList[0];
			rankList.shift();
			return next;
		};
		const newRankText = document.createTextNode(i + 1 + "위 : " + ranking() + " 초");

		newRankDiv.appendChild(newRankText);
		rank.appendChild(newRankDiv);
	}
};
grid_x5.onload = rankingListUpdate();
