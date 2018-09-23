'use strict';
const alfy = require('alfy');
const rarbgApi = require('rarbg-api');

rarbgApi.search(alfy.input, { sort: 'seeders' }).then(data => {
	alfy.output(data.map(function(x) {
		return {
			title: x.title,
			subtitle: `${x.seeders} seeder${x.seeders == 1 ? '' : 's'}, ${x.leechers} leecher${x.leechers == 1 ? '' : 's'}, ${humanFileSize(x.size, false)}`,
			arg: x.download
		};
	}));
});

/**
 * From https: //stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string
 * @param {*} bytes 			bytes in the file
 * @param {*} si 				whether to use base 10 instead of base 2
 */
function humanFileSize(bytes, si) {
	var thresh = si ? 1000 : 1024;
	if (Math.abs(bytes) < thresh) {
		return bytes + ' B';
	}
	var units = si
		? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
		: ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
	var u = -1;
	do {
		bytes /= thresh;
		++u;
	} while (Math.abs(bytes) >= thresh && u < units.length - 1);
	return bytes.toFixed(1) + ' ' + units[u];
}
