import { Component, OnInit } from '@angular/core';

type Tabs =
  | 'kt_table_widget_5_tab_1'
  | 'kt_table_widget_5_tab_2'
  | 'kt_table_widget_5_tab_3';

@Component({
  selector: 'app-tables-widget5',
  templateUrl: './tables-widget5.component.html',
})
export class TablesWidget5Component implements OnInit {
  constructor() {}

  activeTab: Tabs = 'kt_table_widget_5_tab_1';

  month_data = [{
    c_id: "3762616396",
    fullname: "Thedric Watkinson",
    phonenumber: "498-636-0741",
    date_of_request: "18/06/2021",
    date_of_confirm: "18/10/2021",
    date_of_browse: "13/06/2021"
  }, {
    c_id: "9415919426",
    fullname: "Brooke Dobrovolski",
    phonenumber: "456-794-9538",
    date_of_request: "11/05/2021",
    date_of_confirm: "08/11/2021",
    date_of_browse: "11/01/2022"
  }, {
    c_id: "2450441751",
    fullname: "Sarene Exrol",
    phonenumber: "728-869-7414",
    date_of_request: "19/06/2021",
    date_of_confirm: "13/01/2022",
    date_of_browse: "16/03/2022"
  }, {
    c_id: "6569502654",
    fullname: "Josey covino",
    phonenumber: "967-268-2070",
    date_of_request: "21/08/2021",
    date_of_confirm: "27/10/2021",
    date_of_browse: "23/03/2022"
  }, {
    c_id: "2989719598",
    fullname: "Vinita Cawkill",
    phonenumber: "490-812-2266",
    date_of_request: "20/06/2021",
    date_of_confirm: "03/12/2021",
    date_of_browse: "25/09/2021"
  }, {
    c_id: "9644909119",
    fullname: "Jacquelin Caseborne",
    phonenumber: "206-323-5753",
    date_of_request: "14/03/2022",
    date_of_confirm: "14/02/2022",
    date_of_browse: "24/06/2021"
  }, {
    c_id: "3236891653",
    fullname: "Niel Carbonell",
    phonenumber: "835-829-5401",
    date_of_request: "17/03/2022",
    date_of_confirm: "08/04/2022",
    date_of_browse: "23/03/2022"
  }, {
    c_id: "5366719305",
    fullname: "Portia Djokovic",
    phonenumber: "321-282-1508",
    date_of_request: "20/07/2021",
    date_of_confirm: "06/05/2021",
    date_of_browse: "13/12/2021"
  }, {
    c_id: "8869261727",
    fullname: "Korrie Grichukhanov",
    phonenumber: "266-550-2712",
    date_of_request: "19/05/2021",
    date_of_confirm: "19/09/2021",
    date_of_browse: "15/09/2021"
  }, {
    c_id: "7424645285",
    fullname: "Howey Boffey",
    phonenumber: "864-935-9144",
    date_of_request: "26/08/2021",
    date_of_confirm: "04/08/2021",
    date_of_browse: "03/03/2022"
  }];

  week_data = [{
    c_id: "3762616396",
    fullname: "Thedric Watkinson",
    phonenumber: "498-636-0741",
    date_of_request: "18/06/2021",
    date_of_confirm: "18/10/2021",
    date_of_browse: "13/06/2021"
  }, {
    c_id: "9415919426",
    fullname: "Brooke Dobrovolski",
    phonenumber: "456-794-9538",
    date_of_request: "11/05/2021",
    date_of_confirm: "08/11/2021",
    date_of_browse: "11/01/2022"
  }, {
    c_id: "2450441751",
    fullname: "Sarene Exrol",
    phonenumber: "728-869-7414",
    date_of_request: "19/06/2021",
    date_of_confirm: "13/01/2022",
    date_of_browse: "16/03/2022"
  }, {
    c_id: "6569502654",
    fullname: "Josey covino",
    phonenumber: "967-268-2070",
    date_of_request: "21/08/2021",
    date_of_confirm: "27/10/2021",
    date_of_browse: "23/03/2022"
  }];

  day_data = [
    {
    c_id: "2450441751",
    fullname: "Sarene Exrol",
    phonenumber: "728-869-7414",
    date_of_request: "19/06/2021",
    date_of_confirm: "13/01/2022",
    date_of_browse: "16/03/2022"
  }, {
    c_id: "6569502654",
    fullname: "Josey covino",
    phonenumber: "967-268-2070",
    date_of_request: "21/08/2021",
    date_of_confirm: "27/10/2021",
    date_of_browse: "23/03/2022"
  }];

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  ngOnInit(): void {}
}
