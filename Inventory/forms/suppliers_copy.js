/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"62D15DAE-AF6A-4748-B526-AC9F0D74AF93"}
 */
var phoneNo_copy = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"151DA881-C1B8-4BC6-BD19-37F8D1DEDFF2"}
 */
var address_copy = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D3749BC5-FD3B-4D09-87C3-3B223E85C47D"}
 */
var name_copy = null;


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"D7E81805-7EAA-4B72-BEC9-A2EEC1B13210"}
 */
function addSupplier_copy(event) {
	// TODO Auto-generated method stub
	foundset.newRecord();
	foundset.suppliername = name_copy;
	foundset.supplieraddress = address_copy;
	foundset.supplierphonenum = phoneNo_copy;
	databaseManager.saveData();
	plugins.dialogs.showInfoDialog('Add New Supplier', 'Successfully added!','OK');
}
