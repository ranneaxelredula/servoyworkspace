/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"624ADA63-377F-4B00-96DD-E609DACCD7FF"}
 */
var address = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7EE0057A-6550-4C49-8C0C-CE9C06785712",variableType:4}
 */
var phoneNo = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4D2EE13A-EEE3-439E-83DB-09F076ADF837"}
 */
var name = null;


/**
 * @properties={typeid:24,uuid:"F5BE8C3B-550E-481D-89EA-AD411D9378A0"}
 */

/**
 * @properties={typeid:24,uuid:"4C53E94C-49E8-4D84-A10A-A6FA27C808CA"}
 */
function addSupplier() {
	// TODO Auto-generated method stub
	
	if (name == null || address == null || phoneNo == null) {
		plugins.dialogs.showInfoDialog('Add New Supplier', 'Please fillup form','OK');
	}
	else {
		foundset.newRecord();
		foundset.suppliername = name;
		foundset.supplieraddress = address;
		foundset.supplierphonenum = phoneNo;
		databaseManager.saveData();
		plugins.dialogs.showInfoDialog('Add New Supplier', 'Successfully added!','OK');
	}
}
/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"1819EDA4-46C3-410C-8161-2767E4CC47DF"}
 */

 /**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {boolean}
 *
 * @properties={typeid:24,uuid:"171B76FB-178C-42F7-BCB1-8149314FC2F3"}
 */
 