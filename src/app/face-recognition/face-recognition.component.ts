import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-face-recognition',
  templateUrl: './face-recognition.component.html',
  styleUrls: ['./face-recognition.component.css']
})
export class FaceRecognitionComponent implements OnInit {
  @ViewChild('video', { static: true }) videoElement!: ElementRef;
  @ViewChild('canvas', { static: true }) canvasElement!: ElementRef;
  private camStream: MediaStream | undefined;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.startVideo();
  }

  startVideo() {
    navigator.mediaDevices.enumerateDevices()
      .then(devices => {
        if (Array.isArray(devices)) {
          const videoDevices = devices.filter(device => device.kind === 'videoinput');
          if (videoDevices.length > 0) {
            const selectedDevice = videoDevices[0];
            const constraints = {
              video: {
                deviceId: selectedDevice.deviceId
              }
            };

            navigator.mediaDevices.getUserMedia(constraints)
              .then(stream => {
                if (this.camStream) {
                  this.camStream.getTracks().forEach(track => track.stop());
                }
                const canvas = this.canvasElement.nativeElement;

              

                this.camStream = stream;

                this.videoElement.nativeElement.srcObject = stream;
                this.renderer.setStyle(this.videoElement.nativeElement, 'position', 'absolute');
                this.renderer.setStyle(this.videoElement.nativeElement, 'top', '75%');
                this.renderer.setStyle(this.videoElement.nativeElement, 'left', '1%');
                this.renderer.setStyle(this.videoElement.nativeElement, 'marginTop', '20px');

                this.renderer.setStyle(canvas, 'position', 'absolute');
                this.renderer.setStyle(canvas, 'top', '75%');
                this.renderer.setStyle(canvas, 'left', '1%');
                this.renderer.setStyle(canvas, 'z-index', '1');
                this.renderer.setStyle(canvas, 'marginTop', '20px');
                // this.videoElement.nativeElement.videoWidth = 640;
                // this.videoElement.nativeElement.videoHeight = 360;
                canvas.width = 640;
                canvas.height = 360;
                
              })
              .catch(error => console.error(error));
          } else {
            console.error("Nenhuma câmera disponível.");
          }
        }
      });
  }
}
