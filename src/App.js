import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import Card from './components/Card';



function App() {

  
  const listItems = {
      "free": [
        {"id":"0", "title":"Single User", "availability": true },
        {"id":"1", "title":"5GB Storage", "availability": true },
        {"id":"2", "title":"Unlimited Public Projects", "availability": true },
        {"id":"3", "title":"Community Access", "availability": true },
        {"id":"4", "title":"Unlimited Private Projects", "availability": false },
        {"id":"5", "title":"Dedicated Phone Support", "availability": false },
        {"id":"6", "title":"Free Subdomain", "availability": false },
        {"id":"7", "title":"Monthly Status Reports", "availability": false },
      ],
      "plus": [
        {"id":"8", "title":"5 Users", "availability": true },
        {"id":"9", "title":"50GB Storage", "availability": true },
        {"id":"10", "title":"Unlimited Public Projects", "availability": true },
        {"id":"11", "title":"Community Access", "availability": true },
        {"id":"12", "title":"Unlimited Private Projects", "availability": true },
        {"id":"13", "title":"Dedicated Phone Support", "availability": true },
        {"id":"14", "title":"Free Subdomain", "availability": true },
        {"id":"15", "title":"Monthly Status Reports", "availability": false },
      ],
      "pro": [
        {"id":"16", "title":"Unlimited Users", "availability": true },
        {"id":"17", "title":"150GB Storage", "availability": true },
        {"id":"18", "title":"Unlimited Public Projects", "availability": true },
        {"id":"19", "title":"Community Access", "availability": true },
        {"id":"20", "title":"Unlimited Private Projects", "availability": true },
        {"id":"21", "title":"Dedicated Phone Support", "availability": true },
        {"id":"22", "title":"Free Subdomain", "availability": true },
        {"id":"23", "title":"Monthly Status Reports", "availability": true },
      ]

  };


  return (
    <div className="App">
        <section className="pricing py-5">
          <div className="container">
              <div className="row">
                 
                  <Card 
                    tier = { "Free" }
                    pricing = { 0 }
                    features = { listItems["free"] }
                  />
                  
                  <Card 
                    tier = { "Plus" }
                    pricing = { 200 }
                    features = { listItems["plus"] }
                  />
                 
                  <Card 
                    tier = { "Pro" }
                    pricing = { 800 }
                    features = { listItems["pro"] }
                  />
              </div> 
              
          </div>
          
</section>
    </div>
  );
}

export default App;