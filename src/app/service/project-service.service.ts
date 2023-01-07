import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API_URL = "https://api.github.com/users/Jean-Jacques-Augustin/repos";

@Injectable({
    providedIn: 'root'
})
export class ProjectServiceService {

    constructor(private http: HttpClient) {
    }

    getAllProject = () => {
        return this.http.get(API_URL);
    }
}
