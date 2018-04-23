module.exports =  function secToHours(sec){
	let h = parseInt( (sec/60)/60 );
	let m_full = parseInt( sec/60 );
	let m = m_full - h*60;
	let s = sec - m_full*60;

	let zeroPad = function(val){
		return String(val).length===1 ? ('0'+val) : val;
	};

	// console.log( 'кол-во целых часов: ', h );
	// console.log( 'кол-во целых минут: ', m_full );
	// console.log( `кол-во минут: ${m_full}мин - ${h}ч (${h*60}мин) = ${m_full - h*60}` );
	// console.log( `кол-во секунд: ${sec}сек - ${m_full}мин (${m_full*60}сек) = ${sec - m_full*60}` );
	// console.log( `Result: ${h}:${seroPad(m)}:${seroPad(s)}` );

	return `${zeroPad(h)}:${zeroPad(m)}:${zeroPad(s)}`;
};