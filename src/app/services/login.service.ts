export class loginService {

   private isConnected = false;

   logIn() : boolean {
       this.isConnected = true;
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
