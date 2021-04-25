/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7A4906D6-40BD-41B8-856D-92AA36FCEEAF",variableType:4}
 */
var docDept;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"291181CB-FD0D-4835-AC2D-59984B672D6B"}
 */
var docLName = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D1B83547-02F0-4D63-BAE1-8AFC82B41544"}
 */
var docFName = '';


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"36331BAC-9BCE-4014-AE15-492B83128E98"}
 */
function onSave(event) {
	// TODO Auto-generated method stub
	application.output(docFName);
	application.output(docLName);
	application.output(docDept);
	
	foundset.newRecord();
	foundset.doctorfname = docFName;
	foundset.doctorlname = docLName;
	foundset.doctordept = docDept;
	databaseManager.saveData();
	plugins.dialogs.showInfoDialog('Add Doctor','Added Successfully');
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E50D8487-2EBE-47EE-88CE-B01692B81078"}
 */
function onDelete(event) {
	// TODO Auto-generated method stub
	foundset.deleteRecord();
	plugins.dialogs.showInfoDialog('Delete Record','Deleted Successfully');
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"53C6BC20-081A-401A-8E80-BB7D9F831740"}
 */
function onEdit(event) {
	// TODO Auto-generated method stub
	application.showForm('doctorsEdit');
}
