package com.cht.utility.constants;


public enum ErrorKey {

	/** FORBIDDEN: General Forbidden. **/
	FORBIDDEN("Forbidden", ErrorConstants.TYPE_UI),

	NO_AUTH_IS_PROJECT_OWNER("You should be project owner.", ErrorConstants.TYPE_UI),
	NO_AUTH_IS_PROJECT_ADMIN("You should be project owner or admin.", ErrorConstants.TYPE_UI),
	NO_AUTH_IS_PROJECT_MEMBER("You should be project owner, admin, or member.", ErrorConstants.TYPE_UI),
	NO_AUTH_IS_TARGET_USER("You are not the one who is able to execute this action", ErrorConstants.TYPE_UI),
	NO_AUTH_IS_MISSION_OWNER("You should be mission owner.", ErrorConstants.TYPE_UI),
	

	// AFanasy codule (Code: AF) error keys.
	/** AF001: Server connect failed. **/
	AF001("Render farm manager server connect failed.", ErrorConstants.TYPE_EMAIL + ErrorConstants.TYPE_MESSAGE + ErrorConstants.TYPE_UI),

	/** G001: JSON string conversion error. **/
	F001("JSON string conversion error.", ErrorConstants.TYPE_SYSTEM),
	
	// User module (Code: U) error keys.
	/** U001: Email duplicated. **/
	U001("Email duplicated", ErrorConstants.TYPE_UI),
	/** U002: ID duplicated. **/
	U002("ID duplicated", ErrorConstants.TYPE_UI),
	/** U003: ID not exists. **/
	U003("ID not exists", ErrorConstants.TYPE_UI),
	/** U004: Incorrect password **/
	U004("Incorrect password", ErrorConstants.TYPE_UI),
	/** U005: Email authCode error **/
	U005("Email authCode error", ErrorConstants.TYPE_UI),
	/** U006: Email not exists **/
	U006("Email not exists", ErrorConstants.TYPE_UI),
	/** U007: ID already activated **/
	U007("ID already activated", ErrorConstants.TYPE_UI),

	// Project module (Code: P) error keys
	// Tony: TODO project no auth 可合併成一個
	/** P001: No Permission to do this operation **/
	P001("No Permission to do this operation", ErrorConstants.TYPE_UI),
	/** P002: User account not exist **/
	P002("User account not exist", ErrorConstants.TYPE_UI),
	/** P003: Project path exsit. **/
	P003("Project path exsit", ErrorConstants.TYPE_UI),
	/** P004: Project not exist **/
	P004("Project not exist", ErrorConstants.TYPE_UI),
	/** P005: Email address invalid. **/
	P005("Email address invalid", ErrorConstants.TYPE_UI),
	/** P006: FTP Agent communication error. **/
	P006("FTP Agent communication error.", ErrorConstants.TYPE_EMAIL + ErrorConstants.TYPE_SYSTEM),
	/** P007: Invitation has been deleted **/
	P007("Invitation has been deleted", ErrorConstants.TYPE_UI),
	/** P008: Invitation expire. **/
	P008("Invitation expire", ErrorConstants.TYPE_UI),
	/** P009: Invitation has been accepted. **/
	P009("Invitation has been accepted", ErrorConstants.TYPE_UI),
	/** P010: Job is still running. **/
	P010("Job is still running , please stop it!" ,ErrorConstants.TYPE_UI),

	// Transfer module (Code: T) error keys.
	/** T001: FTP server connect failed, connection timeout. **/
	T001("FTP server connewwwct failed, connection timeout.", ErrorConstants.TYPE_EMAIL + ErrorConstants.TYPE_MESSAGE),
	/** T002: FTP server login failed, invalid user. **/
	T002("FTP server login failed, invalid user.", ErrorConstants.TYPE_UI),
	/** T003: FTP server communication error. **/
	T003("FTP server communication error.", ErrorConstants.TYPE_SYSTEM),

	/** T101: Access denied. **/
	T101("Access denied.", ErrorConstants.TYPE_UI),
	/** T102: Rmdir failed, directory not empty. **/
	T102("Rmdir failed, directory not empty.", ErrorConstants.TYPE_UI),
	/** T103: Path not allowed. **/
	T103("Path not allowed.", ErrorConstants.TYPE_UI),
	/** T111: File unavailable. **/
	T111("File unavailable.", ErrorConstants.TYPE_UI),
	/** T121: Storage allocation exceed. **/
	T121("Storage allocation exceed.", ErrorConstants.TYPE_UI + ErrorConstants.TYPE_EMAIL),
	/** T131: File name not allowed. **/
	T131("File name not allowed.", ErrorConstants.TYPE_UI),
	/** T231: Can't connect to socket agent. **/
	T231("Can't connect to socket agent", ErrorConstants.TYPE_EMAIL + ErrorConstants.TYPE_MESSAGE),

