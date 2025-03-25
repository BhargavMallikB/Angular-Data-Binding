import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  avengers = [
    {
      title: 'SpiderMan',
      heroQuote: 'Great Power comes with Great Responsibility',
      isHeroActive: false,
      imgUrl:
        'https://th.bing.com/th/id/OIP.ib7PR_yLBU8Lf2jShDSlbQHaJ4?w=130&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      hideBar: true,
    },
    {
      title: 'DeadPool',
      heroQuote: 'I am Inevitable',
      isHeroActive: false,
      imgUrl:
        'https://th.bing.com/th/id/OIP.02t5LUMiUNvmh1geoDB_3gHaO5?w=115&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      hideBar: true,
    },
    {
      title: 'DearDevil',
      heroQuote: 'I am a very Good Lawyer',
      isHeroActive: false,
      imgUrl:
        'https://th.bing.com/th/id/OIP.sYaOq5pklttAnszFsTSRIgHaJn?w=130&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      hideBar: true,
    },
    {
      title: 'IronFist',
      heroQuote: 'I am IronFist',
      isHeroActive: false,
      imgUrl:
        'https://th.bing.com/th/id/OIP.BkUctBuQQi7HzRZWGbGwiQHaKL?w=151&h=208&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      hideBar: true,
    },
  ];

  updateAvengerStatus(avenger: any){
    avenger.isHeroActive = !avenger.isHeroActive;
  }

  showInputBar(avenger: any){
    avenger.hideBar = !avenger.hideBar;
  }
}
