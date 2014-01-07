Ext.define('Ecfa.view.project.action._DeleteProjectAction', {
	extend : 'Ecfa.action.RowDeleteAction',
	alias : 'widget.deleteProjectAction',
	record : null,
	getDisabledTooltip : function(record) {
		var result = Ecfa.Validator.notProject1(record);
		return record === true ? null : result;
	},
	getErrorMsg : function(jsonResp, record) {
		return Ecfa.locale.Converter.getErrorMsg(Locale.getMsg('view.project.delete.error', record.get('name')), jsonResp);
	},
	constructor : function(config) {
		var me = this;
		config.disabledTooltip = me.getDisabledTooltip(config.record);
		config.confirmMsg = Locale.getMsg('view.project.delete.confirm', config.record.get('name'));
		config.eventType = Ecfa.event.Project;
		me.callParent([ config ]);
	}
});
