Ext.define('Ecfa.controller.Project', {
	extend : 'Ext.app.Controller',
	// // TODO necessary?
	// stores : [ 'project.Project' ],
	// models : [ 'project.Project' ],
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
