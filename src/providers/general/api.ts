import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  //url: string = 'http://localhost:8084/GesturApp/api';

  constructor(public http: Http) {
  }

  get(endpoint: string, params?: any){

        let req = new RequestOptions();
    

    // // Support easy query params for GET requests
    // if (params) {
    //   let p = new URLSearchParams();
    //   for (let k in params) {
    //     p.set(k, params[k]);
    //   }
    //   // Set the search field if we have params and don't already have
    //   // a search field set in options.
    //   options.search = !options.search && p || options.search;
    // }
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
    //headers.append('Access-Control-Allow-Headers', 'X-Requested-With');
    //req.method =  RequestMethod.Get;
    req.headers = headers;
    //req.params = null;

    return this.http.get(endpoint, req).toPromise().then(response => response.json());
  }

  post(endpoint: string, body: any, options?: RequestOptions) {
    let header = new Headers();
    //header.append();

    let option = new RequestOptions();
    option.headers = header;

    return this.http.post(endpoint, body, option);
  }

  put(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(endpoint, body, options);
  }

  delete(endpoint: string, options?: RequestOptions) {
    return this.http.delete( endpoint, options);
  }

  patch(endpoint: string, body: any, options?: RequestOptions) {
    return this.http.put(endpoint, body, options);
  }
}
