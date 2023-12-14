// 배열은 []로 만든다
const fruits = ["사과", "배", "귤", "참외", "피망", "포도", "포도"];

console.log(fruits);
console.log(typeof fruits);

// push(item) : 배열의 맨 뒤에 요소를 추가한다, 추가 후 배열의 길이를 반환한다.
console.log(fruits.push("appla"));
console.log(fruits.push("kiwi"));
// console에 출력하는것이 우선순위가 제일 낮아 콘솔에는 이미 요소가 있는것으로 보인다
console.log(fruits);

// pop() : 배열의 맨 뒤 요소를 제거한다. 제거 후 제거한 요소를 반환한다.
console.log(fruits.pop());
console.log(fruits);

// shift() : 맨 앞의 요소를 제거한다. 제거 후 제거한 요소를 반환한다.
console.log(fruits.shift());
console.log(fruits);

// unshift(item) : 맨 앞에 요소를 추가한다. 길이 반환
console.log(fruits.unshift("용과"));
console.log(fruits);

// reverse() : 현재 배열의 순서를 거꾸로 뒤집는다
console.log(fruits.reverse());
console.log(fruits);

// sort() : 배열 안의 내용들을 정렬한다.
console.log("정렬 후 : ", fruits.sort());

// sort(compareFn) : 내가 원하는 기준으로 배열안의 내용들을 정렬한다.
const numbers = [99, 1, 3, -50, 123, 88, 14, 15];

const myComparator = function (a, b) {
	if (a < b) {
		return 1;
	} else if (a > b) {
		return -1;
	} else {
		return 0;
	}
};

// 내림차순으로 정렬하기.. (콜백 function)
const sorted = numbers.sort(myComparator);

console.log(sorted);

/*
	1. 배열에 랜덤으로 1~45사이의 숫자를 1000개 추가한다

	2. 각 숫자들이 나온 횟수를 센다

	3. 가장 많이 나온 숫자를 6개를 HTML에 동그란 공모양으로 출력해준다.
*/

const ranNums = [];
for (let i = 0; i < 1000; i++) {
	ranNums.push(parseInt(Math.random() * 45 + 1));
}
ranNums.sort(function (a, b) {
	if (a < b) {
		return -1;
	} else if (a > b) {
		return 1;
	} else {
		return 0;
	}
});
console.log(ranNums);

function countNum(num, count) {
	this.num = num;
	this.count = count;
}

let countNums = [];

let count = 0;
for (var numb = 1; numb <= 45; numb++) {
	for (var index = 0; index < ranNums.length; index++) {
		if (numb === ranNums[index]) {
			count += 1;
		} else if (numb != ranNums[index]) {
			continue;
		}
	}
	countNums.push(new countNum(numb, count));
	count = 0;
}
console.log(countNums);

const compCount = function (countNum1, countNum2) {
	if (countNum1.count < countNum2.count) {
		return 1;
	} else if (countNum1.count > countNum2.count) {
		return -1;
	} else {
		return 0;
	}
};

countNums.sort(compCount);
console.log(countNums);
console.log(countNums.num);

for (let idx = 1; idx <= 6; idx++) {
	const num = document.getElementById("num" + idx);
	num.innerHTML = " " + countNums[idx - 1].num + " ";
	// num.textContent = countNums[idx - 1].num;
}
