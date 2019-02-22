import FlightOrder from './src/FlightOrder';
import HotelOrder from './src/HotelOrder';
import TotalOrders from './src/TotalOrders';

const orders = new TotalOrders();

orders.addOrder(new FlightOrder());
orders.addOrder(new HotelOrder());

orders.create();
