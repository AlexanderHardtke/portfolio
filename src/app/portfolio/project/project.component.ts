import { Component, inject } from '@angular/core';
import { PortfoliodataService } from '../../portfoliodata.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  portData = inject(PortfoliodataService);

  projects = [
    {
      name: "Sharkie",
      imgDevice: "project_sharkie.png",
      imgBlank: "sharkie_desktop.png",
      descriptionEng: "A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.",
      descriptionGer: "Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Sharkie dabei, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.",
      usedTech: "JavaScript | HTML | CSS",
      gitHub: "https://github.com/AlexanderHardtke/Sharkie",
      projectLink: "#LinkPrject"
    },
    {
      name: "Pokedex",
      imgDevice: "project_pokedex.png",
      imgBlank: "pokedex_desktop.png",
      descriptionEng: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      descriptionGer: "Basierend auf der PokéAPI. Eine einfache Bibliothek die Pokemondaten bereitstellt und katalogisiert.",
      usedTech: "JavaScript | HTML | CSS | API",
      gitHub: "https://github.com/AlexanderHardtke/Pokedex",
      projectLink: "#LinkPrject"
    },
    {
      name: "Join",
      imgDevice: "project_join.png",
      imgBlank: "join_desktop.png",
      descriptionEng: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      descriptionGer: "Taskmanager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen und weisen Sie Benutzer und Kategorien zu.",
      usedTech: "JavaScript | HTML | CSS | Firebase",
      gitHub: "https://github.com/AlexanderHardtke/Join",
      projectLink: "#LinkPrject"
    },
    {
      name: "DABubble",
      imgDevice: "#",
      imgBlank: "sharkie_desktop.png",
      descriptionEng: "description english",
      descriptionGer: "Beschreibung deutsch",
      usedTech: "GitHub",
      gitHub: "#LinkGit",
      projectLink: "#LinkPrject"
    },
  ]
}
