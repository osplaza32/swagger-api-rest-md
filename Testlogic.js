// Compact arrays with null entries; delete keys from objects with null value
function removeNulls(obj){
    var isArray = obj instanceof Array;
    for (var k in obj){
        if (obj[k]===null) isArray ? obj.splice(k,1) : delete obj[k];
        else if (typeof obj[k]=="object") removeNulls(obj[k]);
    }
}

var o = {
    "WorkOrder": null,
    "asda": null,
    "WAKANDA":"DFKSDFFSDF",
    "shield":{
        "director":"furry"
    }
}

removeNulls(o);

console.log(JSON.stringify(o));
