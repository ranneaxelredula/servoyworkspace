
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F822C1DF-2C73-498C-9C93-9F5E5AF04D08"}
 */
function onDoctorsEdit(event) {
	// TODO Auto-generated method stub
	databaseManager.saveData();
	plugins.dialogs.showInfoDialog('Edit Record','Edited Successfully');
	application.showForm('mainNavigationForm');
}
