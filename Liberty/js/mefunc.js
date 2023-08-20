/* Автор: Запара Вероника Вадимовна, 4ПМ */
function	 getObj(o){return document.getElementById(o);}

function	 MnuClick(obj){
	var h = window.location.href, j = h.length, a;
	for(j--; j>=0; j--) if(h.substr(j,1)=="/") break;
	h = (j == h.length-1)	? "index.html" : h.substr(j+1);
	switch(obj.id){
		case "logo":
			a = "index.html";
			break;
		case "cred":
			a = "credits.html";
			break;
		case "vklad":
			a = "deposits.html";
			break;
		case "supp":
			a = "support.html";
			break;
		case "geo":
			a = "geo.html";
			break;
		default:
			return;
	}
	if(a!="geo.html" || a!=h)	window.location.href = a;
}

function NumPositiveStrSpace(N){
	//возвращает в виде строки положительное число, разделённое по разрядам
	N = N.toString().replace(/ /g,'');
	while(N.length && N.substr(0,1)=='0')	N = N.substr(1);
	var bx = '', L = N.length;
	if(L){
		switch(N.substr(L-1,1).toUpperCase()){
			case '$':
				N = N.substr(0,L-1);	bx = ' $';	break;
			case 'Р':
				N = N.substr(0,L-1);	bx = ' Р';	break;
			default:
				bx = ' Р';
		}
		if (/[^\d]/.test(N)) N = "";
		else{
				var nmb = parseInt(N);
			if(isNaN(nmb) || !nmb) N = "";
			else N = N.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
		}
	}
	return N+bx;
}

function	 MesLet(N, year){
	N = N.toString().replace(/ /g,'').toLowerCase();
	if(!N) return "";
	while(N.length && N.substr(0,1)=='0')	N = N.substr(1);
	var Y=M='0', x=0, j = N.indexOf('мес');
	if(j>=0) N = N.substr(0,j);
	if( (j = N.indexOf('лет')) >=0 ) x = 3;
	else if( (j = N.indexOf('года')) >=0 ) x = 4;
	else if( (j = N.indexOf('год')) >=0 ) x = 3;
	if(!x)	 M = N;
	else{	Y = N.substr(0,j);	 M = N.substr(j+x);	}
	Y = Y || '0';	M = M || '0';
	if (/[^\d]/.test(Y) || /[^\d]/.test(M)) return "";
	Y = parseInt(Y);
	M = parseInt(M);
	if(Y+M==0)	 return "";
	M += Y * 12;
	if(!year) return M;
	if(M>11){
		j = M % 12;
		Y = (M-j) / 12;
		M = j;
		if(!Y)
			Y = "";
		else if( 5<=Y && Y<=20 )
			Y += " лет";
		else if( (j = Y % 10) == 1 )
			Y += " год";
		else if( 2 <= j && j <= 4 )
			Y += " года";
		else
			Y += " лет";
	}
	if(!Y)	Y = "";
	M = M ? (M +" мес.") : "";
	if(Y && M)	Y += " ";
	return Y+M;
}
