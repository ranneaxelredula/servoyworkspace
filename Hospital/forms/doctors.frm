customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/hospital/doctors",
encapsulation:108,
items:[
{
cssPosition:"342,-1,-1,555,80,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"555",
right:"-1",
top:"342",
width:"80"
},
onActionMethodID:"E50D8487-2EBE-47EE-88CE-B01692B81078",
size:{
height:30,
width:80
},
styleClass:"btn btn-danger",
text:"DELETE"
},
name:"button_8",
size:"80,30",
styleClass:"btn btn-danger",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"0FB2E2D0-64AF-4882-8A2A-72CCCC6E37D3"
},
{
height:480,
partType:5,
typeid:19,
uuid:"21ED6C6E-262B-43D1-A334-E5BACF6492E1"
},
{
cssPosition:"342,-1,-1,456,80,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"456",
right:"-1",
top:"342",
width:"80"
},
onActionMethodID:"53C6BC20-081A-401A-8E80-BB7D9F831740",
size:{
height:30,
width:80
},
styleClass:"btn-default",
text:"EDIT"
},
name:"button_7",
size:"80,30",
styleClass:"btn-default",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"2343FD99-55E3-4D98-A7EA-9EFFABC85DC1"
},
{
cssPosition:"319,-1,-1,74,80,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"74",
right:"-1",
top:"319",
width:"80"
},
onActionMethodID:"36331BAC-9BCE-4014-AE15-492B83128E98",
size:{
height:30,
width:80
},
styleClass:"btn btn-warning",
text:"SAVE"
},
name:"button_4",
size:"80,30",
styleClass:"btn btn-warning",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"37EFEF4A-C094-480C-BDBA-69276A46B89A"
},
{
cssPosition:"255,-1,-1,74,297,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"74",
right:"-1",
top:"255",
width:"297"
},
dataProviderID:"docDept",
size:{
height:30,
width:140
},
valuelistID:"4D4AD6D3-3285-454F-9159-BAF120B9D039"
},
name:"combobox_3",
size:"140,30",
typeName:"bootstrapcomponents-combobox",
typeid:47,
uuid:"9266228C-2D41-48A5-9280-843D7CAE4483"
},
{
cssPosition:"122,-1,-1,74,300,40",
json:{
cssPosition:{
bottom:"-1",
height:"40",
left:"74",
right:"-1",
top:"122",
width:"300"
},
dataProvider:"docFName",
size:{
height:40,
width:300
}
},
name:"input_group_1",
size:"300,40",
typeName:"bootstrapextracomponents-input-group",
typeid:47,
uuid:"97BFA442-1222-4313-A906-938B27F2D041"
},
{
cssPosition:"230,-1,-1,74,80,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"74",
right:"-1",
top:"230",
width:"80"
},
size:{
height:30,
width:80
},
text:"Department"
},
name:"label_5cc",
size:"80,30",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"9A990F18-4F3D-4D5E-B5DE-245FB14B1C39"
},
{
cssPosition:"159,-1,-1,74,80,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"74",
right:"-1",
top:"159",
width:"80"
},
size:{
height:30,
width:80
},
text:"Last Name"
},
name:"label_5c",
size:"80,30",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"B0F23C23-ED53-4C11-98DF-57B5A7BC4CD1"
},
{
cssPosition:"90,-1,-1,445,529,232",
json:{
columns:[
{
dataprovider:"doctorfname",
headerTitle:"First Name",
id:"firstName",
svyUUID:"B9304BE8-1E25-4AAB-9010-C17B3DBD19D7"
},
{
dataprovider:"doctorlname",
headerTitle:"Last Name",
id:"lastName",
svyUUID:"8A3500F5-3ADF-45CF-8BA1-3078D8B51DB0"
},
{
dataprovider:"doctordept",
headerTitle:"Department",
id:"dept",
svyUUID:"59E4980B-A04A-47AD-BB34-43CDA4180B68",
valuelist:"4D4AD6D3-3285-454F-9159-BAF120B9D039"
}
],
cssPosition:{
bottom:"-1",
height:"232",
left:"445",
right:"-1",
top:"90",
width:"529"
}
},
name:"groupingtable_10",
typeName:"aggrid-groupingtable",
typeid:47,
uuid:"DD8501BF-EF94-4732-B624-9CD2EF6AD61B"
},
{
cssPosition:"93,-1,-1,74,80,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"74",
right:"-1",
top:"93",
width:"80"
},
size:{
height:30,
width:80
},
text:"First Name"
},
name:"label_5",
size:"80,30",
typeName:"bootstrapcomponents-label",
typeid:47,
uuid:"E761DFBB-DF08-4DD4-BEAE-9883EEF2E7BD"
},
{
cssPosition:"186,-1,-1,74,300,40",
json:{
cssPosition:{
bottom:"-1",
height:"40",
left:"74",
right:"-1",
top:"186",
width:"300"
},
dataProvider:"docLName",
size:{
height:40,
width:300
}
},
name:"input_group_2",
size:"300,40",
typeName:"bootstrapextracomponents-input-group",
typeid:47,
uuid:"F4D5C21B-7B94-435F-AD88-DE4A2A17B652"
}
],
name:"doctors",
navigatorID:"-1",
showInMenu:true,
size:"1172,480",
typeid:3,
uuid:"15506D99-FEB2-4AB9-B974-0018235CFDA5"