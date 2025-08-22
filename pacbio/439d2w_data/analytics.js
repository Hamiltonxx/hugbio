
function piResponse() {
		piSetCookie('visitor_id1652', '1028548290', 3650);
			piSetCookie('visitor_id1652-hash', '26953a4ae164e5f078c8e867c6ce954b4c439f55904c8c9250a6c4282a430422d76296d06bad4f110f56e9fc851f0190181d9348', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "programs.pacb.com/analytics?";
		pi.tracker.visitor_id='1028548290';

				pi.tracker.visitor_id_sign='26953a4ae164e5f078c8e867c6ce954b4c439f55904c8c9250a6c4282a430422d76296d06bad4f110f56e9fc851f0190181d9348';
		
				pi.tracker.campaign_id='122374';
		
		var variables = 'conly=true';
		for (property in pi.tracker) {
					variables += "&" + property + "=" + encodeURIComponent(pi.tracker[property]);
				}
		var headID = document.getElementsByTagName("head")[0];
		piScriptObj[piScriptNum] = document.createElement('script');
		piScriptObj[piScriptNum].type = 'text/javascript';
		piScriptObj[piScriptNum].src = analytics_link + variables;
		headID.appendChild(piScriptObj[piScriptNum]);
		piScriptObj[piScriptNum].onload = function() { return; }
	}
	}
piResponse();




