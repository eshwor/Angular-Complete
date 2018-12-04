import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  // selector: '[app-server]',
  // selector: '.app-server',
  templateUrl: './server.component.html',
  //styleUrls: ['./server.component.css']
  styles : [`
    h1 {
      color: blue;
      border: 1px solid blue;
      display: inline;
      padding: 1rem;
    }
    .btn {
      background-color: black;
      color: white;
      padding: 0.5rem 1rem;
    }
  `]
})

export class ServerComponent implements OnInit{

  allowNewServer = false;
  serverCretionStatus = "No, Server was created !";


  serverId: number = 10;
  serverStatus: string = "Offline !";
  serverName: string = "LOCAL SERVER";
  serverCreated = false;

  //method
  myMethod(){
    return this.serverName;
  }

  createServer(){
    this.serverCreated = true;
    this.serverCretionStatus = "Server was created. Name is " + this.serverName;
  }

  onUpdateServer(event: Event){
    this.serverCretionStatus = (<HTMLInputElement>event.target).value;
  }

  //Constructor
  constructor(){
    setTimeout(() => { this.allowNewServer = true; } ,3000);
  }

  ngOnInit(){}

}
