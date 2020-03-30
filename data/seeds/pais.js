
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('pais').del()
    .then(function () {
      // Inserts seed entries
      return knex('pais').insert(
        [
          {
            "idpais": 0,
            "nome": "Afghanistan",
            "latitude": 33.93911,
            "longitude": 67.709953
          },
          {
            "idpais": 1,
            "nome": "Albania",
            "latitude": 41.153332,
            "longitude": 20.168331
          },
          {
            "idpais": 2,
            "nome": "Algeria",
            "latitude": 28.033886,
            "longitude": 1.659626
          },
          {
            "idpais": 40,
            "nome": "Congo",
            "latitude": -4.038333,
            "longitude": 21.758664
          },
          {
            "idpais": 72,
            "nome": "Greenland",
            "latitude": 71.706936,
            "longitude": -42.604303
          },
          {
            "idpais": 3,
            "nome": "Andorra",
            "latitude": 42.506285,
            "longitude": 1.521801
          },
          {
            "idpais": 4,
            "nome": "Angola",
            "latitude": -11.202692,
            "longitude": 17.873887
          },
          {
            "idpais": 141,
            "nome": "Paraguay",
            "latitude": -23.442503,
            "longitude": -58.443832
          },
          {
            "idpais": 5,
            "nome": "Anguilla",
            "latitude": 18.220554,
            "longitude": -63.06861499999999
          },
          {
            "idpais": 6,
            "nome": "Antigua and Barbuda",
            "latitude": 17.060816,
            "longitude": -61.796428
          },
          {
            "idpais": 7,
            "nome": "Argentina",
            "latitude": -38.416097,
            "longitude": -63.61667199999999
          },
          {
            "idpais": 8,
            "nome": "Armenia",
            "latitude": 40.069099,
            "longitude": 45.038189
          },
          {
            "idpais": 9,
            "nome": "Aruba",
            "latitude": 12.52111,
            "longitude": -69.968338
          },
          {
            "idpais": 10,
            "nome": "Australia",
            "latitude": -25.274398,
            "longitude": 133.775136
          },
          {
            "idpais": 11,
            "nome": "Austria",
            "latitude": 47.516231,
            "longitude": 14.550072
          },
          {
            "idpais": 12,
            "nome": "Azerbaijan",
            "latitude": 40.143105,
            "longitude": 47.576927
          },
          {
            "idpais": 13,
            "nome": "Bahamas",
            "latitude": 25.03428,
            "longitude": -77.39627999999999
          },
          {
            "idpais": 14,
            "nome": "Bahrain",
            "latitude": 26.0667,
            "longitude": 50.5577
          },
          {
            "idpais": 16,
            "nome": "Barbados",
            "latitude": 13.193887,
            "longitude": -59.543198
          },
          {
            "idpais": 17,
            "nome": "Belarus",
            "latitude": 53.709807,
            "longitude": 27.953389
          },
          {
            "idpais": 18,
            "nome": "Belgium",
            "latitude": 50.503887,
            "longitude": 4.469936
          },
          {
            "idpais": 15,
            "nome": "Bangladesh",
            "latitude": 23.684994,
            "longitude": 90.356331
          },
          {
            "idpais": 19,
            "nome": "Belize",
            "latitude": 17.189877,
            "longitude": -88.49765
          },
          {
            "idpais": 20,
            "nome": "Benin",
            "latitude": 9.30769,
            "longitude": 2.315834
          },
          {
            "idpais": 21,
            "nome": "Bermuda",
            "latitude": 32.3078,
            "longitude": -64.7505
          },
          {
            "idpais": 22,
            "nome": "Bhutan",
            "latitude": 27.514162,
            "longitude": 90.433601
          },
          {
            "idpais": 23,
            "nome": "Bolivia",
            "latitude": -16.290154,
            "longitude": -63.58865299999999
          },
          {
            "idpais": 24,
            "nome": "Bosnia and Herzegovina",
            "latitude": 43.915886,
            "longitude": 17.679076
          },
          {
            "idpais": 25,
            "nome": "Brazil",
            "latitude": -14.235004,
            "longitude": -51.92528
          },
          {
            "idpais": 26,
            "nome": "British Virgin Islands",
            "latitude": 18.420695,
            "longitude": -64.639968
          },
          {
            "idpais": 27,
            "nome": "Brunei",
            "latitude": 4.535277,
            "longitude": 114.727669
          },
          {
            "idpais": 29,
            "nome": "Burkina Faso",
            "latitude": 12.238333,
            "longitude": -1.561593
          },
          {
            "idpais": 30,
            "nome": "Cambodia",
            "latitude": 12.565679,
            "longitude": 104.990963
          },
          {
            "idpais": 31,
            "nome": "Cameroon",
            "latitude": 7.369721999999999,
            "longitude": 12.354722
          },
          {
            "idpais": 28,
            "nome": "Bulgaria",
            "latitude": 42.733883,
            "longitude": 25.48583
          },
          {
            "idpais": 32,
            "nome": "Canada",
            "latitude": 56.130366,
            "longitude": -106.346771
          },
          {
            "idpais": 33,
            "nome": "Cape Verde",
            "latitude": 16.5388,
            "longitude": -23.0418
          },
          {
            "idpais": 34,
            "nome": "Cayman Islands",
            "latitude": 19.3133,
            "longitude": -81.2546
          },
          {
            "idpais": 35,
            "nome": "Central African Republic",
            "latitude": 6.611110999999999,
            "longitude": 20.939444
          },
          {
            "idpais": 37,
            "nome": "Chile",
            "latitude": -35.675147,
            "longitude": -71.542969
          },
          {
            "idpais": 36,
            "nome": "Chad",
            "latitude": 15.454166,
            "longitude": 18.732207
          },
          {
            "idpais": 38,
            "nome": "China",
            "latitude": 35.86166,
            "longitude": 104.195397
          },
          {
            "idpais": 39,
            "nome": "Colombia",
            "latitude": 4.570868,
            "longitude": -74.297333
          },
          {
            "idpais": 41,
            "nome": "Costa Rica",
            "latitude": 9.748916999999999,
            "longitude": -83.753428
          },
          {
            "idpais": 42,
            "nome": "Cote d'Ivoire",
            "latitude": 7.539988999999999,
            "longitude": -5.547079999999999
          },
          {
            "idpais": 118,
            "nome": "Mexico",
            "latitude": 23.634501,
            "longitude": -102.552784
          },
          {
            "idpais": 66,
            "nome": "Gambia",
            "latitude": 13.443182,
            "longitude": -15.310139
          },
          {
            "idpais": 85,
            "nome": "Indonesia",
            "latitude": -0.789275,
            "longitude": 113.921327
          },
          {
            "idpais": 67,
            "nome": "Georgia",
            "latitude": 32.1656221,
            "longitude": -82.9000751
          },
          {
            "idpais": 181,
            "nome": "Turks and Caicos Islands",
            "latitude": 21.694025,
            "longitude": -71.797928
          },
          {
            "idpais": 65,
            "nome": "Gabon",
            "latitude": -0.803689,
            "longitude": 11.609444
          },
          {
            "idpais": 64,
            "nome": "French Polynesia",
            "latitude": -17.679742,
            "longitude": -149.406843
          },
          {
            "idpais": 61,
            "nome": "Fiji",
            "latitude": -17.713371,
            "longitude": 178.065032
          },
          {
            "idpais": 62,
            "nome": "Finland",
            "latitude": 61.92410999999999,
            "longitude": 25.7481511
          },
          {
            "idpais": 60,
            "nome": "Faeroe Islands",
            "latitude": 61.89263500000001,
            "longitude": -6.9118061
          },
          {
            "idpais": 63,
            "nome": "France",
            "latitude": 46.227638,
            "longitude": 2.213749
          },
          {
            "idpais": 59,
            "nome": "Ethiopia",
            "latitude": 9.145000000000001,
            "longitude": 40.489673
          },
          {
            "idpais": 58,
            "nome": "Estonia",
            "latitude": 58.595272,
            "longitude": 25.0136071
          },
          {
            "idpais": 57,
            "nome": "Eritrea",
            "latitude": 15.179384,
            "longitude": 39.782334
          },
          {
            "idpais": 56,
            "nome": "Equatorial Guinea",
            "latitude": 1.650801,
            "longitude": 10.267895
          },
          {
            "idpais": 69,
            "nome": "Ghana",
            "latitude": 7.946527,
            "longitude": -1.023194
          },
          {
            "idpais": 68,
            "nome": "Germany",
            "latitude": 51.165691,
            "longitude": 10.451526
          },
          {
            "idpais": 55,
            "nome": "El Salvador",
            "latitude": 13.794185,
            "longitude": -88.89653
          },
          {
            "idpais": 54,
            "nome": "Egypt",
            "latitude": 26.820553,
            "longitude": 30.802498
          },
          {
            "idpais": 53,
            "nome": "Ecuador",
            "latitude": -1.831239,
            "longitude": -78.18340599999999
          },
          {
            "idpais": 52,
            "nome": "Dominican Republic",
            "latitude": 18.735693,
            "longitude": -70.162651
          },
          {
            "idpais": 51,
            "nome": "Dominica",
            "latitude": 15.414999,
            "longitude": -61.37097600000001
          },
          {
            "idpais": 49,
            "nome": "Denmark",
            "latitude": 56.26392,
            "longitude": 9.501785
          },
          {
            "idpais": 50,
            "nome": "Djibouti",
            "latitude": 11.825138,
            "longitude": 42.590275
          },
          {
            "idpais": 47,
            "nome": "Czech Republic",
            "latitude": 49.81749199999999,
            "longitude": 15.472962
          },
          {
            "idpais": 48,
            "nome": "Democratic Republic of Congo",
            "latitude": -4.038333,
            "longitude": 21.758664
          },
          {
            "idpais": 46,
            "nome": "Cyprus",
            "latitude": 35.126413,
            "longitude": 33.429859
          },
          {
            "idpais": 45,
            "nome": "Curacao",
            "latitude": 33.8547691,
            "longitude": -117.9168308
          },
          {
            "idpais": 44,
            "nome": "Cuba",
            "latitude": 21.521757,
            "longitude": -77.781167
          },
          {
            "idpais": 43,
            "nome": "Croatia",
            "latitude": 45.1,
            "longitude": 15.2000001
          },
          {
            "idpais": 96,
            "nome": "Jordan",
            "latitude": 30.585164,
            "longitude": 36.238414
          },
          {
            "idpais": 95,
            "nome": "Jersey",
            "latitude": 49.214439,
            "longitude": -2.13125
          },
          {
            "idpais": 94,
            "nome": "Japan",
            "latitude": 36.204824,
            "longitude": 138.252924
          },
          {
            "idpais": 93,
            "nome": "Jamaica",
            "latitude": 18.109581,
            "longitude": -77.297508
          },
          {
            "idpais": 92,
            "nome": "Italy",
            "latitude": 41.87194,
            "longitude": 12.56738
          },
          {
            "idpais": 91,
            "nome": "Israel",
            "latitude": 31.046051,
            "longitude": 34.851612
          },
          {
            "idpais": 90,
            "nome": "Isle of Man",
            "latitude": 54.236107,
            "longitude": -4.548056
          },
          {
            "idpais": 89,
            "nome": "Ireland",
            "latitude": 53.1423672,
            "longitude": -7.692053599999999
          },
          {
            "idpais": 88,
            "nome": "Iraq",
            "latitude": 33.223191,
            "longitude": 43.679291
          },
          {
            "idpais": 87,
            "nome": "Iran",
            "latitude": 32.427908,
            "longitude": 53.688046
          },
          {
            "idpais": 86,
            "nome": "International",
            "latitude": 39.1319356,
            "longitude": -94.49543899999999
          },
          {
            "idpais": 83,
            "nome": "Iceland",
            "latitude": 64.963051,
            "longitude": -19.020835
          },
          {
            "idpais": 82,
            "nome": "Hungary",
            "latitude": 47.162494,
            "longitude": 19.5033041
          },
          {
            "idpais": 84,
            "nome": "India",
            "latitude": 20.593684,
            "longitude": 78.96288
          },
          {
            "idpais": 159,
            "nome": "Sint Maarten (Dutch part)",
            "latitude": 18.04248,
            "longitude": -63.05483
          },
          {
            "idpais": 81,
            "nome": "Honduras",
            "latitude": 15.199999,
            "longitude": -86.241905
          },
          {
            "idpais": 137,
            "nome": "Pakistan",
            "latitude": 30.375321,
            "longitude": 69.34511599999999
          },
          {
            "idpais": 135,
            "nome": "Norway",
            "latitude": 60.47202399999999,
            "longitude": 8.468945999999999
          },
          {
            "idpais": 136,
            "nome": "Oman",
            "latitude": 21.4735329,
            "longitude": 55.975413
          },
          {
            "idpais": 80,
            "nome": "Haiti",
            "latitude": 18.971187,
            "longitude": -72.285215
          },
          {
            "idpais": 78,
            "nome": "Guinea-Bissau",
            "latitude": 11.803749,
            "longitude": -15.180413
          },
          {
            "idpais": 79,
            "nome": "Guyana",
            "latitude": 4.860416,
            "longitude": -58.93018
          },
          {
            "idpais": 76,
            "nome": "Guernsey",
            "latitude": 49.4481982,
            "longitude": -2.58949
          },
          {
            "idpais": 75,
            "nome": "Guatemala",
            "latitude": 15.783471,
            "longitude": -90.23075899999999
          },
          {
            "idpais": 77,
            "nome": "Guinea",
            "latitude": 9.945587,
            "longitude": -9.696645
          },
          {
            "idpais": 74,
            "nome": "Guam",
            "latitude": 13.444304,
            "longitude": 144.793731
          },
          {
            "idpais": 73,
            "nome": "Grenada",
            "latitude": 12.1165,
            "longitude": -61.67899999999999
          },
          {
            "idpais": 71,
            "nome": "Greece",
            "latitude": 39.074208,
            "longitude": 21.824312
          },
          {
            "idpais": 70,
            "nome": "Gibraltar",
            "latitude": 36.140751,
            "longitude": -5.353585
          },
          {
            "idpais": 117,
            "nome": "Mauritius",
            "latitude": -20.348404,
            "longitude": 57.55215200000001
          },
          {
            "idpais": 115,
            "nome": "Malta",
            "latitude": 35.937496,
            "longitude": 14.375416
          },
          {
            "idpais": 114,
            "nome": "Mali",
            "latitude": 17.570692,
            "longitude": -3.996166
          },
          {
            "idpais": 113,
            "nome": "Maldives",
            "latitude": 3.202778,
            "longitude": 73.22068
          },
          {
            "idpais": 116,
            "nome": "Mauritania",
            "latitude": 21.00789,
            "longitude": -10.940835
          },
          {
            "idpais": 112,
            "nome": "Malaysia",
            "latitude": 4.210484,
            "longitude": 101.975766
          },
          {
            "idpais": 111,
            "nome": "Madagascar",
            "latitude": -18.766947,
            "longitude": 46.869107
          },
          {
            "idpais": 110,
            "nome": "Macedonia",
            "latitude": 41.608635,
            "longitude": 21.745275
          },
          {
            "idpais": 109,
            "nome": "Luxembourg",
            "latitude": 49.815273,
            "longitude": 6.129582999999999
          },
          {
            "idpais": 108,
            "nome": "Lithuania",
            "latitude": 55.169438,
            "longitude": 23.881275
          },
          {
            "idpais": 107,
            "nome": "Liechtenstein",
            "latitude": 47.166,
            "longitude": 9.555373
          },
          {
            "idpais": 106,
            "nome": "Libya",
            "latitude": 26.3351,
            "longitude": 17.228331
          },
          {
            "idpais": 105,
            "nome": "Liberia",
            "latitude": 6.428055,
            "longitude": -9.429499000000002
          },
          {
            "idpais": 104,
            "nome": "Lebanon",
            "latitude": 33.854721,
            "longitude": 35.862285
          },
          {
            "idpais": 103,
            "nome": "Latvia",
            "latitude": 56.879635,
            "longitude": 24.603189
          },
          {
            "idpais": 102,
            "nome": "Laos",
            "latitude": 19.85627,
            "longitude": 102.495496
          },
          {
            "idpais": 101,
            "nome": "Kyrgyzstan",
            "latitude": 41.20438,
            "longitude": 74.766098
          },
          {
            "idpais": 100,
            "nome": "Kuwait",
            "latitude": 29.31166,
            "longitude": 47.481766
          },
          {
            "idpais": 99,
            "nome": "Kosovo",
            "latitude": 42.6026359,
            "longitude": 20.902977
          },
          {
            "idpais": 97,
            "nome": "Kazakhstan",
            "latitude": 48.019573,
            "longitude": 66.923684
          },
          {
            "idpais": 140,
            "nome": "Papua New Guinea",
            "latitude": -6.314992999999999,
            "longitude": 143.95555
          },
          {
            "idpais": 98,
            "nome": "Kenya",
            "latitude": -0.023559,
            "longitude": 37.906193
          },
          {
            "idpais": 138,
            "nome": "Palestine",
            "latitude": 31.952162,
            "longitude": 35.233154
          },
          {
            "idpais": 139,
            "nome": "Panama",
            "latitude": 8.537981,
            "longitude": -80.782127
          },
          {
            "idpais": 134,
            "nome": "Nigeria",
            "latitude": 9.081999,
            "longitude": 8.675277
          },
          {
            "idpais": 133,
            "nome": "Niger",
            "latitude": 17.607789,
            "longitude": 8.081666
          },
          {
            "idpais": 131,
            "nome": "New Zealand",
            "latitude": -40.900557,
            "longitude": 174.885971
          },
          {
            "idpais": 130,
            "nome": "New Caledonia",
            "latitude": -20.904305,
            "longitude": 165.618042
          },
          {
            "idpais": 132,
            "nome": "Nicaragua",
            "latitude": 12.865416,
            "longitude": -85.207229
          },
          {
            "idpais": 173,
            "nome": "Taiwan",
            "latitude": 23.69781,
            "longitude": 120.960515
          },
          {
            "idpais": 174,
            "nome": "Tanzania",
            "latitude": -6.369028,
            "longitude": 34.888822
          },
          {
            "idpais": 129,
            "nome": "Netherlands",
            "latitude": 52.132633,
            "longitude": 5.291265999999999
          },
          {
            "idpais": 128,
            "nome": "Nepal",
            "latitude": 28.394857,
            "longitude": 84.12400799999999
          },
          {
            "idpais": 127,
            "nome": "Namibia",
            "latitude": -22.95764,
            "longitude": 18.49041
          },
          {
            "idpais": 126,
            "nome": "Myanmar",
            "latitude": 21.916221,
            "longitude": 95.955974
          },
          {
            "idpais": 125,
            "nome": "Mozambique",
            "latitude": -18.665695,
            "longitude": 35.529562
          },
          {
            "idpais": 124,
            "nome": "Morocco",
            "latitude": 31.791702,
            "longitude": -7.092619999999999
          },
          {
            "idpais": 123,
            "nome": "Montserrat",
            "latitude": 16.742498,
            "longitude": -62.187366
          },
          {
            "idpais": 122,
            "nome": "Montenegro",
            "latitude": 42.708678,
            "longitude": 19.37439
          },
          {
            "idpais": 121,
            "nome": "Mongolia",
            "latitude": 46.862496,
            "longitude": 103.846656
          },
          {
            "idpais": 120,
            "nome": "Monaco",
            "latitude": 43.73841760000001,
            "longitude": 7.424615799999999
          },
          {
            "idpais": 119,
            "nome": "Moldova",
            "latitude": 47.411631,
            "longitude": 28.369885
          },
          {
            "idpais": 158,
            "nome": "Singapore",
            "latitude": 1.352083,
            "longitude": 103.819836
          },
          {
            "idpais": 157,
            "nome": "Seychelles",
            "latitude": -4.679574,
            "longitude": 55.491977
          },
          {
            "idpais": 156,
            "nome": "Serbia",
            "latitude": 44.016521,
            "longitude": 21.005859
          },
          {
            "idpais": 155,
            "nome": "Senegal",
            "latitude": 14.497401,
            "longitude": -14.452362
          },
          {
            "idpais": 154,
            "nome": "Saudi Arabia",
            "latitude": 23.885942,
            "longitude": 45.079162
          },
          {
            "idpais": 153,
            "nome": "San Marino",
            "latitude": 43.94236,
            "longitude": 12.457777
          },
          {
            "idpais": 152,
            "nome": "Saint Vincent and the Grenadines",
            "latitude": 12.984305,
            "longitude": -61.287228
          },
          {
            "idpais": 151,
            "nome": "Saint Lucia",
            "latitude": 13.909444,
            "longitude": -60.978893
          },
          {
            "idpais": 150,
            "nome": "Saint Kitts and Nevis",
            "latitude": 17.357822,
            "longitude": -62.782998
          },
          {
            "idpais": 149,
            "nome": "Rwanda",
            "latitude": -1.940278,
            "longitude": 29.873888
          },
          {
            "idpais": 147,
            "nome": "Romania",
            "latitude": 45.943161,
            "longitude": 24.96676
          },
          {
            "idpais": 148,
            "nome": "Russia",
            "latitude": 61.52401,
            "longitude": 105.318756
          },
          {
            "idpais": 146,
            "nome": "Qatar",
            "latitude": 25.354826,
            "longitude": 51.183884
          },
          {
            "idpais": 145,
            "nome": "Portugal",
            "latitude": 39.39987199999999,
            "longitude": -8.224454
          },
          {
            "idpais": 144,
            "nome": "Poland",
            "latitude": 51.919438,
            "longitude": 19.145136
          },
          {
            "idpais": 143,
            "nome": "Philippines",
            "latitude": 12.879721,
            "longitude": 121.774017
          },
          {
            "idpais": 142,
            "nome": "Peru",
            "latitude": -9.189967,
            "longitude": -75.015152
          },
          {
            "idpais": 180,
            "nome": "Turkey",
            "latitude": 38.963745,
            "longitude": 35.243322
          },
          {
            "idpais": 179,
            "nome": "Tunisia",
            "latitude": 33.886917,
            "longitude": 9.537499
          },
          {
            "idpais": 178,
            "nome": "Trinidad and Tobago",
            "latitude": 10.691803,
            "longitude": -61.222503
          },
          {
            "idpais": 177,
            "nome": "Togo",
            "latitude": 8.619543,
            "longitude": 0.824782
          },
          {
            "idpais": 176,
            "nome": "Timor",
            "latitude": -8.874217,
            "longitude": 125.727539
          },
          {
            "idpais": 175,
            "nome": "Thailand",
            "latitude": 15.870032,
            "longitude": 100.992541
          },
          {
            "idpais": 172,
            "nome": "Syria",
            "latitude": 34.80207499999999,
            "longitude": 38.996815
          },
          {
            "idpais": 171,
            "nome": "Switzerland",
            "latitude": 46.818188,
            "longitude": 8.227511999999999
          },
          {
            "idpais": 170,
            "nome": "Sweden",
            "latitude": 60.12816100000001,
            "longitude": 18.643501
          },
          {
            "idpais": 168,
            "nome": "Suriname",
            "latitude": 3.919305,
            "longitude": -56.027783
          },
          {
            "idpais": 165,
            "nome": "Spain",
            "latitude": 40.46366700000001,
            "longitude": -3.74922
          },
          {
            "idpais": 169,
            "nome": "Swaziland",
            "latitude": -26.522503,
            "longitude": 31.465866
          },
          {
            "idpais": 166,
            "nome": "Sri Lanka",
            "latitude": 7.873053999999999,
            "longitude": 80.77179699999999
          },
          {
            "idpais": 167,
            "nome": "Sudan",
            "latitude": 12.862807,
            "longitude": 30.217636
          },
          {
            "idpais": 164,
            "nome": "South Korea",
            "latitude": 35.907757,
            "longitude": 127.766922
          },
          {
            "idpais": 163,
            "nome": "South Africa",
            "latitude": -30.559482,
            "longitude": 22.937506
          },
          {
            "idpais": 162,
            "nome": "Somalia",
            "latitude": 5.152149,
            "longitude": 46.199616
          },
          {
            "idpais": 161,
            "nome": "Slovenia",
            "latitude": 46.151241,
            "longitude": 14.995463
          },
          {
            "idpais": 194,
            "nome": "Zimbabwe",
            "latitude": -19.015438,
            "longitude": 29.154857
          },
          {
            "idpais": 160,
            "nome": "Slovakia",
            "latitude": 48.669026,
            "longitude": 19.699024
          },
          {
            "idpais": 192,
            "nome": "Vietnam",
            "latitude": 14.058324,
            "longitude": 108.277199
          },
          {
            "idpais": 190,
            "nome": "Vatican",
            "latitude": 41.902916,
            "longitude": 12.453389
          },
          {
            "idpais": 191,
            "nome": "Venezuela",
            "latitude": 6.42375,
            "longitude": -66.58973
          },
          {
            "idpais": 189,
            "nome": "Uzbekistan",
            "latitude": 41.377491,
            "longitude": 64.585262
          },
          {
            "idpais": 184,
            "nome": "United Arab Emirates",
            "latitude": 23.424076,
            "longitude": 53.847818
          },
          {
            "idpais": 183,
            "nome": "Ukraine",
            "latitude": 48.379433,
            "longitude": 31.1655799
          },
          {
            "idpais": 182,
            "nome": "Uganda",
            "latitude": 1.373333,
            "longitude": 32.290275
          },
          {
            "idpais": 193,
            "nome": "Zambia",
            "latitude": -13.133897,
            "longitude": 27.849332
          },
          {
            "idpais": 188,
            "nome": "Uruguay",
            "latitude": -32.522779,
            "longitude": -55.765835
          },
          {
            "idpais": 187,
            "nome": "United States Virgin Islands",
            "latitude": 18.335765,
            "longitude": -64.896335
          },
          {
            "idpais": 186,
            "nome": "United States",
            "latitude": 37.09024,
            "longitude": -95.712891
          },
          {
            "idpais": 185,
            "nome": "United Kingdom",
            "latitude": 55.378051,
            "longitude": -3.435973
          }
        ]
      );
    });
};
