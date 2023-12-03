import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-skills-timeline',
  templateUrl: './skills-timeline.component.html',
  styleUrls: ['./skills-timeline.component.scss'],
  standalone: true,
})
export class SkillsTimelineComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const circles = document.querySelectorAll('circle');
    const animationTimeLine = gsap.timeline({ delay: 0.3 });

    animationTimeLine
      .fromTo(circles, { y: -100 }, { y: 0, stagger: { each: 0.2 } })
      .to('line', {
        strokeDashoffset: 0,
        duration: 1,
        ease: 'expo',
      });
  }
}