	// Resource module (Code: R) error keys.
	/** R001: Render host IP address duplicated. **/
	R001("IP address duplicated.", ErrorConstants.TYPE_UI),
	/** R002: Render list csv file cannot read. **/
	R002("Render list csv file cannot read.", ErrorConstants.TYPE_UI),
	/** R003: Render list csv file content partial error. **/
	R003("Render list csv file content partial error.", ErrorConstants.TYPE_UI),
	/** R004: Render list csv file export fail. **/
	R004("Render list csv file export fail.", ErrorConstants.TYPE_UI),

	/** R101: Render farm manager server connect failed. **/
	R101("Render farm manager server connect failed.", ErrorConstants.TYPE_SYSTEM),
	/** R102: Render farm manager server properties edit failed. **/
	R102("Render farm manager server properties edit failed.", ErrorConstants.TYPE_SYSTEM),
	/** R103: Render farm manager process error. **/
	R103("Render farm manager process error.", ErrorConstants.TYPE_SYSTEM),

	/** R201: Render host connect failed. **/
	R201("Render host connect failed.", ErrorConstants.TYPE_EMAIL),
	/** R202: Render host ssh login failed. **/
	R202("Render host ssh login failed.", ErrorConstants.TYPE_EMAIL),
	/** R203: Render host process error. **/
	R203("Render host process error.", ErrorConstants.TYPE_SYSTEM),
	/** R204: Render host IP not exists in afserver. **/
	R204("Render host IP not exists in afserver.", ErrorConstants.TYPE_UI),
	/** R205: Render host OID not exists. **/
	R205("Render host OID not exists.", ErrorConstants.TYPE_UI),
	/** R206: Render host OS not supported. **/
	R206("Render host OS not supported.", ErrorConstants.TYPE_UI),
	/** R207: Render host state not supported. **/
	R207("Render host state not supported.", ErrorConstants.TYPE_SYSTEM),
	/** R210: Render host create failed. **/
	R210("Render host record insert failed.", ErrorConstants.TYPE_UI),
	/** R211: Render host delete failed. **/
	R211("Render host record delete failed.", ErrorConstants.TYPE_UI),
	/** R212: Render host update failed. **/
	R212("Render host record update failed.", ErrorConstants.TYPE_UI),

	/** R302: User already subscribe another pool. **/
	R302("User already subscribe another pool.", ErrorConstants.TYPE_UI),
	/** R303: Renders allocate failed, not enough renders. **/
	R303("Renders allocate failed, not enough renders.", ErrorConstants.TYPE_UI),
	/** R305: Pool OID not exists. **/
	R305("Pool OID not exists.", ErrorConstants.TYPE_UI),
	/** R310: Pool record insert failed. **/
	R310("Pool record insert failed.", ErrorConstants.TYPE_UI),
	/** R311: Pool record delete failed. **/
	R311("Pool record delete failed.", ErrorConstants.TYPE_UI),
	/** R312: Pool record update failed. **/
	R312("Pool record update failed.", ErrorConstants.TYPE_UI),

	/** R401: Licenses allocate failed, not enough licenses. **/
	R401("Licenses allocate failed, not enough licenses.", ErrorConstants.TYPE_UI),
	/** R410: Pool license record insert failed. **/
	R410("Pool license record insert failed.", ErrorConstants.TYPE_UI),
	/** R411: Pool license record delete failed. **/
	R411("Pool license record delete failed.", ErrorConstants.TYPE_UI),
	/** R412: Pool license record update failed. **/
	R412("Pool license record update failed.", ErrorConstants.TYPE_UI),

	// Asset tracking module (Code: A) error keys.
	/** A001: Scene file content error. **/
	A001("Scene file content error.", ErrorConstants.TYPE_UI),
	/** A002: Scene file not exist. **/
	A002("Scene file not exist.", ErrorConstants.TYPE_UI),
	/** A009: Scene file process failed. **/
	A009("Scene file process failed.", ErrorConstants.TYPE_SYSTEM),
	/** A011: Rendering product not exist. **/
	A011("Rendering product not exist.", ErrorConstants.TYPE_SYSTEM),
	/** A012: Animation software license not exist. **/
	A012("Animation software license not exist.", ErrorConstants.TYPE_SYSTEM),
	/** A021: Project path cannot retrieve. **/
	A021("Project path cannot retrieve.", ErrorConstants.TYPE_SYSTEM),

