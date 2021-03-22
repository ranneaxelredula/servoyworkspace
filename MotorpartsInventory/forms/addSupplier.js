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
	foundset.newRecord();
	foundset.suppliername = name;
	databaseManager.saveData();
	plugins.dialogs.showInfoDialog('Add New Supplier', 'Successfully added!','OK');
}
