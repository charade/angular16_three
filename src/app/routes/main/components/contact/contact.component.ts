import { AfterViewInit, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import gsap from 'gsap';
import { JsonPipe, NgIf } from '@angular/common';
import { MediaBreakPointsObserver } from 'src/app/shared-components/media-breakpoints-observer';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [TranslateModule, FormsModule, NgIf, JsonPipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent
  extends MediaBreakPointsObserver
  implements AfterViewInit
{
  @Input() animationTimeLine: gsap.core.Timeline;

  email = '';
  message = '';

  ngAfterViewInit(): void {
    const contactTimelineAnimation = gsap
      .timeline({
        immediateRender: false,
        scrollTrigger: {
          trigger: 'section.contact',
          start: 'top 75%',
          end: 'top 75%',
          scrub: 2,
        },
      })
      .from('.outro-container h2:first-child', {
        y: -30,
        opacity: 0,
      })
      .from('.outro-container h2:last-child', {
        y: 30,
        opacity: 0,
      })
      .from('form', { opacity: 0 });

    this.animationTimeLine.add(contactTimelineAnimation);
  }

  onsubmit(form: NgForm, v: any) {
    if (form.valid) {
    }
    console.log(form.value, v);
  }
}
