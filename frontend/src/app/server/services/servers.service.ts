import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, delay, map, Observable, tap} from "rxjs";
import {Server} from "../models/server.model";

@Injectable()
export class ServersService {

  constructor(private http: HttpClient) { }

  private _loading$ = new BehaviorSubject<boolean>(false);
  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  private _servers$ = new BehaviorSubject<Server[]>([]);
  get servers$(): Observable<Server[]> {
    return this._servers$.asObservable();
  }

  private lastServerLoaded = 0;

  private setLoadingStatus(status: boolean) {
    this._loading$.next(status);
  }

  getServersFromServer() {
    if(Date.now() - this.lastServerLoaded <= 3000000) {
      return;
    }
    this.setLoadingStatus(true);
    this.http.get<Server[]>('http://localhost:9000/server').pipe(
      delay(1000),
      tap(servers => {
        this.lastServerLoaded = Date.now();
        this._servers$.next(servers);
        this.setLoadingStatus(false);
      })
    ).subscribe();
  }

  getServerById(id: number): Observable<Server> {
    if(!this.lastServerLoaded){
      this.getServersFromServer();
    }
    return this.servers$.pipe(
      map(servers => servers.filter(server => server.id === id)[0])
    )
  }
}
