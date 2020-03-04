let toolBox = {
	txt:'不传参数直接调用查看参数说明'
};
toolBox.numberFormat = function(num, decimals, dec_point, thousands_sep){
	let number = Number(num);
	if(typeof number == 'number'){
		number = (number + '').replace(/[^0-9+-Ee.]/g, '');
		let n = !isFinite(+number) ? 0 : +number,
			prec = !isFinite(+decimals) ? 2 : Math.abs(decimals),
			sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
			dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
			s = '',
		toFixedFix = function (n, prec) {
			let k = Math.pow(10, prec);
			return '' + Math.ceil(n * k) / k;
		};

		s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
		let re = /(-?\d+)(\d{3})/;
		while (re.test(s[0])) {
			s[0] = s[0].replace(re, "$1" + sep + "$2");
		}

		if ((s[1] || '').length < prec) {
			s[1] = s[1] || '';
			s[1] += new Array(prec - s[1].length + 1).join('0');
		}
		return s.join(dec);
	}else{
		console.log("参数说明：number, decimals, dec_point, thousands_sep")
		console.log("num：要格式化的数字")
		console.log("decimals：保留几位小数")
		console.log("dec_point：小数点符号")
		console.log("thousands_sep：千分位符号 工具参数说明：")
	}
}

export {toolBox}