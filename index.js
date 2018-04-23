module.exports =  function secToHours(sec){
	let h = parseInt( (sec/60)/60 );
	let m_full = parseInt( sec/60 );
	let m = m_full - h*60;
	let s = sec - m_full*60;

	let zeroPad = function(val){
		return String(val).length===1 ? ('0'+val) : val;
	};

	return `${zeroPad(h)}:${zeroPad(m)}:${zeroPad(s)}`;
};