const https = require('https');
const fs = require('fs');

module.exports = function(req, res, next){
	const dir = 'C:/Users/YungSan/Desktop/products_'+Date.now();

	if (!fs.existsSync(dir)){
			fs.mkdirSync(dir);
	}
	
	try {
		if (fs.existsSync('links.txt')) {
			downloadData();
			console.log('Downloading...');
		}
		else {
			console.log('links.txt is not exists');
		}
	} catch (err) {
		console.error(err)
	}
	
	function downloadData() {
		fs.readFile('links.txt', 'utf8', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
			else{
				console.log(data)
			}
	
			data = JSON.parse(data);
			for (let i = 0; i < data.length; i++) {
				const file = fs.createWriteStream(`${dir}/${i}.webp`);
				const request = https.get(data[i], function (response) {
					response.pipe(file);
				});
	
			}
		})
	}
}

