import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  array_A = [
    {
      code: 'M',
      nama: 'Manggo'
    },
    {
      code: 'A',
      nama: 'Apple'
    },
    {
      code: 'M',
      nama: 'Melon'
    },
    {
      code: 'O',
      nama: 'Orange'
    },
    {
      code: 'P',
      nama: 'PineApple'
    }
  ]

  Array_B = [
    {
      code: 'M',
      nama: 'Manggo'
    },
    {
      code: 'P',
      nama: 'PineApple'
    },
    {
      code: 'Pe',
      nama: 'Pears'
    }
  ]

  total: any;

  dataBagian2 = [];

  hasil = '';

  constructor(
  ) {
    this.bagian1A()
    this.bagian1B()
    this.bagian1C()
    this.bagianNo2()
  }

  bagian1A() {
    let Array_C = [];
    this.array_A.map(data => {
      const index = this.Array_B.findIndex(
        item => item.nama === data.nama
      );
      if (index != -1) {
        Array_C.push(data)
      }
    })
    console.log('jawaban Bagian 1A', Array_C)
  }

  bagian1B() {
    let allArray = [];
    allArray = this.array_A.concat(this.Array_B)
    console.log('jawaban Bagian 1B', allArray)

  }

  bagian1C() {
    let Array_C = [];
    this.array_A.map(data => {
      const index = this.Array_B.findIndex(
        item => item.nama === data.nama
      );
      if (index === -1) {
        Array_C.push(data)
      }
    })
    console.log('jawaban Bagian 1C', Array_C)
  }

  bagianNo2() {
    let dataArray = [
      {
        code: '200000001',
        nama: 'PT. TULUS MAJU PANTANG MUNDUR'
      },
      {
        code: '200000001',
        nama: 'PT. PANTANG MUNDUR TULUS MAJU'
      },
    ]
    dataArray.map(data => {
      data['customer'] = data.code + ' ' + '-' + ' ' + data.nama
    })
    console.log('jawaban Bagian 1 No.2', dataArray)
  }

  bagian2(ev) {
    this.total = ev.target.value;

    let dataA = this.total % 100000
    let a = (this.total - dataA) / 100000
    this.dataBagian2.push("100000" + '=' + a)

    let dataB = dataA % 50000
    let b = (dataA - dataB) / 50000
    this.dataBagian2.push("50000" + '=' + b)

    let dataC = dataB % 20000
    let c = (dataB - dataC) / 20000
    this.dataBagian2.push("20000" + '=' + c)

    let dataD = dataC % 10000
    let d = (dataC - dataD) / 10000
    this.dataBagian2.push("10000" + '=' + d)

    let dataE = dataD % 5000
    let e = (dataD - dataE) / 5000
    this.dataBagian2.push("5000" + '=' + e)

    let dataF = dataE % 2000
    let f = (dataE - dataF) / 2000
    this.dataBagian2.push("2000" + '=' + f)

    let dataG = dataF % 1000
    let g = (dataF - dataG) / 1000
    this.dataBagian2.push("1000" + '=' + g)
  }

  bagian3(ev) {
    let val = ev.target.value;
    if (val >= 21 && val <= 24) {
      this.hasil = "Tonase sesuai order 21 -24"
    } else if (val < 21) {
      this.hasil = "Tonase tidak sesuai order harus order dengan range 21 - 24"
    } else if (val > 24) {
      if (0 === (val % 21)) {
        this.hasil = "Tonase sesuai order" + ' ' + val
      } else if ((0 === (val % 22))) {
        this.hasil = "Tonase sesuai order" + ' ' + val
      } else if ((0 === (val % 23))) {
        this.hasil = "Tonase sesuai order" + ' ' + val
      } else if ((0 === (val % 24))) {
        this.hasil = "Tonase sesuai order" + ' ' + val
      } else {
        this.hasil = "Tonase tidak sesuai order, harus order dengan range" + ' ' + val
      }
    }
  }
}



