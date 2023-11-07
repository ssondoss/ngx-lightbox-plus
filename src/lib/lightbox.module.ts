
import { FileSaverModule } from 'ngx-filesaver';

import { NgModule,  } from '@angular/core';

import { LightboxConfig } from './lightbox-config.service';
import { LightboxEvent, LightboxWindowRef } from './lightbox-event.service';
import { LightboxOverlayComponent } from './lightbox-overlay.component';
import { LightboxComponent } from './lightbox.component';
import { Lightbox } from './lightbox.service';
import { CommonModule } from '@angular/common';
import { BrowserModule, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SafeUrlPipe } from './safeUrl.pipe';

@NgModule({
  declarations: [ LightboxOverlayComponent, LightboxComponent , SafeUrlPipe],

  entryComponents: [ LightboxOverlayComponent, LightboxComponent ],
  imports: [ FileSaverModule,BrowserModule ]
})
export class LightboxModule { }
