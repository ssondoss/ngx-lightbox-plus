import { FileSaverModule } from 'ngx-filesaver';

import { NgModule } from '@angular/core';

import { LightboxConfig } from './lightbox-config.service';
import { LightboxEvent, LightboxWindowRef } from './lightbox-event.service';
import { LightboxOverlayComponent } from './lightbox-overlay.component';
import { LightboxComponent } from './lightbox.component';
import { Lightbox } from './lightbox.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ LightboxOverlayComponent, LightboxComponent ],

  entryComponents: [ LightboxOverlayComponent, LightboxComponent ],
  imports: [ FileSaverModule,BrowserModule ]
})
export class LightboxModule { }
