const datachamp ={
	"top3champs": [{
		"name": "Shen",
		"mastery": 107007
	}, {
		"name": "Syndra",
		"mastery": 69442
	}, {
		"name": "Maokai",
		"mastery": 42545
	}],
	"totalmastery": 1211560
}
let nameChamp1, nameChamp2, nameChamp3, masteryChamp1, masteryChamp2, masteryChamp3, otherChamps, totalMastery

const makeChart= function(){
	console.log('Make Chart Go');
	//setup block
	const data = {
		labels:[nameChamp1, nameChamp2, nameChamp3,'Other champs'],
		datasets:[{
			label: 'Mastery points',
			data: [
				masteryChamp1, masteryChamp2, masteryChamp3, otherChamps
			],
			backgroundColor: [
				'#39BF6E',
				'#FFB640',
				'#9B4BA6',
				'#A595A6'
			],
			cutout:'90%'
		}]
	};

	// counter plugin block
	const counter ={
		id: 'counter',
		beforeDraw(chart, args, options) {
			const{ctx, chartArea:{top, right, botto, left, width, height}} = chart;
			ctx.save();
			ctx.fillStyle= '#19171A'
			//1 how to get position
			//2 how to write text and automate text
			ctx.font = '24px semplicitapro'
			ctx.textAlign = 'center'
			ctx.text
			ctx.fillText(`${totalMastery} Total Mastery`, width/2, top+ (height/2) )
			// x0 = starting point on the horizontal level l/r
			// y0 = starting point verical level t/b
			// x1 = length of the shape in pixels horizontal
			// y1 = length of the shape in pixels vertical
		}
	};

	// config block
	const config = {
		type:'doughnut',
		data,
		options:{
		},
		plugins: [counter]
	};


	//render init block
	Chart.defaults.font.size = 20;
	const myChart = new Chart(
		document.getElementById('myChart'),
		config
	);

};
const init= function(){
	console.log('DOM Geladen')
	//Champ1
	nameChamp1= datachamp['top3champs'][0]['name'];
	// console.log(nameChamp1)
	masteryChamp1= datachamp['top3champs'][0]['mastery'];
	// console.log(masteryChamp1)

	//Champ2
	nameChamp2= datachamp['top3champs'][1]['name'];
	// console.log(nameChamp2)
	masteryChamp2= datachamp['top3champs'][1]['mastery'];
	// console.log(masteryChamp2)
	//Champ 3
	nameChamp3=datachamp['top3champs'][2]['name'];
	// console.log(nameChamp3)
	masteryChamp3= datachamp['top3champs'][2]['mastery'];
	// console.log(masteryChamp3)
	//Other Champs
	otherChamps= ((datachamp['totalmastery'])- masteryChamp1 - masteryChamp2 - masteryChamp3)
	// console.log(otherChamps)

	//Total mastery
	totalMastery=datachamp['totalmastery']
	// console.log(totalMastery)
	makeChart()
};
document.addEventListener('DOMContentLoaded', init)
