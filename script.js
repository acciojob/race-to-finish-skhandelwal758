let promise1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("promise1");
	},1000);
});

let promise2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("promise2");
	},2000);
});

let promise5 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("promise5");
	},5000);
});

let promise3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("promise3");
	},3000);
});

let promise4 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("promise4");
	},4000);
});

window.promises = [promise1,promise2,promise3,promise4,promise5];

// Do not change the code above this
// add your promises to the array `promises`
Promise.any([promise1,promise2,promise3,promise4,promise5]).then((res)=>{
    console.log(res);
	document.getElementById("output").innerHTML=res;
});
