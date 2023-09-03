import React, { useEffect, useState } from 'react'
import Card from './Card';
import Footer from "./Footer"
import { filter2, setfilter2 } from "./Usacontextreducer"
import { useParams } from 'react-router-dom';
import Loader from './Loader';

function ShowFilter() {
  window.scroll(0, 0);
  const [np, snp] = useState({ display: "none" })
  const [p, sp] = useState({
    display: "block"
  });

  const { f1, f2 } = useParams();
  const [fil, setfil] = useState([]);
  const filter = filter2();
  console.log(filter);
  const SHOW = async () => {

    const res = await fetch("https://react-e-commerce-cm9s.onrender.com/quicknav",
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ cat: f1, com: f2 }),

      }

    );
    const ans = await res.json()
    console.log(ans)
    if (ans.success == true) {

      setfil(ans.Res);
      sp({
        display: "none",
        // marginTop: "40px"
      })
      snp({ display: "block" })
    }

    // seta(ans.Res)
    // console.log(a)
  }
  useEffect(() => { SHOW() }, [filter])
  return (
    <>
      <div style={p}><Loader /></div>
      <div className='filter'>
        {
          (fil != []) ? fil.map((val, i) => {
            return (
              <Card
                id={val._id}
                company={val.company}
                name={val.model_name}
                images={val.images}
                options={val.options}
                price={val.price}
                discount={val.discount}
                availibilty={val.availibilty}
                discription={val.discription}
                cartbtn={true}
              />
            );
          }) : <p>asdf</p>

        }
      </div>
      <Footer
      />
    </>
  )
}

export default ShowFilter