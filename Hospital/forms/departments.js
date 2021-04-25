/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DBF67E05-6C93-439E-990C-BCC5ED9FB399"}
 */
var addDeptName = '';


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"7CB6D792-DEA6-4776-93DA-034D10F27CC8"}
 */
function onAddDept(event) {
	// TODO Auto-generated method stub
	foundset.newRecord();
	foundset.deptname = addDeptName;
	databaseManager.saveData();
	plugins.dialogs.showInfoDialog('Add Department','Added Successfully');
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"52673D08-4A64-457A-9D18-22C08123ADEF"}
 */
function onDeleteDept(event) {
	// TODO Auto-generated method stub
	foundset.deleteRecord();
	plugins.dialogs.showInfoDialog('Delete Department','Deleted Successfully');
}
