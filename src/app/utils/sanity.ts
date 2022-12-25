import sanityClient from '@sanity/client'

export default sanityClient({
     projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // find this at manage.sanity.io or in your sanity.json
  dataset: process.env.REACT_APP_SANITY_DATASET, // this is from those question during 'sanity init'
  useCdn: true
})