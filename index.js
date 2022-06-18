const jsonfile = require('jsonfile');
const simpleGit = require('simple-git');
const randomInt = require('./random.js').randomInt;

const FILE_PATH = './data.json';

const makeCommit = (n) => {
	if (n === 0) return simpleGit().push();

	const x = randomInt(0, 54);
	const y = randomInt(0, 7);

	const DATE = new Date();

	DATE.setUTCFullYear(DATE.getUTCFullYear() - 13);
	// DATE.setDate(DATE.getDate() + 1);
	// DATE.setDate(DATE.getDate() + x * 7);
	// DATE.setDate(DATE.getDate() + y);
	DATE.setDate(DATE.getDate() + (x * 7 + y + 1));
	/*
     * you can speed up with this ::
      DATE.setDate(
           DATE.getDate()+(((x*7)+y)+1)
       );
     *
     *
     */
	//2009
	//2010
	//2011
	//2012
	//2013
	//2014
	//2015
	//2016
	//2017
	//2018
	//2019
	//2020
	//2021 a

	const data = {
		date: DATE.valueOf(),
	};

	console.log(DATE);

	jsonfile.writeFile(FILE_PATH, data, () => {
		// git commit --date = ""
		simpleGit()
			.add([FILE_PATH])
			.commit(
				DATE.toISOString(),
				{ '--date': DATE.toISOString() },
				makeCommit.bind(this, --n)
			);
	});
};

makeCommit(1000);
