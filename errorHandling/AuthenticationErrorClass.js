class AuthenticationErrorClass extends Error {
  constructor(message) {
    super(message);
    this.name = "authenticationError";
    console.log(this.name)
  }
}

class DataBaseError extends Error {
    constructor(message){
        super(message);
        this.name = 'DatabaseError';
        console.log(this.name);
        
    }

}

class PermissionError extends Error{ 
    constructor(message){
        super(message)
        this.name = 'PermissionError';
        console.log(this.name);
    }

}

// throw new AuthenticationErrorClass("opsie");
// throw new PermissionError("opsie");
throw new DataBaseError("opsie");
