<!-- TODO reject project -->


<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/jsp/header.jspf"%>

<!-- TODO title locale -->
<title>HiRender: Project Invitation</title>

<!-- Modify some CSS classes -->
<style>
.message {
	background: none no-repeat scroll 0 0 transparent;
	cursor: default;
	font-size: 14px;
	height: 22px;
	line-height: 18px;
	padding-left: 30px;
	color: #333;
}

.message-error {
	padding-left: 10px;
	background-image: url("css/images/exclamation_16x16.png");
	color: #F30;
}
</style>



<%@include file="/WEB-INF/jsp/loadjs.jspf"%>

<script type="text/javascript">
	Ext.onReady(function() {

		MyApp.event.App.on({
			created : function() {
				var me = this;

				console.log('action', '${map.action}');
				console.log('invitationOid', '${map.invitationOid}');
				console.log('inviteEmail', '${map.inviteEmail}');
				console.log('currentUserEmail', '${map.currentUserEmail}');
				console.log('projectOid', '${map.projectOid}');
				console.log('projectName', '${map.projectName}');
				console.log('role', '${map.role}');
				console.log('callbackPage', '${map.callbackPage}');

				// determine message according to map.action
				if ('${map.action}' === MyApp.Const.Invitation.Action.INVITATION_NOT_EXIST) {
					me.html = Locale.getMsg('view.project.user.invite.page.action.invitation_not_exist');
				} else if ('${map.action}' === MyApp.Const.Invitation.Action.ABLE_TO_ACCEPT) {
					me.html = Locale.getMsg('view.project.user.invite.page.action.able_to_accept', '${map.projectName}', '${map.createUserId}',
							MyApp.locale.Converter.getProjectRole('${map.role}'));
				} else if ('${map.action}' === MyApp.Const.Invitation.Action.NEED_SIGNOUT) {
					me.html = Locale.getMsg('view.project.user.invite.page.action.need_signout', '${map.projectName}', '${map.createUserId}',
							'${map.inviteEmail}', '${map.currentUserEmail}');
				} else if ('${map.action}' === MyApp.Const.Invitation.Action.NEED_SIGNIN) {
					me.html = Locale.getMsg('view.project.user.invite.page.action.need_signin', '${map.projectName}', '${map.createUserId}',
							'${map.callbackPage}', '${map.inviteEmail}');
				} else if ('${map.action}' === MyApp.Const.Invitation.Action.EXPIRED) {
					me.html = Locale.getMsg('view.project.user.invite.page.action.expired', '${map.projectName}', '${map.createUserId}');
				} else if ('${map.action}' === MyApp.Const.Invitation.Action.ALREADY_ACCEPTED) {
					me.html = Locale.getMsg('view.project.user.invite.page.action.already_accepted', '${map.projectName}', '${map.createUserId}');
				} else {
					throw 'undefined action: ' + '${map.action}';
				}

				var win = Ext.create('widget.window', {
					closable : false,
					draggable : false,
					resizable : false,
					shadow : false,
					defaultFocus : 'username',
					width : 400,
					items : [
							{
								xtype : 'form',
								shadow : false,
								itemId : 'form',
								renderTo : Ext.getBody(),
								preventHeader : true,
								//bodyPadding : '20 20 10 20',
								fieldDefaults : {
									msgTarget : 'under',
									labelWidth : 75
								},
								defaultType : 'textfield',
								defaults : {
									anchor : '100%'
								},
								listeners : {
									afterRender : function(thisForm, options) {
										this.keyNav = Ext.create('Ext.util.KeyNav', this.el, {
											enter : function() {
												var form = this.getForm();
												if (form.isValid()) {
													form.submit(submitOptions);
													this.down('#submit').setText(Locale.getMsg('view.session.signingin'));
													this.down('#submit').setDisabled(true);
													win.down('#formErrorState').clearError();
												}
											},
											scope : this
										});
									}
								},
								items : [ {
									width : 213,
									height : 210,
									xtype : 'image',
									// 											padding : '10 10 10 10',
									src : 'css/images/logo.png'
								}, {
									// FIXME not show in IE
									xtype : 'image',
									padding : '0 10 5 0',
									src : 'css/images/signin-page-hr-line.gif'
								}, {
									xtype : 'component',
									html : me.html,
									padding : '5 20 5 20'
								} ],
								dockedItems : [ {
									xtype : 'toolbar',
									dock : 'bottom',
									ui : 'footer',
									padding : '0 15 10 20',
									items : [
											'->',
											{
												xtype : 'button',
												disabled : '${map.action}' !== MyApp.Const.Invitation.Action.ABLE_TO_ACCEPT,
												height : 35,
												text : Locale.getMsg('view.project.user.invite.accept'),
												itemId : 'submit',
												type : 'submit',
												width : 70,
												handler : function() {

													this.setDisabled(true);
													win.down('#message').clearMessage();

													MyApp.Restful.PUT('rest/invitations/' + '${map.invitationOid}' + '?action=accept', [], {
														success : function(jsonResp) {
															win.down('#message').setMessage(true,
																	Locale.getMsg('view.project.user.invite.accept.redirect', '3'));
															setTimeout("window.location = './';", 3000);
														},
														failure : function(jsonResp) {
															win.down('#message').setMessage(
																	false,
																	MyApp.locale.Converter.getErrorMsg(Locale.getMsg('view.project.user.invite.accept.error'),
																			jsonResp));
															win.down('#submit').setDisabled(false);
														}
													});

												}

											} ]
								} ]
							}, {
								itemId : 'message',
								xtype : 'component',
								baseCls : 'message ',
								padding : '0 10 10 20',
								hidden : true,
								setMessage : function(success, msg) {
									var me = this, baseCls = me.baseCls;
									if (!success) {
										me.addCls(baseCls + '-error');
									}
									me.update(msg);
									me.setVisible(true);
								},
								clearMessage : function() {
									var me = this, baseCls = me.baseCls;
									me.removeCls(baseCls + '-error');
									me.update('');
									me.setVisible(false);
								},
								listeners : {
									afterrender : function(eOpts) {
										var me = this;
										var search = Ext.Object.fromQueryString(window.location.search);
										if (search.error) {
											me.setError(search.error);
										}
									}
								}
							}

					// 									, {
					// 										html : '<div style="padding:0px 0 0 100px;text-align:left;"><a href="./recoverAccount">Forget password???</a></div>',
					// 										baseCls : ''
					// 									} 
					]
				});
				win.show();

			}
		});

	});
</script>

<%@include file="/WEB-INF/jsp/footer.jspf"%>
