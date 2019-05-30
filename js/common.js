
	
	document.oncontextmenu = function(){return false;}		
	document.ondragstart = function(){return false;}		
	document.onselectstart = function(){return false;}		
 
	function MM_openBrWindow(URL,winName,width,height) { 
		var w, strop;
		strop = "width=" + width + ",height=" + height + 
				",left=" + (screen.width/2 - width/2) + ",top=" + (screen.height/2 - height/2) + 
				",scrollbars=1,menubar=0,status=0,toolbar=0,location=0,directories=0,resizable=1";
	    window.open(URL,winName,strop);
	}
	
	function MM_openBrWindow2(URL,winName,width,height) { 
		var w, strop;
		strop = "width=" + width + ",height=" + height + 
				",left=" + (screen.width/2 - width/2) + ",top=" + (screen.height/2 - height/2) + 
				",scrollbars=0,menubar=0,status=0,toolbar=0,location=0,directories=0,resizable=0";
	    window.open(URL,winName,strop);
	}
	
	function submitHidden() {
		document.getElementById("area_submit").style.display = "none";
	}	
	
	// 입력값 숫자여부 체크
	function isDigit(Value) {
	    var Length = Value.length;
	    var lp = 0;
	      
	    for( ; lp<Length; lp++) {
	    	if( Value.charAt(lp) < '0' || Value.charAt(lp) > '9' ) return false;
	    }   
	    return true;
	}	
	
	// 주민 번호 체크
	function jumin_cal(val) {
		if( val.length != 13 ){
	      window.alert ("\n주민등록번호 13자리를 입력해 주십시오.");
	      return false;
		}
		if( isDigit(val)==false ){
	      window.alert ("\n주민등록번호를 숫자로 입력해 주십시오. ");
	      return false;
		}
	   str1 = val.substring(0,6) ;
	   str2 = val.substring(6) ;
	   li_value = new Array(13);
	   var li_lastid,li_mod,li_minus,li_last;
	  
	   li_lastid   = parseFloat(str2.substring(6,7));
	   li_value[0] = parseFloat(str1.substring(0,1))  * 2;
	   li_value[1] = parseFloat(str1.substring(1,2))  * 3;
	   li_value[2] = parseFloat(str1.substring(2,3))  * 4;
	   li_value[3] = parseFloat(str1.substring(3,4))  * 5;
	   li_value[4] = parseFloat(str1.substring(4,5))  * 6;
	   li_value[5] = parseFloat(str1.substring(5,6))  * 7;
	   li_value[6] = parseFloat(str2.substring(0,1))  * 8;
	   li_value[7] = parseFloat(str2.substring(1,2))  * 9;
	   li_value[8] = parseFloat(str2.substring(2,3))  * 2;
	   li_value[9] = parseFloat(str2.substring(3,4))  * 3;
	   li_value[10] = parseFloat(str2.substring(4,5)) * 4;
	   li_value[11] = parseFloat(str2.substring(5,6)) * 5;
	   li_value[12] = 0;
	   
	   for (var i = 0; i<12;i++) {
	       li_value[12] = li_value[12] + li_value[i];
	   }   
	   
	   li_mod = li_value[12] %11;
	   li_minus = 11 - li_mod;
	   li_last = li_minus % 10;
	   
	   if (li_last != li_lastid) {
	      window.alert ("\n주민등록번호가 맞지 않습니다. 다시 확인해 주십시오");
	      return false;
	   } else {
		   return true;
	   }
	}
	
	// 주민 번호 체크
	function jumin_cal_noMsg(val) {
		if( val.length != 13 ){

	      return false;
		}
		if( isDigit(val)==false ){

	      return false;
		}
	   str1 = val.substring(0,6) ;
	   str2 = val.substring(6) ;
	   li_value = new Array(13);
	   var li_lastid,li_mod,li_minus,li_last;
	  
	   li_lastid   = parseFloat(str2.substring(6,7));
	   li_value[0] = parseFloat(str1.substring(0,1))  * 2;
	   li_value[1] = parseFloat(str1.substring(1,2))  * 3;
	   li_value[2] = parseFloat(str1.substring(2,3))  * 4;
	   li_value[3] = parseFloat(str1.substring(3,4))  * 5;
	   li_value[4] = parseFloat(str1.substring(4,5))  * 6;
	   li_value[5] = parseFloat(str1.substring(5,6))  * 7;
	   li_value[6] = parseFloat(str2.substring(0,1))  * 8;
	   li_value[7] = parseFloat(str2.substring(1,2))  * 9;
	   li_value[8] = parseFloat(str2.substring(2,3))  * 2;
	   li_value[9] = parseFloat(str2.substring(3,4))  * 3;
	   li_value[10] = parseFloat(str2.substring(4,5)) * 4;
	   li_value[11] = parseFloat(str2.substring(5,6)) * 5;
	   li_value[12] = 0;
	   
	   for (var i = 0; i<12;i++) {
	       li_value[12] = li_value[12] + li_value[i];
	   }   
	   
	   li_mod = li_value[12] %11;
	   li_minus = 11 - li_mod;
	   li_last = li_minus % 10;
	   
	   if (li_last != li_lastid) {

	      return false;
	   } else {
		   return true;
	   }
	}		
	
	function social_num_make(social_val) {
		var sex_chk = social_val.substring(6,7); 
	     
		if(sex_chk == '1' || sex_chk =='2') {
			social_val = '19'+social_val.substring(0,6);
		}
		else {
			social_val = '20'+social_val.substring(0,6);
		}

		return social_val;
	}   

	function social_chk(input_social_no) {
		make_social_num = social_num_make(input_social_no);

		if(make_social_num < max_age || make_social_num > min_age ) {
			return false ;
		}	   
		return true;
	}
	
	function getBytes(str) {                          
	    var i, sum = 0;                               
	    for(i = 0; i < str.length; i++) { 
	    	if (str.charCodeAt(i) == 32 || str.charCodeAt(i) == 34 || str.charCodeAt(i) == 39) {
	        	sum += 1; 
	        }
	    }
	    return sum;                                   
	} 	
	
	function chkline(row) {
		if (event.keyCode==13) {
			tt = idea_form.idea.value;
		  	  
			cnt = 0;
			for (i=0; i<tt.length; i++) {
				if (tt.charCodeAt(i) == 13) cnt++;
			}

			if (cnt > row-2) {
				window.alert(row + '줄이상은 입력불가합니다!');
			}
		}	  
	}
	
	function dateCheck(val) {
		var yy = "";	var mm = "";	var dd = "";
		var iyy=0;			var imm=0;			var idd=0;
		if(val == ""|| val.length != 10 ) return false;
		if(val.substring(4,5) !="-" || val.substring(7,8) !="-" ) return false;  
		yy = val.substring(0,4); 
		mm = val.substring(5,7); 
		dd = val.substring(8);   
		if( !isDigit(yy) || !isDigit(mm) || !isDigit(dd)) return false; 
		iyy = parseFloat(yy) ;  
		imm = parseFloat(mm) ;	
		idd = parseFloat(dd) ;	
		if( iyy <= 0 ) return false;
		if( imm <= 0 || imm > 12 ) return false;
		if( idd <= 0 ) return false;
		if( imm == 1 || imm == 3 || imm == 5 || imm == 7 || imm == 8 || imm == 10 || imm == 12)
		if( idd > 31 ) return false;
		if( imm == 4 || imm == 6 || imm == 9 || imm == 11 )
		if( idd > 30 ) return false;
		
		yun=0;
		if ( (iyy%4)==0  && (iyy%100)!=0 || (iyy%400)==0 )  yun=1;  
		else yun=0;  //평년
		if( yun == 1 && imm ==2)
		if( idd > 29 ) return false;
		if( yun == 0 && imm ==2)
		if( idd > 28 ) return false;
		return true;
	}
	
	function Date_blur(str) {
		s2 = str.value;
		tmp_s2 = MaskEdit(CheckDate(s2));
		str.value = tmp_s2;
	}
		
	function Date_blur2(str) {
		s2 = str.value.replace(".","").replace(".","");
		tmp_s2 = MaskEdit(CheckDate2(s2));
		str.value = tmp_s2;
	}

	function Date_blur_string(str) {
		s2 = str;	
		tmp_s2 = MaskEdit(CheckDate(s2));
		return  tmp_s2;
	}

	function Date_focus(str) {
		s1= str.value;
		tmp_s1 = DateReplace(s1);
		str.value = tmp_s1;
		str.select();
	}
	function Date_focus_string(str) {
		s1= str;
		tmp_s1 = DateReplace(s1);
		return tmp_s1;
	}


	function Month_blur(str) {
		s2 = str.value;
		tmp_s2 = MaskMonth(CheckMonth(s2));
		str.value = tmp_s2;
	}
	
	function Month_blur_string(str) {
		s2 = str;
		tmp_s2 = MaskMonth(CheckMonth(s2));
		return tmp_s2;
	}

	function Month_focus(str) {
		s1= str.value;
		tmp_s1 = DateReplace(s1);
		str.value = tmp_s1;
		str.select();
	}
	function Month_focus_string(str) {
		s1= str;
		tmp_s1 = DateReplace(s1);
		return tmp_s1;
	}
	
	function checkAcceptDate(mDate){
		
		var val = Number(mDate.value);


		

		var sDate = "2017-05-29";				//향후 채용공고 시 본 변수의 값만 수정(유효기간 시작일)
		var eDate = "2019-04-19";				//향후 채용공고 시 본 변수의 값만 수정(유효기간 종료일)

		var sVal = sDate.replace(/-/ig, "");
		
		var eVal = eDate.replace(/-/ig, "");
		
		
		if(val != "" && (val < sVal || val > eVal)){
			
			alert(sDate + " 이후 응시하고 " + eDate + "까지 발표한 국내 정기시험 성적만 인정합니다.");
			
			mDate.value = "";
			
			mDate.focus();
			
			return false;
		
		}
	
	}
	
	function checkAcceptDate_opic(mDate){	
		
		var val = Number(mDate.value);

		var sDate = "2017-05-29";				//향후 채용공고 시 본 변수의 값만 수정(유효기간 시작일)
		var eDate = "2019-04-19";				//향후 채용공고 시 본 변수의 값만 수정(유효기간 종료일)
		
		var sVal = sDate.replace(/-/ig, "");
		
		var eVal = eDate.replace(/-/ig, "");
		
		
		if(val != "" && (val < sVal || val > eVal)){
			
			alert(sDate + "부터 " + eDate + "까지 발표한 시험 성적만 유효합니다.");
			
			mDate.value = "";
			
			mDate.focus();
			
			return false;
		
		}
	
	}

	function CheckDate(mDate) {
		tmpdate = Number(mDate);


		if (isNaN(tmpdate)) {
			alert("숫자만 입력가능합니다.");
			return "";
		}
		
		if(tmpdate == 0) 
		{
			return tmpdate;
		}
		if(mDate.length != 8)
		{
			alert(mDate + ' : 8자리수로 입력해 주세요.');
			return 0;
		}
		
	    nYear = Number(mDate.substring(0,4));
	    if( nYear < 1950 || nYear > 2025 ) {
	    	alert(mDate + ': 입력 년도가 알맞지 않습니다.');
			return 0;
		}	

		mYear = (tmpdate - (tmpdate % 10000)) / 10000;
		mMonth = ((tmpdate % 10000) - (tmpdate % 100)) / 100;
		mDay = tmpdate % 100;
		
		if( mYear < 0)
		{
			alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
			return 0;
		}
			
		if( mMonth <1 || mMonth > 12)
		{
			alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
			return 0;
		}
		if(mMonth == 1 || mMonth == 3 || mMonth == 5 || mMonth == 7 || mMonth == 8 || mMonth == 10 || mMonth == 12)
		{
			if(mDay < 1 || mDay > 31)
			{
				alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
				return 0;
			}
		}	
		else if(mMonth == 2)
		{
			if( ((mYear % 4) == 0 && (mYear % 100) != 0) || (mYear % 400) == 0 )
			{
				if(mDay < 1 || mDay > 29)
				{
					alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
					return 0;
				}			
			}
			else
			{
				if(mDay < 1 || mDay > 28)
				{
					alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
					return 0;
				}						
			}
		}
		else
		{
			if(mDay <1 || mDay > 30)
			{
				alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
				return 0;
			}
		}
		return tmpdate;
	}
		
	function CheckDate2(mDate) {
		tmpdate = Number(mDate);

		if(tmpdate == 0) 
		{
			return tmpdate;
		}
		if(mDate.length < 8)
		{
			alert(mDate + ' : 8자리수로 입력해 주세요.');
			return 0;
		}
		
	    nYear = Number(mDate.substring(0,4));
	    if( nYear < 1950 || nYear > 2017 ) {
	    	alert(mDate + ': 입력 년도가 알맞지 않습니다.');
			return 0;
		}	

		mYear = (tmpdate - (tmpdate % 10000)) / 10000;
		mMonth = ((tmpdate % 10000) - (tmpdate % 100)) / 100;
		mDay = tmpdate % 100;
		
		if( mYear < 0)
		{
			alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
			return 0;
		}
			
		if( mMonth <1 || mMonth > 12)
		{
			alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
			return 0;
		}
		if(mMonth == 1 || mMonth == 3 || mMonth == 5 || mMonth == 7 || mMonth == 8 || mMonth == 10 || mMonth == 12)
		{
			if(mDay < 1 || mDay > 31)
			{
				alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
				return 0;
			}
		}	
		else if(mMonth == 2)
		{
			if( ((mYear % 4) == 0 && (mYear % 100) != 0) || (mYear % 400) == 0 )
			{
				if(mDay < 1 || mDay > 29)
				{
					alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
					return 0;
				}			
			}
			else
			{
				if(mDay < 1 || mDay > 28)
				{
					alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
					return 0;
				}						
			}
		}
		else
		{
			if(mDay <1 || mDay > 30)
			{
				alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
				return 0;
			}
		}
		return tmpdate;
	}

	function CheckMonth(mDate)
	{
		tmpdate = Number(mDate);
		if(tmpdate == 0) 
		{
			return tmpdate;
		}
		if(mDate.length != 4)
		{
			alert(mDate+' 4자리수로 입력해 주세요.');
			return 0;
		}

		mYear = (tmpdate - (tmpdate % 10000)) / 10000;
		mMonth = ((tmpdate % 10000) - (tmpdate % 100)) / 100;
		mDay = tmpdate % 100;
		
		if( mYear < 0)
		{
			alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
			return 0;
		}
			
		if( mMonth <1 || mMonth > 12)
		{
			alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
			return 0;
		}
		if(mMonth == 1 || mMonth == 3 || mMonth == 5 || mMonth == 7 || mMonth == 8 || mMonth == 10 || mMonth == 12)
		{
			if(mDay < 1 || mDay > 31)
			{
				alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
				return 0;
			}
		}	
		else if(mMonth == 2)
		{
			if( ((mYear % 4) == 0 && (mYear % 100) != 0) || (mYear % 400) == 0 )
			{
				if(mDay < 1 || mDay > 29)
				{
					alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
					return 0;
				}			
			}
			else
			{
				if(mDay < 1 || mDay > 28)
				{
					alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
					return 0;
				}						
			}
		}
		else
		{
			if(mDay <1 || mDay > 30)
			{
				alert(mDate + ': 입력 날짜가 알맞지 않습니다.');
				return 0;
			}
		}
		return tmpdate;
		
	}

	function stringToint(tem)
	{
		tem = tem * 1;
		return tem;
	}
	function MaskEdit(str)
	{
		if(str == "")	
		{
			return "";
		}
		else if((str == "0")||(str == 0))	
		{
			return "0000-00-00";
		}
		else
		{
			tmpdate = Number(str);
			mYear	= (tmpdate - (tmpdate % 10000)) / 10000;
			mMonth	= ((tmpdate % 10000) - (tmpdate % 100)) / 100;
			mDay	= tmpdate % 100;
			mMonth	=	mMonth+"";
			mDay	=	mDay+"";
			if(mMonth.length == 1)
			{
				mMonth = "0"+mMonth;
			}
			if(mDay.length == 1)
			{
				mDay = "0"+mDay;
			}
			return mYear + "-" + mMonth + "-" + mDay;
		}

	}

	function MaskMonth(str)
	{
		if(str == "")	
		{
			return "";
		}
		else if((str == "0")||(str == 0))
		{
			return "00-00";
		}
		else
		{
			tmpdate = Number(str);
			mYear	= (tmpdate - (tmpdate % 10000)) / 10000;
			mMonth	= ((tmpdate % 10000) - (tmpdate % 100)) / 100;
			mDay	= tmpdate % 100;
			mMonth	= mMonth + "";
			mDay	= mDay + "";
			if(mMonth.length == 1)
			{
				mMonth = "0"+mMonth;
			}
			if(mDay.length == 1)
			{
				mDay = "0"+mDay;
			}
			return mMonth + "-" + mDay;
		}
	}

	function DateReplace(str)
	{
		tmp_char = "";
		onechar	= "";

		if(str != "")
		{
			for(i=0; i < str.length ; i++)
			{
				 onechar = str.substring(i,(i+1));

				if(onechar == "-")
				{
					onechar = "";
				}
				else
				{
					tmp_char = tmp_char+onechar;
				}
			}

			str = tmp_char;
			return str;
		} else {
			return "";
		}
	}	
	
	function gap_day(val, val2){    
		var ent = "";	
		var grad = "";
		var ient = 0; 	
		var igrad = 0;
		
		ent = val.substring(0,4)+val.substring(5,7)+val.substring(8);
		grad = val2.substring(0,4)+val2.substring(5,7)+val2.substring(8);
		ient = parseFloat(ent);
		igrad = parseFloat(grad);
		
		if(ient >= igrad) return false ;
		return true ; 
	}	
	
	var tempPrintContent;
	function printDiv() {
		if(document.all && window.print) {
			window.onbeforeprint = beforeDivs;
			window.onafterprint = afterDivs;
			window.print();
		}		
	}
	function beforeDivs() {
		if(document.all) {
			var rng = document.body.createTextRange();
			if(rng!=null) {
				tempPrintContent = rng.htmlText;
				rng.pasteHTML(
						"<table border='0' align='center'><tr><td>"
						+ document.all("print_title").innerHTML 
						+ document.all("print_body").innerHTML 
						+ "</td></tr></table>"
				);
			}
		}
	}
	
	function afterDivs() {
		if(document.all) {
			var rng = document.body.createTextRange();
			if(rng!=null) {
				rng.pasteHTML(tempPrintContent);
			}
		}
	}
	
	function pagePrint(Obj) {
		var W = Obj.offsetWidth;
		var H = Obj.offsetHeight;
		var features = "menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,width=350,height=" + H + ",left=0,top=0";
		var PrintPage = window.open("about:blank",Obj.id,features);
		PrintPage.document.open();
		PrintPage.document.write("<html><head><title></title><link rel='stylesheet' type='text/css' href='/front/com/css/cm.import.css' /><link rel='stylesheet' type='text/css' href='/front/com/css/kepcointro.css' /></head><body>\n" + Obj.innerHTML + "\n</body></html>");
		PrintPage.document.close();
		//printPage.document.title = document.domain;
		PrintPage.print(PrintPage.location.reload());
	}

	function pagePrint_finish(Obj) {
		var W = Obj.offsetWidth;
		var H = Obj.offsetHeight;
		var features = "menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,width=520,height=" + H + ",left=0,top=0";
		var PrintPage = window.open("about:blank",Obj.id,features);
		PrintPage.document.open();
		PrintPage.document.write("<html><head><title></title><link rel='stylesheet' type='text/css' href='/front/com/css/cm.import.css' /><link rel='stylesheet' type='text/css' href='/front/com/css/kepcointro.css' /></head><body>\n" + Obj.innerHTML + "\n</body></html>");
		PrintPage.document.close();
		//printPage.document.title = document.domain;
		PrintPage.print(PrintPage.location.reload());
	}
		
	function pagePrint2(Obj) {
		var W = Obj.offsetWidth;
		var H = Obj.offsetHeight;
		var features = "menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,width=1020,height=500,left=0,top=0";
		var PrintPage = window.open("about:blank",Obj.id,features);
		PrintPage.document.open();
		PrintPage.document.write("<html><head><title></title><LINK REL='STYLESHEET' TYPE='TEXT/CSS' HREF='/css/text_tab.css'/><LINK REL='STYLESHEET' TYPE='TEXT/CSS' HREF='/css/text.css'/></head><body>\n" + Obj.innerHTML + "\n</body></html>");
		PrintPage.document.close();
	}	
		
	function imgFileSizeChk(obj) {
	    var maxSize = 300 * 1024;
	    
	        var img = new Image();
	        img.src = obj.value;
	        var fileSize = img.fileSize;  
	          
	    if(fileSize > maxSize) {
	        alert("이미지 파일 업로드 허용용량("+ maxSize + ")Byte를 초과 하였습니다.");
	        return false;
	    }
	    
	    return true;	    
	}
	function fileSizeChk(obj) {
	    var maxSize = 5 * 1024 * 1024;
	    
	    if(typeof document.body.style.maxHeight != "undefined") {
	        //IE7
	        var fso = new ActiveXObject("Scripting.FileSystemObject");
	        var f = fso.GetFile(obj.value);
	        var fileSize = f.size;
	        
	        f = null;
	        fso = null;
	    }
	    else {
	        
	        var img = new Image();
	        img.dynsrc = obj.value;
	        var fileSize = img.fileSize;    
	    }
	    
	    alert("파일사이즈 : ["+fileSize+"/"+maxSize+"]");
	    if(fileSize > maxSize) {
	        alert("파일 업로드 허용용량("+ maxSize/1024/1024 + ")MByte를 초과 하였습니다.");
	        return false;
	    }
	    
	    return true;	    
	}
	
	String.prototype.bytes = function() {
		var str = this;
		var l = 0;
		for(var i=0; i<str.length; i++) {
			l += (str.charCodeAt(i) > 128)? 2:1; 
		}
		return l;		
	}
	
	function checkStrLimitLength(cObj,rObj,obj,msgLen,msgLine) {
		var temp;
		var str = obj.value.length;
	
		var msgNow = 0;  
		var tmpStr = "";
		var strLen;
		var totCnt = 0;
		
		if(str == 0) {
			cObj.value = msgNow;
			rObj.value = totCnt;
		}
		else {
			for(k=0;k<str;k++) {
				temp = obj.value.charAt(k);

				if(escape(temp).length > 4) msgNow +=1;
				else msgNow++;
				
				if(msgNow > msgLen) {
					alert(msgLen + " 글자를 초과하여 입력하실 수 없습니다.\n초과된 내용은 자동으로 삭제 됩니다.");
					obj.value=tmpStr;
					break;
				}
				else {
					cObj.value = msgNow;
					tmpStr += temp;
				}
				
				if(temp == '\n') totCnt++;
			} 
			

		}		
	}
	
	function getCutNumber(num, place) {
		 var returnNum;
		 var str = "1";
		 return Math.floor( num * Math.pow(10,parseInt(place,10)) ) / Math.pow(10,parseInt(place,10)); 
	}

	/*
	 * byte 수 20120113
	 */
	function getBytenew(str) {
		var l = 0;
		for (var i=0; i<str.length; i++) l += (str.charCodeAt(i) > 128) ? 2 : 1;
		return l;
	}

	function checkTextarea(obj) {
		var test = new Array();
		var addLineNum = 0;

		test = obj.value.split("\n");
		
		for (var i=0; i<test.length; i++) {
		
			if (test[i].length > obj.cols) {
				addLineNum = getCutNumber((test[i].length / obj.cols),0);
			}
		}

		document.getElementById("test_byte").innerHTML = getBytenew(obj.value);
		document.getElementById("test_line").innerHTML = test.length + addLineNum;
	}

	String.prototype.trim = function(){
		return this.replace(/(^\s*)|(\s*$)/gi, "");
	}

	String.prototype.rtrim = function(){
		return this.replace(/\s*$/gi, "");
	}

	 function stringCut(maxBytes, objId){
		var val = $("#"+objId).val();
		var max = Number(maxBytes);
		var curBytes = getBytenew(val);

		if(curBytes > maxBytes){
			alert("최대 영문 " + max + "자, 한글 " + Math.floor(max/2) + "자까지 입력 가능합니다.");
			$("#"+objId).val(val.substring(0, val.length - 1));
		}
	 }
