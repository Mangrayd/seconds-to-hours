module.exports =  function secToHours(sec){
	let h = parseInt( (sec/60)/60 );
	let m_full = parseInt( sec/60 );
	let m = m_full - h*60;
	let s = sec - m_full*60;

	let zeroPad = function(val){
		return val ? String(val/100).split('.')[1] : '00';
	};

	return `${zeroPad(h)}:${zeroPad(m)}:${zeroPad(s)}`;
};