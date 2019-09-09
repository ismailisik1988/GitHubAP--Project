class UI {
    constructor() {
        this.profilDivElement = document.getElementById("profile");
        this.repoDivElement = document.getElementById("repos");
        this.githubNameInputElement = document.getElementById("githubname");
        this.lastUserUlElement=document.getElementById("last-users");
        this.alertDivElement=document.getElementById("alert");
        this.storge=new Storage();
    }
    clearNameInput() {
        this.githubNameInputElement.value = "";
    }
    getProfileInformation(user) {
        this.profilDivElement.innerHTML =
            `
                <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="${user.html_url}" target = "_blank">
                         <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong>${user.name}</strong></div>
                         <hr>
                         <div id="bio">${user.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${user.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${user.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light">${user.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="email">${user.email}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div> 
        `;
    }

    getRepoInformation(repos){
      repos.forEach(repo => {
        this.repoDivElement.innerHTML+=
        `
        <div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2">
                    <span></span> 
                    <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <button class="btn btn-secondary">
                    Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                </button>

                <button class="btn btn-info">
                    Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                </button>       
                </div>
            </div>
        </div> 
    
        `;
      });    
    }

    repoInformationClear(){
        this.repoDivElement.innerHTML="";
    }

    lastSourch(source){
        //TODO: last soruce elementleri eklenecek      
        this.storge.setStorage(source);
        const SourceStorage=this.storge.getStorage();
        this.lastUserUlElement.innerHTML="";
        for(let Source of SourceStorage){
            this.lastUserUlElement.innerHTML+=
            `
            <li class="list-group-item">${Source}</li>
            `;
        }
        
    }
    alertMessage(type){
        let alertElement=document.createElement("div");
        alertElement.className=`alert alert-${type}`;
        alertElement.role="alert";
        alertElement.textContent="Böyle bir kullanıcı bulunamadı";
        this.alertDivElement.appendChild(alertElement);
        setTimeout(() => {
            alertElement.remove();
        }, 2000);
    }   
    getLastSourceUI(){
        const lastSourceStorage=this.storge.getStorage();
        for(let item of lastSourceStorage){
            this.lastUserUlElement.innerHTML+=
            `
            <li class="list-group-item">${item}</li>
            `;
        }
    }
    clearLastSource(){
        this.storge.clearStorage();
        this.lastUserUlElement.innerHTML="";
    }
}