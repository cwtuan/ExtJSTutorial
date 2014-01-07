package com.cht.utility.constants;

public class ErrorConstants {
	public static final int TYPE_SYSTEM = 1 << 0;
	public static final int TYPE_UI = 1 << 1;
	public static final int TYPE_EMAIL = 1 << 2;
	public static final int TYPE_MESSAGE = 1 << 3;
	public static final int TYPE_HUMAN = 1 << 4;

	public static final String SMS_MESSAGE = "ECFA system error notification: code: ${error.code}, time: ${error.time}, desc: ${error.annotation}";

	public static final String MSG_KEY_TIME = "error.time";
	public static final String MSG_KEY_CODE = "error.code";
	public static final String MSG_KEY_ANNOTATION = "error.annotation";
	public static final String MSG_KEY_URL = "ecfa.url";
}
