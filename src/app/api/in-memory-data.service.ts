import {Injectable} from '@angular/core';
import {InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const apps = [
      {
        id: 1,
        name: 'Twitch',
        developer: 'Twitch Interactive, Inc.',
        avatarSrc:
          'https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg=s180-rw',
        imageSrc:
          'https://play-lh.googleusercontent.com/U--y9KFmvZ-N2IPc_QuFvjt9113Mh48Qn6GtxQBYjBpNtG-lR9nTd3AFFB8PKIqkkyA=w1920-h1095-rw',
      },
      {
        id: 2,
        name: 'Twitch 2',
        developer: 'Twitch 2 Interactive, Inc.',
        avatarSrc:
          'https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg=s180-rw',
        imageSrc:
          'https://play-lh.googleusercontent.com/U--y9KFmvZ-N2IPc_QuFvjt9113Mh48Qn6GtxQBYjBpNtG-lR9nTd3AFFB8PKIqkkyA=w1920-h1095-rw',
      },
      {
        id: 3,
        name: 'Twitch 3',
        developer: 'Twitch 3 Interactive, Inc.',
        avatarSrc:
          'https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg=s180-rw',
        imageSrc:
          'https://play-lh.googleusercontent.com/U--y9KFmvZ-N2IPc_QuFvjt9113Mh48Qn6GtxQBYjBpNtG-lR9nTd3AFFB8PKIqkkyA=w1920-h1095-rw',
      },
      {
        id: 4,
        name: 'Twitch 4',
        developer: 'Twitch 4 Interactive, Inc.',
        avatarSrc:
          'https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg=s180-rw',
        imageSrc:
          'https://play-lh.googleusercontent.com/U--y9KFmvZ-N2IPc_QuFvjt9113Mh48Qn6GtxQBYjBpNtG-lR9nTd3AFFB8PKIqkkyA=w1920-h1095-rw',
      },
      {
        id: 5,
        name: 'Twitch 5',
        developer: 'Twitch 5 Interactive, Inc.',
        avatarSrc:
          'https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg=s180-rw',
        imageSrc:
          'https://play-lh.googleusercontent.com/U--y9KFmvZ-N2IPc_QuFvjt9113Mh48Qn6GtxQBYjBpNtG-lR9nTd3AFFB8PKIqkkyA=w1920-h1095-rw',
      },
      {
        id: 6,
        name: 'Twitch 6',
        developer: 'Twitch 6 Interactive, Inc.',
        avatarSrc:
          'https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg=s180-rw',
        imageSrc:
          'https://play-lh.googleusercontent.com/U--y9KFmvZ-N2IPc_QuFvjt9113Mh48Qn6GtxQBYjBpNtG-lR9nTd3AFFB8PKIqkkyA=w1920-h1095-rw',
      },
      {
        id: 7,
        name: 'Twitch 7',
        developer: 'Twitch 7 Interactive, Inc.',
        avatarSrc:
          'https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg=s180-rw',
        imageSrc:
          'https://play-lh.googleusercontent.com/U--y9KFmvZ-N2IPc_QuFvjt9113Mh48Qn6GtxQBYjBpNtG-lR9nTd3AFFB8PKIqkkyA=w1920-h1095-rw',
      },
      {
        id: 8,
        name: 'Twitch 8',
        developer: 'Twitch 8 Interactive, Inc.',
        avatarSrc:
          'https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg=s180-rw',
        imageSrc:
          'https://play-lh.googleusercontent.com/U--y9KFmvZ-N2IPc_QuFvjt9113Mh48Qn6GtxQBYjBpNtG-lR9nTd3AFFB8PKIqkkyA=w1920-h1095-rw',
      },
      {
        id: 9,
        name: 'Twitch 9',
        developer: 'Twitch 9 Interactive, Inc.',
        avatarSrc:
          'https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg=s180-rw',
        imageSrc:
          'https://play-lh.googleusercontent.com/U--y9KFmvZ-N2IPc_QuFvjt9113Mh48Qn6GtxQBYjBpNtG-lR9nTd3AFFB8PKIqkkyA=w1920-h1095-rw',
      },
      {
        id: 10,
        name: 'Twitch 10',
        developer: 'Twitch 10 Interactive, Inc.',
        avatarSrc:
          'https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg=s180-rw',
        imageSrc:
          'https://play-lh.googleusercontent.com/U--y9KFmvZ-N2IPc_QuFvjt9113Mh48Qn6GtxQBYjBpNtG-lR9nTd3AFFB8PKIqkkyA=w1920-h1095-rw',
      },
    ];
    const search = [
      {
        id: 1,
        name: 'Twitch',
        developer: 'Twitch Interactive, Inc.',
        linkAppStore: 'https://apps.apple.com/ru/app/twitch/id460177396',
        linkAppGallery: 'https://apps.apple.com/ru/app/twitch/id460177396',
        linkGooglePlay: 'https://play.google.com/store/apps/details?id=tv.twitch.android.app&hl=ru&gl=US',
        avatarSrc: 'https://media-exp1.licdn.com/dms/image/sync/C4D27AQEA8ywg3hWtJA/articleshare-shrink_800/0/1618939524414?e=2159024400&v=beta&t=lgp-CdF8GDPdsX_-St1DZVsFS5s_p0ObKsQC8gnzVYk'
      },
      {
        id: 2,
        name: 'Twitch 2',
        developer: 'Twitch 2 Interactive, Inc.',
        linkAppStore: 'https://apps.apple.com/ru/app/twitch/id460177396',
        linkAppGallery: 'https://apps.apple.com/ru/app/twitch/id460177396',
        linkGooglePlay: 'https://play.google.com/store/apps/details?id=tv.twitch.android.app&hl=ru&gl=US',
        avatarSrc: 'https://media-exp1.licdn.com/dms/image/sync/C4D27AQEA8ywg3hWtJA/articleshare-shrink_800/0/1618939524414?e=2159024400&v=beta&t=lgp-CdF8GDPdsX_-St1DZVsFS5s_p0ObKsQC8gnzVYk'
      },
      {
        id: 3,
        name: 'Twitch 3',
        developer: 'Twitch 3 Interactive, Inc.',
        linkAppStore: 'https://apps.apple.com/ru/app/twitch/id460177396',
        linkAppGallery: '',
        linkGooglePlay: '',
        avatarSrc: 'https://media-exp1.licdn.com/dms/image/sync/C4D27AQEA8ywg3hWtJA/articleshare-shrink_800/0/1618939524414?e=2159024400&v=beta&t=lgp-CdF8GDPdsX_-St1DZVsFS5s_p0ObKsQC8gnzVYk'
      },
      {
        id: 4,
        name: 'Twitch 4',
        developer: 'Twitch 4 Interactive, Inc.',
        linkAppStore: '',
        linkAppGallery: '',
        linkGooglePlay: 'https://play.google.com/store/apps/details?id=tv.twitch.android.app&hl=ru&gl=US',
        avatarSrc: 'https://media-exp1.licdn.com/dms/image/sync/C4D27AQEA8ywg3hWtJA/articleshare-shrink_800/0/1618939524414?e=2159024400&v=beta&t=lgp-CdF8GDPdsX_-St1DZVsFS5s_p0ObKsQC8gnzVYk'
      },
      {
        id: 5,
        name: 'Twitch 5',
        developer: 'Twitch 5 Interactive, Inc.',
        linkAppStore: '',
        linkAppGallery: 'https://apps.apple.com/ru/app/twitch/id460177396',
        linkGooglePlay: 'https://play.google.com/store/apps/details?id=tv.twitch.android.app&hl=ru&gl=US',
        avatarSrc: 'https://media-exp1.licdn.com/dms/image/sync/C4D27AQEA8ywg3hWtJA/articleshare-shrink_800/0/1618939524414?e=2159024400&v=beta&t=lgp-CdF8GDPdsX_-St1DZVsFS5s_p0ObKsQC8gnzVYk'
      },
      {
        id: 6,
        name: 'Twitch 6',
        developer: 'Twitch 6 Interactive, Inc.',
        linkAppStore: 'https://apps.apple.com/ru/app/twitch/id460177396',
        linkAppGallery: 'https://apps.apple.com/ru/app/twitch/id460177396',
        linkGooglePlay: '',
        avatarSrc: 'https://media-exp1.licdn.com/dms/image/sync/C4D27AQEA8ywg3hWtJA/articleshare-shrink_800/0/1618939524414?e=2159024400&v=beta&t=lgp-CdF8GDPdsX_-St1DZVsFS5s_p0ObKsQC8gnzVYk'
      },
      {
        id: 7,
        name: 'Twitch 7',
        developer: 'Twitch 7 Interactive, Inc.',
        linkAppStore: 'https://apps.apple.com/ru/app/twitch/id460177396',
        linkAppGallery: '',
        linkGooglePlay: 'https://play.google.com/store/apps/details?id=tv.twitch.android.app&hl=ru&gl=US',
        avatarSrc: 'https://media-exp1.licdn.com/dms/image/sync/C4D27AQEA8ywg3hWtJA/articleshare-shrink_800/0/1618939524414?e=2159024400&v=beta&t=lgp-CdF8GDPdsX_-St1DZVsFS5s_p0ObKsQC8gnzVYk'
      },
      {
        id: 8,
        name: 'Twitch 8',
        developer: 'Twitch 8 Interactive, Inc.',
        linkAppStore: 'https://apps.apple.com/ru/app/twitch/id460177396',
        linkAppGallery: '',
        linkGooglePlay: 'https://play.google.com/store/apps/details?id=tv.twitch.android.app&hl=ru&gl=US',
        avatarSrc: 'https://media-exp1.licdn.com/dms/image/sync/C4D27AQEA8ywg3hWtJA/articleshare-shrink_800/0/1618939524414?e=2159024400&v=beta&t=lgp-CdF8GDPdsX_-St1DZVsFS5s_p0ObKsQC8gnzVYk'
      },
      {
        id: 9,
        name: 'Twitch 9',
        developer: 'Twitch 9 Interactive, Inc.',
        linkAppStore: 'https://apps.apple.com/ru/app/twitch/id460177396',
        linkAppGallery: '',
        linkGooglePlay: 'https://play.google.com/store/apps/details?id=tv.twitch.android.app&hl=ru&gl=US',
        avatarSrc: 'https://media-exp1.licdn.com/dms/image/sync/C4D27AQEA8ywg3hWtJA/articleshare-shrink_800/0/1618939524414?e=2159024400&v=beta&t=lgp-CdF8GDPdsX_-St1DZVsFS5s_p0ObKsQC8gnzVYk'
      },
      {
        id: 10,
        name: 'Twitch 10',
        developer: 'Twitch 10 Interactive, Inc.',
        linkAppStore: 'https://apps.apple.com/ru/app/twitch/id460177396',
        linkAppGallery: '',
        linkGooglePlay: 'https://play.google.com/store/apps/details?id=tv.twitch.android.app&hl=ru&gl=US',
        avatarSrc: 'https://media-exp1.licdn.com/dms/image/sync/C4D27AQEA8ywg3hWtJA/articleshare-shrink_800/0/1618939524414?e=2159024400&v=beta&t=lgp-CdF8GDPdsX_-St1DZVsFS5s_p0ObKsQC8gnzVYk'
      },
    ];
    return {apps, search};
  }

  constructor() {
  }
}
