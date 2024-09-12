const task=document.querySelector(".tasks");
const task_ul=document.querySelector(".ul-1");
const task_button=document.querySelector(".task_button");


task_button.addEventListener('click', () => {

	const add_task=prompt("추가할 할일을 입력하세요");
	const pp=document.createElement('div');
	pp.className="pp";
	document.querySelector(".bigspan").appendChild(pp);
	const big=document.createElement('div');
	big.className="big";
	
	const x=document.querySelector(".pp");

	const y=x.length-1;
	
	const input=document.createElement("input");
	input.type="checkbox";
	
	const label = document.createElement('label')
	label.textContent =add_task;
	const deletebutton=document.createElement('button');
	
	deletebutton.innerHTML="삭제";
	deletebutton.className="delete_button";
	const a=document.querySelectorAll(".big");
	const w=document.querySelectorAll(".pp");
	const q=w.length-1;
	const b=a.length;
	
	document.querySelectorAll(".pp")[q].appendChild(big);
	
	document.querySelectorAll(".big")[b].appendChild(input);
	document.querySelectorAll(".big")[b].appendChild(label);
	document.querySelectorAll(".pp")[b].appendChild(deletebutton);
	
	// const delete_button=document.querySelector(".delete_button");
	deletebutton.addEventListener('click', () => {
			const bigs=document.querySelector(".bigspan")
			bigs.parentNode.removeChild(pp);
		
	
	});

});


