import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BranchOffice } from '../models/branch-office.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BranchOfficeService {

  private url = 'https://comics-74471.firebaseio.com';

  constructor(private http: HttpClient) { }

  createBranchOffice(model: BranchOffice) {
    return this.http.post(`${ this.url }/Sucursales.json`, model);
  }

  getBranchOffice() {
    return this.http.get(`${ this.url }/Sucursales.json`).pipe(
      map(this.createArray),
      delay(0)
    );
  }

  updateBranchOffice(model: BranchOffice) {
    const branchTemp = {
      ...model
    };

    delete branchTemp.id;
    return this.http.put(`${ this.url }/Sucursales/${ model.id }.json`, branchTemp);
  }

  getBranchOfficeById( id: string ) {
    return this.http.get(`${ this.url }/Sucursales/${ id }.json`);
  }

  private createArray( array: object ) {

    const branches: BranchOffice[] = [];

    Object.keys( array ).forEach( key => {

      const branch: BranchOffice = array[key];
      branch.id = key;

      branches.push( branch );
    });


    return branches;

  }
}
