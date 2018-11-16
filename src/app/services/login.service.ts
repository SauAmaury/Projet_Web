

export class loginService {

   private isConnected = false;

   logIn(email:string,passwd:string) : boolean {
       this.isConnected = true;
       //$http.post
       return this.getState();
   }

   logOut() : boolean {
       this.isConnected = false;
       return this.getState();
   }

   getState() : boolean{
       return this.isConnected;
   }

}
