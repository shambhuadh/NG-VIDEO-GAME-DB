import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': '1396918a4fmsh48d5dbf0768101cp1776bbjsnb5d48daa2a6c',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
              key: 'a77dd01a0d5d438c933a4f41e8aed266',
            }
          });
        return next.handle(req);
    }
}