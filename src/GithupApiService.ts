import * as request from 'request';
class GithubApiService{
    getUserInfo(userName: string){
        let options:any={
            headers:{
                'User-Agent':'justanagent'
            }
        }//we created this options variable because github api requires a user-aagent in the request header
        request.get('https://api.github.com/users/' + userName, options, (error:any, response:any, body:any)=>{
            console.log(body);
        })
    }
}