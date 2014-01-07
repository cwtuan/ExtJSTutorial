Ext.define('Ecfa.store.project.Project', {
	extend : 'Ext.data.Store',
	model : 'Ecfa.model.project.Project',
	sorters : [ {
		property : 'name',
		direction : 'ASC'
	} ]
});
