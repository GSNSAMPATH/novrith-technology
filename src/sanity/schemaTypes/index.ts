import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project'
import { trustedLogo } from './trustedLogo'
import { caseStudy } from './caseStudy'
import team from './team'
import testimonial from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project,trustedLogo,team,caseStudy,testimonial],
}
