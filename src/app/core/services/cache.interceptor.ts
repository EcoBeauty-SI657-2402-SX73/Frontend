import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { CacheService } from "./cache.service";
import { Observable, of, tap } from "rxjs";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheService: CacheService) {}

  /**
   * Normaliza la URL para que los parámetros de consulta estén ordenados
   * y las claves sean consistentes.
   */
  private normalizeUrl(url: string): string {
    const urlObj = new URL(url);
    urlObj.searchParams.sort();
    const normalizedUrl = urlObj.toString();
    console.log(`Normalized URL: ${normalizedUrl}`);
    return normalizedUrl;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req); // Solo almacenamos en caché las solicitudes GET
    }

    const url = this.normalizeUrl(req.urlWithParams);
    console.log(`Intercepting request: ${url}`);

    // Intenta obtener la respuesta de la caché
    const cachedResponse = this.cacheService.get(url);
    if (cachedResponse) {
      console.log(`Serving from cache: ${url}`);
      const cachedWithHeader = cachedResponse.clone({
        headers: cachedResponse.headers.set('X-Cache', 'HIT'),
      });
      return of(cachedWithHeader); // Devuelve la respuesta almacenada
    }

    // Si no está en la caché, realiza la solicitud y almacena la respuesta
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log(`Caching response body: ${url}`);
          const clonedResponse = event.clone({ body: event.body });
          this.cacheService.set(url, clonedResponse);

          const testCachedResponse = this.cacheService.get(url);
          if (testCachedResponse) {
            console.log(`Test Cached Response Body:`, testCachedResponse.body);
          }
        }
      })
    );
  }
}
