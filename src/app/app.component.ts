import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'obsan-suarl-angular';

  ngOnInit() {
    // Resimlerde sağ tıklamayı engelle
    this.disableImageContextMenu();
    // Resimlerde sürükle-bırak işlemini engelle
    this.disableImageDrag();
  }

  private disableImageContextMenu() {
    // Tüm resimlerde context menu'yu engelle
    document.addEventListener('contextmenu', (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.closest('img')) {
        e.preventDefault();
      }
    }, false);

    // Klavye kısayollarını engelle (F12, Ctrl+Shift+I, vb.)
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U gibi kısayolları engelle
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    }, false);
  }

  private disableImageDrag() {
    // Tüm resimlerde drag event'lerini engelle
    document.addEventListener('dragstart', (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        e.preventDefault();
      }
    }, false);

    // Selectstart event'ini engelle (resim seçimini engelle)
    document.addEventListener('selectstart', (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.closest('img')) {
        e.preventDefault();
      }
    }, false);
  }
}
