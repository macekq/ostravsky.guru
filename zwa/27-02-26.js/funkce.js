let region = document.getElementById("region")

let regiony = [];

let regionyBtt = document.getElementById("nacistRegiony")

regionyBtt.addEventListener('click', () => {
		
	let url = "https://restcountries.com/v3.1/all?fields=name,region,currencies";
	let data = null;
	
	const request = new XMLHttpRequest();
		request.onload = function() {
			data = JSON.parse(this.responseText);
			
			// console.log(data);
			let opt = document.createElement("option");
			
			opt.value = "-";
			opt.text = "----------";
			
			region.innerHTML = "";
			region.append(opt);
			

			Object.values(data).forEach((hodnota) => {
				
				console.log(hodnota);
				console.log(hodnota["region"]);
				console.log(regiony.indexOf(hodnota["region"]));
				
				if (regiony.indexOf(hodnota["region"]) < 0) {
				
					regiony.push(hodnota["region"]);
					opt = document.createElement("option");
					opt.value = hodnota["region"];
					opt.text = hodnota["region"];
					region.append(opt);
				}
			});
		};
		request.open("GET", url);
		request.send();
})
let div = document.getElementById('cont')

region.addEventListener('change', () => {

	let url = "https://restcountries.com/v3.1/all?fields=region,name,currencies,unMember,regionalBlocs"

	// window.alert('true')
	window.alert(region.value)

	let select = document.createElement('select')
	select.id = 'select2'
	
	let mena = [];

	const request = new XMLHttpRequest();
	request.onload = function() {
		
		
		let data = JSON.parse(this.responseText);
		let statyVRegionu = data.filter(stat => stat.region === region.value);
		
		let nullOpt = document.createElement('option')
		nullOpt.value = -1; nullOpt.innerText = '-------'
		select.appendChild(nullOpt)

		let index = 0;
		statyVRegionu.forEach((hodnota) => {
			console.log(hodnota["name"]['common'], data[index]["currencies"])
			mena.push(data[index]["currencies"])

			let opt = document.createElement('option')
			
			opt.innerText = hodnota["name"]['common']
			opt.value = index
			
			// console.log(hodnota);
			// console.log(hodnota["name"]["common"]);
			
			select.appendChild(opt)
			
			
			index++
		})
	};
	request.open("GET", url);
	request.send();
	
	div.appendChild(select)

	console.log(mena)
	
	select.addEventListener('change', () => {
		console.log(mena[select.value])

		let text = document.createElement('div')
		text.innerText = `statni mena: ${mena[select.value]['ZWL']['name']} - ${mena[select.value]['ZWL']['symbol']}`

		div.appendChild(text)
	})

})