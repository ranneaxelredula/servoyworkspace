/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3B38D2EE-C277-471E-9563-B79F09E221AF"}
 */
var patFirstName = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E1457686-C7EC-466A-AA12-F440BE66D123"}
 */
var patLastName = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FDEF0A16-2BA8-43F3-8FF3-6885DBBA1AF2"}
 */
var patGender = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"24C944EB-1FE9-4268-B2DA-ECCD0CE92DFC",variableType:8}
 */
var patAge;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D9650D95-9EB4-4C79-AFA2-1D49A1BC9A1F"}
 */
var patAddress = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C81B5D32-E746-46FF-93E0-CC900A842C01"}
 */
var patAdd2 = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7AD5A508-B124-4F9E-BE16-2563AB9827FA"}
 */
var patCity = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DC6322FE-268F-4F93-BE0B-D0B2734FE0ED"}
 */
var patProvince = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"036EF48E-F665-4386-BC8F-E52645868D61"}
 */
var patCountry = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C7E3F0A1-0BDB-48AF-A9DC-DF220305FC9C",variableType:8}
 */
var patZip;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"60AF008E-AB00-43FC-AAA4-E1497F4931EF",variableType:8}
 */
var patContact;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B9B8E72B-EBB8-4E99-BFF1-4A8E6174098C"}
 */
var patEmailAdd = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F00B736E-092C-47D2-8EB2-16E6303CCE1B"}
 */
var patDiag = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"A4A2329B-97F1-4071-85B2-33B2078775FF",variableType:4}
 */
var doctor;


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5A896013-85DB-4B14-ADCD-98A13E27E269"}
 */
function onSavePatient(event) {
	// TODO Auto-generated method stub
	
	foundset.newRecord();
	foundset.patientfname = patFirstName;
	foundset.patientlname = patLastName;
	foundset.gender = patGender;
	foundset.age = patAge;
	foundset.address = patAddress;
	foundset.address2 = patAdd2;
	foundset.city = patCity;
	foundset.province = patProvince;
	foundset.country = patCountry;
	foundset.zipcode = patZip;
	foundset.contactnumber = patContact;
	foundset.emailaddress = patEmailAdd;
	foundset.diagnosis = patDiag;
	foundset.doctorid = doctor;
	databaseManager.saveData();
	plugins.dialogs.showInfoDialog('Add Patient Informatin','Added Successully');
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"01031C98-6F21-4DA9-ADC2-B99A7246B37C"}
 */
function onDeletePatient(event) {
	// TODO Auto-generated method stub
	foundset.deleteRecord();
	plugins.dialogs.showInfoDialog('Delete Record','Deleted Successfully');
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"81D0DCBF-38AD-47E0-B936-E22029551E3C"}
 */
function onEditPatient(event) {
	// TODO Auto-generated method stub
	application.showForm('patientsEdit');
}
