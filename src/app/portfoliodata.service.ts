import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfoliodataService {
  lang: "en" | "ger";
  page: "index" | "impressum" | "privacy";
  mail = "Alex87.Hardtke@googlemail.com";

  constructor() {
    this.lang = "en";
    this.page = "index"
  }
}
