const pushBtn = document.querySelector("#pushBtn");
const popBtn = document.querySelector("#popBtn");

const shiftBtn = document.querySelector("#shiftBtn");
const unshiftBtn = document.querySelector("#unshiftBtn");

const out = document.querySelector("#out");

var countNum = 0;

function addGrade() {
	// const gradeColors = ["red", "green", "blue", "orange", "skyblue", "#ccc"];

	const newWrap = document.createElement("div");

	const newDiv = document.createElement("div");
	const newText = document.createTextNode("Grade");

	const newDiv2 = document.createElement("div");
	const newCount = document.createTextNode("[" + ++countNum + "]");

	newDiv.classList.add("material-symbols-outlined");
	newDiv.style.fontSize = "30px";
	newDiv.style.color = "#" + Math.round(Math.random() * 0xffffff).toString(16);

	// newDiv.style.color = gradeColors[parseInt(Math.random() * gradeColors.length)];
	// newDiv.style.color = "red";

	newDiv2.style.fontSize = "15px";
	newDiv2.style.color = "black";

	newWrap.style.boxSizing = "border-box";
	newWrap.style.display = "flex";
	newWrap.classList.add("wrap" + countNum);

	newDiv.appendChild(newText);
	newDiv2.appendChild(newCount);

	newWrap.appendChild(newDiv);
	newWrap.appendChild(newDiv2);

	return newWrap;
}

// 새 요소 객체 만들어서 자식으로 추가하기
pushBtn.addEventListener("click", (e) => {
	// // 1. Element node를 생성한다
	// const newDiv = document.createElement("div");
	// // 2. Text node를 생성한다
	// const newText = document.createTextNode("Grade");

	// // 3. Element node를 설정한다
	// newDiv.classList.add("material-symbols-outlined");
	// newDiv.style.fontSize = "30px";
	// newDiv.style.color = "red";

	// // 4. Element node에 Text node를 부착한다
	// newDiv.appendChild(newText);

	// // 5. 새 Element node를 out을 추가한다.

	// // out.appendChild(newDiv);
	// // out.appendChild(newDiv2);
	// out.append(newDiv);

	out.append(new addGrade());
});

popBtn.addEventListener("click", (e) => {
	const removeWrap = document.querySelector("#out").lastChild;
	// console.log(removeDiv);
	out.removeChild(removeWrap);
});

shiftBtn.addEventListener("click", (e) => {
	const oldWrap = document.querySelector("#out").firstChild;

	out.insertBefore(addGrade(countNum), oldWrap);
});

unshiftBtn.addEventListener("click", (e) => {
	const removeWrap = document.querySelector("#out").firstChild;
	out.removeChild(removeWrap);
});