	/** A101: Command line execution error. **/
	A101("Command line execution error.", ErrorConstants.TYPE_SYSTEM),

	/** A201: Asset tracking not supported for this kind of software. **/
	A201("Asset tracking not supported for this kind of software.", ErrorConstants.TYPE_UI + ErrorConstants.TYPE_EMAIL),
	/** A202: Scene analysis not supported for this kind of software. **/
	A202("Scene analysis not supported for this kind of software.", ErrorConstants.TYPE_UI + ErrorConstants.TYPE_EMAIL),

	// License module (Code: L) error keys.
	L101("some product still reference this software/engine", ErrorConstants.TYPE_UI), L102("some pool still reference this software/engine",
			ErrorConstants.TYPE_UI),
	/** J201: unsupported product **/
	L201("unsupported product", ErrorConstants.TYPE_SYSTEM + ErrorConstants.TYPE_HUMAN),

	// Job module (Code: J) error keys.
	/** J001: not project member ,admin or owner **/
	J001("not project member,admin or owner", ErrorConstants.TYPE_UI),
	/** J002: not project admin or owner **/
	J002("not project admin or owner", ErrorConstants.TYPE_UI),
	/** J003: not project member **/
	J003("not project member", ErrorConstants.TYPE_UI),
	/** J004: not mission owner **/
	J004("not mission owner", ErrorConstants.TYPE_UI),
	/** J005: current login user is not the same to target user **/
	J005("current login user is not the same to target user", ErrorConstants.TYPE_UI),
	/** J006: not submission owner **/
	J006("not submission owner", ErrorConstants.TYPE_UI),
	/** J107: unsupported mission operation **/
	J007("unsupported mission operation", ErrorConstants.TYPE_UI),
	/** J108: generate mission serial number failed **/
	J008("generate mission serial number failed", ErrorConstants.TYPE_SYSTEM),
	/** J109: this project runs out of money **/
	J009("this project runs out of money", ErrorConstants.TYPE_UI),
	/** J101: get frame log fail **/
	J101("get frame log fail", ErrorConstants.TYPE_SYSTEM + ErrorConstants.TYPE_UI),
	/** J102: unsupported product (no converter implemented) **/
	J102("unsupported product (no converter implemented)", ErrorConstants.TYPE_SYSTEM),
	/** J103: cant not find target mission , it may be caused by wrong mission state **/
	J103("cant not find target mission , it may be caused by wrong mission state", ErrorConstants.TYPE_UI),
	/** J201: thumbnail file does not exist **/
	J201("thumbnail file does not exist", ErrorConstants.TYPE_SYSTEM),
	/** J202: thumbnail file does not exist **/
	J202("fail tp generate thumbnail file", ErrorConstants.TYPE_SYSTEM),
	/** J301: thumbnail file does not exist **/
	J301("no jobCache found", ErrorConstants.TYPE_SYSTEM),
	/** J401: receive job done message but some frame not done **/
	J401("receive job done message but some frame not done", ErrorConstants.TYPE_SYSTEM + ErrorConstants.TYPE_HUMAN),

	// usaGe module (Code: G) error keys.
	/** G001: No frame information found. **/
	G001("No frame information found.", ErrorConstants.TYPE_SYSTEM),
	/** G002: No mission information found. **/
	G002("No mission information found.", ErrorConstants.TYPE_SYSTEM),
	/** G003: No render host information found. **/
	G003("No render host information found.", ErrorConstants.TYPE_SYSTEM),
	/** G010: No mission usage information found. **/
	G010("No mission usage information found.", ErrorConstants.TYPE_SYSTEM),
	/** G001: Frame time data missing. **/
	G101("Frame time data missing.", ErrorConstants.TYPE_SYSTEM),
	/** G002: Done time before start time. **/
	G102("Done time before start time.", ErrorConstants.TYPE_SYSTEM),
	/** G010: Frame usage record duplicated. **/
	G110("Frame usage record duplicated.", ErrorConstants.TYPE_SYSTEM),
	/** G001: Synchronized processes conflict. **/
	G901("Synchronized processes conflict.", ErrorConstants.TYPE_SYSTEM),

	// Database persistent layer module (Code: D) error keys.
	/** D001: Target value cannot be null. **/
	D001("Target value cannot be null.", ErrorConstants.TYPE_SYSTEM),
	/** D002: Target value list cannot be empty. **/
	D002("Target value list cannot be empty.", ErrorConstants.TYPE_SYSTEM),

	;
	private String annotation;
	private int type;

	private ErrorKey(String annotation, int type) {
		this.annotation = annotation;
		this.type = type;
	}

	public String getAnnotation() {
		return this.annotation;
	}

	public int getType() {
		return type;
	}
}
