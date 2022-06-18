import { useState, useEffect } from 'react';
import useSWR from 'swr';

const LastSalesPage = () => {
  const [sales, setSales] = useState();
//   const [isLoading, setIsLoading] = useState(false);

  const {data, error} = useSWR('https://nextjs-course-dcd31-default-rtdb.firebaseio.com/sales.json');

  useEffect(() => {
              const transformedSales = [];

                      for (const key in data) {
                        transformedSales.push({
                          id: key,
                          username: data[key].username,
                          volume: data[key].volume,
                        });
                      }

                      setSales(transformedSales);
            }, [data])

//   useEffect(() => {
//     fetch('https://nextjs-course-dcd31-default-rtdb.firebaseio.com/sales.json')
//       .then((response) => response.json())
//       .then((data) => {
//         setIsLoading(true);
//         const transformedSales = [];

//         for (const key in data) {
//           transformedSales.push({
//             id: key,
//             username: data[key].username,
//             volume: data[key].volume,
//           });
//         }
//         setSales(transformedSales);
//         setIsLoading(false);
//       });
//   }, []);

if (error) {
  return <p>Failed to load.</p>;
}

  if (!data) {
    return <p>Loading...</p>
  }

  if (!sales) {
    return <p>Loading...</p>
  }



  return <ul>{sales.map(sale => <li key={sale.id}>{sale.username} - ${sale.volume}</li>)}</ul>;
};

export default LastSalesPage;
