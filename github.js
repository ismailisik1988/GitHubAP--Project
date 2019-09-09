class gitHubWork{
    constructor(){
        this.url="https://api.github.com/users/";
    }
    async getUserInformation(userName){
        const user=await fetch(this.url+userName);
        const repo=await fetch(this.url+userName+"/repos");

        return {
            user:await user.json(),
            repo:await repo.json()
        };
    }
}