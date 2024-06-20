import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html'
})
export class LanguageSwitchComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'de']);
    this.translate.setDefaultLang('es');
  }

  switchLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    this.translate.use(lang);
  }
}
