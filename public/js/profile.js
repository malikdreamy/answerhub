
const uploadSaveBtn = document.getElementById('upload-save');

const saveUpload = async () => {
  const form = document.getElementById('upload-form');
  const formData = new FormData(form);

  const response = await fetch('/api/users/update-profile-pic', {
    method: 'POST',
    body: formData,
  });
 
  const responseJson = await response.json();
  const profilePic = await responseJson.profilePic;

  const bio = await responseJson.userBio;
  const bioElement = document.getElementById('userBio');
  console.log(bio)
  // setTimeout(() => {
    location.reload();
    bioElement.innerText = bio;
  //  }, 1000);
  
  //const profilePicElement = document.getElementById('profile-pic-preview');
  //profilePicElement.src = 'window.location.pathname' + profilePic;

  // window.location.replace('/profile');
};

uploadSaveBtn.addEventListener("click", saveUpload);

// document.addEventListener('DOMContentLoaded', () => {
//   uploadSaveBtn.addEventListener('click', () => 
//   setTimeout(() => {
//     //saveUpload();
//     // window.location.replace('/profile');
//    //location.reload();
//   }), 2000);
// });

// uploadSaveBtn.addEventListener('click', saveUpload);