import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  @ViewChild('gmap') gmapElement!: ElementRef;
  map!: google.maps.Map;
  markers: google.maps.Marker[] = [];
  defaultCenter = { lat: 17.3850, lng: 78.4867 }; // Hyderabad coordinates

  locations = [
    {
      id: 1,
      name: 'Registered Office',
      address: 'Suku Hospitals, Main Street, Hyderabad, Telangana, India',
      phone: '+91 40 1234 5678',
      hours: '24/7 Emergency',
      position: { lat: 17.3850, lng: 78.4867 }
    },
    {
      id: 2,
      name: 'Hyderabad - Kukatpally Branch',
      address: 'Plot No. 45, Kukatpally, Hyderabad, Telangana 500072',
      phone: '+91 40 2345 6789',
      hours: 'Mon-Sun: 8AM - 10PM',
      position: { lat: 17.4849, lng: 78.4138 }
    },
    {
      id: 3,
      name: 'Bangalore - Koramangala Branch',
      address: 'No. 12, 5th Block, Koramangala, Bangalore, Karnataka 560034',
      phone: '+91 80 3456 7890',
      hours: 'Mon-Sun: 8AM - 10PM',
      position: { lat: 12.9352, lng: 77.6245 }
    },
    {
      id: 4,
      name: 'Chennai - T. Nagar Branch',
      address: '15, North Usman Road, T. Nagar, Chennai, Tamil Nadu 600017',
      phone: '+91 44 4567 8901',
      hours: 'Mon-Sun: 8AM - 10PM',
      position: { lat: 13.0478, lng: 80.2429 }
    }
  ];

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    const loader = new Loader({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
      version: 'weekly'
    });

    loader.load().then(() => {
      this.map = new google.maps.Map(this.gmapElement.nativeElement, {
        center: this.defaultCenter,
        zoom: 12,
        styles: [
          {
            featureType: 'poi.medical',
            elementType: 'geometry',
            stylers: [{ color: '#e6f2ff' }]
          },
          {
            featureType: 'poi.medical',
            elementType: 'labels.icon',
            stylers: [{ color: '#4361ee' }]
          }
        ]
      });

      // Add markers for each location
      this.locations.forEach(location => {
        const marker = new google.maps.Marker({
          position: location.position,
          map: this.map,
          title: location.name,
          icon: {
            url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
          }
        });
        this.markers.push(marker);
      });
    });
  }

  highlightMarker(location: any) {
    const marker = this.markers.find(m =>
      m.getPosition()?.lat() === location.position.lat &&
      m.getPosition()?.lng() === location.position.lng
    );
    if (marker) {
      marker.setIcon('https://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    }
  }

  resetMap() {
    this.markers.forEach(marker => {
      marker.setIcon('https://maps.google.com/mapfiles/ms/icons/red-dot.png');
    });
  }

  centerMap(location: any) {
    this.map.setCenter(location.position);
    this.map.setZoom(15);
  }
}
