//Init Github
const github= new Github;
//Init User
const ui=new UI;
// Search Input
const searchInput=document.getElementById('searchUser');
//Search Input event listener
searchInput.addEventListener('keyup',(e)=>{
    const userText=e.target.value;
    if(userText !==''){
        console.log(userText);
        github.getUser(userText)
        .then(data=>{
            console.log(data);
            if(data.profile.message === 'Not Found'){
                //Show Alert 
                ui.showAlert('User Not Found','alert alert-danger')
            }else{
                //Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else{
        //Clear Profile
        ui.clearProfile();
    }

})