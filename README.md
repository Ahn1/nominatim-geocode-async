# nominatim-geocode-async
A es7 async wrapper for the  [node-nominatim2](https://www.npmjs.com/package/node-nominatim2)

Usage
-----

**Require nominatim-geocode-async**

```
import Nominatim from 'nominatim-geocode-async'
```

```
var options = {
  useragent: 'MyApp',
  referer: 'https://github.com/xbgmsharp/node-nominatim2',
  timeout: 1000
},
nominatim = new Nominatim(options);
```

**Make a call to the API using the search method.**

  The search function calls to the ``http://nominatim.openstreetmap.org/search?<params>``

```
var result = await nominatim.search({q: "135 pilkington, avenue birmingham"});
var reverseResult = await nominatim.reverse{lat: 52.5460941, lon: 13.35918});
```
