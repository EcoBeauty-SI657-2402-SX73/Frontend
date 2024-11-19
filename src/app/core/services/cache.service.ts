import { Injectable } from "@angular/core";
import { HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map<string, HttpResponse<any>>();

  get(key: string): HttpResponse<any> | null {
    const cached = this.cache.get(key);
    console.log(`Cache get: ${key} - ${cached ? 'HIT' : 'MISS'}`);
    if (cached) {
      console.log(`Cached Response Body:`, cached.body);
    }
    return cached || null;
  }

  set(key: string, response: HttpResponse<any>): void {
    console.log(`Cache set: ${key}`);
    console.log(`Content to cache:`, response.body);
    this.cache.set(key, response);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  clear(): void {
    this.cache.clear();
  }
}
