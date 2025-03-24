//your JS code here. If required.
let arr = [1, 2, 3, 4]
let output = document.querySelector("#output");

let myPromise = new Promise((res, rej) => {
	setTimeout(()=>{
		res(arr) 
	}, 3000)
})

myPromise.then((arr) =>{
	let evenArr = arr.filter(elm => elm%2==0)
	return new Promise((res) => {
		setTimeout(()=>{
			output.innerText = evenArr;
			res(evenArr)
		}, 1000)
	})
	
}).then((arr)=>{
	let mulArr = arr.map(elm => elm*2)
	setTimeout(()=>{
		output.innerText = mulArr;
	}, 2000)
})



