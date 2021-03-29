import React from 'react'
import Layout from '../layout'
import '../styles/GetinvolvedSection.scss'
import Cover from '../components/modules/CoverModule'

// markup
const GetInvolved = () => {
  return (
    <Layout title="Meet Reiko">
        <Cover coverImage="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80">
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