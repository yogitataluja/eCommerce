import {useState,useEffect } from "react";
import {API} from "../components/API"
import axios from 'axios'
import parse from 'html-react-parser'
import Navigation from '../components/Navigation'

const PageId = ({id}) => {
    const[data,setData]=useState(null)

 useEffect(()=>
getPageByUrl()
,[])
const getPageByUrl= async()=>{
    const res= await axios.post(`${API}/api/page/view_pageByUrl`,
    {
        url: `/${id}`,
      })
      setData(res.data.Page)
}
    return (
        <>
         <Navigation/> 
         {data===  null? 
         <>
         ""
         </>
         :  
         <div id="nt_content" style={{marginTop:"20px"}}>


            <div className="kalles-section page_section_heading">
                <div className="page-head tc pr oh cat_bg_img page_head_">
                    <div className="parallax-inner nt_parallax_false lazyload nt_bg_lz pa t__0 l__0 r__0 b__0" data-bgset="assets/images/shop/collection-list/bg-heading.jpg"></div>
                    <div className="container pr z_100">
                        <h1 className="mb__5 cw">{data.title}</h1>
                    </div>
                </div>
            </div>


            <div className="container mt__40 mb__40 cb">
                <div className="kalles-term-exp mb__30">
                   {parse(data.content)}
                </div>
            </div>


        </div>
         }  
        </>
    )
}

export default PageId

export async function getServerSideProps(ctx) {
    const id = ctx.params.pageId;
    
    return {
      props: {
        id
      },
    };
  }
  