/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E9D0B39C-485E-4544-A800-DD643EB79791"}
 */
var item = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FC5A92DF-21BF-4AEC-8729-256B1E5483B4"}
 */
var itemQty = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F1DB56F6-D74D-4F5A-ABEA-E7A0E0FBF40A"}
 */
var supName = null;

/**
 * @properties={typeid:35,uuid:"B4E9D300-23D8-4ACA-B69D-8577A0D0066E",variableType:-4}
 */
var date = Date.now();

/**
 * @properties={typeid:24,uuid:"4C0958E2-C463-47BF-885E-060CC472B221"}
 */
function purchaseSupplies() {
	// TODO Auto-generated method stub

	foundset.newRecord();
	foundset.purchaseqty = itemQty;
	foundset.purchasedate = date;
	foundset.suppliername = supName;
	databaseManager.saveData();
}
