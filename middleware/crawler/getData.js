const cheerio = require("cheerio");
const request = require("request-promise");
const fs = require("fs");
const https = require('https');

module.exports = async function(req, res, next){
	const dir = 'C:/Users/YungSan/Desktop/products-img/pd_'+Date.now();

	if (!fs.existsSync(dir)){
		fs.mkdirSync(dir);
	}
	
	let links = [];
	const source = req.body.cheerio;
	
	await request(source, (error, response, html) => {
		if (!error && response.statusCode == 200) {
			const $ = cheerio.load(html);
			$("a[data-image]").each((i, el) => {
				console.log($(el).attr("data-image"));
				links.push($(el).attr("data-image"));
			});

			fs.writeFileSync('links.txt', JSON.stringify(links));
		} else {
			console.log(error);
		}
	});

	
	
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
	
	res.redirect('/products/addNewProduct');
}

