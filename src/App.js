import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  const tableData =
    [

      { date: "2022-09-01", views: 100, article: "Article 1" },

      { date: "2023-09-01", views: 100, article: "Article 1" },

      { date: "2023-09-02", views: 150, article: "Article 2" },

      { date: "2023-09-02", views: 120, article: "Article 3" },

      { date: "2020-09-03", views: 200, article: "Article 4" }

    ]



  // console.log(JSON.stringify(tableData))

  // setData(tableData)


  useEffect(() => {
    setData(tableData)
  }, [])

  const handleSortDate = () => {
    const dataSorted = [...data].sort((a, b) => new Date(a.date) - new Date(b.date))
    setData(dataSorted)
  }

  const handleViews = () => {
    const viewsData = [...data].sort((a, b) => a.views - b.views)
    setData(viewsData)
  }
  return (
    <div className="App">


    <h1>Date and Views Table</h1>
      <button onClick={handleSortDate}>Sort by Date</button>
      <button onClick={handleViews}>Sort by Views</button>

      <table>

        <thead>
          <tr>
            <th>
              Date
            </th>
            <th>
              Views
            </th>
            <th>
              Article
            </th>
          </tr>
        </thead>
        <tbody>

       
        {
          data.length > 0 && (
            data.map((data, index) => (


            
              <tr key={index}>
                <td>
                  <p>{data.date}</p>
                </td>

                <td>
                  <p>{data.views}</p>
                </td>

                <td>
                  <p>{data.article}</p>
                </td>

              </tr>
            ))
          )
        }

</tbody>
      </table>

    </div>
  );
}

export default App;
