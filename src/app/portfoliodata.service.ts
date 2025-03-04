import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfoliodataService {
  lang: "ger" | "en";
  page: "index" | "impressum" | "privacy";
  mail = "mail@alexander-hardtke.com";

  constructor() {
    this.lang = "ger";
    this.page = "index"
  }
}
