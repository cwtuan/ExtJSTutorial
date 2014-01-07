Ext.define('Ecfa.view.project.ProjectGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.projectGrid',
	title : Locale.getMsg('view.project.projects'),
	icon : 'css/images/clapperboard_16x16.png',

	// requires : [ 'Ecfa.view.project.CreateProjectWin', 'Ecfa.view.project.action.DeleteProjectAction', 'Ecfa.view.project.action.EditProjectAction',
	// 'Ext.grid.plugin.RowEditing' ],

	viewConfig : {
		getRowClass : function(record, index) {
			return 'cursorPointer';
		}
	},
	// selType : 'rowmodel',
	// plugins : [ {
	// ptype : 'rowediting'
	// } ],
	initComponent : function() {
		var me = this;

		me.store = Ext.create('Ecfa.store.project.Project');

		me.columns = [ {
			// header : Locale.getMsg('view.common.action'),
			// xtype : 'componentcolumn',
			// width : 50,
			// renderer : function(value, metadata, record) {
			// return {
			// xtype : 'container',
			// items : [ new Ext.button.Button(Ext.widget('deleteProjectAction', {
			// record : record,
			// panel : me
			// })), new Ext.button.Button(Ext.widget('editProjectAction', {
			// record : record,
			// panel : me
			// })) ]
			// };
			// }
			// }, {
			header : Locale.getMsg('view.common.title'),
			dataIndex : 'name',
			flex : 2,
			editor : {
				xtype : 'textfield',
				allowBlank : false,
				maxLength : 50
			}
		} ];

		// me.tbar = [ {
		// // TODO make it as Action
		// icon : 'css/images/add_16x16.png',
		// text : Locale.getMsg('view.common.add'),
		// handler : function() {
		// Ext.widget('createProjectWin', {
		// panel : me
		// }).show();
		// }
		// }, {
		// icon : 'css/images/refresh.png',
		// text : Locale.getMsg('view.common.refresh'),
		// handler : function() {
		// me.store.reload();
		// }
		// } ];

		me.callParent(arguments);

		me.store.load();

		me.on({
			viewready : function() {
				// select the first project as default
				if (me.store.getCount() != 0) {
					// me.fireEvent('cellclick', me, null, 1, me.store.first());
					me.getSelectionModel().select(0);
				}
			}
		});

		// Ecfa.event.Project.on({
		// destroy : function(projectRecord) {
		// // method 1): just reload the store
		// // me.store.reload();
		// // method 2): find the record and remove it from store
		// // TODO showSuccess at restful action
		// Ext.getCmp('notifybar').showSuccess(Locale.getMsg('view.project.delete.success', projectRecord.get('name')));
		// me.store.remove(me.store.getById(projectRecord.getId()));
		//
		// },
		// create : function(projectRecord) {
		// console.log('create projectRecord', projectRecord);
		// me.store.add(projectRecord);
		// },
		// update : function(projectRecord) {
		// Ext.getCmp('notifybar').showSuccess(Locale.getMsg('view.project.edit.success', projectRecord.get('name')));
		// me.store.commitChanges();
		// }
		// });
	}

});
