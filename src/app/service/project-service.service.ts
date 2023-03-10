import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API_URL = "https://api.github.com/users/Jean-Jacques-Augustin/repos";


/**
 * This is a very good example of a service
 */


@Injectable({
    providedIn: 'root'
})
export class ProjectServiceService {

    constructor(private http: HttpClient) {
    }

    getAllProject = () => {
        return this.http.get(API_URL);
    }

    getProject = (id: string) => {
        return this.http.get(`${API_URL}/${id}`);
    }

}
