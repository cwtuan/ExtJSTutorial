/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
 */

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides
Ext.application({
	name : 'MyApp',
	requires : [
	// loadjs_dev "requires" is for localhost/dev.
	// App.js "requires" is for localhost/ (product mode)
	'MyApp.Const', 'MyApp.event.App', 'MyApp.Config', 'MyApp.ExtFix', 'MyApp.ExtOverride', 'MyApp.ExtSetting', 'MyApp.util.Restful', 'MyApp.locale.Converter',
			'MyApp.ux.proxy.NestedRest', 'MyApp.reader.RestTaskGrid', 'Ext.util.Cookies'],

	views : [ 'Viewport' ],
	controllers : [ 'Enhance', 'Project'],
	autoCreateViewport : false,
	onReady : function(fn) {
		this.readyFn = fn;
		this.on('loaded', this.readyFn, this);
	},
	launch : function() {
		var me = this;
		console.info('Ext.application launch');
		MyApp.event.App.fireEvent('created');
	}
});
