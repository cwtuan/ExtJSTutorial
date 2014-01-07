// Usage: refer to email "RE: [UI] Ecfa.Restful.request" sent at 2013/8/5 下午 06:18

/*

 Ecfa.Restful.request({
 url : 'rest/xxx', 
 record : project, // or "records" for a list of objects
 method : 'POST',
 failureSubject: 'Fail to create project xxx.',
 successSubject: 'Project xxx created.',
 eventType : Ecfa.event.Project, // TODO
 params : {
 p1 : 'moreUrlParams1',
 p2 : 'moreUrlParams2',
 },
 success : function(jsonResp) {
 },
 failure : function(jsonResp) {                  
 }
 });




 */

// TODO pass store to request options and update store after request
Ext.define('Ecfa.util.Restful', {
	singleton : true,
	alternateClassName : [ 'Ecfa.Restful' ],
	request : function(options) {

		// TODO refactor to ECFA
		options.failureSubject = options.failureSubject || Locale.getMsg('err.unknownSubject');

		var jsonData = {};
		options.params = options.params || {};

		var url = this.getUrl(options);
		if (!options.method) {
			console.error('[Restful.js] request method is required.', options);
			return;
		}

		if (options.method === 'DELETE') {
			// delete類的record、records一定要是model，這樣才可以抓到idpProperty
			if (options.record) {
				url += '/' + options.record.getId();
			} else if (options.records) {
				Ext.each(options.records, function(r) {
					// console.log('idProperty', r.idProperty);
					url = Ext.urlAppend(url, r.idProperty + '=' + r.getId());
				});
			}
		} else if (options.method === 'PUT' || options.method === 'POST') {

			if (options.record) {
				if (options.record.isModel) {
					jsonData = options.record.data;
				} else {
					jsonData = options.record;
				}
			} else if (options.records) {
				jsonData = [];
				Ext.each(options.records, function(r) {
					if (r.isModel) {
						jsonData.push(r.data);
					} else {
						jsonData.push(r);
					}

				});
			}
		}

		Ext.Ajax.request({
			url : encodeURI(url),
			method : options.method,
			async : true,
			timeout : options.timeout || Ext.Ajax.timeout,
			headers : {
				'Content-Type' : 'application/json'
			},
			jsonData : jsonData, // for params in body
			params : options.params, // for params in url
			success : function(response) {
				var jsonResp = Ext.decode(response.responseText);
				if (jsonResp.success === false) {
					// call failure function if server response {success:false}
					if (options.failure) {
						// TODO refactor to HRM APP (show error msg even if no failureSubject)
						Ext.getCmp('notifybar').showError(Ecfa.locale.Converter.getErrorMsg(options.failureSubject, jsonResp));
						options.failure(jsonResp);
					}
				} else {
					// call success function if server response {success:true} or without success field
					if (options.success != null) {
						if (options.successSubject) {
							Ext.getCmp('notifybar').showSuccess(options.successSubject);
							if (options.eventType) {
								// TODO for ECFA: create->created
								if (options.method === 'POST') {
									options.eventType.fireEvent('create', jsonResp.target);
								} else if (options.method === 'PUT') {
									options.eventType.fireEvent('update', jsonResp.target);
								} else if (options.method === 'DELETE') {
									options.eventType.fireEvent('destroy', jsonResp.target);
								}
							}
						}
						options.success(jsonResp);
					}
				}
			},
			failure : function() {
				if (options.failure) {
					var internalErrorKey = 'internal';
					Ext.getCmp('notifybar').showError(Ecfa.locale.Converter.getErrorMsg(options.failureSubject, {
						error : internalErrorKey
					}));
					options.failure({
						// TODO show connection error msg
						error : internalErrorKey
					});
				}
			},
			// TODO make gird loading mask disabled, if gird is pass to request options
			callback : function(response) {
				if (options.callback != null) {
					if (response && response.responseText) {
						options.callback(Ext.decode(response.responseText));
					} else {
						options.callback(null);
					}
				}
			}
		});
	},

	/*
	 * @private
	 */
	getUrl : function(options) {
		var record = null;
		if (options.url) {
			return options.url;
		}

		if (options.record && options.record.isModel) {
			record = options.record;
		} else if (options.records && options.records[0] && options.records[0].isModel) {
			record = options.records[0];
		}
		if (record) {
			var request = {
				operation : {
					records : [ record ]
				},
				url : record.getProxy().url
			};
			// 'rest/projects/xxx/users/{id}' -> 'rest/projects/xxx/users'
			// FIXME dont need to remove id for read operation?
			// TODO need to remove _dc=xxx?
			var url = record.getProxy().buildUrl(request);
			var idIndex = url.indexOf(record.getId());
			if (idIndex !== -1) {
				url = url.substr(0, idIndex);
			}

			return url;
		} else {
			console.error('[Restful.js] URL is not defined. If you dont specify record(s) in extjs model format, you sould specify a url', options);
		}

	}

});
