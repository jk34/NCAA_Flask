/*var fs = require("fs");
var $ = jQuery = require('jquery');
require('./jquery.csv.js');
var input = './all_logit.csv'

fs.readFile(sample, 'UTF-8', function(err, csv) {
  var values1 = $.csv.toArray(csv, {}, function(err, data) {
  });
});
var values1 = $.csv.toArray(input);
*/

//var values = [1103, 1433, 0.1, 1, 3, .2, 2, 3,.3];
var values = [1338, 1455, 0.58136348234, 1387, 1332, 0.370258984273, 1329, 1332, 0.635803220385, 1328, 1361, 0.32181217624, 1326, 1455, 0.648961764934, 1437, 1314, 0.654174485095, 1308, 1387, 0.125905584062, 1301, 1396, 0.707306502572, 1292, 1388, 0.417860346093, 1285, 1393, 0.0165461262128, 1458, 1279, 0.402331691634, 1417, 1278, 0.457010243799, 1434, 1277, 0.823752161528, 1433, 1276, 0.601384122334, 1393, 1276, 0.534865210509, 1355, 1276, 0.941524582766, 1334, 1274, 0.943487338565, 1388, 1272, 0.646241594816, 1272, 1277, 0.437680194833, 1266, 1393, 0.432876053993, 1274, 1266, 0.428165805324, 1455, 1257, 0.694989101748, 1332, 1257, 0.753087014073, 1299, 1257, 0.9980697815, 1276, 1257, 0.577606489672, 1251, 1299, 0.0616102372984, 1247, 1455, 0.265658519563, 1279, 1247, 0.331743935935, 1243, 1247, 0.65905400958, 1443, 1242, 0.98741235798, 1314, 1242, 0.695863030003, 1242, 1276, 0.53541512648, 1254, 1241, 0.216849924833, 1235, 1326, 0.260126912251, 1323, 1235, 0.447167510658, 1233, 1326, 0.0471302256934, 1396, 1231, 0.819747163431, 1231, 1393, 0.570347923704, 1241, 1231, 0.992627049233, 1228, 1274, 0.145408602878, 1307, 1217, 0.0280492613129, 1211, 1455, 0.665788056706, 1380, 1211, 0.990048081287, 1322, 1196, 0.969416104917, 1278, 1196, 0.731201100681, 1196, 1276, 0.567843966681, 1361, 1195, 0.0250479428988, 1207, 1195, 0.0171919595605, 1195, 1196, 0.0124727957173, 1277, 1181, 0.566843170823, 1181, 1257, 0.500404936892, 1172, 1266, 0.146170962389, 1166, 1181, 0.43065588315, 1281, 1161, 0.464427497899, 1161, 1257, 0.295677738533, 1160, 1228, 0.604197622847, 1153, 1166, 0.336192578521, 1424, 1143, 0.264317157456, 1143, 1393, 0.194833516514, 1139, 1266, 0.304305190452, 1137, 1139, 0.309950640593, 1129, 1247, 0.539731706284, 1112, 1326, 0.4468703218, 1217, 1112, 0.936508003824, 1125, 1112, 0.737792761226, 1107, 1181, 0.00467827334143, 1103, 1433, 0.254609562212]


