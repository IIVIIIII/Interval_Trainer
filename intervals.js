outlets = 2

var intervals = ['m2','M2','m3','M3','P4','d5','P5','m6','M6','m7','M7','P8','m9','M9'];

var chosen = [];


function set(a,b,c,d,e,f,g,h,i,j,k,l,m,n) {
		
	options = [a,b,c,d,e,f,g,h,i,j,k,l,m,n];
	
	chosen = [];
	
	
	for (i=0; i<14; i++) {
		
		if (options[i] == 1) {
			
			chosen.push([intervals[i], i+1]);
			
		}
	}
}


function bang() {
	
	Max = chosen.length
	
	if (Max != 0) {
	
		ran = Math.floor(Math.random() * Max);
	
		inteval = chosen[ran]
	
		outlet(0,inteval[0])
		outlet(1,inteval[1])
	
	} else {
	
		outlet(0,'!')
	
	}
}