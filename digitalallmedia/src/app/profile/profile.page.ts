import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage {
  userName: string = '';
  userDescription: string = '';
  profileImage: string = 'assets/images/icon_profile.png';

  constructor(
    private storage: Storage,
    private location: Location,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.storage.create();

    const email = (await this.storage.get('userEmail')) || 'user@example.com';
    this.userName = email.split('@')[0];

    this.userDescription = (await this.storage.get('userDescription')) || '';
    this.profileImage = (await this.storage.get('profileImage')) || this.profileImage;
  }

  async updateDescription() {
    await this.storage.set('userDescription', this.userDescription);
  }

  voltar() {
    this.location.back();
  }

  async changeProfilePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
    });

    if (image?.dataUrl) {
      this.profileImage = image.dataUrl;
      await this.storage.set('profileImage', this.profileImage);
    }
  }

  async logout() {
    await this.storage.clear(); // limpa dados como userEmail, profileImage, etc.
    this.router.navigateByUrl('/login'); // volta à página de login
  }
}
