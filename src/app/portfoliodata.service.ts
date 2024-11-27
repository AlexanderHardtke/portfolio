import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfoliodataService {
  lang: "en" | "ger";

  constructor() {
    this.lang = "en";
  }
}
