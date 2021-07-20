import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { destinations } from '../destinations';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.sass']
})
export class DestinationDetailsComponent implements OnInit {
  destination: { name: string, price: number, description: string, beginning: string, duration: string } = { name: "", price: 0, description: "", beginning: "", duration: "", }
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(destination: any) {

    window.alert('Your holiday has been added to the cart!');

    this.cartService.addToCart(destination);

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let Id: any = params.get('Id');
      this.destination = destinations[Id];
      console.log(Id)
    });
  }

}
