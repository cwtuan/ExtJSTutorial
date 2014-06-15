Ext.define('MyApp.Application', {
    name: 'MyApp',
    extend: 'Ext.app.Application',
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
//		MyApp.event.App.fireEvent('created');
	}
    
    
});
