import { Component, OnInit } from '@angular/core';
import { TextZoom } from '@capacitor/text-zoom';

@Component( {
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
} )
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Inbox',
      url: '/folder/Inbox',
      icon: 'mail',
    },
    {
      title: 'Outbox',
      url: '/folder/Outbox',
      icon: 'paper-plane',
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart',
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive',
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash',
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning',
    },
  ];
  public labels = [
    'Family',
    'Friends',
    'Notes',
    'Work',
    'Travel',
    'Reminders',
  ];

  constructor() {
  }

  async ngOnInit(): Promise<void> {
    try {
      let preferedZoom = await TextZoom.getPreferred();   // << this function destroys the app
      console.log(
        'first',
        preferedZoom );

      await TextZoom.set( { value: preferedZoom.value } );

      preferedZoom = await TextZoom.getPreferred();   // << this function destroys the app
      console.log(
        'second',
        preferedZoom );
    } catch ( err ) {
      console.log( err );
    }

  }
}
