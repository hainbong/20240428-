<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<script>

function fn_test(e){
	e.setAttribute("style", "background-color:blue ; cursor: pointer");
	e.setAttribute("idx", "test4545");
	alert(e);
	
}
</script>
<div id="hib" idx="hibName" onclick="fn_test(this)" style="background-color:red ; cursor: pointer" >이거클리해볼까요?</div>
</body>
</html>