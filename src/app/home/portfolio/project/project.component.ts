import { Component, inject } from '@angular/core';
import { PortfoliodataService } from '../../../portfoliodata.service';

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
      name: "Videoflix",
      imgDevice: "project_pokedex.png",
      imgBlank: "pokedex_desktop.png",
      descriptionEng: "Videoflix is a platform for watching short videos. The platform is designed for a seamless streaming experience.",
      descriptionGer: "Videoflix ist eine Video-Plattform für kurze Videos. Die Plattform bietet ein nahtloses Streaming-Erlebnis.",
      usedTech: "Django | Python | Docker | Redis",
      gitHub: "https://github.com/AlexanderHardtke/videoflix_backend",
      projectLink: "https://videoflix.alexander-hardtke.com/"
    },
    {
      name: "Join",
      imgDevice: "project_join.png",
      imgBlank: "join_desktop.png",
      descriptionEng: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      descriptionGer: "Taskmanager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen und weisen Sie Benutzer und Kategorien zu.",
      usedTech: "JavaScript | HTML | CSS | Firebase",
      gitHub: "https://github.com/AlexanderHardtke/Join",
      projectLink: "https://alexander-hardtke.com/Join/index.html"
    },
    {
      name: "DABubble",
      imgDevice: "da_bubble.png",
      imgBlank: "da_bubble_desktop.png",
      descriptionEng: "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
      descriptionGer: "Ein Slack-Klon. Er revolutioniert die Teamkommunikation und Zusammenarbeit mit seiner intuitiven Benutzeroberfläche, Echtzeit-Nachrichten und seiner strukturierten Kanalorganisation.",
      usedTech: "Angular | Typescript | Firebase",
      gitHub: "https://github.com/AlexanderHardtke/da_bubble",
      projectLink: "https://dabubble.alexander-hardtke.com/"
    },
    {
      name: "Sharkie",
      imgDevice: "project_sharkie.png",
      imgBlank: "sharkie_desktop.png",
      descriptionEng: "A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.",
      descriptionGer: "Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Sharkie dabei, Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.",
      usedTech: "JavaScript | HTML | CSS",
      gitHub: "https://github.com/AlexanderHardtke/Sharkie",
      projectLink: "https://alexander-hardtke.com/Sharkie/index.html"
    },
  ]
}