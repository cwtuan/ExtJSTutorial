Ext.define('Ecfa.view.project._CreateProjectWin', {
	extend : 'Ext.window.Window',
	alias : 'widget.createProjectWin',
	panel : null,
	width : 400,
	modal : true,
	layout : {
		type : 'fit'
	},
	title : Locale.getMsg('view.project.create'),
	initComponent : function() {
		var me = this;

		me.defaultFocus = 'name';

		me.items = [ {
			xtype : 'form',
			bodyPadding : 10,
			layout : 'anchor',
			defaults : {
				anchor : '100%',
				labelWidth : 110
			},

			items : [ {
				xtype : 'textfield',
				fieldLabel : Locale.getMsg('view.common.title'),
				name : 'name',
				itemId : 'name',
				maxLength : 50,
				allowBlank : false,
				// validator : function(value){return true;}
				validator : Ecfa.Validator.noSpecialChar
			} ],

			buttons : [ {
				text : Locale.getMsg('view.common.ok'),
				formBind : true,
				type : 'submit',
				handler : function() {

					// console.log(params);
					// Ecfa.event.Project.fireEvent('running', true);
					var data = this.up('form').getValues();
					var modelName = me.panel.store.model.modelName;
					var url = me.panel.store.getBaseUrl();

					Ecfa.Restful.request({
						url : url,
						record : data,
						method : 'POST',
						eventType : Ecfa.event.Project,
						successSubject : Locale.getMsg('view.project.create.success', data.name),
						failureSubject : Locale.getMsg('view.project.create.error', data.name),
						success : function(jsonResp) {
						},
						failure : function(jsonResp) {
						},
						callback : function() {
						}
					});
					me.close();

				}
			}, {
				text : Locale.getMsg('view.common.cancel'),
				handler : function() {
					me.close();
				}
			} ]
		} ];
		me.callParent();
	}
});
