import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  footNotes = [
    { tag: 'Human Resources Management', },
    { tag: 'A part of the Enterprise Resource Systems.', },
  ];

  footTag00 = 'Copyright ';
  footTag01 = 2020;
  footTag02 = 'All rights reserved.';
  footLine00 = 'Mark Anthony R. MANUEL';
  footLine01 = 'Erwin L. ALQUIZA';

  constructor() { }

  ngOnInit(): void {
  }

}
