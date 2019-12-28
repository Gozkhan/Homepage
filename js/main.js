	function login() {
		if (document.login.id.value == "") { // ID 작성여부
			alert("ID는 반드시 작성해야 합니다.")
			document.login.id.focus();
			return;
		}
		if (document.login.pw.value == "") { // 암호 작성여부
			alert("비밀번호는 반드시 작성해야 합니다.")
			document.login.pw.focus();
			return false;
		}
		document.login.submit();
	}

	function reset() { // 초기화
		document.login.reset();
		document.login.name.focus();
	}
