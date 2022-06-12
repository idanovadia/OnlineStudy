export var User = class { 
    constructor({firstName,lastName,phone,password,email,username,groupID = null,address}) { 
       this.firstName = firstName;
       this.lastName = lastName;
       this.phone = phone;
       this.password = password;
       this.email = email;
       this.username = username;
       this.groupID = groupID;
       this.address = address;
    } 
 }