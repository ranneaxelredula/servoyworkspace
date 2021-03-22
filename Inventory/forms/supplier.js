/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C8E8AC17-3613-4D23-B7E8-D21B893908BF"}
 */
function editSupplier(event) {
	// TODO Auto-generated method stub
	databaseManager.saveData();
	plugins.dialogs.showInfoDialog('Edit Item', 'Successfully edited!','OK');
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"FFCE60EB-C96D-4881-BEC3-996A3CC2A393"}
 */
function deleteTest(event) {
	// TODO Auto-generated method stub
	foundset.deleteRecord();
	plugins.dialogs.showInfoDialog('Delete Supplier', 'Successfully deleted!','OK');
}
