import React from 'react'
import SectionLayout from '../../layout/SectionLayout'

const QuoteSection = () => {
    return (
        <SectionLayout topic="quote" tag="quote">
            {/* <h1> Quote Section </h1> */}
            <blockquote cite="Alexander Díaz Rios">
                "Reiko is the clear choice to replace me on the PCC Board because she knows exactly what students need to be successful."
                <cite>&mdash; <b>Alex Díaz Rios</b>, Current PCC Zone 7 Board Member</cite>
            </blockquote>
        </SectionLayout>
    )
}

export default QuoteSection