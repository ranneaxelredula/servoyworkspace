/**
 * @properties={typeid:24,uuid:"B432C0AA-1A05-4927-B23B-4204CA29F92F"}
 */
function validate()
{
	// TODO Auto-generated method stub
	var markers = [];
	var requiredFields = [
		'suppliername',
		'supplieraddress',
		'supplierphonenum'
	];
	
	for(var i in requiredFields) {
		var dataProviderID = requiredFields[i];
		var title = databaseManager.getTable(this).getColumn(dataProviderID).getTitle();
		if(!getSelectedRecord()[dataProviderID]){
			markers.push({dataProviderID:dataProviderID, message:'Missing required field: ' + title})
		}
	}
	
	return markers;
}
