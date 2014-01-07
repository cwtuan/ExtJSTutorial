Ext.define('Ecfa.view.Viewport', {
	extend : 'Ext.container.Viewport',
	renderTo : Ext.getBody(),

	requires : [

	// Utils
	'Ecfa.Session', 'Ecfa.util.Format', 'Ecfa.util.Validator', 'Ecfa.util.Restful', 'Ecfa.locale.Converter', 'Ext.util.Cookies',
	// 'Ecfa.util.JsonWriter',

	// events
	'Ecfa.event.Session', 'Ecfa.event.Project', 'Ecfa.event.User',

	// actions
	'Ecfa.action.Action',

	// views ux
	'Ecfa.ux.image.ImageViewer', 'Ecfa.ux.image.MultiImageViewer', 'Ecfa.ux.button.LinkButton', 'Ecfa.ux.toolbar.NotifyBar', 'Ecfa.ux.IFrame',
			'Ecfa.ux.grid.column.ComponentColumn',

			// views
			'Ecfa.view.project.ProjectView',

			// win
			'Ecfa.view.about.OpenSourceLicenseWin'

	],
	id : 'viewport',
	layout : 'border',
	defaults : {
		border : false,
		xtype : 'container'
	},
	initComponent : function() {
		var me = this;

		Ecfa.Session.getSession();

		var menuItems = [];

		menuItems.push({
			itemId : 'project',
			pressed : true,
			icon : 'css/images/clapperboard_16x16.png',
			scale : 'medium',
			height : 30,
			toggleGroup : 'mainbar',
			allowDepress : false,
			text : Locale.getMsg('view.project.projects'),
			handler : function() {
				me.switchActivePage('projectView', false, this);
			}
		});

		menuItems.push(' ', {
			xtype : 'notifybar',
			id : 'notifybar',
			maxWidth : 600
		}, '->', {
			itemId : 'accountmenu',
			menu : {
				showSeparator : false,
				defaults : {
					plain : true
				},
				items : [ {
					text : Locale.getMsg('view.session.signout'),
					handler : function() {
						me.switchActivePage('./signout', true, this);
					}
				} ]
			}
		}, {
			height : 30,
			text : Locale.getMsg('view.about'),
			menu : {
				showSeparator : false,
				items : [ {
					plain : true,
					text : Locale.getMsg('view.about.openSourceLicense'),
					handler : function() {
						Ext.widget('openSourceLicenseWin').show();
					}
				} ]
			}
		});

		var viewItems = [];

		viewItems.push({
			itemId : 'projectView',
			xtype : 'projectView'
		});	

		// put menus and views to viewport
		me.items = [ {
			itemId : 'mainCards',
			xtype : 'panel',
			region : 'center',
			layout : 'card',
			tbar : Ext.create('Ecfa.view.MainToolbar', {
				itemId : 'mainToolbar',
				items : menuItems
			}),
			items : viewItems
		} ];

		me.callParent(arguments);

		me.on({
			afterrender : function() {
				// warning message for old IE
				if (Ext.isIE6 || Ext.isIE7 || Ext.isIE8 || Ext.isIE9) {
					Ext.getCmp('notifybar').showError(Locale.getMsg('view.oldBrowserWarning'));
				}
			}
		});

		Ecfa.event.Session.on('read', function(user) {
			me.down('#accountmenu').setText(user.id);
		});

		console.info('viewport is created');

	},

	switchActivePage : function(pageName, isRedirect) {
		var me = this;
		if (isRedirect) {
			location.href = pageName;
		} else {
			me.down('#mainCards').getLayout().setActiveItem(pageName);
		}
	}
});
