//init GitHub
const github = new Github;

//Init UI
const ui = new UI;


//Search Input
const searchUser = document.getElementById('searchUser');

//Search Input event Listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    if (userText !== '') {
        //Make HTTP call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    //show profile
                    ui.showProfile(data.profile);

                    //show repos
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //Clear Profile
        ui.clearProfile();


    }
})