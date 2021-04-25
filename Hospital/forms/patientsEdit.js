
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F7C18BED-482D-4D85-A21F-F3224EF172CF"}
 */
function onPatientEdit(event) {
	// TODO Auto-generated method stub
	databaseManager.saveData();
	plugins.dialogs.showInfoDialog('Edit Record','Edited Successfully');
	application.showForm('mainNavigationForm');
}