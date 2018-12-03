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

  serverId: number = 10;
  serverStatus: string = "Offline !";
  serverName: string = "LOCAL SERVER";

  //method
  myMethod(){
    return this.serverName;
  }

  //Constructor
  constructor(){
    setTimeout(() => { this.allowNewServer = true; } ,10000);
  }

  ngOnInit(){}

}
