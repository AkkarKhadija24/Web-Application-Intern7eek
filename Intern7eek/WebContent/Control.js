/**
 * 
 */

$(document).ready(function() {
	loadHome();
});

function loadHome() {
	$("#Home").load("Home.html", function() {
		$("#BTSignUp").click(function() {
			loadSignUpCompany();
		});
	});
}

function loadSignUpCompany() {
	$("#ShowMessage").empty();
	$("#Home").load("SignUpCompany.html", function() {
		$("#BTValSubmit").click(function() {
			company = {};
			company.name=$("#CompanyName").val();
			company.reference=$("#Reference").val();		
			invokePost("rest/addcompany", company, "company was added", "failed to add a company");
			loadMain();
		});
	});
}

function invokePost(url, data, successMsg, failureMsg) {
	jQuery.ajax({
	    url: url,
	    type: "POST",
	    data: JSON.stringify(data),
	    dataType: "json",
	    contentType: "application/json; charset=utf-8",
	    success: function (response) {
	    	$("#ShowMessage").text(successMsg);
	    },
	    error: function (response) {
	    	$("#ShowMessage").text(failureMsg);
	    }
	});
}
function invokeGet(url, failureMsg, responseHandler) {
	jQuery.ajax({
	    url: url,
	    type: "GET",
	    success: responseHandler,
	    error: function (response) {
	    	$("#ShowMessage").text(failureMsg);
	    }
	});
}