import React from 'react'
import Layout from '../layout'
import '../styles/GetinvolvedSection.scss'
import Cover from '../components/modules/CoverModule'
import coverReiko from '../images/photos/thankYou.jpg'

// markup
const GetInvolved = () => {
  return (
    <Layout title="Meet Reiko">
        <Cover coverImage={coverReiko}>
          Get Involved
        </Cover>
        <div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSddxXfQaYxUUIoEK1FozE8XClHXvTjhoHfyzshuYtiwJXNdKQ/viewform?embedded=true"            
                title="Get Involved Form"
                height="1350" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0" 
                style={{textAlign: "center", width: "100%", display: "block", margin: "auto", padding: "70px 0px"}} >
                Loading…
            </iframe>
        </div>
    </Layout>
  )
}

export default GetInvolved