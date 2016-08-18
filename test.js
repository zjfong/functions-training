function findWdi(arr){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === 'wdi'){
      return true;
    }
  }
  return false;
}
findWdi([9,'Bart Simpson', true, 'wdi']) // returns true
findWdi(['a','b','c']) // returns false