//var teams = [0,1101,1,1102,2,1103,3,1104,4,1105,5,1106,6,1107,7,1108,8,1109,9,1110,10,1111,11,1112,12,1113,13,1114,14,1115,15,1116,16,1117,17,1118,18,1119,19,1120,20,1121,21,1122,22,1123,23,1124,24,1125,25,1126,26,1127,27,1128,28,1129,29,1130,30,1131,31,1132,32,1133,33,1134,34,1135,35,1136,36,1137,37,1138,38,1139,39,1140,40,1141,41,1142,42,1143,43,1144,44,1145,45,1146,46,1147,47,1148,48,1149,49,1150,50,1151,51,1152,52,1153,53,1154,54,1155,55,1156,56,1157,57,1158,58,1159,59,1160,60,1161,61,1162,62,1163,63,1164,64,1165,65,1166,66,1167,67,1168,68,1169,69,1170,70,1171,71,1172,72,1173,73,1174,74,1175,75,1176,76,1177,77,1178,78,1179,79,1180,80,1181,81,1182,82,1183,83,1184,84,1185,85,1186,86,1187,87,1188,88,1189,89,1190,90,1191,91,1192,92,1193,93,1194,94,1195,95,1196,96,1197,97,1198,98,1199,99,1200,100,1201,101,1202,102,1203,103,1204,104,1205,105,1206,106,1207,107,1208,108,1209,109,1210,110,1211,111,1212,112,1213,113,1214,114,1215,115,1216,116,1217,117,1218,118,1219,119,1220,120,1221,121,1222,122,1223,123,1224,124,1225,125,1226,126,1227,127,1228,128,1229,129,1230,130,1231,131,1232,132,1233,133,1234,134,1235,135,1236,136,1237,137,1238,138,1239,139,1240,140,1241,141,1242,142,1243,143,1244,144,1245,145,1246,146,1247,147,1248,148,1249,149,1250,150,1251,151,1252,152,1253,153,1254,154,1255,155,1256,156,1257,157,1258,158,1259,159,1260,160,1261,161,1262,162,1263,163,1264,164,1265,165,1266,166,1267,167,1268,168,1269,169,1270,170,1271,171,1272,172,1273,173,1274,174,1275,175,1276,176,1277,177,1278,178,1279,179,1280,180,1281,181,1282,182,1283,183,1284,184,1285,185,1286,186,1287,187,1288,188,1289,189,1290,190,1291,191,1292,192,1293,193,1294,194,1295,195,1296,196,1297,197,1298,198,1299,199,1300,200,1301,201,1302,202,1303,203,1304,204,1305,205,1306,206,1307,207,1308,208,1309,209,1310,210,1311,211,1312,212,1313,213,1314,214,1315,215,1316,216,1317,217,1318,218,1319,219,1320,220,1321,221,1322,222,1323,223,1324,224,1325,225,1326,226,1327,227,1328,228,1329,229,1330,230,1331,231,1332,232,1333,233,1334,234,1335,235,1336,236,1337,237,1338,238,1339,239,1340,240,1341,241,1342,242,1343,243,1344,244,1345,245,1346,246,1347,247,1348,248,1349,249,1350,250,1351,251,1352,252,1353,253,1354,254,1355,255,1356,256,1357,257,1358,258,1359,259,1360,260,1361,261,1362,262,1363,263,1364,264,1365,265,1366,266,1367,267,1368,268,1369,269,1370,270,1371,271,1372,272,1373,273,1374,274,1375,275,1376,276,1377,277,1378,278,1379,279,1380,280,1381,281,1382,282,1383,283,1384,284,1385,285,1386,286,1387,287,1388,288,1389,289,1390,290,1391,291,1392,292,1393,293,1394,294,1395,295,1396,296,1397,297,1398,298,1399,299,1400,300,1401,301,1402,302,1403,303,1404,304,1405,305,1406,306,1407,307,1408,308,1409,309,1410,310,1411,311,1412,312,1413,313,1414,314,1415,315,1416,316,1417,317,1418,318,1419,319,1420,320,1421,321,1422,322,1423,323,1424,324,1425,325,1426,326,1427,327,1428,328,1429,329,1430,330,1431,331,1432,332,1433,333,1434,334,1435,335,1436,336,1437,337,1438,338,1439,339,1440,340,1441,341,1442,342,1443,343,1444,344,1445,345,1446,346,1447,347,1448,348,1449,349,1450,350,1451,351,1452,352,1453,353,1454,354,1455,355,1456,356,1457,357,1458,358,1459,359,1460,360,1461,361,1462,362,1463,363,1464]
var teams = [1103,'Akron',1107,'Albany NY',1112,'Arizona',1125,'Belmont',1129,'Boise St',1137,'Bucknell',1139,'Butler',1143,'California',1153,'Cincinnati',1160,'Colorado',1161,'Colorado St',1166,'Creighton',1172,'Davidson',1181,'Duke',1195,'FL Gulf Coast',1196,'Florida',1207,'Georgetown',1211,'Gonzaga',1217,'Harvard',1228,'Illinois',1231,'Indiana',1233,'Iona',1235,'Iowa St',1241,'James Madison',1242,'Kansas',1243,'Kansas St',1247,'La Salle',1251,'Liberty',1254,'Long Island',1257,'Louisville',1266,'Marquette',1272,'Memphis',1274,'Miami FL',1276,'Michigan',1277,'Michigan St',1278,'Minnesota',1279,'Mississippi',1281,'Missouri',1285,'Montana',1292,'MTSU',1299,'NC A&T',1301,'NC State',1307,'New Mexico',1308,'New Mexico St',1314,'North Carolina',1322,'Northwestern LA',1323,'Notre Dame',1326,'Ohio St',1328,'Oklahoma',1329,'Oklahoma St',1332,'Oregon',1334,'Pacific',1338,'Pittsburgh',1355,'S Dakota St',1361,'San Diego St',1380,'Southern Univ',1387,'St Louis',1388,'St Marys CA',1393,'Syracuse',1396,'Temple',1417,'UCLA',1424,'UNLV',1433,'VA Commonwealth',1434,'Valparaiso',1437,'Villanova',1443,'W Kentucky',1455,'Wichita St',1458,'Wisconsin']

