import React from 'react'
import Layout from '../layout'
import SectionLayout from '../layout/SectionLayout'
import ColumnCard from '../components/modules/ColumnCard'
import { prioritiesData } from "../data/prioritiesData"
import '../styles/GetinvolvedSection.scss'
import Cover from '../components/modules/CoverModule'
import coverReiko from '../images/photos/wcc.jpg'

// markup
const Priorities = () => {
  return (
    <Layout title="Priorities" ide="priorities">
        <Cover coverImage={coverReiko}>
          Priorities
        </Cover>
        <SectionLayout>
            {prioritiesData.map((priority, index) => (
                <ColumnCard 
                  priority={priority.priority} 
                  desc={priority.desc} 
                  cover={priority.cover} 
                  key={index} />
            ))}
        </SectionLayout>
    </Layout>
  )
}

export default Priorities