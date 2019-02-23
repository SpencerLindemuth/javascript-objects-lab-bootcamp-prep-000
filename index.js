var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
    var newObj = Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteObjectByKey(obj, key){
  newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}
