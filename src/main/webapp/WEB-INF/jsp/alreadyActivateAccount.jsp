<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/jsp/header.jspf"%>

<title>HiRender: Account is Already Registered</title>

<!-- Modify some CSS classes -->
<style>
.message-error {
	font-size: 14px;
	background: none no-repeat scroll 0 0 transparent;
	/* 	padding-left: 10px; */
	background-image: url("css/images/exclamation_16x16.png");
	color: #F30;
}
</style>

<%@include file="/WEB-INF/jsp/loadjs.jspf"%>

<script type="text/javascript">
	Ext.onReady(function() {
		console.log("alreadyActivateAccount : valid=", '${model.valid}');
		MyApp.event.App.on({
			created : function() {
				var me = this;

				var win = Ext.create('widget.window', {
					closable : false,
					draggable : false,
					resizable : false,
					shadow : false,
					defaultFocus : 'username',

					width : 370,
					items : [ {
						xtype : 'form',
						shadow : false,
						itemId : 'form',
						renderTo : Ext.getBody(),
						preventHeader : true,

						fieldDefaults : {
							msgTarget : 'under',
							labelWidth : 150
						},
						defaultType : 'textfield',
						defaults : {
							anchor : '100%'
						},
						items : [ {
							width : 213,
							height : 210,
							xtype : 'image',
// 											padding : '10 10 10 10',
							src : 'css/images/logo.png'
						}, {
							xtype : 'image',
							padding : '0 10 5 10',
							src : 'css/images/signin-page-hr-line.gif'
						}, {
							xtype : 'component',
							html : ${model.valid} ? Locale.getMsg('view.account.illegalActivateLink.mesg') : Locale.getMsg('view.account.alreadyActivate.mesg'),
							baseCls : 'message-error',
							padding : '5 20 10 20'
						}						]
					} ]
				});
				win.show();
			}
		});

	});
</script>

<%@include file="/WEB-INF/jsp/footer.jspf"%>
