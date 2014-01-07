Ext.define('Ecfa.view.project.action._EditProjectAction', {
	extend : 'Ecfa.action.RowEditAction',
	alias : 'widget.editProjectAction',
	// record : null,
	panel : null,
	getDisabledTooltip : function(record) {
		// TODO determine it at ecfa actions
		var result = Ecfa.Validator.notProject1(record);
		return record === true ? null : result;
	},
	getErrorMsg : function(jsonResp, record) {
		return Ecfa.locale.Converter.getErrorMsg(Locale.getMsg('view.project.edit.error', record.get('name')), jsonResp);
	},
	constructor : function(config) {
		var me = this;
		config.getErrorMsg = me.getErrorMsg;
		config.eventType = Ecfa.event.Project;
		config.disabledTooltip = me.getDisabledTooltip(config.record);
		me.callParent([ config ]);
	}
});
