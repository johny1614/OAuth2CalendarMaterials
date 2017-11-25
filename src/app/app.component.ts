import {HttpModule,Http,Headers} from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public http:Http){}
  ngOnInit(): void {
    console.log('w init');
    this.accessToken=this.getAccessToken(window.location.href)
    if(window.location.hash!=undefined && window.location.hash!=''){
    this.accessToken=this.getAccessToken(window.location.hash)
    }

  }
  title = 'app';
  displayedCols = ['summary','description'];
  calCols=['summary',`start['dateTime']`];
  dataSrc=[];
  calSrc=[];
  isCal=false;
  client_id='949823352183-e1uau91hgen3uvkr9f6bhu5rldp9qiec.apps.googleusercontent.com';//sec2
  client_secret='BEGpGJ16qNhEU8F2dvVQPdIl';//sec2
  redirect_uri="http://localhost:4200";
  events=[];
  singleCal;
  bearerToken='';
  accessToken='';
  resp;
  calendars=[];
  areCalendars=false;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSrc.filter = filterValue;
}
createTokenHeader(){
  const headers= {
    'Authorization': 'Bearer '+this.bearerToken}
const h=new Headers(headers);
return h;
}
parseDate(date:String){
  let parsedDate = date.replace('T',' ');
  let parsedDateFinally=parsedDate.split('+')
  return parsedDateFinally[0];
}

getCalendars(){
  const tokenHeader=this.createTokenHeader();
  console.log('showing calendars...');
  const conString='https://www.googleapis.com/calendar/v3/users/me/calendarList';
  this.http.get(conString,{headers:tokenHeader}).subscribe(
    (res)=>{
      this.calendars=JSON.parse(res['_body']).items;
      console.log('kalendarze:',this.calendars);
      this.dataSrc=new MatTableDataSource(this.calendars);
      if(this.dataSrc['data'].length>0){
        this.areCalendars=true;
      }


    },
    (error)=>{console.log(error);}
  );
}

loadSingle(singleCal){
 const tokenHeader=this.createTokenHeader();
 const connString='https://www.googleapis.com/calendar/v3/calendars/';
  console.log(singleCal.id);
  this.http.get(connString+singleCal.id+'/events',{headers:tokenHeader}).subscribe(
    (res)=>{
      let body=res['_body'];
      let parsedBody=JSON.parse(body);
      this.singleCal=parsedBody.items;
      this.calSrc=new MatTableDataSource(this.singleCal);
      console.log(this.singleCal);
      this.isCal=true;
    }
);
}

login(){
  var scope="https://www.googleapis.com/auth/calendar";
  var response_type="token";
  var url='https://accounts.google.com/o/oauth2/v2/auth?redirect_uri='+this.redirect_uri+'&prompt=consent&scope='+scope+'&response_type=code&client_id='+this.client_id+'&scope'+'https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&access_type=offline'
  window.location.replace(url);
}
exchangeToken(){
  let connString='https://accounts.google.com/o/oauth2/token'
  let connBody=this.createBodyRequestForBearers();
let headers = new Headers();
console.log(connBody);

headers.append('Content-Type', 'application/x-www-form-urlencoded');
  this.http.post(connString,connBody,{headers:headers}).subscribe(
    res=>{
      console.log(res);
      this.resp=JSON.parse(res['_body']);
      this.bearerToken=this.resp['access_token'];
    },
    (error)=>{console.log(error);
    }
  );
}

createBodyRequestForBearers(){
  let scope = 'https://www.googleapis.com/auth/calendar&grant_type=authorization_code'
  let connBody='code='+encodeURI(this.accessToken);
  connBody+='&redirect_uri='+this.redirect_uri
  connBody+='&client_id='+this.client_id
  connBody+='&client_secret='+this.client_secret
  connBody+='&scope='+scope;
  return connBody;
}
getAccessToken(hash:String){
  try{
  let a = hash.split('=')
  let b = a[1].split('&')
  let c = b[0].split('#')
  console.log('token to? ',c[0]);
  return c[0]
  }
  catch(ex){
    return ""
  }
}
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
