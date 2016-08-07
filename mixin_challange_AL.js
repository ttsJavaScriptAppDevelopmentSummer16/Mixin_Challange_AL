var userProfile = {
  name:null,
  address: null,
  city: null,
  state: null,
  zipcode: null,
  avatar:null,
}

function getProfileUpdates(userUpdates) {
  console.log('Update user name?');
  userUpdates.name = 'Alex'
  console.log('Updated User Name = ' + userUpdates.name);
  console.log('Update user address?');
  userUpdates.address = '123 Fake Street'
  console.log('Updated User address = ' + userUpdates.address);
  console.log('Update user city?');
  userUpdates.city = 'Fake Town'
  console.log('Updated User city = ' + userUpdates.city);
  console.log('Update user state?');
  userUpdates.state = 'Ohio'
  console.log('Updated User state = ' + userUpdates.state);
  console.log('Update user zipcode?');
  userUpdates.zipcode = '12345'
  console.log('Updated User zipcode = ' + userUpdates.zipcode);
  console.log('Update user avatar?');
  userUpdates.avatar = 'Libby the Dog'
  console.log('Updated User avatar = ' + userUpdates.avatar);
  return userUpdates
}

function updateProfile(nv){
  return Object.assign(userProfile, nv);
}

var newValues = getProfileUpdates(userProfile);
updateProfile(newValues);

console.log(userProfile);
