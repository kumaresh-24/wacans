import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  get_data: any[] = [];
  filter_data: any[] = [];
  public filterQuery = '';
  public total : number;
  public areas = [
    'Adambakkam ',
    'Adyar ',
    'Alandur ',
    'Alwarpet ',
    'Alwarthirunagar ',
    'Ambattur ',
    'Aminjikarai ',
    'Anakaputhur ',
    'Anna Nagar ',
    'Annanur ',
    'Arumbakkam ',
    'Ashok Nagar ',
    'Avadi ',
    'Ayanavaram ',
    'Besant Nagar ',
    'Basin Bridge ',
    'Chepauk ',
    'Chetput ',
    'Chintadripet ',
    'Chitlapakkam ',
    'Choolai ',
    'Choolaimedu ',
    'Chrompet ',
    'Egmore ',
    'Ekkaduthangal ',
    'Ennore ',
    'Foreshore Estate ',
    'Fort St. George ',
    'George Town ',
    'Gopalapuram ',
    'Government Estate ',
    'Guindy ',
    'IIT Madras ',
    'Injambakkam ',
    'ICF ',
    'Iyyapanthangal ',
    'Jafferkhanpet ',
    'Karapakkam ',
    'Kattivakkam ',
    'Kazhipattur ',
    'K.K. Nagar ',
    'Keelkattalai ',
    'Kelambakkam ',
    'Kilpauk ',
    'Kodambakkam ',
    'Kodungaiyur ',
    'Kolathur ',
    'Korattur ',
    'Korukkupet ',
    'Kottivakkam ',
    'Kotturpuram ',
    'Kottur ',
    'Kovalam ',
    'Kovilambakkam ',
    'Koyambedu ',
    'Kundrathur ',
    'Madhavaram ',
    'Madhavaram Milk Colony ',
    'Madipakkam ',
    'Madambakkam ',
    'Maduravoyal ',
    'Manali ',
    'Manali New Town ',
    'Manapakkam ',
    'Mandaveli ',
    'Mangadu ',
    'Mannady ',
    'Mathur ',
    'Medavakkam ',
    'Meenambakkam ',
    'MGR Nagar ',
    'Minjur ',
    'Mogappair ',
    'MKB Nagar ',
    'Mount Road ',
    'Moolakadai ',
    'Moulivakkam ',
    'Mugalivakkam ',
    'Mudichur ',
    'Mylapore ',
    'Nandanam ',
    'Nanganallur ',
    'Navalur ',
    'Neelankarai ',
    'Nemilichery ',
    'Nesapakkam ',
    'Nolambur ',
    'Noombal ',
    'Nungambakkam ',
    'Otteri ',
    'Padi ',
    'Pakkam ',
    'Palavakkam ',
    'Pallavaram ',
    'Pallikaranai ',
    'Pammal ',
    'Park Town ',
    "Parry's Corner ",
    'Pattabiram ',
    'Pattaravakkam ',
    'Pazhavanthangal ',
    'Peerkankaranai ',
    'Perambur ',
    'Peravallur ',
    'Perumbakkam ',
    'Perungalathur ',
    'Perungudi ',
    'Pozhichalur ',
    'Poonamallee ',
    'Porur ',
    'Pudupet ',
    'Purasaiwalkam ',
    'Puthagaram ',
    'Puzhal ',
    'Puzhuthivakkam ',
    'Raj Bhavan ',
    'Ramavaram ',
    'Red Hills ',
    'Royapettah ',
    'Royapuram ',
    'Saidapet ',
    'Saligramam ',
    'Santhome ',
    'Sembakkam ',
    'Selaiyur ',
    'Shenoy Nagar ',
    'Sholavaram ',
    'Sholinganallur ',
    'Sithalapakkam ',
    'Sowcarpet ',
    'St.Thomas Mount ',
    'Tambaram ',
    'Teynampet ',
    'Tharamani ',
    'T. Nagar ',
    'Thirumangalam ',
    'Thirumullaivoyal ',
    'Thiruneermalai ',
    'Thiruninravur ',
    'Thiruvanmiyur ',
    'Tiruverkadu ',
    'Thiruvotriyur ',
    'Tirusulam ',
    'Tiruvallikeni ',
    'Tiruvallur ',
    'Tondiarpet ',
    'United India Colony ',
    'Vandalur ',
    'Vadapalani ',
    'Valasaravakkam ',
    'Vallalar Nagar ',
    'Vanagaram ',
    'Velachery ',
    'Villivakkam ',
    'Virugambakkam ',
    'Vyasarpadi ',
    'Washermanpet ',
    'West Mambalam'
  ];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getdata('http://35.188.68.89/wacans/list').subscribe(data => {
      this.total = data.data.length;
      this.get_data = data.data;
      this.filter_data = data.data;
    });
  }

  onchange(e: any) {
    this.get_data =
      e !== 'default'
        ? this.filter_data.filter(x => x.area === e)
        : this.filter_data;
  }
  ondatechange(e: any) {
    this.get_data =
      e !== 'default'
        ? this.filter_data.filter(x => x.available_on === e)
        : this.filter_data;
  }
}
