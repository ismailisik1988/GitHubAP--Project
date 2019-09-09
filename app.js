const githubFormElement = document.getElementById("github-form");
const githubNameInputElement = document.getElementById("githubname");
const lastSourceClearButton = document.getElementById("clear-last-users");
const github = new gitHubWork();
const ui=new UI();

MyEventListener()

function MyEventListener() {
    githubFormElement.addEventListener("submit", getUserInformation);
    lastSourceClearButton.addEventListener("click", clearLastAllSearch);
    document.addEventListener("DOMContentLoaded",getLastSource);
}

function getUserInformation(e) {
    //TODO: Burada Get İsteği Gönderilecek
    ui.repoInformationClear();

    if (githubNameInputElement.value === "") {
        alert("Lütfen User Name Alanını Doldurunuz !!!")
    }
    else {
        github.getUserInformation(githubNameInputElement.value.trim())
        .then(response =>{
            if(response.user.message==="Not Found"){              
                    ui.alertMessage("danger");                                 
            }
            else{
                console.log(response);               
                ui.getProfileInformation(response.user);
                ui.getRepoInformation(response.repo);
            }
        })
        .catch(err =>ui.alertMessage(err));
    }
    ui.lastSourch(githubNameInputElement.value);
    ui.clearNameInput();
    
    e.preventDefault();
}
function getLastSource(){
    ui.getLastSourceUI();
}
function clearLastAllSearch() {
    if(confirm("Silmek İstediğinizden Eminnisiniz ?")){
        ui.clearLastSource();
    }
}
