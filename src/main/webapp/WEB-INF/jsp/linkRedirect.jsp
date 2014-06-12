<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/jsp/header.jspf"%>

<title>Redirecting...</title>
<%@include file="/WEB-INF/jsp/loadjs.jspf"%>

<script type="text/javascript">
Ext.onReady(function() {
		console.log('LINK REDIRECT..');
			
		// TODO tony: need to wait for MyApp.event.App event?
		MyApp.event.App.on({
			created : function() {
				
				window.location = '${map.redirectPage}';//call real restAPI in QueueController for download
				
				//setTimeout("window.location = './';", 3000);
				/*Ext.create('widget.window',{
					//layout : 'fit',
					items : [ {
						xtype : 'linkButton',
						text : '進入網站', 
						listeners : {
							click : function() {
								window.location = './';
							}
						}
					} ]
					
				});*/	
			}
		});
		
		/*Ext.create('widget.linkButton',{
			text : '檔案下載中....您可由此進入網站'
		});*/
		
	}
);
</script>

<%@include file="/WEB-INF/jsp/footer.jspf"%>
