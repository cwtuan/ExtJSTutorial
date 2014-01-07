package com.cht.exception;

import java.util.ArrayList;
import java.util.List;

import com.cht.utility.constants.ErrorConstants;
import com.cht.utility.constants.ErrorKey;

public class EcfaException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	private ErrorKey errorKey;
	
	private String detailMsg;
	
	private List<String> target = new ArrayList<String>();

	// TODO remove this later...
	public EcfaException() {

	}

	public EcfaException(ErrorKey errorKey) {
		this.errorKey = errorKey;
	}
	
	public EcfaException(ErrorKey errorKey,String detailMsg) {
		this.errorKey = errorKey;
		this.detailMsg = detailMsg;
	}

	public String getDetailMsg() {
		return detailMsg;
	}

	public void setDetailMsg(String detailMsg) {
		this.detailMsg = detailMsg;
	}

	public List<String> getTarget() {
		return target;
	}

	public ErrorKey getErrorKey() {
		return errorKey;
	}

	@Override
	public String getMessage() {
		if((errorKey.getType() & ErrorConstants.TYPE_UI) > 0) {
			return errorKey.toString();
		} else {
			return "internal"; // internal error
		}
	}
	
	
	public String getAnnotation(){
		if((errorKey.getType() & ErrorConstants.TYPE_UI) > 0) {
			return errorKey.getAnnotation();
		} else {
			return "internal_error";
		}
	}
}
