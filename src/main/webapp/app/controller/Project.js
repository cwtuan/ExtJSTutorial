Ext.define('MyApp.controller.Project', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'projectUserGrid',
		selector : 'projectUserGrid'
	} ],
	init : function() {
		var me = this;
		me.control({
			'projectGrid' : {

				select : function(grid, record) {
					me.getProjectUserGrid().load(record);
				}
			// ,cellclick : function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
			// if (cellIndex != 0) {
			// me.getProjectUserGrid().load(record);
			// }
			// }
			}
		});
	}
});