var select = document.getElementById("selectNumber1");
//var firstarr = [1,2,3];
//var secondarr = [1,2,3];

function changeToHash(values) {
var result  = {},
    counter = 0,
    str     = "",
    ar=[];

values.forEach(function (item) {
    if (counter === 0) {
	ar.push(item)
        //str = str.concat(item)
    } else if (counter === 1) {
        //str = str.concat(",", item)
	ar.push(item)
    } else if (counter === 2) {	
	str = str.concat(ar[0]);
	str = str.concat(",", ar[1]);
	result[str] = item;
	str         = "";
	str = str.concat(ar[1]);
	str = str.concat(",", ar[0]);	
	result[str] = 1 - item;
        str         = "";
	ar=[];
        counter     = 0; // reset counter
        return; // go to the next iteration
    } 
    
    counter++;
});
return result;
}

var result = changeToHash(values);


l = teams.length/2;
for(var i = 0; i < l; i++) {
  
    var opt = teams[i*2+1];
    var v = teams[i*2];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = v;
    el.style.fontSize = "large"
    select.appendChild(el);
}

var select = document.getElementById("selectNumber2");
	
for(var i = 0; i < l; i++) {
  
    var opt = teams[i*2+1];
    var v = teams[i*2];
    var el2 = document.createElement("option");
    el2.textContent = opt;
    el2.value = v;
    el2.style.fontSize = "large"
    select.appendChild(el2);
}



var predselect = document.getElementById("pred");
var $selects = $('select');
var $output = $('#pred');
var $output2 = $('#pred2');


$('#selectNumber1').on('change', function(){
        firstValue = $("#selectNumber1").find(":selected").text();
    	$('#tm1').val(firstValue);
});
$('#selectNumber2').on('change', function(){
        secondValue = $("#selectNumber2").find(":selected").text();
    	$('#tm2').val(secondValue);
});


$selects.on('change', function () {
    var key = $selects.map(function (index, el) {
        return Number($(el).val());
    })
        .get()
        //.sort()
        .join(',');
    //$('#tm1').val(firstValue);
    //$('#tm2').val(firstValue);
    $output.text((Math.round((100*result[key]) * 10) / 10) || '');
    $output2.text((Math.round((100*(1-result[key])) * 10) / 10) || '');
    $team1.val();
});














