//
const numbers = [];

for (let i = 0; i < 10; i++) {
	numbers[i] = i;
}

console.log(numbers);

/*
	# 배열.prototype.forEach
		배열의 모든 값을 하나씩 순서대로 꺼내서 전달한 함수를 실행한다.

	- 배열의 모든 값을 하나씩 순서대로 꺼내서 전달한 함수를 실행
	- 전달한 함수에 첫 번쨰 인자로 해당번째 요소를 전달된다
	- 전달한 함수에 두 번째 인자로 인덱스가 전달된다
	- 전달한 함수에 세 번째 인자로 원본 배열이 전달된다
	- 반드시 모든 인자를 다 받을 필요는 없다 (필요한 경우에만 꺼내서 사용)
*/
const myFunction = function (item, index, srcArr) {
	// console.log(item * 10, `${index}번째 실행입니다.`, "원본:", srcArr);
	console.log(`numbers[${index}]: ${item}`);
};
numbers.forEach(myFunction);

/*
	# 배열.prototype.map

	- 값을 하나씩 순서대로 꺼내면서 해당 값을 사용해 결과를 리턴한다
	- 리턴한 결과들로 구성된 새로운 배열을 리턴한다.
	- map에 전달하는 콜백함수는 반드시 결과를 리턴해야 한다
 */
const scores = [80, 55, 60, 99, 100, 70, 72, 30];

const resultArr = numbers.map((item, index) => {
	return item + 5;
});

// 점수 배열로 등급 배열 생성해 보기
const grades = scores.map((score) => {
	if (score > 100 || score < 0) {
		return "F";
	} else if (score >= 90) {
		return "A";
	} else if (score >= 80) {
		return "B";
	} else if (score >= 70) {
		return "C";
	} else if (score >= 60) {
		return "D";
	} else {
		return "F";
	}
});

const getGrade = (score) => {
	if (score > 100 || score < 0) {
		return "F";
	} else if (score >= 90) {
		return "A";
	} else if (score >= 80) {
		return "B";
	} else if (score >= 70) {
		return "C";
	} else if (score >= 60) {
		return "D";
	} else {
		return "F";
	}
};

const students = scores.map((score) => ({
	score: score,
	grade: getGrade(score),
}));

console.log(resultArr);
console.log(grades);
console.log(students);

/*
	# 배열.prototype.filter

	- 배열의 모든 값을 순차적으로 하나씩 꺼내면서 전달한 함수의 기준을 통과하는 것만 남겨놓는 함수
	- filter에 전달하는 콜백함수는 반드시 boolean타입 값을 리턴해야 한다
	- true를 리턴하는 요소는 남게되고 false를 리턴하는 요소는 걸러지게 된다
*/

// 60점 미만인 점수만 남겨놓고 싶은 경우
const filtered = scores.filter((score) => {
	return score < 60;
});

// 등급이 F인 객체만 남겨놓고 싶은 경우
const fs = students.filter((student) => {
	return student.grade === "F";
});

console.log(filtered);
console.log(fs);

/*
	# 배열.prototype.reduce

	- 배열의 모든 요소를 하나로 취합한다
	- 전달한 함수의 결과(리턴값)를 다음 반복에 계속해서 사용한다
*/

// const scores = [80, 55, 60, 99, 100, 70, 72, 30];

// 총합 구하기
const sum = scores.reduce((prevScore, currScore, index) => {
	console.log(`##${index}번째 반복##`);
	console.log(prevScore);
	console.log(currScore);

	return prevScore + currScore;
});

//
const minScore = scores.reduce((minScore, currScore) => {
	return minScore < currScore ? minScore : currScore;
});

//
const maxScore = scores.reduce((maxScore, currScore) => {
	return maxScore > currScore ? maxScore : currScore;
});

console.log("총합 : ", sum);
console.log("가장 낮은 점수:", minScore);
console.log("가장 높은 점수:", maxScore);

/*
	# 배열.prototype.some

	- 조건을 만족하는 요소가 하나 이상 있는지 검사한다
*/

const fruits = ["apple", "banan", "orange", "melon", "pineapple"];

// 과일중에 참외가 있는지 검사해보기
const result1 = fruits.some((fruit) => {
	return fruit === "참외";
});

//과일 중에 apple 있는지 검사해보기
const result2 = fruits.some((fruit) => fruit === "apple");

// 과일 중에 apple이 포함된 과일이 있는지 검사
const result3 = fruits.some((fruit) => fruit.includes("apple"));

console.log(result1);
console.log(result2);
console.log(result3);

/*
	1. 100명의 랜덤 학생 정보를 생성한다.
		(학생 객체는 학번, 이름, 국어, 영어, 수학을 가지고 있음)

	2. 모든 학생 객체에 평균 점수 속성을 추가해보기

	3. 평균 점수가 60점 미만인 학생들로만 이루어진 배열을 생성해보기

	4. 모든 학생들의 평균 영어 점수를 계산해보기

	5. 2번 3번 4번의 내용을 html에 테이블 형식으로 정리해놓기
*/

// const randomScore = parseInt(Math.random() * 100);
const randomScore = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomLastName = ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임", "한", "오", "신", "권", "황"];
const randomFristName = ["가", "강", "건", "경", "고", "관", "광", "구", "규", "근", "기", "누", "다", "단", "무"];

