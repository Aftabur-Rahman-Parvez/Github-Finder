class UI{
    constructor(){
        this.profile=document.getElementById('profile');
    }

    showProfile(user){
        console.log(user);
        this.profile.innerHTML=`
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">  
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                    <span class="badge badge-primary"> public Repos : ${user.public_repos}</span>
                    <span class="badge badge-secondary"> public Gists : ${user.public_gists}</span>
                    <span class="badge badge-success"> Followers  :${user.followers}</span>
                    <span class="badge badge-info"> Followers  :${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">WEbsite/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                    </div>
                
                </div>
            </div>  

            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>

        `;

    }

    //Show user Repos
    showRepos(repos){
        let output='';
        repos.forEach(function(repo){
            output +=`
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                         <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary"> Stars : ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary"> Watchers : ${repo.watchers}</span>
                            <span class="badge badge-success"> Forks :${repo.forms_count}</span>

                        </div>
                    </div>
                </div>
            `;
        });

        //Output

        document.getElementById('repos').innerHTML=output;

    }

    //Show alert message
    showAlert(message,className){
        this.clearAlert();
        //create div
        const div=document.createElement('div');
        //Add className
        div.className=className;
        //Add text

        div.appendChild(document.createTextNode(message));
        //get parent
        const container=document.querySelector('.searchContainer')
        //get search box
        const search=document.querySelector('.search');
        //insert Alert

        container.insertBefore(div,search); 

        //Timeout after 3s
        setTimeout(()=>{
            this.clearAlert()
        },3000)
        
    }
 
    //Clear Alert Messgae

    clearAlert(){
        const currentAlert=document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }

    }
    //Clear Profile
    clearProfile(){
        this.profile.innerHTML='';
    }
}