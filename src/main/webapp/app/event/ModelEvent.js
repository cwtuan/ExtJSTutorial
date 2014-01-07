Ext.define('Ecfa.event.ModelEvent', {
	extend : 'Ext.util.Observable',
	constructor : function() {

		// TODO: const for event type
		this.addEvents({
			"read" : false,
			"select" : false, // Ecfa.event.XXX.fireEvent('select', record);
			"create" : false, // Ecfa.event.XXX.fireEvent('create', record);
			"update" : false, // Ecfa.event.XXX.fireEvent('update', record);
			"destroy" : false,// Ecfa.event.XXX.fireEvent('destroy', record);
			// "bulkupdated" : false,
			"running" : false
		// Ecfa.event.XXX.fireEvent('running', true);
		});
		this.callParent(arguments);
	}
});
