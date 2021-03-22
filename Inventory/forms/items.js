
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"F2997E53-A2A9-4B68-BFF3-5593A9983777"}
 */

/**
 * @properties={typeid:24,uuid:"2E5A6A76-52AC-4129-902F-97537D165F35"}
 */
function onAction() {
	// TODO Auto-generated method stub
	databaseManager.saveData();
	plugins.dialogs.showInfoDialog('Edit Item', 'Successfully edited!','OK');
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"247DFB7C-C961-4036-ACEC-3B76BFC554D9"}
 */
function onDataChange(event) {
	// TODO Auto-generated method stub
	databaseManager.revertEditedRecords();
}
