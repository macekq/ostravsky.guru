const region = document.getElementById("region")
let regiony = [];
const regionyBtt = document.getElementById("nacistRegiony")

regionyBtt.addEventListener('click', () => {
		
	let url = "https://restcountries.com/v3.1/all?fields=name,region,currencies";
	let data = null;
	
	const request = new XMLHttpRequest();
		request.onload = function() {
			data = JSON.parse(this.responseText);

			let opt = document.createElement("option");
			
			opt.value = "-";
			opt.text = "----------";
			
			region.innerHTML = "";
			region.append(opt);

			Object.values(data).forEach((hodnota) => {
				
				// console.log(hodnota);
				// console.log(hodnota["region"]);
				// console.log(regiony.indexOf(hodnota["region"]));
				
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
const div = document.getElementById('cont'); info = document.getElementById('coutryInfo')
const table = document.getElementById('table')

region.addEventListener('change', () => {
	table.innerHTML = ''
	try{
		document.getElementById('select2').remove()
	}catch(error){}

	let url = "https://restcountries.com/v3.1/all?fields=region,name,currencies,unMember,subregion,capital,population,flag,borders"

	let select = document.createElement('select')
	select.id = 'select2'

	let unCounter = 0;

	const request = new XMLHttpRequest();
	request.onload = function() {
		
		let last = '';
		let data = JSON.parse(this.responseText);
		let statyVRegionu = data.filter(stat => stat.region === region.value);
		
		let nullOpt = document.createElement('option')
		nullOpt.value = -1; nullOpt.innerText = '-------'
		select.appendChild(nullOpt)
		
		
		let stRow = document.createElement('tr')
		stRow.style.backgroundColor = 'black'
		stRow.style.color = 'white'

		let coutryCount = document.createElement('td')
		coutryCount.innerText = `celkovy pocet: ${statyVRegionu.length}`
		let unCount = document.createElement('td')
		stRow.append(coutryCount, document.createElement('td'), unCount)
		table.appendChild(stRow)


		// console.log(statyVRegionu)
		for(let i = 0; i<statyVRegionu.length; i++){
			// console.log(statyVRegionu[i])
			
			//vytvoreni tabulky pro zobrazeni podragionu

			let row = document.createElement('tr')
			row.id = `row${i}`

			let regionCell = document.createElement('td')
			regionCell.innerText = statyVRegionu[i].name.official

			let menaCell = document.createElement('td')
			let first = true; text = '';
			Object.entries(statyVRegionu[i].currencies).forEach(([klic, obj]) => {
					
				if(first){
					first = false
					text += 'hlavni '
				}
				text += `mena: ${klic} ${obj.name} - ${obj.symbol}\n\n`
			})
			menaCell.innerText = text
			let un = document.createElement('td')

			un.innerText = statyVRegionu[i].unMember ? 'ano' : 'ne'
			unCounter = statyVRegionu[i].unMember ? unCounter+1 : unCounter
			
			row.append(regionCell, menaCell, un)
			table.appendChild(row)

			//vyplneni selectu2 -> vyber podregionu/statu
			let opt = document.createElement('option')
			
			opt.innerText = statyVRegionu[i].name.common
			opt.value = i

			select.appendChild(opt)
			
			//po vybrani ze selectu 2 se zobrazi info o statu
			opt.addEventListener('click', () => {
				
				try{document.getElementById(last).style.backgroundColor = ''}catch(error){}
				document.getElementById(`row${opt.value}`).style.backgroundColor = 'red'
				last = `row${opt.value}`

				let text = `oficialni nazev: ${statyVRegionu[i].name.official} [${statyVRegionu[i].name.official.substring(0, 3).toUpperCase()}]\n\n`
				let first = true
				info.innerHTML = ''
				
				console.log(statyVRegionu[i])

				Object.entries(statyVRegionu[i].currencies).forEach(([klic, obj]) => {
					
					if(first){
						first = false
						text += 'hlavni '
					}
					text += `mena: ${klic} ${obj.name} - ${obj.symbol}\n`

				})
				text += `hlavni mesto: ${statyVRegionu[i].capital[0]}`
				text += `\nun member: ${statyVRegionu[i].unMember ? 'ano' : 'ne'}`
				text += `\npopulace: ${statyVRegionu[i].population}`
				text += `\nvlajka: ${statyVRegionu[i].flag}`
				text += `\npodregion: ${statyVRegionu[i].subregion}`
				text += `\n\nsousedici zeme:`
				for(let item of statyVRegionu[i].borders){
					text += '\n-> ' + item
				}
				// console.log(statyVRegionu[i].flag, typeof statyVRegionu[i].flag)
				
				const coutryInfo = document.createElement('div')
				coutryInfo.innerText = text
				info.appendChild(coutryInfo)
			})
		}
		unCount.innerText = unCounter
	};
	request.open("GET", url);
	request.send();

	div.appendChild(select)
})