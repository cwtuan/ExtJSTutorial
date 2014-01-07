// TODO use loop to generate data

Ext.define('Ecfa.store.project.ProjectRole', {
	extend : 'Ext.data.Store',
	fields : [ 'display', 'value', 'isDefault' ],
	data : [ {
		display : Ecfa.locale.Converter.getProjectRole(Ecfa.Const.Project.Role.MEMBER),
		value : Ecfa.Const.Project.Role.MEMBER,
		// refactor to ECFA
		isDefault : true
	}, {
		display : Ecfa.locale.Converter.getProjectRole(Ecfa.Const.Project.Role.ADMIN),
		value : Ecfa.Const.Project.Role.ADMIN
	} ]
});