const randomFullName = (last, first1, first2) =>
	last[Math.floor(Math.random() * last.length)] +
	first1[parseInt(Math.random() * first1.length)] +
	first2[parseInt(Math.random() * first2.length)];

const studentInfos = [];

function Studentinfo(id, name, kor, eng, math) {
	this.id = id;
	this.name = name;
	this.kor = kor;
	this.eng = eng;
	this.math = math;
}

for (let i = 0; i < 100; i++) {
	studentInfos[i] = new Studentinfo(
		i + 1,
		randomFullName(randomLastName, randomFristName, randomFristName),
		randomScore(30, 100),
		randomScore(30, 100),
		randomScore(30, 100)
	);
	// 합계점수 추가
	studentInfos[i].sumScore = studentInfos[i].kor + studentInfos[i].eng + studentInfos[i].math;
	// 평균점수 추가
	studentInfos[i].avgScore = Math.round((studentInfos[i].sumScore / 3) * 100) / 100;
}

// console.log(studentInfos);

// 평균점수 60점미만
const fGradeStudent = studentInfos.filter((Studentinfo) => {
	return Studentinfo.avgScore < 60;
});
// console.log(fGradeStudent);

// 모든 학생들의 평균 영어점수 계산
const engSum = studentInfos.reduce(
	(preveStd, currStd) => {
		preveStd.eng += currStd.eng;
		// console.log(preveStd);
		return preveStd;
	},
	{ eng: 0 }
);
// console.log("eng", engSum);
const engAve = engSum.eng / 100;
// console.log("학생들의 평균 영어 점수 : ", engAve);

const stdDiv = document.getElementById("student_table");

// 평균점수 추가
// console.log(studentInfos);
stdDiv.innerHTML += '<table border="1" id="student_avg"><tr><th colspan="2">학생들의 평균점수</th></tr>';
const stdAvgTable = document.getElementById("student_avg");
studentInfos.forEach((item) => {
	stdAvgTable.innerHTML += `<tr><td>${item.name}</td><td>${item.avgScore}</td></tr>`;
});

// 평균 60점 미만 학생들 추가
stdDiv.innerHTML += '<table border="1" id="student_f"><tr><th colspan="2">평균 60점 미만</th></tr>';
const stdFTable = document.getElementById("student_f");
fGradeStudent.forEach((item) => {
	stdFTable.innerHTML += `<tr><td>${item.name}</td><td>${item.avgScore}</td></tr>`;
});

// 모든 학생들의 평균 영어 점수 추가
stdDiv.innerHTML += '<table border="1" id="student_eng_avg"><tr><th>학생들의 영어점수 평균</th></tr>';
const stdEngAvgTable = document.getElementById("student_eng_avg");
stdEngAvgTable.innerHTML += `<tr><td>${engAve}</td></tr>`;

//

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// 풀이
const first_names = ["민수", "민호", "민지", "수지", "수진", "성국"];
const last_names = ["김", "이", "박", "최"];

let stuNum = 0;

const getFirstName = () => first_names[parseInt(Math.random() * first_names.length)];

const getLastName = () => last_names[parseInt(Math.random() * last_names.length)];

const getRandomName = () => getLastName() + getFirstName();

const getRandomScore = () => parseInt(Math.random() * 101);

function Student() {
	this.stuNum = "STU" + stuNum++;
	this.name = getRandomName();
	this.math = getRandomScore();
	this.eng = getRandomScore();
	this.kor = getRandomScore();
}

const students2 = [];

for (let i = 0; i < 100; i++) {
	students2.push(new Student());
}

// 모든 학생들에게 평균 필드 추가하기
students2.forEach((stu) => {
	stu.avg = (stu.kor + stu.eng + stu.math) / 3;
});

console.log(students2);

// 평균 점수 60점 미만 학생 배열 만들기
const fstus = students2.filter((stu) => stu.avg < 60);

console.log(fstus);

// 각 과목 평균점수 계산해보기
// 1. 총점을 구하는 함수
// 2. 총점을 전체 길이로 나눠서 평균을 구하는 함수

// 총합 결과에 .kor을 할 수 없으므로 문제가 생김...
// students2.reduce((stu1, stu2) => stu1.kor + stu2.kor);

// reduce에 두 번째 인자값으로 초기값을 전달해주면
// 첫 번째 반복을 초기값으로 진행할 수 있음
const getTotal = (sub) =>
	students2.reduce((tot, stu) => {
		return tot + stu[sub];
	}, 0);

console.log("국어점수 총합:", getTotal("kor"));
console.log("영어점수 총합:", getTotal("eng"));
console.log("수학점수 총합:", getTotal("math"));

const getSubjectAvg = (sub) => getTotal(sub) / students2.length;

console.log(getSubjectAvg("kor"));
console.log(getSubjectAvg("eng"));
console.log(getSubjectAvg("math"));

const allStudentsTable = document.getElementById("all-students");
const badStudentsTable = document.getElementById("bad-students");

const addRow = (tabel, stu) => {
	tabel.innerHTML +=
		`<div>${stu.stuNum}</div>` +
		`<div>${stu.name}</div>` +
		`<div>${stu.kor}</div>` +
		`<div>${stu.eng}</div>` +
		`<div>${stu.math}</div>` +
		`<div>${stu.avg}</div>`;
};

students2.forEach((stu) => addRow(allStudentsTable, stu));
fstus.forEach((stu) => addRow(badStudentsTable, stu));
